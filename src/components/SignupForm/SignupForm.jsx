import { Button } from "@mui/material";
import { Form as FormikForm, Formik, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import * as Yup from "yup";

export default function SignupForm() {
  //state to control the visibility of the password
  const [isPasswordVisile, setIsPasswordVisible] = useState(false);

  //loading state
  const [isLoading, setLoading] = useState(false);

  //handler to show or hide the password
  const showPassword = () => {
    setIsPasswordVisible((pre) => !pre);
  };

  //setting initial values
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  //validations for the fields
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Please enter your name")
      .matches(
        /^[a-zA-Z]+(?: [a-zA-Z]+)*$/,
        "Name can not contain numbers and leading or trailing spaces"
      ),
    email: Yup.string()
      .trim()
      .required("Please enter your email")
      .email("Invalid email")
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Invalid email"
      )
      .required("Please enter your email"),
    password: Yup.string()
      .required("Please enter your password")
      .min(8, "Password should be 8 character mininum")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.])[a-zA-Z0-9!@#$%^&*.]+$/,
        "Password must contain one capital letter, one number, one special character and one small letter"
      ),
    confirmPassword: Yup.string()
      .required("Re-type your password")
      .min(8, "Password should be 8 character mininum")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  //function to handle the submission form
  const handleSubmit = (values, { setSubmitting }) => {
    try {
      setLoading(true);
      console.log(values);
    } catch (error) {
      console.warn(error);
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };

  //re-useable styles for fields
  const fieldsStyles =
    "p-3 rounded-3xl bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 text-white placeholder-white focus:outline-none text-sm md:text-md";

  return (
    <>
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <main className="font-inter flex flex-col gap-8 w-80 md:w-96 h-auto p-8 bg-gray-900 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 m-4 shadow-2xl">
        <section className="flex flex-col gap-2">
          <div className="text-2xl text-white font-semibold">Signup Form</div>
          <div className=" border-white border-2 w-20"></div>
        </section>
        <section>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnChange={false}
            validateOnBlur={false}
          >
            {({ isSubmitting }) => (
              <FormikForm>
                <section className="flex flex-col gap-4">
                <Field
                    name="name"
                    placeholder="Full name"
                    type="text"
                    className={fieldsStyles}
                  />
                  <ErrorMessage
                    name={"name"}
                    component="span"
                    className="text-red-500"
                  />
                  <Field
                    name="email"
                    placeholder="Email"
                    type="email"
                    className={fieldsStyles}
                  />
                  <ErrorMessage
                    name={"email"}
                    component="span"
                    className="text-red-500"
                  />
                  <Field
                    name="password"
                    placeholder="Password"
                    type={isPasswordVisile ? "text" : "password"}
                    className={fieldsStyles}
                  />
                  <ErrorMessage
                    name={"password"}
                    component="span"
                    className="text-red-500"
                  />
                   <Field
                    name="confirmPassword"
                    placeholder="Re-type password"
                    type={isPasswordVisile ? "text" : "password"}
                    className={fieldsStyles}
                  />
                  <ErrorMessage
                    name={"confirmPassword"}
                    component="span"
                    className="text-red-500"
                  />
                  <Button
                    sx={{
                      borderRadius: 50,
                      padding: "10px",
                      width: "120px",
                      backgroundColor: "#ffff",
                      color: "#706e68",
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: "#fff" },
                    }}
                    type="submit"
                    variant="contained"
                    disabled={isLoading}
                  >
                    {isSubmitting ? (
                      <Loader size="sm" color="primary" />
                    ) : (
                      <span className="text-sm md:text-md">Sign up</span>
                    )}
                  </Button>
                </section>
              </FormikForm>
            )}
          </Formik>
          <section className="mt-8 flex flex-col gap-2">
            <p className="text-white text-sm md:text-md">
              Already have an account?{" "}
              <Link className="underline font-semibold" to={"/login"}>
                Log in
              </Link>{" "}
            </p>
          </section>
        </section>
      </main>
    </>
  );
}
