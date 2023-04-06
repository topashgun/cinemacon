import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CustomCheckbox from './CustomCheckbox';
import Footer from './Footer';
import Row from 'react-bootstrap/Row';
import ArrowTopIcon from "../assets/images/arrow-top.png";

export default class ContactUsSection extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            company: '',
            phone: '',
            jobTitle: '',
            description: '',
            catchUpSocially: {
                getADrink: false,
                grabAMeal: false,
                whiskeyWonderland: false,
                getFatWithHat: false
            },
            talkingBusiness: {
                generalInquiry: false,
                webOrMobileDesign: false,
                intake: false,
                ingage: false,
                inforce: false,
                infinity: false
            }
        }
    }

    handleScrollTop = () => {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <section className="section contact-us-section" id='contact-us-section'>
                <div className="container">
                    <h4 className="section-title">Let’s Begin <span>Our Friendship</span></h4>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-12 col-lg-8">
                            <Form className='contact-form'>
                                <Row>
                                    <Form.Group as={Col} sm={12} md={6} className="mb-3" controlId="name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" onChange={(e) => this.setState({ name: e.target.value })} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm={12} md={6} className="mb-3" controlId="company">
                                        <Form.Label>Company</Form.Label>
                                        <Form.Control type="text" onChange={(e) => this.setState({ company: e.target.value })} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm={12} md={6} className="mb-3" controlId="job-title">
                                        <Form.Label>Job Title</Form.Label>
                                        <Form.Control type="text" onChange={(e) => this.setState({ jobTitle: e.target.value })} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm={12} md={6} className="mb-3" controlId="phone">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="number" onChange={(e) => this.setState({ phone: e.target.value })} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm={12} className="mb-3" controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" onChange={(e) => this.setState({ email: e.target.value })} />
                                    </Form.Group>
                                    <Col sm={12} md={4} >
                                        <h6>
                                            Interested in
                                            <br />
                                            <span>
                                                (select as many as you’d like)
                                            </span>
                                        </h6>
                                    </Col>
                                    <Col sm={12} md={4} >
                                        <h5>Catching up Socially</h5>
                                        <CustomCheckbox label="Get a drink" checked={this.state.catchUpSocially.getADrink} handleChange={(e) => { this.setState({ catchUpSocially: { ...this.state.catchUpSocially, getADrink: !this.state.catchUpSocially.getADrink } }) }} />
                                        <CustomCheckbox label="Grab a meal" checked={this.state.catchUpSocially.grabAMeal} handleChange={(e) => { this.setState({ catchUpSocially: { ...this.state.catchUpSocially, grabAMeal: !this.state.catchUpSocially.grabAMeal } }) }} />
                                        <CustomCheckbox label="Whisky Wonderland" checked={this.state.catchUpSocially.whiskeyWonderland} handleChange={(e) => { this.setState({ catchUpSocially: { ...this.state.catchUpSocially, whiskeyWonderland: !this.state.catchUpSocially.whiskeyWonderland } }) }} />
                                        <CustomCheckbox label="Get Fat with Hat" checked={this.state.catchUpSocially.getFatWithHat} handleChange={(e) => { this.setState({ catchUpSocially: { ...this.state.catchUpSocially, getFatWithHat: !this.state.catchUpSocially.getFatWithHat } }) }} />
                                    </Col>
                                    <Col sm={12} md={4} >
                                        <h5>Talking Business</h5>
                                        <CustomCheckbox label="General Inquiry about Influx" checked={this.state.talkingBusiness.generalInquiry} handleChange={(e) => { this.setState({ talkingBusiness: { ...this.state.talkingBusiness, generalInquiry: !this.state.talkingBusiness.generalInquiry } }) }} />
                                        <CustomCheckbox label="Website or Mobile App Design" checked={this.state.talkingBusiness.webOrMobileDesign} handleChange={(e) => { this.setState({ talkingBusiness: { ...this.state.talkingBusiness, webOrMobileDesign: !this.state.talkingBusiness.webOrMobileDesign } }) }} />
                                        <CustomCheckbox label="Intake" checked={this.state.talkingBusiness.intake} handleChange={(e) => { this.setState({ talkingBusiness: { ...this.state.talkingBusiness, intake: !this.state.talkingBusiness.intake } }) }} />
                                        <CustomCheckbox label="Ingage" checked={this.state.talkingBusiness.ingage} handleChange={(e) => { this.setState({ talkingBusiness: { ...this.state.talkingBusiness, ingage: !this.state.talkingBusiness.ingage } }) }} />
                                        <CustomCheckbox label="Inforce" checked={this.state.talkingBusiness.inforce} handleChange={(e) => { this.setState({ talkingBusiness: { ...this.state.talkingBusiness, inforce: !this.state.talkingBusiness.inforce } }) }} />
                                        <CustomCheckbox label="Infinity" checked={this.state.talkingBusiness.infinity} handleChange={(e) => { this.setState({ talkingBusiness: { ...this.state.talkingBusiness, infinity: !this.state.talkingBusiness.infinity } }) }} />
                                    </Col>

                                    <Col sm={12}>
                                        <h5>Anything Else?</h5>
                                        <Form.Group className="mb-3" controlId="">
                                            <Form.Control type="text" as="textarea" onChange={(e) => { this.setState({ description: e.target.value }) }} />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12}>
                                        <Button variant="primary" type="submit" className='custom-btn' onClick={(e) => { e.preventDefault(); this.props.handleThanksModal(); }}>
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <button className='button scroll-top-btn' onClick={this.handleScrollTop}>
                            <img src={ArrowTopIcon} alt="arrow-top" />
                            TOP
                        </button>
                    </div>
                </div>
                <Footer />
            </section>
        )
    }
}
