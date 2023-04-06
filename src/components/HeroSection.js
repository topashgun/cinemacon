import React, { Component } from 'react';
import MsgIcon from "../assets/images/msg-icon.svg";
import HeroImage from "../assets/images/banner-image.svg";
import MegaPhoneIcon from "../assets/images/megaphone-icon.svg";
import Marquee from "react-fast-marquee";
import TopNavbar from './TopNavbar';
import HeroImageMobile from "../assets/images/banner-image-mobile.svg";
import Lottie from "lottie-react";
import animation from "../assets/json/animation.json";

export default class HeroSection extends Component {

    componentDidMount() {
        //set top padding to compensate for top navbar;
        let topNavHeight = document.getElementsByClassName("top-navbar")[0].getBoundingClientRect().height;
        document.getElementsByClassName('hero-section')[0].style.paddingTop = topNavHeight;
    }

    render() {
        return (
            <div className='hero-section'>
                <TopNavbar />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="main-content col-12 col-md-10 col-lg-8">
                            <h3 className='title'>Your Cinema’s</h3>
                            <h4 className='subtitle'>Best Friend</h4>
                            <p className="description">
                                Nothing sells tickets or food & beverage better <br />
                                than an Influx website, mobile app or kiosk.
                            </p>
                            <a href="javascript:;" className="contact-link">
                                <figure>
                                    <img src={MsgIcon} alt="" />
                                </figure>
                                Talk to us at CinemaCon
                            </a>
                            {/* <picture className='hero-section-image'>
                                <source media="(max-width: 768px)" srcset={HeroImageMobile} />
                                <source media="(min-width: 800px)" srcset={HeroImage} />
                                <img src={HeroImage} alt="" />
                            </picture> */}

                        </div>
                    </div>
                </div>
                <div className="hero-section-animation-container">
                    <Lottie animationData={animation} loop={true} height={400} />
                </div>
                <div className="scrolling-text-container">
                    <Marquee gradient={false} speed={50} pauseOnHover>
                        <p>
                            <figure>
                                <img src={MegaPhoneIcon} alt="" />
                            </figure>
                            Join Us @ The Executive Parlor Suite at Bellagio, Spa Tower - Check Back for Suite #
                        </p>
                        <p>
                            <figure>
                                <img src={MegaPhoneIcon} alt="" />
                            </figure>
                            Join Us @ The Executive Parlor Suite at Bellagio, Spa Tower - Check Back for Suite #
                        </p>

                        <p>
                            <figure>
                                <img src={MegaPhoneIcon} alt="" />
                            </figure>
                            Join Us @ The Executive Parlor Suite at Bellagio, Spa Tower - Check Back for Suite #
                        </p>
                        <p>
                            <figure>
                                <img src={MegaPhoneIcon} alt="" />
                            </figure>
                            Join Us @ The Executive Parlor Suite at Bellagio, Spa Tower - Check Back for Suite #
                        </p>
                    </Marquee>
                </div>
            </div>
        )
    }
}
