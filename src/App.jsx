import NewCard from "./Components/Cards/NewCard";
import MainPage from "./Components/MainPage/Mainpage";
import OtpValidation from "./Components/OtpValidation/OtpValidation";
import SignInPage from "./Components/SignInPage/SignInPage"
import SignUpPage from "./Components/SignUpPage/SignUpPage"
import {  Routes, Route } from "react-router-dom";

function App() {


  return (
   <Routes>
    <Route path="/dashboard" element={<SignInPage/>} />
    <Route path="/sign-up" element={<SignUpPage/>} />
    <Route path="/" element={<MainPage/>} />
    <Route path="/new-card" element={<NewCard/>}></Route>
   </Routes>
  );
}

export default App
