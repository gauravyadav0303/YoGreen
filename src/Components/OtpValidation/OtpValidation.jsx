import { eye, logo } from "../../assets";
import { Link } from "react-router-dom";
import "./OtpValidation.css"
import { useEffect } from "react";

function OtpValidation() {

useEffect(()=>{
    const OTPinputs = document.querySelectorAll('input')
const button = document.querySelector('button')

window.onload = ()=> OTPinputs[0].focus()


OTPinputs.forEach((input)=>{
    input.addEventListener('input', ()=>{
        const currentInput = input
        const nextInput = currentInput.nextElementSibling

        if(currentInput.value.length > 1 && currentInput.value.length == 2){
            currentInput.value = ""
        }


        if(nextInput !== null && nextInput.hasAttribute('disabled') && currentInput.value !== ""){
            nextInput.removeAttribute('disabled')
            nextInput.focus()
        }

        if(!OTPinputs[3].disabled && OTPinputs[3].value !== ""){
            button.classList.add("active")
        }else{
            button.classList.remove('active')
        }
    })

    input.addEventListener('keyup', (e)=>{
        console.log(e);
        if(e.key == "Backspace"){
            if(input.previousElementSibling != null){
                e.target.value = ""
                e.target.setAttribute("disabled", true)
                input.previousElementSibling.focus()
            }
        }
    })
})
},[]);

  return (
    <div className="box h-full md:h-[100vh]">
      <div className="carousel">
        <img src={logo} className="img-1 mx-auto my-auto" alt="Logo" />
      </div>
      <div className="forms-wrap">
        <form
          action="index.html"
          autoComplete="off"
          className="sign-in-form text-center w-[300px] h-[600px] my-auto lg:max-w-[400px]  xl:max-w-[600px]"
        >
          <div className="heading">
            <h2>Create Your YoGreet Account</h2>
          </div>
          <div>
            <h2>OTP sent Emil. Update details</h2>
          </div>
            <div className="container mx-auto w-[250px]">
              <form action="#">
                <div className="input_fields">
                  <input type="number" />
                  <input type="number" disabled />
                  <input type="number" disabled />
                  <input type="number" disabled />
                </div>
              </form>
            </div>

           <h2>00:25</h2>
           <h1>Didn't receive code? <span className="text-[#FF4F44]">Resend OTP</span></h1>
           <input type="submit" value="Submit" className="sign-btn" />
          
        </form>
      </div>
    </div>
  );
}

export default OtpValidation;
