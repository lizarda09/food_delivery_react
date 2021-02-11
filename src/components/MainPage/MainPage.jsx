import React from 'react';
import FormPage from "../FormPage/FormPage";
import ExploreWorld from "../ExploreWorld/ExploreWorld";
import FeaturedDestinations from "../FeaturedDestinations/FeaturedDestinations";
import Guids from "../Guids/Guids";


const MainPage = () => {
    return (
        <>
            <FormPage />
            <ExploreWorld />
            <FeaturedDestinations />
            <Guids />
        </>

    );
}

export default MainPage;