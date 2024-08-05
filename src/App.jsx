import React from "react";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Page/Login";
import SignUp from "./Page/SignUp";
import ContactUs from "./Page/ContactUs";
import NotFoundPage from "./Page/NotFoundPage";
import MainLayout from "./Layout/MainLayout";
import Navbar from "./components/Navbar";
import Aos from "aos";
import CodeVerification from "./Page/CodeVerification";
import PastorOption from "./Page/PastorOption";

const App = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="/code-verification" element={<CodeVerification />} />
        <Route path="/pastor-option" element={<PastorOption />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
