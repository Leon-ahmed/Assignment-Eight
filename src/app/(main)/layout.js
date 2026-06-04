
import Navber from '@/components/Navber';
import React from 'react';

const mainLayout = ({children}) => {
    return (
        <div>
            <Navber></Navber>
            {children}
           
        </div>
    );
};

export default mainLayout;