import { Button } from "@mui/material";
import { Form as FormikForm, Formik, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import * as Yup from "yup";

export default function LoginForm() {
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
    email: "",
    password: "",
  };

  //validation for fields
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
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

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <main className="flex flex-col gap-8 w-80 md:w-96 h-auto p-8 bg-gray-900 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 m-4 shadow-2xl">
        <section className="flex flex-col gap-2">
          <div className="text-2xl text-white font-semibold">Login Form</div>
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
                    name="email"
                    placeholder="Email"
                    type="email"
                    className="p-3 rounded-3xl bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 text-white placeholder-white focus:outline-none text-sm md:text-md"
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
                    className="p-3 rounded-3xl bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 text-white placeholder-white focus:outline-none text-sm md:text-md"
                  />
                  <ErrorMessage
                    name={"password"}
                    component="span"
                    className="text-red-500"
                  />
                  <Button
                    sx={{ borderRadius: 50, padding: "10px", width: "120px", backgroundColor: "#ffff", color: "#706e68", fontWeight: "bold", '&:hover': { backgroundColor: '#fff' } }}
                    type="submit"
                    variant="contained"
                    disabled={isLoading}
                  >
                    {isSubmitting ? (
                      <Loader size="sm" color="primary" />
                    ) : (
                      <span className="text-sm md:text-md">Login</span>
                    )}
                  </Button>
                </section>
              </FormikForm>
            )}
          </Formik>
          <section className="mt-8 flex flex-col gap-2">
            <p className="text-white text-sm md:text-md">
              Don&apos;t have an account?{" "}
              <Link className="underline font-semibold" to={"/signup"}>
                Sign up
              </Link>{" "}
            </p>
            <p className="text-white text-sm md:text-md">
              Forgot password?{" "}
              <Link className="underline font-semibold" to={"/forgot-password"}>
                Click here
              </Link>
            </p>
          </section>
        </section>
      </main>
    </>
  );
}
