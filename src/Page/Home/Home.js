import React from 'react';
import useTitle from '../../hooks/UseTitle';
import Banner from './Banner/Banner';
import Advertisement from './Home/Advertisement/Advertisement';
import Products from './Home/Product/Products';
import NewArrival from './NewArrival/NewArrival';

const Home = () => {
    useTitle('Home')
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