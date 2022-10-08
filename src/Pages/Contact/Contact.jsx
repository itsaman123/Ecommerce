import React from 'react';
import './Contact.scss';
import aman from '../../assets/aman.png';



const Contact = () => {
    return ( <div className="contact">
        <div className="team-section">
            <h1>About Me</h1>
            <p>
                Hi, My name is <b>Aman Maurya</b>. 
                I'm a student pursuing bachelors 
                in Computer Science and Engineering 
                at Noida Institute of Engineering and 
                Technology Greater Noida in pre final year. 
                I'm most passionate about giving back 
                to the community, and my goal is to 
                pursue my passion.Altogether, I would 
                sum up myself as an enthusiast and a 
                hardworker; who would do anything to 
                complete the task. <br />
                <i>Here are some links if you want to contact me let me know <br /> <b>Thank for visit</b></i>

            </p>
            
            <a href="https://imaman.netlify.app/" target="blank"><h3>Website</h3></a> 
            <a href="https://github.com/itsaman123" target="blank"><h3>Github</h3></a> 
            <a href="https://www.linkedin.com/in/aman-maurya-47b5131b5/" target="blank"><h3>Linkedin</h3></a>
            <a href="https://twitter.com/AmanMaurya9554" target="blank"><h3>Twitter</h3></a>       
            <span className="border"></span>
            <div className="ps">
                <a href="https://imaman.netlify.app/" target="blank">
                    <img src={aman} alt="website" />
                </a>
            </div>
        </div>
    </div> );
}
 
export default Contact;