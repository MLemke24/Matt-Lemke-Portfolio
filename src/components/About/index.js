import React from 'react';
import profilePic from '../../assets/profile-pic/profile.jpeg'

function About() {
    return(
        <section className="my-5">
            <h1 id='about'>About Matthew Lemke:</h1>
            <div className='aboutMe'>
            <img id='profile-pic' src={profilePic} className="my-2" style={{width: '60%'}} alt='cover' />
            <div className='my-2'>
                <p style={{lineheight: "1.6"}}>
                I am 32 years old and currently living in Tulsa OK. I am a Junior Full-Stack Developer who excels in executing team goals with little supervision. Though I am just starting in the industy, I believe I have the self awareness around what I know, and do not know, and the humility and dedication to find the right answers.
                </p>
            </div>
            </div>
        </section>
    )
}

export default About;