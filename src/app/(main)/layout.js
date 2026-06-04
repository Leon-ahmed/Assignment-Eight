
import Footer from '@/components/Footer';
import Navber from '@/components/Navber';
import React from 'react';

const mainLayout = ({children}) => {
    return (
        <div>
            <Navber></Navber>
            {children}
           <Footer></Footer>
        </div>
    );
};

export default mainLayout;