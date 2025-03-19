import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { StaticImage } from "gatsby-plugin-image"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import houseWideOne from "../images/new-housebinyaminmellish.jpg"
import Neighborhood from "../images/birdsong_map.png"
//credit - https://www.newyorkupstate.com/western-ny/2021/04/visit-a-fairy-village-on-a-magical-trail-in-upstate-new-york.html
import truckTwo from "../images/ST_truck_2.jpeg"
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@mui/icons-material/Email';

import CardGroup from "../components/cardGroup"
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Recaptcha from "../components/recaptcha"
import "./main.css"

const withStyles = makeStyles(() => ({
    mainRoot: {
        display: "flex",
        flexDirection: "column",
    },
    landingWrapper: {
        display: "flex",
        // minHeight: "100vh",
        minHeight: "100vh",
        flexDirection: "column",
        margin: "auto"

    },
    servicesWrapper: {
        display: "flex",
        flexDirection: "column",
        background: "#008a9c"
    },
    aboutWrapper: {
        display: "flex",
        margin: "auto",
        margin: "20px",
        color: "black",
        flexDirection: "column",
        justifyContent: "center",
        "@media(max-width: 600px)": {
            flexDirection: "column"
        }
    },
    carrierWrapper: {
        display: "flex",
        color: "black",
        flexDirection: "column",
        justifyContent: "center",
        "@media(max-width: 600px)": {
            flexDirection: "column"
        }
    },
    servicesTitleHeader: {
        textAlign: "center",
        fontSize: "1.5rem",
        marginBottom: "20px"
    },
    aboutTextWrapper: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "960px",
        margin: "20px",
        "& p": {
            opacity: "1.0"
        }
    },
    aboutText: {
        color: "black"
    },
    aboutImage: {
        width: "50%",
        maxHeight: "500px",
        maxWidth: "500px",
        "@media(max-width: 600px)": {
            width: "100%"
        }
    },
    servicesText: {
        color: "black"
    },
    projectImage: {
        width: "25%",
        margin: "25px",
        maxHeight: "350px"
    },
    imageWrapper: {
        display: "flex",
        justifyContent: "center",
        background: "white"
    },
    someOfWorkHeader: {
        textAlign: "center",
        fontSize: "2rem",
        color: "black",
        width: "100%",
        margin: "auto",
        "@media(max-width: 600px)": {
            // padding: "50px 25px",
        }
    },
    someOfWorkHeaderProducts: {
        textAlign: "center",
        fontSize: "2rem",
        color: "#5e5d60",
        backgroundColor: "transparent",
        padding: "10px",
        width: "100%",
        margin: "auto",
        fontWeight: "bold",
        "@media(max-width: 600px)": {
            // padding: "50px 25px",
        }
    },
    productCard: {
        margin: "15px",
        height: "455px",
        "& img": {
            maxHeight: "345px",
            width: "100%",
            aspectRatio: "1/1",
            objectFit: "cover"
        }
    },
    landingMessageWrapper: {
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        opacity: "0.85",
        marginLeft: "0px",
        marginRight: "0px",
        height: "150px",
        "@media(max-width:650px)": {
            marginTop: "auto"
        }
    },
    landingPageHeader: {
        color: "black",
        // background: "#3587de",
        marginLeft: "0px",
        marginRight: "0px",
        fontSize: "3.0em",
        fontWeight: "500",
        textAlign: "center",
        margin: "auto"
    },
    landingPageSubHeader: {
        color: "black",
        // background: "#3587de",
        marginLeft: "0px",
        marginRight: "0px",
        fontSize: "2em",
        fontWeight: "500",
        fontFamily: "'Montserrat', sans-serif !important",
        textAlign: "center",
        margin: "auto",
        "@media(max-width: 600px)": {
            display: "none"
        }
    },
    landingPageSubHeaderMobile: {
        display: "none",
        "@media(max-width: 600px)": {
            display: "block",
            color: "black",
            // background: "#3587de",
            marginLeft: "0px",
            marginRight: "0px",
            fontSize: "2em",
            fontWeight: "100",
            fontFamily: "'Montserrat', sans-serif !important",
            textAlign: "center",
            margin: "auto"
        }
    },
    serviceDivider: {
        width: "15%",
        margin: "auto",
        marginTop: "1.5em",
        marginBottom: "1.5em",
        background: "white"
    },
    serviceWrapper: {
        paddingTop: "2.5em"
    },
    scrollToSectionOne: {
        height: "80px",
        background: "#ffffff"
    },
    scrollToServices: {
        paddingBottom: "80px",
        backgroundColor: "#ffffff"
    },
    scrollToContact: {
        paddingBottom: "80px",
        backgroundColor: "#ffffff"
    },
    servicesListWrapper: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "1200px",
        margin: "auto"
    },
    servicesCard: {
        width: "calc(50% - 2.5em)",
        height: "400px",
        boxShadow: "none",
        backgroundColor: "#1563b2",
        "@media(max-width: 736px)": {
            width: "100%",
            margin: "1.25em 0 0 0"
        }
    },
    servicesCardLast: {
        display: "none",
        "@media(max-width: 600px)": {
            display: "flex",
            height: "100px",
            color: "transparent",
            backgroundColor: "transparent",
            boxShadow: "none"
        }
    },
    servicesCardContent: {
        position: "relative",
        textAlign: "center",
        color: "black",
        padding: 0,
        paddingBottom: "0 !important",
        margin: "10px",
        height: "400px"
    },
    servicesCardImage: {
        height: "100%",
        width: "100%",
    },
    servicesCardText: {
        position: "absolute",
        top: "80%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "1.5rem",
        fontWeight: "bold",
        width: "100%",
        backgroundColor: "#add8e685"
    },
    phoneEmailWrapper: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center"
    },
    contactPhone: {
        color: "black",
        textDecoration: "none",
        fontFamily: "'Montserrat', sans-serif !important",
    },
    contactButton: {
        margin: "20px",
        backgroundColor: "#333333",
        color: "white",
        borderColor: "#333333",
        borderRadius: "35px",
        padding: "15px",
        paddingLeft: "25px",
        paddingRight: "25px",
        textTransform: "none",
        fontSize: "1.0rem",
        // width: "190px",
        fontWeight: "bold",
        '&:hover': {
            backgroundColor: "#001841",
            boxShadow: 'none',
            cursor: "pointer"
        },
    },
    emailA: {
        marginBottom: "20px",
        textDecoration: "none"
    },
    reviewsWrapper: {
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        textAlign: "center",
        alignItems: "center",
    },
    reviewClickText: {
        textTransform: "none"
    },
    reviewStarWrapper: {
        display: "flex",
    },
    reviewLink: {
        textDecoration: "none"
    },
    reviewCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#white",
        width: "250px",
        minHeight: "100px",
        margin: "10px",
        padding: "10px"
    },
    reviewCardText: {
        fontSize: "0.75rem"
    },
    reviewCardsWrapper: {
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "15%",
        "@media(max-width: 600px)": {
            justifyContent: "center",
            marginLeft: "unset"
        }
    },
    phoneIcon: {
        marginRight: "10px"
    },
    emailIcon: {
        marginRight: "10px"
    },
    bbbWrapper: {
        display: "flex",
        margin: "auto",
        marginTop: "0px",
        backgroundColor: "white",
        borderRadius: "14px",
        "@media(max-width:600px)": {
            flexDirection: "column",
            justifyContent: "center",
            height: "110px",
            marginBottom: "20px",
        }
    },
    bbbLink: {
        display: "flex",
        textDecoration: "none",
        padding: "10px",
    },
    bbbImage: {
        margin: "auto",
        padding: "10px",
        minWidth: "200px",
        maxWidth: "300px",
        maxHeight: "150px",
        borderRadius: "15px"
    },
    bbbYearsCircle: {
        width: "65px",
        height: "65px",
        backgroundColor: "#1f5a76",
        margin: "auto",
        marginRight: "10px",
        fontFamily: "'Montserrat', sans-serif !important",
        borderRadius: "14px"
    },
    bbbCirleText: {
        color: "white",
        opacity: "1 !important",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: "2.0rem"
    },
    phBizCardWrapper: {
        display: "flex",
        justifyContent: "center"
    },
    phBizCardImage: {
        maxWidth: "300px",
        maxHeight: "200px"
    },
    fiveStar: {
        color: "#f5b81c"
    },
    hourText: {
        display: "flex",
        color: "black",
        margin: "10px auto",
        justifyContent: "center",
        fontSize: "1.25rem"
    },
    hourlyHeaderText: {
        display: "flex",
        justifyContent: "center",
        color: "black",
        fontSize: "1.25rem"
    },
    menuHeaderTextMenu: {
        display: "flex",
        justifyContent: "center",
        color: "black",
        fontSize: "1.25rem"
    },
    menuBlockWrapper: {
        display: "flex"
    },
    hourlyHeaderText: {
        display: "flex",
        justifyContent: "center",
        color: "black",
        fontSize: "1.75rem"
    },
    aboutTitleHeader: {
        textAlign: "center",
        fontSize: "2rem",
        color: "black",
        // textTransform: "uppercase",
        marginBottom: 0
    },
    addressText: {
        textAlign: "center",
        margin: "40px 0"
    },
    quoteButtonLink: {
        backgroundColor: "#5e5d60",
        color: "white",
        textTransform: "none",
        width: "300px",
        borderRadius: "35px",
        '&:hover': {
            backgroundColor: "#d51d35",
            boxShadow: 'none',
            cursor: "pointer"
        },
    },
    getDirectionsLinkDark: {
        backgroundColor: "#333333",
        color: "white",
        textTransform: "none",
        width: "300px",
        borderRadius: "35px"
    },
    scrollToLocation: {
        height: "100px",
        flexDirection: "column"
    },
    connectHeader: {
        fontSize: "2rem",
        textAlign: "center",
        color: "#5e5d60",
        padding: "10px",
        // textTransform: "uppercase"
    },
    socialLinkWrapper: {
        display: "flex",
        justifyContent: "center",
        margin: "20px 0 40px 0"
    },
    aboutSectionWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "& iframe": {
            "@media(max-width:600px)": {
                width: "90%",
                margin: "auto"
            }
        },

    },
    reviewHeader: {
        fontSize: "1.2rem",
        textTransform: "none",
        color: "white",
        margin: "auto 10px",
    },
    socialFooterMargin: {
        height: "40px",
        width: "40px",
        margin: "10px auto"
    },
    socialFooter: {
        height: "40px",
        width: "40px",
        margin: "0 10px"
    },
    socialFacebookSpacing: {
        height: "40px",
        width: "40px",
        margin: "0 10px",
        marginBottom: "2px"
    },
    socialLink: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    reviewButton: {
        backgroundColor: "#333333",
        borderRadius: "25px",
        padding: "20px",
        marginBottom: "20px",
        border: "none",
        height: "50px"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        margin: "20px 0"
    },
    containerContactUs: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "100px"

    },
    containerSectionTwoScroll: {
        display: "flex",
        flexDirection: "column",
        // backgroundColor: "#6198eb"
    },
    containerMarginBottomSmall: {
        display: "flex",
        flexDirection: "column",
        margin: "20px 0",
        marginBottom: "80px",

    },
    landingImage: {
        width: "100%",
        objectFit: "cover",
        aspectRatio: "1/1",
        height: "100vh",
        marginTop: "112px",
        marginBottom: "0px"
    },
    mainBanner: {
        display: "flex",
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${houseWideOne})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        justifyContent: "flex-end",
        height: "100vh",
        "@media(max-width:600px)": {
            justifyContent: "center",
        }
    },
    mainBannerText: {
        color: "white",
        fontSize: "3.5rem",
        textAlign: "center",
        fontWeight: "bold",
        fontFamily: "'Montserrat', sans-serif !important",
        zIndex: 1,
        height: "fit-content",
        opacity: "0.75",
        backgroundColor: "black",
        // borderRadius: "35px",
        padding: "20px",
        "@media(max-width:600px)": {
            fontSize: "2rem",
            textAlign: "center",
            padding: "15px",
        }
    },
    mainBannerTextWrapper: {
        display: "flex",
        margin: "auto",
        width: "100%",
        flexDirection: "column",
        "& a": {
            textDecoration: "none"
        },
        "@media(max-width:600px)": {
            margin: "48% auto"
        }
    },
    freeEstimateScrollButton: {
        backgroundColor: "white",
        color: "#5e5d60",
        width: "200px",
        margin: "20px auto",
        borderRadius: "35px",
        border: "1px solid #5e5d60",
        padding: "5px",
        textDecoration: "none",
        textAlign: "center",
        cursor: "pointer",
    },
    sectionTitleText: {
        fontSize: "2rem",
        textAlign: "center",
        margin: "40px 0",
        fontWeight: "bold"
    },
    teamImage: {
        // height: "48em !important",
        maxWidth: "80%",
        padding: "10px",
        borderRadius: "10px",
        margin: "20px",
        "@media(max-width:600px)": {
            width: "90%",
            margin: "15px auto",
        }
    },
    employeeNameText: {
        textAlign: "center",
        margin: "10px 0",
        fontSize: "1.25rem"
    },
    aboutUsText: {
        lineHeight: 2,
        marginBottom: 0,
        color: "white",
        backgroundColor: "#5e5d60",
        borderRadius: "16px",
        margin: "15px"
    }

}))

