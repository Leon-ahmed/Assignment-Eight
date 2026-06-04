"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href,children}) => {
    const paths= usePathname();

    const isActive= href===paths
    return (
        <Link href={href}
        className={`${isActive ? "border-b-2 border-b-primary  text-primary":" "}`}>{children}</Link>
    );
};

export default Navlink;