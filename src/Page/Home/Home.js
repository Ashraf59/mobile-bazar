import React from 'react';
import Banner from './Banner/Banner';
import Advertisement from './Home/Advertisement/Advertisement';
import Products from './Home/Product/Products';
import NewArrival from './NewArrival/NewArrival';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Advertisement></Advertisement>
            <NewArrival></NewArrival>

        </div>
    );
};

export default Home;