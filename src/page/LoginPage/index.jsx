import axios from "axios";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => { 
    setError("")
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


//   const handleChangeName = e => {
//     setUsername(e.target.value);
//   };

//   const handleChangePassword = e => {
//     setPassword(e.target.value);
//   };

  const handleLogin = async (e) => {
    e.preventDefault();
    // const payload = {
    //   username: form.username,
    //   password: form.password,
    // //   payLoad = permintaan Backend
    // };

    setLoading(true);
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", form );//payload );
        localStorage.setItem("access_token", response.data.accessToken);
        localStorage.setItem("refresh_token", response.data.refreshToken);
        setSuccess("Login Success");
        
        setTimeout(() => {
            navigate("/");
        }, 2000)

        console.log(response);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    } finally {
        setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login Page
          </h2>
          <p className="mb-6 text-sm text-center text-gray-600">
            Log in to your account
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Input */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="username"
                id="username"
                name="username"
                // value={username}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                //   value={password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={handleLogin}
                  className="absolute inset-y-0 text-sm text-gray-500 right-3 hover:text-blue-500"
                >
                  {isPasswordVisible ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white rounded-lg bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
            {error && (<p className="text-red-500">{error}!</p>)}
            {success && (<p className="text-green-500">{success}</p>)}
          </form>

          {/* Links */}
          <div className="mt-6 text-sm text-center text-gray-600">
            <p>
              Don't have an account?{" "}
              <a href="#register" className="text-blue-500 hover:underline">
                Sign Up
              </a>
            </p>
            <p className="mt-2">
              <a
                href="#forgot-password"
                className="text-blue-500 hover:underline"
              >
                Forgot Password?
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
