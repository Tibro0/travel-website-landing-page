import React from 'react'
import './Home.css';
import HeroSection from '../../Components/HeroSection/HeroSection';
import SearchForm from '../../Components/SearchForm/SearchForm';
import LastHolidaysSection from '../../Components/LastHolidaysSection/LastHolidaysSection';

function Home() {
    return (
        <div className='home-page'>
            <HeroSection />
            <SearchForm/>
            <LastHolidaysSection/>
        </div>
    )
}

export default Home;