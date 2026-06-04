import React from 'react';
import logo from '../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Navber = () => {
    const user = null;

    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        {user && (
                            <li><Link href="/profile">My Profile</Link></li>
                        )}
                    </ul>
                </div>

                <Image src={logo} width={50} height={60} alt="logo" />

                <p className="text-2xl md:text-3xl font-extrabold bg-linear-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                    SunCart
                </p>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    {user && (
                        <li><Link href="/profile">My Profile</Link></li>
                    )}
                </ul>
            </div>

            <div className="navbar-end gap-2">
                {user ? (
                    <>
                        <Image
                            src={user.image}
                            width={40}
                            height={40}
                            alt="user"
                            className="rounded-full"
                        />
                        <button className="btn btn-error btn-sm">
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