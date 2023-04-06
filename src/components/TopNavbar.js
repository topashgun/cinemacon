import React, { Component } from 'react';
import BrandLogo from "../assets/images/influx-logo.svg";
// import CinemaConLogo from "../assets/images/cinema-con.svg";
import CinemaConLogo from "../assets/images/CC_LOGO.gif";
import SendIcon from "../assets/images/send-icon.svg";
import Button from 'react-bootstrap/Button';

export default class TopNavbar extends Component {
    render() {
        return (
            <div className='top-navbar'>
                <div className="navbar-start">
                    <a href="https://www.influxworldwide.com/" target='_blank' rel='noreferrer'>
                        <figure className="brand-logo">
                            <img src={BrandLogo} alt="INFLUX" width={160} />
                        </figure>
                    </a>
                </div>
                <div className="navbar-end">
                    <a href="https://cinemacon.com/" target='_blank' rel='noreferrer'>
                        <figure className='d-sm-none d-md-block'>
                            <figcaption className='cinemacon-caption'>Proud Sponsor of</figcaption>
                            <img src={CinemaConLogo} alt="" width={150} />
                        </figure>
                    </a>
                    <Button variant="primary" className='custom-btn' href='#contact-us-section'>
                        <img src={SendIcon} alt="send-icon" />
                        Get In Touch
                    </Button>
                </div>
            </div>
        )
    }
}
