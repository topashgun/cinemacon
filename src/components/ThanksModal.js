import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { BloggerIcon, FBIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './Icons';

const ThanksModal = ({ show, onHide }) => {
    return (
        <div>
            <Modal show={show} onHide={onHide} centered className='thanks-modal'>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <h5>Thank you for your interest</h5>
                    <p>We will get in touch with you shortly.</p>
                    <div className='follow-us'>
                        <p>Follow us</p>
                        <div className="icons-container">
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
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ThanksModal