import { createContext, useState, useContext } from "react";

const UserContext = createContext({
  userData: {
    name: "",
    email: "",
    isLoggedIn: false
  },
  updateUserData: () => {},
});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "johndoe@yopmail.com",
    isLoggedIn: false
  });

  // Functions to update user data (optional)
  const updateUserData = (newData) => {
    setUserData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserData must be used within a UserProvider");
  }
  return context;
};

export default UserContext;
