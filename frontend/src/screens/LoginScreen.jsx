import React, { useState } from "react";

function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    let userData = {
      email,
      password,
    };
    console.log("USER DATA------------", userData ? userData : "NO USERDAATA");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5">
          {/* <h2 className="m-5">Caption about this website</h2> */}
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?w=2000"
            className="w-100 mt-5"
          />
        </div>
        <div className="col-md-7">
          <div className="signinBox p-4">
            <div className="container p-5 mt-5">
              <form className="mt-5" onSubmit={handleLogin}>
                <h4 className="text-center">Login Here</h4>
                <p>Email</p>
                <input
                  type="email"
                  placeholder="Enter your Email...."
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="mt-5">
                  <p>Password</p>
                  <div className="password-input">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={handlePasswordChange}
                      placeholder="Enter your password"
                    />
                    <button
                      className="eye-button"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                </div>
                <div>
                  <button type="submit" className="submitBtn mt-5">
                    Sign In
                  </button>
                </div>
                <a
                  href="/register"
                  className=""
                  style={{ top: "34px", position: "relative" }}
                >
                  Dont have an Account ? Create Account
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
