import React, { useContext, useState, useEffect, useRef } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { AccordionContext } from 'react-bootstrap';
import ExpandIcon from "../assets/images/expand-icon.png"
import CollapseIcon from "../assets/images/collapse-icon.png";
import InfluxLogo from "../assets/images/influx-logo-dark.svg";
import InjinLogo from "../assets/images/injin-logo.svg";
import IntakeLogo from "../assets/images/intake-logo.svg";
import InfinityLogo from "../assets/images/infinity-logo.svg";
import IngageLogo from "../assets/images/ingage-logo.svg";
import InchargeLogo from "../assets/images/incharge-logo.svg";
import InforceLogo from "../assets/images/inforce-logo.svg";
import LinkIcon from "../assets/images/link-icon.png";
import Button from 'react-bootstrap/Button';
import Stories from 'react-insta-stories';
import ProductImage from "../assets/images/product-image.png";
import ProductImage2 from "../assets/images/product-image2.png";
import Modal from 'react-bootstrap/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowIcon from "../assets/images/double-arrow.svg";

const ProductsSection = () => {

    const [show, setShow] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);
    const [scrollTop, setScrollTop] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        if (window.innerWidth > 768) {
            setIsDesktop(true);
        } else {
            setIsDesktop(false)
        }
    }, [])

    function ContextAwareToggle({ children, eventKey, callback }) {
        const { activeEventKey } = useContext(AccordionContext);

        const decoratedOnClick = useAccordionButton(
            eventKey,
            () => callback && callback(eventKey),
        );

        const isCurrentEventKey = activeEventKey === eventKey;

        return (
            <Card.Header className={isCurrentEventKey ? "expanded" : "collapsed"}>
                <div
                    type="button"
                    style={{ display: "flex", justifyContent: "space-between", }}
                    onClick={decoratedOnClick}
                    className="accordion-btn"
                >
                    {children}
                    <img src={isCurrentEventKey ? CollapseIcon : ExpandIcon} alt="" width={26} style={{ objectFit: "contain" }} />
                </div>
            </Card.Header>
        );
    }

    const stories = [
        {
            content: ({ action, isPaused }) => {
                return (
                    <div className='product-image-container'>
                        <img src={ProductImage} alt="product" />
                    </div>
                );
            },
        },
        {
            content: ({ action, isPaused }) => {
                return (
                    <div className='product-image-container'>
                        <img src={ProductImage2} alt="product" />
                    </div>
                );
            },
        },
        {
            content: ({ action, isPaused }) => {
                return (
                    <div className='product-image-container'>
                        <img src={ProductImage} alt="product" />
                    </div>
                );
            },
        },
        {
            content: ({ action, isPaused }) => {
                return (
                    <div className='product-image-container'>
                        <img src={ProductImage2} alt="product" />
                    </div>
                );
            },
        },
    ];

    const productsList = [
        {
            title: "Injin",
            logo: InjinLogo,
            description: 'lorem'
        },
        {
            title: "Intake",
            logo: IntakeLogo,
            description: `<p>Online Food & Beverage Ordering (Perfected!)</p>
                            <p> Supercharge and enhance your most important revenue stream with our proven food & beverage digital ordering platform that’s packed with features including upselling, open checks and more!</p>
                            <p>Take a demo to see how powerful this tool really is!</p>`
        },
        {
            title: "Infinity",
            logo: InfinityLogo,
            description: 'lorem'
        },
        {
            title: "Ingage",
            logo: IngageLogo,
            description: 'lorem'
        },
        {
            title: "Incharge",
            logo: InchargeLogo,
            description: 'lorem'
        },
        {
            title: "Inforce",
            logo: InforceLogo,
            description: 'lorem'
        },
    ]

    const myRef = useRef();

    const handleScroll = event => {
        let scrollY = event.currentTarget.scrollTop;
        let elements = document.querySelectorAll(".bottom-gradient");
        if (scrollY === 0) {
            elements.forEach((el) => { el.style.opacity = 1; });
        } else if (scrollY > 0) {
            elements.forEach((el) => { el.style.opacity = 0; });
        }
        setScrollTop(event.currentTarget.scrollTop);
    };

    return (
        <section className="section products-section">
            <div className="container">
                <h4 className="section-title">Meet the <span>Products</span></h4>
                {
                    isDesktop ? (
                        <>
                            <div className='products-tab-container row'>
                                <ul className="nav nav-tabs col-12 col-md-2" id="myTab" role="tablist">
                                    {
                                        productsList.map((product, index) => {
                                            return (
                                                <li className="nav-item" role="presentation">
                                                    <button className={index === 0 ? "nav-link active" : "nav-link"} id={product.title + '-tab'} data-bs-toggle="tab" data-bs-target={"#" + product.title + '-tab-pane'} type="button" role="tab" aria-controls={product.title + '-tab-pane'} aria-selected="true">
                                                        <img src={product.logo} alt="" />
                                                        <img src={ArrowIcon} alt="" className='active-arrow-icon' />
                                                    </button>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                                <div className="tab-content col-12 col-md-10" id="myTabContent">
                                    {
                                        productsList.map((product, index) => {
                                            return (
                                                <div className={index === 0 ? "tab-pane fade show active" : "tab-pane fade show"} id={product.title + '-tab-pane'} role="tabpanel" aria-labelledby={product.title + '-tab'} tabindex={index}>
                                                    <h4>{product.title}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
                                                    <div className="products-screenshots-container" ref={myRef} onScroll={handleScroll}>
                                                        <div className='viewport-container'>
                                                            <div className="gradient bottom-gradient"></div>
                                                            <img src={ProductImage} alt="" width={700} />
                                                            <img src={ProductImage2} alt="" width={700} />
                                                        </div>
                                                    </div>
                                                </div>
                                            )

                                        })
                                    }
                                </div>
                            </div>
                        </>) : (
                        <Accordion defaultActiveKey="0" className="products-accordion">
                            {
                                productsList.map((product, index) => {
                                    return (
                                        <Card>

                                            <ContextAwareToggle eventKey={index}>
                                                <img src={product.logo} alt="" className='product-logo' />
                                            </ContextAwareToggle>

                                            <Accordion.Collapse eventKey={index}>
                                                <Card.Body>
                                                    <h5>{product.title}</h5>
                                                    <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
                                                    <a href="javascript:;"
                                                        onClick={(e) => { e.preventDefault(); handleShow(); }}
                                                    >
                                                        <img src={LinkIcon} alt="" />
                                                        View project screenshots
                                                    </a>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    )
                                })
                            }
                        </Accordion>
                    )
                }
                <div className="contact-us">
                    <p className='subtitle'>
                        To find out how Influx can help your cinema
                    </p>
                    <Button variant="primary" className='custom-btn' href='#contact-us-section'>
                        Contact Us
                    </Button>
                </div>
                <Modal show={show} onHide={handleClose} className={show ? "d-flex align-items-center products-modal" : " products-modal"}>
                    <IconButton className='close-btn' onClick={handleClose} >
                        <CloseIcon sx={{ color: 'white' }} />
                    </IconButton>
                    <Modal.Body className='p-0'>
                        <div className="products-carousel">
                            <Stories
                                stories={stories}
                                loop
                                keyboardNavigation
                                width={"100vh"}
                                height={"100vw"}
                                defaultInterval={4000}
                                onStoryEnd={(s, st) => { console.log("story ended", s, st) }}
                                onAllStoriesEnd={(s, st) => { console.log("all stories ended", s, st) }}
                                onStoryStart={(s, st) => console.log("story started", s, st)}
                                storyContainerStyles={{ borderRadius: 0, overflow: "hidden", }}
                            />
                        </div>
                    </Modal.Body>
                </Modal>
            </div>

        </section>
    )
}

export default ProductsSection