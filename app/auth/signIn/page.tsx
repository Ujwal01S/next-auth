
'use client'
import { signIn } from "next-auth/react";
import React, { useRef } from "react";

const SignInPage = () => {
  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
        username:userName.current,
        password:pass.current,
        redirect:true,
        callbackUrl: "/",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <div className="px-7 py-4 shadow bg-white rounded flex flex-col w-[40%] gap-2">
        <label className="font-bold text-black">UserName:</label>
        <input
          placeholder="User Name"
          className="text-sm"
          onChange={(e) => (userName.current = e.target.value)}
        />
        
        <label className="font-bold text-black">Passowrd:</label>
        <input placeholder="passowrd" className="text-sm" onChange={(e) => (pass.current = e.target.value)}/>

        <button onClick={onSubmit} className="text-green-600">Login</button>
      </div>
    </div>
  );
};

export default SignInPage;
