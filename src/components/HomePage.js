import React from 'react'
import ImageSilder from './ImageSilder'
import DateAndTime from './DateAndTime';
import SectionThree from './SectionThree';
import SectionTwo from './SectionTwo';
import Footer from './Footer';
function HomePage() {
    return (
        <>
            <div className = "home__container">
                <div className="home_title-block">
                    <h1>Welcome to Agile<span>Stays</span></h1>
                    <p>Agile Stays offers the stupendous stay to all their guests. With its luxurious and swanky well-appointed rooms, this lavish creation offers the most sought after comforts that an individual craves for in a luxury hotel in Mangalore. With luxurious interiors, these rooms provide you with unparallel comfort. Equipped with modern facilities, these are one of the best choices to stay and will make you rethink the norms of efficiency and comfort.</p>
                    <a href="/" className = "btn__one mt-2">Learn More</a>
                </div>
                <ImageSilder/>
            </div>
            <DateAndTime/>
            <SectionTwo/>
            <SectionThree/>
            <Footer/>
        </>
    )
}

export default HomePage
