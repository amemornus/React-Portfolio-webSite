import React from 'react';
import ContactItem from '../Components/contactItem';
import phone from '../img/phone.png';
import emailMe from '../img/emailMe.png';
import location from '../img/location.png';
import Title from '../Components/Title'


function ContactPage() {
    return (
        <div>
            <div className="title">
                <Title title={'Contact US'} span={'Contact US'} />
            </div>
                <div className="ContactPage">
                    <div className="map-sect">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127066.75947802702!2d-0.24976968486548898!3d5.591204548883449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra!5e0!3m2!1sen!2sgh!4v1616375516824!5m2!1sen!2sgh" width="600" height="450" frameBorder="0" style={{border:0}} allowfullScreen="" aria-hidden="false" tabIndex="0" loading="lazy"></iframe>
                    </div>
                    <div className="contact-sect">
                        <ContactItem icon={phone} text1={'+233 247565660'} text2={'+233 202122577'} title={'Phone'} />
                        <ContactItem icon={emailMe} text1={'amemornus@gmail.com'} text2={'asmebinti@yahoo.com'} title={'Email'} />
                        <ContactItem icon={location} text1={'231/MD New Legon Accra Ghana'} text2={'Plot 1210/FDR New Botianor Accra Ghana'} title={'Address'} />

                    </div>
                
            </div>
        </div>
    )
}

export default ContactPage;
