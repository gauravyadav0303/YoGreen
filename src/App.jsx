import MainPage from "./Components/MainPage/Mainpage";
import SignInPage from "./Components/SignInPage/SignInPage"
import SignUpPage from "./Components/SignUpPage/SignUpPage"
import {  Routes, Route } from "react-router-dom";

function App() {


  return (
  //  <Routes>
  //   <Route path="/" element={<SignInPage/>} />
  //   <Route path="/sign-up" element={<SignUpPage/>} />
  //   <Route path="/dashboard" element={<DashBoard/>} />
  //  </Routes>
<MainPage/>
  )
}

export default App
