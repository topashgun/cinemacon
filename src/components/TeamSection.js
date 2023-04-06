import React, { Component } from 'react';
import HelloIcon from "../assets/images/hello-icon.svg";
import HAT from "../assets/images/HAT.png";
import Ammar from "../assets/images/Ammar.png";
import Bret from "../assets/images/Bret.png";
import Cara from "../assets/images/Cara.png";
import Carrie from "../assets/images/Carrie.png";
import Dodo from "../assets/images/Dodo.png";
import Gopi from "../assets/images/Gopi.png";
import Pratheek from "../assets/images/Pratheek.png";
import Jammal from "../assets/images/Jammal.png";
import Rolando from "../assets/images/Rolando.png"
import LinkedInLogo from "../assets/images/linkedin-icon.svg";
import Slider from 'react-slick';

export default class TeamSection extends Component {
    constructor() {
        super();
        this.state = {
            isDesktop: true,
        }
    }

    teamMembersData = [
        {
            name: "Harish Anand Thilakan",
            title: "Founder and CEO",
            image: HAT,
            linkedInLink: "https://www.linkedin.com/in/harishanandthilakan/"
        },
        {
            name: "Carrie Dietrich",
            title: "SVP - Business Development",
            image: Carrie,
            linkedInLink: "https://www.linkedin.com/in/carrie-dietrich-aba44939/"
        },
        {
            name: "Cara Ross",
            title: "Client Success Director",
            image: Cara,
            linkedInLink: "https://www.linkedin.com/in/carapatricia/"
        },
        {
            name: "Bret Hoffmann",
            title: "SVP - Growth and Strategy",
            image: Bret,
            linkedInLink: "https://www.linkedin.com/in/bret-hoffmann-072780/"
        },

        {
            name: "Daniel (Dodo) Anandaraj",
            title: "COO",
            image: Dodo,
            linkedInLink: "https://www.linkedin.com/in/danielanandaraj/"
        },
        {
            name: "Pratheek Prabhakaran",
            title: "Project Manager",
            image: Pratheek,
            linkedInLink: "https://www.linkedin.com/in/pratheek-prabhakaran-74122419/"
        },
        {
            name: "Gopi Premnath",
            title: "Financial Director",
            image: Gopi,
            linkedInLink: "https://www.linkedin.com/in/gopinath-premnath-59286647/"
        },
        {
            name: "Ammar Yasin",
            title: "SVP - Middle East and North Africa",
            image: Ammar,
            linkedInLink: "https://www.linkedin.com/in/ammar-yasin-59123752/"
        },
        {
            name: "Jamaal Martin",
            title: "Project Manager Food & Beverage",
            image: Jammal,
            linkedInLink: "https://www.linkedin.com/in/jamaalamartin/"
        },
        {
            name: "Rolando Rodriguez",
            title: "Senior Adviser",
            image: Rolando,
            linkedInLink: "https://www.linkedin.com/in/rolando-rodriguez-55a1a079/"
        },

    ]

    componentDidMount() {
        if (window.innerWidth > 768) {

        } else {
            this.setState({ isDesktop: false })
        }
    }

    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "40px",
            swipeToSlide: true,
            centerMode: true,
        }
        return (
            <section className='team-section section'>
                <div className="container">
                    <h4 className="section-title">Meet Your Friends <span>at Influx</span></h4>
                    <p className='salutation'>
                        <figure>
                            <img src={HelloIcon} alt="" />
                        </figure>
                        <span>
                            Say hi to our team during CinemaCon week!
                        </span>
                    </p>
                    {
                        this.state.isDesktop ? (
                            <div className="team-members-container-desktop row gy-5 gx-5">
                                {this.teamMembersData.map((member) => {
                                    return (
                                        <div className="team-member-card col-12 col-md-3">
                                            {/* <span className="linkedIn">
                                                <a href={member.linkedInLink} target="_blank" rel='noreferrer'>
                                                    <img src={LinkedInLogo} alt="" />
                                                </a>
                                            </span> */}
                                            <div className="team-image-container">
                                                <div className="circle-bg"></div>
                                                <figure className="team-member-image">
                                                    <img src={member.image} alt="" />
                                                </figure>
                                            </div>
                                            <h6 className='team-member-name'>{member.name}</h6>
                                            <div className='d-flex align-items-center justify-content-center mt-2'>
                                                <p className='team-member-title m-0 me-2'>{member.title}</p>
                                                <span className="linkedIn">
                                                    <a href={member.linkedInLink} target="_blank" rel='noreferrer'>
                                                        <img src={LinkedInLogo} alt="" />
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        ) : (
                            <div className="team-members-container-mobile">
                                {/* <ImageList variant="quilted" cols={4} rowHeight={200} className="team-members-list">
                                    {this.teamMembersData.map((item, index) => (
                                        <ImageListItem key={item.image} cols={2} rows={index === 0 || index === 2 ? 2 : 1}>
                                            <img
                                                src={`${item.image}?w=248&fit=crop&auto=format`}
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                            <ImageListItemBar
                                                className='team-members-item-bar'
                                                title={item.name}
                                            // subtitle={item.title}
                                            // actionIcon={
                                            //     <IconButton
                                            //         sx={{ color: '#ff6a00' }}
                                            //         aria-label={`info about ${item.title}`}
                                            //     >
                                            //         <LinkedInIcon />
                                            //     </IconButton>
                                            // }
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList> */}
                                <Slider {...settings}>
                                    {this.teamMembersData.map((member) => {
                                        return (
                                            <div className="team-member-card">
                                                <span className="linkedIn">
                                                    <a href={member.linkedInLink} target="_blank" rel='noreferrer'>
                                                        <img src={LinkedInLogo} alt="" />
                                                    </a>
                                                </span>
                                                <figure className="team-member-image">
                                                    <img src={member.image} alt="" />
                                                </figure>
                                                <h6 className='team-member-name'>{member.name}</h6>
                                                <p className='team-member-title'>{member.title}</p>
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                        )
                    }


                </div>
            </section>
        )
    }
}
