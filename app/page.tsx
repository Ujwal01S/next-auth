
'use client'

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import axios, { axiosAuth } from "@/lib/axios";

const Home = () => {
  const {data:session, update} = useSession();

  const [post, setPost] = useState();

  async function updateSession(){
    await update({
      ...session,
      user:{
        ...session?.user,
        accessToken:'newToken',
        // name:"UpdatedName"
      }
    })
  }

  const fetchProduct = async() => {
    const res = await axios.get("/authUser")
    setPost(res.data);
    console.log(post)
  };
  return (
    <div className="flex gap-9">
      <button onClick={updateSession} className="bg-violet-500 p-6 text-white font-semibold">
        Update Session
      </button>
      <button onClick={() => console.log({session})} className="bg-violet-500 p-6 text-white font-semibold">
        Log Session
      </button>

      <button onClick={fetchProduct} className="bg-violet-500 p-6 text-white font-semibold">
          GET PRODUCT
      </button>
    </div>
  );
};

export default Home;
