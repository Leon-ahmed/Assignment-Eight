"use client";

import React, { useEffect, useState } from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";
import {Avatar} from "@heroui/react";
const Navber = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await authClient.getSession();
      setUser(data?.user || null);
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await authClient.signOut();
    setUser(null);
    router.replace("/login");
    router.refresh();
  };

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>

          
              <li><Link href="/profile">My Profile</Link></li>
           
          </ul>
        </div>

        <Image src={logo} width={50} height={60} alt="logo" />

        <p className="text-2xl font-extrabold bg-linear-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
          SunCart
        </p>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 space-x-5 font-semibold">
          <li><Navlink href="/">Home</Navlink></li>
          <li><Navlink href="/products">Products</Navlink></li>

     
            <li><Navlink href="/profile">My Profile</Navlink></li>
    
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {user ? (
          <>
            <Avatar>
        <Avatar.Image alt="John Doe" src={user?.image}
        referrerPolicy="no-referrer" />
        <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
             
          
             </Avatar>

            <button
              type="button"
              className="btn btn-error btn-sm"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="btn btn-outline btn-sm">
              Login
            </Link>

            <Link href="/register" className="btn btn-primary btn-sm">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navber;