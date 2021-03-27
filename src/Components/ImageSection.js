import React from 'react';
import stev from '../img/stev.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
            <img src= {stev} alt=""></img>
            </div>
            <div className="about-info">
                <h4>I am <span>Lorem Ipsum</span></h4>
                <p className="about-text">
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry Lorem Ipsum has been the industry's
                 standard dummy text ever since the 1500s when an unknown printer took a galley
                 of type and scrambled it to make a type specimen book it has?
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Country</p>
                    </div>
                    <div className="right-section">
                        <p>: Lorem Ipsum</p>
                        <p>: 25</p>
                        <p>: Ghanaian</p>
                        <p>: English, Twi</p>
                        <p>: 173/OS Oxford Road Street, Penkwasi 109/N Sunyani Nursing Training</p>
                        <p>: Ghana, UK</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