const Main = () => {
    const classes = withStyles();
    console.log(process.env)

    return (
        <div className={classes.mainRoot}>
            <div className={classes.mainBanner}>
                <div className={classes.mainBannerTextWrapper}>
                    <Typography className={classes.mainBannerText}>Birdsong Homes, LLC <br /></Typography>
                    {/* <i>every time</i> */}
                    {/* <a href="tel:585-" class="bannerCallButton">(585)</a> */}
                    {/* <AnchorLink to="/#sectionThree" title="Free Estimates">
                        <Typography className={classes.freeEstimateScrollButton}>Free Estimates</Typography>
                    </AnchorLink> */}
                </div>
            </div>
            <span className={classes.scrollToSectionOne} id="sectionOne"></span>
            <br />
            <section class="aboutSectionWrapper">
                {/* <Typography className={classes.someOfWorkHeaderProducts}>About Birdsong Homes</Typography> */}
                <div class="aboutWrapper">

                    <div class="aboutUsTextWrapper">
                        {/* <div class="aboutTextDetails"> */}
                            {/* <ul>
                                <li>Packages from the $xxx,000</li>
                                <li>Honeoye Falls-Lima Central School District</li>
                                <li>1+ Acre lots</li>
                                <li>City sewer</li>
                                <li>Mature trees</li>
                                <li>Next to Birdsong Trail</li>
                            </ul> */}
                        {/* </div> */}
                        <div class="moreInfoWrapper">
                            <h4>For more information contact:</h4>
                            <div>
                                {/* <img style={{ borderRadius: "50px" }} src="https://placehold.co/100x100" /> */}
                                {/* <p style={{ marginBottom: "10px" }}>Name</p> */}
                                {/* <a href="tel: 585-xxx-xxxx" style={{color: "white", textDecoration: "none"}}>(585) xxx-xxxx</a> */}
                                <a style={{ color: "white", textDecoration: "none" }} href="mailto:info@clintwoodapartments.com">info@clintwoodapartments.com</a>
                            </div>
                        </div>
                    </div>
                    {/* <img style={{ width: "48%", objectFit: "cover", aspectRatio: "1", borderRadius: "16px", margin: "15px" }} src={redHouseTwo} /> */}
                    <StaticImage className={classes.teamImage} src="../images/birdsong_sign_1edited.png" />
                    <StaticImage className={classes.teamImage} src="../images/birdsong_sign_2_edited.png" />
                    <StaticImage className={classes.teamImage} src="../images/birdsong_sign_4_edited.png" />

                    {/* <StaticImage className={classes.teamImage} height={"48em"} src="../images/zac-gudakov-red-house-2.jpg" /> */}

                </div>

            </section>
            <div className={classes.containerSectionTwoScroll}>
                <span className={classes.scrollToSectionOne} id="sectionTwo"></span>
            </div>
            <br />
            <section class="productSectionWrapper">
                <div>
                    <Typography className={classes.someOfWorkHeaderProducts}>Maps</Typography>
                    {/* <CardGroup/> */}
                    <div class="mapWrapper">
                        <StaticImage class="mapImage" src="../images/zoomed_out_sat.png" />
                        <StaticImage class="mapImage" src="../images/map_zoomed_in.png" />
                        <StaticImage class="mapImage" src="../images/map_lot_lines.png" />
                    </div>
                </div>



            </section>

            {/* <span className={classes.scrollToLocation} id="sectionThree"></span>

            <section style={{ minHeight: "300px" }} className={classes.container}>
                <div className={classes.aboutWrapper}>
                    <div className={classes.aboutSectionWrapper}>
                        <Typography className={classes.aboutTitleHeader}>The Neighborhood</Typography>
                        <div style={{ display: "flex" }}>
                            <img style={{ width: "50%", margin: "15px", borderRadius: "16px", maxHeight: "700px" }} src={Neighborhood} />

                            <div class="aboutUsTextWrapperTwo">
                                <h2 class="aboutTextHeader">Park Description, Birdsong Trail, etc.
                                </h2>
                                <div class="aboutTextDetailsTwo">
                                    <ul>
                                        <li>descriptions</li>
                                        <li>descriptions</li>
                                        <li>descriptions</li>
                                        <li>descriptions</li>
                                        <li>descriptions</li>

                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </section> */}

            <span className={classes.scrollToContact} id="testimonials"></span>
            <br />

            {/* <section class="py-5 section-bubble4">
                <div className={classes.containerContactUs}>
                    <div>
                        <Typography className={classes.connectHeader}>Photo Gallery/Amentities</Typography>
                        <br />
                        <div class="testimonialCardWrapper">
                            <div class="testimonialCard">
                                <p>Amentity info...</p>
                            </div>
                            <div class="testimonialCard">
                                <p>Amentity info...</p>

                            </div>
                            <div class="testimonialCard">
                                <p>Amentity info...</p>

                            </div>
                            <div class="testimonialCard">
                                <p>Amentity info...</p>

                            </div>
                        </div>

                    </div>
                </div>
            </section> */}

            <span className={classes.scrollToContact} id="contactForm"></span>
            <br />
            <section>
                <Typography className={classes.connectHeader}>Schedule a Tour/Check for Lot Availability & Pricing</Typography>
                <div class="areasServedWrapper">
                    <div class="formRoot">
                        <form
                            name="Birdsong Homes Contact Form"
                            method="POST"
                            data-netlify="true"
                            action="/thank-you"
                        >
                            <input type="hidden" name="form-name" value="Birdsong Homes Contact Form" />
                            <div class="formEmail">
                                <label style={{ marginRight: "10px" }}>Name</label>
                                <input type="text" name="name" />
                            </div>
                            <div class="formEmail">
                                <label style={{ marginRight: "10px" }}>Email</label>
                                <input type="email" name="email" />
                            </div>
                            <div class="formEmail">
                                <label style={{ marginRight: "10px" }}>Phone</label>
                                <input type="tel" name="phone" />
                            </div>
                            <div class="formTextArea">
                                <label>Thoughts or questions?</label>
                                <textarea name="message" />
                            </div>
                            <div style={{ margin: "10px" }}>
                                <GoogleReCaptchaProvider reCaptchaKey="6LengNYqAAAAAKZhx9NMnz8yfaVzQlYv01bbjBBp">
                                    <Recaptcha />
                                </GoogleReCaptchaProvider>
                            </div>
                            <div
                                class="submitButtonWrapper"
                            >
                                <button
                                    class="submitButton"
                                    type="submit"
                                >Send</button>
                            </div>
                        </form>
                    </div>
                </div>

            </section>


            <span className={classes.scrollToContact} id="contactUs"></span>
            <br />
            <section class="py-5 section-bubble4">
                <div className={classes.containerContactUs}>
                    <div>
                        <Typography className={classes.connectHeader}>Contact Us</Typography>
                        <br />

                        <div className={classes.phoneEmailWrapper}>
                            {/* <a href="tel:585-" class="contactUsButtonStyled">
                                <Button style={{ textTransform: "none", color: "#5e5d60" }}>
                                    <PhoneIcon className={classes.phoneIcon} />
                                    (585)
                                </Button>
                            </a> */}
                            <div className={classes.contactWrapper}>
                                {/* <Typography>General Questions</Typography> */}
                                <a href="mailto:" class="contactUsButtonStyled">
                                    <Button style={{ textTransform: "none", color: "#5e5d60" }}>
                                        <EmailIcon className={classes.phoneIcon} />
                                        Send us an email
                                    </Button>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Main
