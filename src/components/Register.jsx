import React, { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="bg-gradient h-screen  flex justify-center items-center">
      <form className="flex  flex-col gap-3" action="">
        <input
          className="block w-full px-4 py-1 rounded-md"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          className="block w-full px-4 py-1 rounded-md"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
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
