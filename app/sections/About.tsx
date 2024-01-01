import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import { spaceGrotesk } from "../fonts/spaceGrotesk";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"Navigating the Digital Landscape with Passion."}
                    className={
                        `${spaceGrotesk.className} mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]`
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className={`${spaceGrotesk.className}mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20`}>
                    <div className={`${spaceGrotesk.className} mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-small  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[19px]`}>
                        <AnimatedBody  text="Hey there! I'm Isuru Senadeera, on a journey to transform ideas into digital reality. Hailing from Uva Wellassa University, I'm the founder of Ceriture – a platform that turns university students' ideas into tangible projects. I'm passionate about providing development experiences, fostering innovation, and making things happen." />

                        <AnimatedBody
                            
                            delay={0.1}
                            text="When not immersed in coding, I wear the hat of the University Business Club's secretary, diving into business and entrepreneurship. I'm also a proud member of the University Cricket Team, adding sportsmanship to university life."
                        />

                        <AnimatedBody
                            
                            delay={0.2}
                            text="Currently, my curiosity leads me to research 'Digital Photography Copyright Protection Using Blockchain Technology.' It's a journey where technology meets creativity, and I'm excited to unravel possibilities at this intersection."
                        />
                    </div>

                    <div className="about-img">
                        
                        <div className="card">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="card-inner">
                                <img alt='Isuru Senadeera' src="./me.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
