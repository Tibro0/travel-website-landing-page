import React from 'react'
import './Home.css';
import HeroSection from '../../Components/HeroSection/HeroSection';
import SearchForm from '../../Components/SearchForm/SearchForm';
import LastHolidaysSection from '../../Components/LastHolidaysSection/LastHolidaysSection';
import RecommendedSection from '../../Components/RecommendedSection/RecommendedSection';

function Home() {
    return (
        <div className='home-page'>
            <HeroSection />
            <SearchForm/>
            <LastHolidaysSection/>
            <div className='my-4 my-sm-5'>
                <RecommendedSection itemRecommendedTitle='Recommended for you'/>
            </div>
        </div>
    )
}

export default Home;