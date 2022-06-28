
import css from './about.css'
import tech from '../../assets/images/tech.jpg'
import Typewriter from 'typewriter-effect';
const About = () => {
    return (
        <>
            <h2 style={{
                backgroundColor:
                    "#fbdce1",
                color: "#e83983",
                textAlign: "center",
                marginTop: "13pxc"
            }}>About</h2>
            <section id='container'>

                < img
                    id="tech"
                    src={tech} alt="" />

                <p style={{
                    fontSize: "smaller",
                    color:"#2f286c",
                    width: "60%", alignSelf: "center"
                }}>

                    <Typewriter

                        options={{

                            autoStart: true,
                            loop: false,


                            animateCursor: true,
                            blinkSpeed: 50,
                            cursorClassName: 'cursor'

                        }}

                        onInit={(typewriter) => {
                            typewriter.typeString("Hi! I'm Geici!")
                                .callFunction(() => {

                                    console.log('String typed out!');

                                })
                                .start();
                        }} />
                    < br />
                    < br />
                    I am a Full Stack Web Developer in
                    the Triangle Area (Raleigh - NC) with a Bachelor’s Degree
                    and 2+ years of professional experience in teaching English as
                    a second language. I am a great communicator who works well on
                    a team, a curious person who loves learning new things,
                    a hard worker who keeps working until the job is done, and
                    someone who loves traveling and experiencing different cultures. <br/>
                    <br/>

                        Some of the Technologies I have used are:
                        * React,
                        * HTML5,
                        *GraphQl,
                        *Javascript,
                        * CSS, Sass,
                        *SQL,MySQL,Sequelize,
                        *MongoDB,
                        *Express,
                        *Node.js,
                        *Bootstrap, 
                        *Handlebars,
                        *Git


                </p>
            </section>
        </>
    )
}

export default About;