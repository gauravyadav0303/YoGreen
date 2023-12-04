import { eye, logo } from "../../assets";
import { Link } from "react-router-dom";


function SignInPage() {

  function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function showPassword1() {
    var x = document.getElementById("password1");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
    return ( 
        <div className="box h-[100vh]">       
        <div className="carousel">
            <img src={logo} className="img-1 mx-auto my-auto" alt="Logo" />
          </div>
          <div className="forms-wrap">
            <form action="index.html" autoComplete="off" className="sign-in-form lg:max-w-[400px]  xl:max-w-[600px]">
              <div className="heading">
                <h2>Create Your YoGreet Account</h2>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    placeholder="Full Name"
                    required
                  />
                  <label></label>
                </div>
                <div className="input-wrap">
                  <input
                    type="email"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    placeholder="Email"
                    required
                  />
                  <label></label>
                </div>
                <div className="input-wrap">
                  <input
                    type="number"
                    minLength="10"
                    className="input-field"
                    autoComplete="off"
                    placeholder="Personal WhatsApp Number"
                    required
                  />
                  <label></label>
                </div>

                <div className="input-wrap relative">
                  <input
                    type="password"
                    id="password"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    placeholder="Email Password"
                    required
                  />
                  <label></label>
                  <div className="absolute right-0 cursor-pointer"
                  onClick={showPassword}
                  >
                    <img src={eye} alt="eye" />
                  </div>
                </div>

                <div className="input-wrap relative">
                  <input
                    type="password"
                    id="password1"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    placeholder="Confirm Password"
                    required
                  />
                  <label></label>
                  <div className="absolute right-0 cursor-pointer" 
                 onClick={showPassword1}
                  >
                    <img src={eye} alt="eye" />
                  </div>
                </div>

                <input type="submit" value="Login" className="sign-btn" />

<div className="text-center">
                <h6>Not registred yet?</h6>
                <Link to="/sign-up" href="#" className="toggle">Sign up</Link>
              </div>
              </div>
            </form>

          </div>
        </div>

     );
}

export default SignInPage;