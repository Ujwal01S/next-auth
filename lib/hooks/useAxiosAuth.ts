


"use client"

import { useSession } from "next-auth/react";
import { axiosAuth } from "../axios"
import { useEffect } from "react";




const useAxiosAuth = () => {
   const {data:session} = useSession();

   useEffect(() => {
    const requestIntercept = axiosAuth.interceptors.request.use((config) => {
        if(!config.headers["Authorization"]) {
            config.headers["Authorization"] = `Bearer ${session?.user.accessToken}`;
        }
        return config;
    })
    return () => axiosAuth.interceptors.request.eject(requestIntercept);
   }, [session]);

   return axiosAuth;
};

export default useAxiosAuth;