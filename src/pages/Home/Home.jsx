import React from 'react';
import Banner from '../../components/Banner/Banner';
import PopularCamps from '../../components/PopularCamps/PopularCamps';
import FeedbackAndRatings from '../../components/FeedbackAndRatings/FeedbackAndRatings';

const Home = () => {
    return (
        <div>
            <div>
                <Banner/>
            </div>
            <div>
                <PopularCamps/>
            </div>
            <div>
                <FeedbackAndRatings/>
            </div>
        </div>
    );
};

export default Home;