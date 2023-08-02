import React, { useState } from "react";

function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className="">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?w=2000"
            className="w-75"
          />
        </div>
        <div className="col-md-6">
          <div className="signinBox p-4">
            <form>
              <h4 className="text-center">Login Here</h4>
              <p>Email</p>
              <input type="email" className="form-control" />
              <div className="mt-5">
                <p>Password</p>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    className="form-control"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
