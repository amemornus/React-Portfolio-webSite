import React from 'react';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import game from '../img/game.png';
import service from '../img/service.png';
import intelligent from '../img/intelligent.png';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />

            <div className="skills-container">
                <SkillsSection skill={'JavaScripts'} progress={'60%'} width={'50%'}/>
                <SkillsSection skill={'React JS'} progress={'30%'} width={'30%'}/>
                <SkillsSection skill={'HTML'} progress={'70%'} width={'70%'}/>
                <SkillsSection skill={'CSS'} progress={'80%'} width={'80%'}/>
                <SkillsSection skill={'C++'} progress={'90%'} width={'90%'}/>
                <SkillsSection skill={'React-native'} progress={'40%'} width={'40%'}/>
                <SkillsSection skill={'Laravel'} progress={'35%'} width={'35%'}/>
                <SkillsSection skill={'PHP'} progress={'67%'} width={'67%'}/>
                <SkillsSection skill={'Python'} progress={'55%'} width={'55%'}/>

            </div>
            <Title title={'Services'} span={'Services'} />
                <div className="services-container">
                <ServicesSection image={service} title={'Web Design'} text={'Lorem ipsum sit amet consctetur adipisicing elt.'}/>
                <ServicesSection image={intelligent} title={'Artificial Intelligent '} text={'Lorem ipsum sit amet consctetur adipisicing elt.'}/>
                <ServicesSection image={game} title={'Game Design'} text={'Lorem ipsum sit amet consctetur adipisicing elt.'}/>

            </div>
        </div>
    )
}

export default AboutPage;
