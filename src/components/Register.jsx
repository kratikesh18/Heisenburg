import React, { useState } from "react";
import axiosInstance from "../services/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/register", {
        username,
        password,
        email,
      });

      

      
    } catch (error) {
      // Handle error response
      let errorMessage = "An unexpected error occurred";

      if (error.response) {
        // Server responded with a status other than 2xx
        errorMessage = error.response.data.message || errorMessage;
        console.error("Error response data:", error.response.data);
      } else if (error.request) {
        // Request was made but no response was received
        console.error("Error request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Error message:", error.message);
      }

      toast.error(errorMessage);
      setError(errorMessage);
    }
  };

  return (
    <div className="bg-gradient h-screen  flex flex-col justify-center items-center">
      <div className="text-white text-center my-4 ">
        <h1 className="text-xl font-bold">Sign-up for chatClues</h1>
        {error ? <p className="font-semibold text-base mt-2">{error}</p> : null}
      </div>
      <form className="flex flex-col gap-3" onSubmit={handleSignUp}>
        <input
          className="block w-full px-4 py-1 rounded-md"
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="block w-full px-4 py-1 rounded-md"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="block w-full px-4 py-1 rounded-md"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="block w-full bg-black/60 py-1 text-white rounded-md"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Register;
