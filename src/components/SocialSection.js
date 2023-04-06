import React, { Component } from 'react';
import WishkeyWonderLandImg from "../assets/images/whiskey-wonderland-img.png";
import WishkeyWonderLandImg2 from "../assets/images/whiskey-wonderland-img2.png";
import WishkeyWonderLandImg3 from "../assets/images/whiskey-wonderland-img3.png";
import GetFatImg from "../assets/images/get-fat-img.png";
import PoolTable from "../assets/images/pool-table-2.png";
import GetFatMainImage from "../assets/images/get-fat-image.png";
import GetFatSecondaryImage from "../assets/images/getFatImage3.png";
import InviteIcon from "../assets/images/invite-icon.svg";
import WhiskeyIcon from "../assets/images/whiskey-icon.png";
import BurgerIcon from "../assets/images/burger-icon.svg";
import Slider from "react-slick";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default class SocialSection extends Component {
    constructor() {
        super();
        this.state = {
            isDesktop: true,
            activeTab: 'whiskeywonderland',
            content: this.whiskeyWonderlandContent,
            progress: 0,
            progress2: 0,
        }
    }

    getFatWithHatContent = {
        title: 'Get Fat with Hat!',
        desc: "Join our CEO, Hat, as he shares his gastronomic love with a select group of cinema industry insiders at a local hidden treasure. Expect an appearance by the Head Chef while you get a private chance to catch up with your industry colleagues. (The typical group size is no more than 20)",
        subtitle: "Join us for the food and stay for the chill vibe",
        slideImages: [GetFatMainImage, GetFatMainImage, GetFatMainImage],
        secondaryImage: GetFatSecondaryImage,
        subtitleIcon: BurgerIcon,
        inviteIcon: InviteIcon,
        date: 'Wednesday, April 26,',
        time: '7 PM',
        venue: 'Venue TBA',
        inviteMsg: 'FOR AN INVITE'
    };

    whiskeyWonderlandContent = {
        title: 'World Whisky Wonderland!',
        desc: `The legend has returned! That's right, it’s the unofficial CinemaCon shindig that always has everyone buzzing (just ask around).`,
        descLine2: `If you're a whisky lover, you're in for a treat - we've got the good stuff from all over the world, just waiting for you to come and indulge. And don't worry, we've got a fully stocked bar for all your other drink preferences, too.`,
        subtitle: "So don't miss out on the fun.",
        slideImages: [WishkeyWonderLandImg3, WishkeyWonderLandImg3, WishkeyWonderLandImg3],
        secondaryImage: PoolTable,
        subtitleIcon: WhiskeyIcon,
        inviteIcon: InviteIcon,
        date: 'Tuesday,April 25,',
        time: '9 PM to Late',
        venue: 'Influx Executive Parlor Suite',
        venue2: 'The Bellagio Spa Tower',
        inviteMsg: 'No invite necessary'
    }

    switchTab(tab) {
        if (tab === "whiskeywonderland") {
            this.setState({ activeTab: tab, content: this.whiskeyWonderlandContent })
        } else {
            this.setState({ activeTab: tab, content: this.getFatWithHatContent })
        }
    }
    componentDidMount() {
        if (window.innerWidth > 768) {

        } else {
            this.setState({ isDesktop: false })
        }

    }

    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "18px",
            swipeToSlide: true,
            centerMode: true,
            appendDots: dots => (
                <div
                    style={{
                        backgroundColor: "#ddd",
                        borderRadius: "10px",
                        padding: "10px"
                    }}
                >
                    <ul style={{ margin: "0px" }}> {dots} </ul>
                </div>
            )
        }

        const desktopSliderSettings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            appendDots: dots => (
                <div
                    style={{
                        backgroundColor: "#ddd",
                        borderRadius: "10px",
                        padding: "10px"
                    }}
                >
                    <ul style={{ margin: "0px" }}> {dots} </ul>
                </div>
            )
        }


        return (
            <section className='social-section section'>
                <div className="container">
                    <h4 className="section-title">Friends Get <span>Social</span></h4>
                    <p className="description">
                        {this.state.isDesktop && <figure><img src={this.state.content.subtitleIcon} alt="" width={36} /></figure>}
                        Connecting and sharing your passion for cinema while enjoying the coolest party in town!
                    </p>
                    {
                        this.state.isDesktop ? (
                            <>
                                {
                                    this.state.content &&
                                    <div className="row g-5 social-meetup">
                                        <div className="col-12 col-md-7 meetup-column">
                                            <div className="row align-items-start justify-content-between">
                                                <div className="col-3 tabs-link-container">
                                                    <div className="tab-link">
                                                        {
                                                            this.state.activeTab === "getfatwithhat" ?
                                                                <div className="countdown-timer">
                                                                    <CountdownCircleTimer
                                                                        className="circle-timer"
                                                                        size={100}
                                                                        isPlaying
                                                                        strokeWidth={2}
                                                                        duration={15}
                                                                        colors={"#FC4B23"}
                                                                        onComplete={() => { this.switchTab("whiskeywonderland"); return ({ shouldRepeat: true, delay: 0 }) }}
                                                                    ></CountdownCircleTimer>
                                                                </div>
                                                                : ""
                                                        }

                                                        <a role={"button"} href="javascript:;" onClick={(e) => { e.preventDefault(); this.switchTab("whiskeywonderland") }} className={this.state.activeTab !== "getfatwithhat" ? "active" : ""} disabled={this.state.activeTab !== "getfatwithhat"}>
                                                            <img src={WishkeyWonderLandImg} alt="" />
                                                        </a>
                                                    </div>
                                                    <p className={this.state.activeTab !== "getfatwithhat" ? "tab-label hidden" : "tab-label"}>Whiskey Wonderland</p>
                                                    <div className="tab-link">
                                                        {
                                                            this.state.activeTab !== "getfatwithhat" ?
                                                                <div className="countdown-timer">
                                                                    <CountdownCircleTimer
                                                                        className="circle-timer"
                                                                        size={100}
                                                                        isPlaying
                                                                        strokeWidth={2}
                                                                        duration={15}
                                                                        colors={"#FC4B23"}
                                                                        onComplete={() => { this.switchTab("getfatwithhat"); return ({ shouldRepeat: true, delay: 0 }) }}
                                                                    ></CountdownCircleTimer>
                                                                </div>
                                                                : ""
                                                        }

                                                        <a role={"button"} href="javascript:;" onClick={(e) => { e.preventDefault(); this.switchTab("getfatwithhat") }} className={this.state.activeTab === "getfatwithhat" ? "active" : ""} disabled={this.state.activeTab === "getfatwithhat"}>
                                                            <img src={GetFatImg} alt="" />
                                                        </a>
                                                    </div>
                                                    <p className={this.state.activeTab === "getfatwithhat" ? "tab-label hidden" : "tab-label"}>Get Fat with Hat</p>

                                                </div>
                                                <div className='col'>
                                                    <h4>
                                                        {this.state.content.title}
                                                    </h4>
                                                    <p>{this.state.content.desc}</p>
                                                    <p>
                                                        {this.state.content.descLine2}
                                                    </p>
                                                    <p>
                                                        <span>
                                                            {this.state.content.subtitle}
                                                            <img src={this.state.content.subtitleIcon} alt="" width={36} />
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-12 justify-content-end d-flex secondary-image">
                                                <img src={this.state.content.secondaryImage} alt="" width={300} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-5 meetup-column">
                                            <Slider {...desktopSliderSettings} className="desktop-slider">
                                                {
                                                    this.state.content.slideImages.map((slide, index) => {
                                                        return (
                                                            <img className='main-image' src={slide} alt="" width={"100%"} />
                                                        )
                                                    })
                                                }
                                            </Slider>
                                            <div className="row location-time">
                                                <div className="col-12 col-md-5 col-lg-6">
                                                    <p className='label'>Date & Time</p>
                                                    <p>{this.state.content.date}</p>
                                                    <p>{this.state.content.time}</p>
                                                </div>
                                                <div className="col-12 col-md-7 col-lg-6">
                                                    <p className='label'>Location</p>
                                                    <p>{this.state.content.venue}</p>
                                                    <p>{this.state.content.venue2}</p>
                                                </div>
                                            </div>
                                            <p className='invite-msg'>
                                                <img src={this.state.content.inviteIcon} alt="" />
                                                {this.state.content.inviteMsg}
                                                {
                                                    this.state.activeTab === "getfatwithhat" ?
                                                        <a href="javascript:;"> Click here</a>
                                                        : ""
                                                }

                                            </p>
                                        </div>
                                    </div>
                                }
                            </>
                        ) : (
                            <>
                                <div className="row g-4 social-meetup">
                                    <div className="col-12 col-md-6">
                                        <h4>
                                            {this.whiskeyWonderlandContent.title}
                                        </h4>
                                        <p>
                                            {this.whiskeyWonderlandContent.desc}
                                            <br />
                                            <span>
                                                {this.whiskeyWonderlandContent.subtitle}
                                                <img src={this.whiskeyWonderlandContent.subtitleIcon} alt="" />
                                            </span>
                                        </p>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <Slider {...settings}>
                                            {
                                                this.whiskeyWonderlandContent.slideImages.map((slide) => {
                                                    return (
                                                        <div className='slide'>
                                                            <div className='slide-image-container'>
                                                                <img className='main-image' src={slide} alt="" />
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Slider>
                                        <div className="row location-time">
                                            <div className="col-12 col-md-auto">
                                                <p className='label'>Date & Time</p>
                                                <p>{this.whiskeyWonderlandContent.date}</p>
                                                <p>{this.whiskeyWonderlandContent.time}</p>
                                            </div>
                                            <div className="col-12 col-md-auto">
                                                <p className='label'>Location</p>
                                                <p>{this.whiskeyWonderlandContent.venue}</p>
                                                <p>{this.whiskeyWonderlandContent.venue2}</p>
                                            </div>
                                        </div>
                                        <p className='invite-msg'>
                                            <img src={this.whiskeyWonderlandContent.inviteIcon} alt="" />
                                            {this.whiskeyWonderlandContent.inviteMsg}
                                        </p>
                                    </div>
                                </div>
                                <div className="row g-4 social-meetup">
                                    <div className="col-12 col-md-6">
                                        <h4>
                                            {this.getFatWithHatContent.title}
                                        </h4>
                                        <p>
                                            {this.getFatWithHatContent.desc}
                                            <br />
                                            <span>
                                                {this.getFatWithHatContent.subtitle}
                                                <img src={this.getFatWithHatContent.subtitleIcon} alt="" />
                                            </span>
                                        </p>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <Slider {...settings}>
                                            {
                                                this.getFatWithHatContent.slideImages.map((slide) => {
                                                    return (
                                                        <div className='slide'>
                                                            <div className='slide-image-container'>
                                                                <img className='main-image' src={slide} alt="" />
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Slider>

                                        <div className="row location-time">
                                            <div className="col-12 col-md-auto">
                                                <p className='label'>Date & Time</p>
                                                <p>{this.getFatWithHatContent.date}</p>
                                                <p>{this.getFatWithHatContent.time}</p>
                                            </div>
                                            <div className="col-12 col-md-auto">
                                                <p className='label'>Location</p>
                                                <p>{this.getFatWithHatContent.venue}</p>
                                            </div>
                                        </div>
                                        <p className='invite-msg'>
                                            <img src={this.getFatWithHatContent.inviteIcon} alt="" />
                                            {this.getFatWithHatContent.inviteMsg}
                                            <a href="javascript:;"> Click here</a>
                                        </p>
                                    </div>
                                </div>
                            </>
                        )
                    }


                </div>
            </section>
        )
    }
}
