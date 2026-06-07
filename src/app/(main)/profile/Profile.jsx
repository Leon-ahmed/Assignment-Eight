"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
 


import {Avatar} from "@heroui/react";






export default function ProfilePage() {
  const [user, setUser] = useState(null);




  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await authClient.getSession();
      setUser(data?.user || null);
    };

    fetchUser();
  }, []);

  if (!user) {
    return <p className="p-10">Loading...</p>;
  }

  return (
  <div className="bg-linear-to-r from-slate-900 via-purple-900 to-slate-900 pt-10 pb-10">

  <div className="p-10  flex flex-col w-8/12 lg:w-2/12   rounded-md   bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-t-md  mx-auto   items-center    ">
      <h1 className="text-2xl text-center font-bold mb-5">My Profile</h1>

      <div className="space-y-3    ">
          <Avatar   className="w-20 h-20  mx-20 "  >
              <Avatar.Image alt="John Doe"  src={user?.image}
              referrerPolicy="no-referrer" />
              <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                   
                
                   </Avatar>

        <p><b>Name:</b> {user.name}</p>
        <p><b>Email:</b> {user.email}</p>
      </div>
    </div>
 
    
  </div>)
}