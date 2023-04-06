import React, { Component } from 'react';
import marcus from "../assets/images/marcus.svg"
import cmx from "../assets/images/cmx.svg"
import emagine from "../assets/images/emagine.svg"
import evo from "../assets/images/evo.svg"
import silverspot from "../assets/images/silverspot.svg"
import strikereel from "../assets/images/strikereel.svg"
import showplace from "../assets/images/showplace.svg"
import star from "../assets/images/star.svg"
import alamo from "../assets/images/alamo.svg"
import amc from "../assets/images/amc.svg"
import reel from "../assets/images/reel.svg"
import muvi from "../assets/images/muvi.svg"
import major from "../assets/images/major.svg"
import cinescape from "../assets/images/cinescape.svg"
import roxy from "../assets/images/roxy.svg"
import tgv from "../assets/images/tgv.svg"
import pvr from "../assets/images/pvr.svg"
import vox from "../assets/images/vox.svg"
import novo from "../assets/images/novo.svg"
import cinepax from "../assets/images/cinepax.svg"
import inox from "../assets/images/inox.svg";

export default class PartnerSection extends Component {
    constructor() {
        super()
        this.state = {
            isDesktop: true
        }
    }

    northAmericaPartners = [
        {
            partnerLogo: marcus,
            partnerLocation: 'USA'
        },
        {
            partnerLogo: cmx,
            partnerLocation: 'USA'
        },
        {
            partnerLogo: emagine,
            partnerLocation: 'USA'
        },
        {
            partnerLogo: evo,
            partnerLocation: 'USA'
        },
        {
            partnerLogo: silverspot,
            partnerLocation: 'USA'
        },

        {
            partnerLogo: strikereel,
            partnerLocation: 'USA'
        },
        {
            partnerLogo: showplace,
            partnerLocation: 'USA'
        },

        {
            partnerLogo: star,
            partnerLocation: 'USA'
        },
        {
            partnerLogo: alamo,
            partnerLocation: 'USA'
        },
    ]

    otherPartners = [

        {
            partnerLogo: amc,
            partnerLocation: 'Saudi Arabia'
        },

        {
            partnerLogo: reel,
            partnerLocation: 'UAE'
        },

        {
            partnerLogo: muvi,
            partnerLocation: 'Saudi Arabia'
        },

        {
            partnerLogo: major,
            partnerLocation: 'Thailand'
        },

        {
            partnerLogo: cinescape,
            partnerLocation: 'Kuwait'
        },

        {
            partnerLogo: roxy,
            partnerLocation: 'UAE'
        },

        {
            partnerLogo: tgv,
            partnerLocation: 'Malaysia'
        },

        {
            partnerLogo: pvr,
            partnerLocation: 'India'
        },

        {
            partnerLogo: vox,
            partnerLocation: 'GCC & N.Africa'
        },

        {
            partnerLogo: cinepax,
            partnerLocation: 'Pakistan'
        },
        {
            partnerLogo: inox,
            partnerLocation: 'India'
        }
    ]

    componentDidMount() {
        if (window.innerWidth > 768) {
            this.setState({ isDesktop: true })
        } else {
            this.setState({ isDesktop: false })
        }
    }

    render() {
        return (
            <section className="section partner-section">
                <div className="container">
                    <h4 className="section-title">Our <span>Friends</span></h4>
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-6 partners-location">
                            <h5 className='location-title'>North America</h5>
                            <div className={this.state.isDesktop ? "partners-container usa row" : "partners-container usa "}>
                                {
                                    this.northAmericaPartners.map((partner) => {
                                        return (
                                            <div className={this.state.isDesktop ? "partner col-3" : "partner "}>
                                                <figure>
                                                    <img src={partner.partnerLogo} alt="" />
                                                </figure>
                                                <figcaption>{partner.partnerLocation}</figcaption>
                                            </div>
                                        );
                                    })
                                }

                            </div>
                        </div>
                        <div className="col-12 col-md-6 partners-location">
                            <h5 className='location-title'>Rest of the World</h5>
                            <div className={this.state.isDesktop ? "partners-container rest-world row" : "partners-container rest-world "}>
                                {
                                    this.otherPartners.map((partner) => {
                                        return (
                                            <div className={this.state.isDesktop ? "partner col-3" : "partner "}>
                                                <figure>
                                                    <img src={partner.partnerLogo} alt="" />
                                                </figure>
                                                <figcaption>{partner.partnerLocation}</figcaption>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
