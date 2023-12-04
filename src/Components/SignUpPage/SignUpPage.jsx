import { eye, logo } from "../../assets";
import { Link } from "react-router-dom";

function SignUpPage() {
  function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function showPassword1() {
    var x1 = document.getElementById("password1");
    if (x1.type === "password") {
      x1.type = "text";
    } else {
      x1.type = "password";
    }
  }

  return (
    <div className="box h-full  md:h-[130vh]">
      <div className="carousel">
        <img src={logo} className="img-1 mx-auto my-auto" alt="Logo" />
      </div>
      <div className="forms-wrap">
        <form
          action="index.html"
          autoComplete="off"
          className="sign-in-form lg:max-w-[400px]  xl:max-w-[600px]"
        >
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
                id="phoneNumber"
                minLength="10"
                className="input-field"
                autoComplete="off"
                placeholder="Personal WhatsApp Number"
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
                placeholder="Company Name"
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
              <div
                className="absolute right-0 cursor-pointer"
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
              <div
                className="absolute right-0 cursor-pointer"
                onClick={showPassword1}
              >
                <img src={eye} alt="eye" />
              </div>
            </div>
            <div className="input-wrap">
              <select
                type="email"
                className="input-field text-[#bbb]"
                autoComplete="off"
                placeholder="Buiness Type"
                required
              >
                <label></label>
                <option value="00">Buiness Type</option>
                <option value="01">Lorem</option>
                <option value="02">Espum</option>
              </select>
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
            <div className="input-wrap">
              <input
                type="email"
                minLength="4"
                className="input-field"
                autoComplete="off"
                placeholder="Company Registration ID"
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
                placeholder="Address"
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
                placeholder="FaceBook Page"
                required
              />
              <label></label>
            </div>
            <div className="input-wrap">
              <input
                type="file"
                className="input-field"
                autoComplete="off"
                placeholder="Select Image"
                required
              />
              <label></label>
            </div>
            <input type="submit" value="Login" className="sign-btn" />

            <div className="text-center">
              <h6>Already a Member ?</h6>
              <Link
                to="/"
                href="#"
                className="toggle"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Sign In
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
