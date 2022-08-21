import React from 'react';
import Nav from './Nav';
import NewCustomer from './NewCustomer';
import Details from './Details';

const Body = () => {
    return (
        <div>
            <Nav />
            <NewCustomer />
            <Details/>
        </div>
    );
};

export default Body;