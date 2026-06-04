import Footer from '@/components/Footer';
import React from 'react';

const Authlayout = ({children}) => {
    return (
        <div>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Authlayout;