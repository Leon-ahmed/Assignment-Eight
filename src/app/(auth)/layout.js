import Footer from '@/components/Footer';
import Navber from '@/components/Navber';
import React from 'react';

const Authlayout = ({children}) => {
    return (
        <div>
            <Navber></Navber>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Authlayout;