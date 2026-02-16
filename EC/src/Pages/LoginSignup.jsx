import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore"; 
import app from "../Components/firebase"; 
import { db } from "../Components/firebase"; // make sure db is exported from your firebase config

const LoginSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false); // toggle between login/signup
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;
      console.log("Registered user:", user);

      // Save user data to Firestore
      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        firstname: form.name.split(" ")[0] || "",
        lastname: form.name.split(" ")[1] || "",
      });

      alert("User Registered Successfully!");
      setIsRegister(false); // switch to login
      setForm({ name: "", email: "", password: "" });
    } catch (error) {
      console.log(error.message);
      alert("Registration failed: " + error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;
      console.log("Logged in user:", user);
      alert("Login successful!");
      navigate("/"); // redirect to homepage
    } catch (error) {
      console.log(error.message);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#fce3fc] px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg px-6 py-10">
      
        {/* Heading */}
        <h1 className="text-2xl font-bold text-center mb-8">
          {isRegister ? "Sign Up" : "Login"}
        </h1>

        {/* Form */}
        <form onSubmit={isRegister ? handleRegister : handleLogin} className="space-y-6">
          {isRegister && (
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="h-14 w-full px-4 border border-[#c9c9c9] rounded-md outline-none focus:border-red-400"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="h-14 w-full px-4 border border-[#c9c9c9] rounded-md outline-none focus:border-red-400"
          />

          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="h-14 w-full px-4 border border-[#c9c9c9] rounded-md outline-none focus:border-red-400"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-700"
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>

          <button
            type="submit"
            className="w-full h-14 bg-[#ff4141] text-white font-semibold rounded-md hover:opacity-90 transition duration-200"
          >
            {isRegister ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* Toggle Login/Register */}
        <div className="text-center mt-6 text-sm text-gray-700">
          {isRegister ? (
            <>
              Already have an account?{" "}
              <button
                className="text-red-500 font-semibold"
                onClick={() => setIsRegister(false)}
              >
                Login
              </button>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <button
                className="text-red-500 font-semibold"
                onClick={() => setIsRegister(true)}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
