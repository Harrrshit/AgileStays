import React from 'react'
import img1 from "../images/Image5.jpg"
function SectionTwo() {
    return (
        <section className="container mx-auto section__two" id = "about">

            <div className="section__description">
                <h2>Our Accomodation</h2>
                <p>Settle into your spacious room or suite at the Agile Stays, Mangalore. Our hotel’s ideal location puts you within walking distance of every essential spots of the city. Families appreciate being near beautiful Venugopal Temple and enchanting attractions like End Point gardens and Malpe Beach. Our hotel also offers easy access to NH 66, which links to Goa and Kerala from Manipal - Udupi.</p>
                <p>Agile Stays – A Commitment Restrengthened is a reflection of our assurance of safety and comfort for our guests and is ingrained in our associates. It was created in accordance with theWorld Health Organization (WHO), Food Safety and Standards Authority of India (FSSAI), and the Government of India’s standards.</p>
                <button type="submit" className="btn btn-lg btn-dark mt-2" style ={{fontSize: "1.6rem", letterSpacing: ".2rem"}}>More</button>
            </div>
            <div className="section__image">
                <img src={img1} alt="" className = "sec__image"/>
            </div>
        </section>
    )
}

export default SectionTwo
