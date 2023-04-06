import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Slider from "react-slick";
import SlideImage from "../assets/images/marketing-slide-1.png";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



function SliderArrow(props) {
    const { className, style, onClick, direction } = props;
    return (
        <div
            className={className + " custom-arrow"}
            onClick={onClick}
        >
            {direction === "next" ? < ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
        </div>
    );
}

const ConnectingWithTeam = () => {
    const [isDesktop, setIsDesktop] = useState(true);
    const [activeSlide, setActiveSlide] = useState(1);
    const [totalSlides, setTotalSlides] = useState();

    const customSlider = React.createRef();
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: isDesktop,
        centerMode: isDesktop,
        nextArrow: <SliderArrow direction="next" />,
        prevArrow: <SliderArrow direction="prevasdf" />,
        afterChange: (current, next) => setActiveSlide(current + 1),
    };

    const marketingSlides = [
        {
            tabHeader: "Marketing",
            title: "Marketing’s Best Friend",
            list: `<li>
            Beautiful websites and apps from tech folks who actually get design!
        </li>
        <li>
            Make changes to your website, mobile apps and kiosks on-the-fly with Injin Manager, our cinema-first Content Management System.

        </li>
        <li>
            Rich features that let you be in control.

        </li>
        <li>
            Segment guests and find new ways to target offers at specific types of guests with Ingage.

        </li>
        <li>
            Extend your marketing brain-trust with Ingage’s managed service team.
        </li>`,
            image: SlideImage
        },
        {
            tabHeader: "IT",
            title: "IT’s Best Friend",
            list: `<li>
            Beautiful websites and apps from tech folks who actually get design!
        </li>
        <li>
            Make changes to your website, mobile apps and kiosks on-the-fly with Injin Manager, our cinema-first Content Management System.

        </li>
        <li>
            Rich features that let you be in control.

        </li>
        <li>
            Segment guests and find new ways to target offers at specific types of guests with Ingage.

        </li>
        <li>
            Extend your marketing brain-trust with Ingage’s managed service team.
        </li>`,
            image: SlideImage
        },
        {
            tabHeader: "Operation",
            title: "Operation’s Best Friend",
            list: `<li>
            Beautiful websites and apps from tech folks who actually get design!
        </li>
        <li>
            Make changes to your website, mobile apps and kiosks on-the-fly with Injin Manager, our cinema-first Content Management System.

        </li>
        <li>
            Rich features that let you be in control.

        </li>
        <li>
            Segment guests and find new ways to target offers at specific types of guests with Ingage.

        </li>
        <li>
            Extend your marketing brain-trust with Ingage’s managed service team.
        </li>`,
            image: SlideImage
        },
        {
            tabHeader: "Finance",
            title: "Finance’s Best Friend",
            list: `<li>
            Beautiful websites and apps from tech folks who actually get design!
        </li>
        <li>
            Make changes to your website, mobile apps and kiosks on-the-fly with Injin Manager, our cinema-first Content Management System.

        </li>
        <li>
            Rich features that let you be in control.

        </li>
        <li>
            Segment guests and find new ways to target offers at specific types of guests with Ingage.

        </li>
        <li>
            Extend your marketing brain-trust with Ingage’s managed service team.
        </li>`,
            image: SlideImage
        },
        {
            tabHeader: "Entertainment",
            title: "Entertainment’s Best Friend",
            list: `<li>
            Beautiful websites and apps from tech folks who actually get design!
        </li>
        <li>
            Make changes to your website, mobile apps and kiosks on-the-fly with Injin Manager, our cinema-first Content Management System.

        </li>
        <li>
            Rich features that let you be in control.

        </li>
        <li>
            Segment guests and find new ways to target offers at specific types of guests with Ingage.

        </li>
        <li>
            Extend your marketing brain-trust with Ingage’s managed service team.
        </li>`,
            image: SlideImage
        }
    ];

    useEffect(() => {
        if (window.innerWidth > 768) {

        } else {
            setIsDesktop(false)
        }
    }, [])

    useEffect(() => {
        console.log(customSlider.current, "fad");
        setTotalSlides(customSlider.current.props.children.length);
        console.log(customSlider.current.props.children.length);
    }, [customSlider])

    return (
        <section className="section connecting-team-section">
            <div className="container">
                <h4 className="section-title">Connecting with <span>Your Team</span></h4>
                {/* <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3 connecting-team-tabs"
                    variant='pill'
                >
                    <Tab eventKey="marketing" title="Marketing">
                        <Slider {...settings} ref={customSlider}>
                            {marketingSlides && marketingSlides.map((slide, index) => {
                                return (
                                    <div className={"slide slide-" + index}>
                                        <div className="slide-border-design">
                                            <div className="dark-bg"></div>
                                            <div className="light-bg"></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-md-8">
                                                <h5>{slide.title}</h5>
                                                <ul dangerouslySetInnerHTML={{ __html: slide.list }}></ul>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <picture>
                                                    <img src={slide.image} alt="" />
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                        {
                            !isDesktop && (
                                <div className="sliders-controls">
                                    <button className="slider-btn slider-prev-btn" onClick={(e) => { e.preventDefault(); customSlider.current.slickPrev() }}>
                                        <ArrowBackIosNewIcon />
                                    </button>
                                    <div className='custom-pagination'>
                                        {activeSlide}/{totalSlides}
                                    </div>
                                    <button className="slider-btn slider-next-btn" onClick={(e) => { e.preventDefault(); customSlider.current.slickNext() }}>
                                        <ArrowForwardIosIcon />
                                    </button>
                                </div>
                            )
                        }
                    </Tab>
                    <Tab eventKey="it" title="IT">
                        <p>test</p>
                    </Tab>
                    <Tab eventKey="operations" title="Operations">
                        <p>test</p>
                    </Tab>
                    <Tab eventKey="finance" title="Finance">
                        <p>test</p>
                    </Tab>
                    <Tab eventKey="entertainment" title="Entertainment">
                        <p>test</p>
                    </Tab>
                </Tabs> */}
                <div>
                    <div className="custom-slider-dots">
                        {
                            marketingSlides.map((item, index) => {
                                return (
                                    <button
                                        className={activeSlide === index + 1 ? "btn btn-primary slider-dot-btn active" : "btn btn-primary slider-dot-btn"}
                                        onClick={(e) => { e.preventDefault(); customSlider.current.slickGoTo(index); setActiveSlide(index + 1) }}>
                                        {item.tabHeader}
                                    </button>
                                )
                            })
                        }
                    </div>
                    <Slider {...settings} ref={customSlider}>
                        {marketingSlides && marketingSlides.map((slide, index) => {
                            return (
                                <div className={"slide slide-" + index}>
                                    <div className="slide-border-design">
                                        <div className="dark-bg"></div>
                                        <div className="light-bg"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-8">
                                            <h5>{slide.title}</h5>
                                            <ul dangerouslySetInnerHTML={{ __html: slide.list }}></ul>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <picture>
                                                <img src={slide.image} alt="" />
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                    {
                        !isDesktop && (
                            <div className="sliders-controls">
                                <button className="slider-btn slider-prev-btn" onClick={(e) => { e.preventDefault(); customSlider.current.slickPrev() }}>
                                    <ArrowBackIosNewIcon />
                                </button>
                                <div className='custom-pagination'>
                                    {activeSlide}/{totalSlides}
                                </div>
                                <button className="slider-btn slider-next-btn" onClick={(e) => { e.preventDefault(); customSlider.current.slickNext() }}>
                                    <ArrowForwardIosIcon />
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default ConnectingWithTeam