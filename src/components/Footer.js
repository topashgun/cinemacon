import React, { Component } from 'react';
import InfluxLogo from "../assets/images/influx-logo.svg";
// import CinemaConLogo from "../assets/images/cinema-con.svg";
import CinemaConLogo from "../assets/images/CC_LOGO.gif";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FBIcon, TwitterIcon, InstagramIcon, BloggerIcon, LinkedInIcon } from './Icons';


export default class Footer extends Component {
    render() {
        return (
            <section className='footer'>
                <div className="container">
                    <div className="separator"></div>
                    <Row>
                        <Col className="brands influx" >
                            <a href="https://www.influxworldwide.com/" target='_blank' rel='noreferrer'>
                                <figure className="brand-logo">
                                    <img src={InfluxLogo} alt="INFLUX" width={160} />
                                </figure>
                            </a>
                        </Col>
                        <Col className="social-media-container" >
                            <a href="https://www.facebook.com/influxint" target='_blank' rel='noreferrer'>
                                {/* <img src={FbIcon} alt="facebook" /> */}
                                <FBIcon />
                            </a>
                            <a href="https://www.instagram.com/influxworldwide" target='_blank' rel='noreferrer'>
                                {/* <img src={InstagramIcon} alt="instagram" /> */}
                                <InstagramIcon />
                            </a>
                            <a href="https://www.linkedin.com/company/influxww" target='_blank' rel='noreferrer'>
                                {/* <img src={LinkedInIcon} alt="linkedin" /> */}
                                <LinkedInIcon />
                            </a>
                            <a href="https://twitter.com/influxww" target='_blank' rel='noreferrer'>
                                {/* <img src={TwitterIcon} alt="twitter" /> */}
                                <TwitterIcon />
                            </a>
                            <a href="http://blog.influx.co.in/" target='_blank' rel='noreferrer'>
                                {/* <img src={BloggerIcon} alt="blogger" /> */}
                                <BloggerIcon />
                            </a>
                        </Col>
                        <Col className="brands cinemacon" >
                            <a href="https://cinemacon.com/" target='_blank' rel='noreferrer'>
                                <figure>
                                    <figcaption className='cinemacon-caption'>Proud Sponsor of</figcaption>
                                    <img src={CinemaConLogo} alt="" width={200} />
                                </figure>
                            </a>
                        </Col>
                        <Col as={"p"} className="copyright-text" sm={12}>
                            2023 © Copyright Influx All rights reserved.
                        </Col>
                    </Row>
                </div>
            </section>
        )
    }
}
