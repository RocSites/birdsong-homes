import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { StaticImage } from "gatsby-plugin-image"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import houseWideOne from "../images/ST_house_one.jpeg"
import truckTwo from "../images/ST_truck_2.jpeg"
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@mui/icons-material/Email';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import GoogleIcon from "../images/google_icon.png"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
        color: "#3b3a73",
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
    productTitleText: {
        textAlign: "center",
        margin: "15px"
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
        backgroundColor: "#3b3a73",
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
        color: "#3b3a73",
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
        opacity: "0.85",
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
        color: "#3b3a73",
        width: "200px",
        margin: "20px auto",
        borderRadius: "35px",
        border: "1px solid #3b3a73",
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
        maxWidth: "600px",
        padding: "10px",
        borderRadius: "10px",
        height: "100%",
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
        backgroundColor: "#3b3a73",
        padding: "20px",
        borderRadius: "16px",
        margin: "15px"
    }

}))

const Main = () => {
    const classes = withStyles();

    const [isFlippedOne, setFlippedOne] = useState(false);
    const [isFlippedTwo, setFlippedTwo] = useState(false);
    const [isFlippedThree, setFlippedThree] = useState(false);
    const [isFlippedFour, setFlippedFour] = useState(false);
    const [isFlippedFive, setFlippedFive] = useState(false);

    const handleFlip = (serviceName, enabled) => (e) => {
        console.log("hover")
        // if (serviceName === "card1") {
        //     setFlippedOne(enabled)
        // } else if (serviceName === "card2") {
        //     setFlippedTwo(enabled)
        // } else if (serviceName === "card3") {
        //     setFlippedThree(enabled)
        // } else if (serviceName === "card4") {
        //     setFlippedFour(enabled)
        // } else if (serviceName === "card5") {
        //     setFlippedFive(enabled)
        // } else if (serviceName === "card7") {
        //     setFlippedFive(enabled)
        // }
    }


    return (
        <div className={classes.mainRoot}>
            <div className={classes.mainBanner}>
                <div className={classes.mainBannerTextWrapper}>
                    <Typography className={classes.mainBannerText}>Small & Tall Power Washing <br /></Typography>
                    <Typography style={{ color: "white", textAlign: "center" }}>Serving Rochester since 2021</Typography>
                    {/* <i>every time</i> */}
                    <a href="tel:585-568-7149" class="bannerCallButton">(585) 568-7149</a>
                    <AnchorLink to="/#sectionThree" title="Free Estimates">
                        <Typography className={classes.freeEstimateScrollButton}>Free Estimates</Typography>
                    </AnchorLink>
                </div>
            </div>
            <span className={classes.scrollToSectionOne} id="sectionOne"></span>
            <br/>
            <section class="aboutSectionWrapper">
                <Typography className={classes.someOfWorkHeaderProducts}>About Us</Typography>
                <div class="aboutWrapper">
                    <div class="aboutUsTextWrapper">
                        <Typography className={classes.aboutUsText}>Small &amp; Tall Power Washing LLC is your trusted and insured house washing company; serving Monroe
                            County, Wayne County, and the surrounding areas. Our three owner/operators are local first responders
                            who risk their lives every day in service to their communities.</Typography>
                        <Typography className={classes.aboutUsText}>At Small &amp; Tall Power Washing, we pride
                            ourselves on working our hardest, putting the community first, and always prioritizing our valued
                            customers. Your satisfaction and support are the greatest compliments we receive and it is what drives
                            us to continue to beautify the areas we serve.</Typography>

                    </div>
                    <StaticImage className={classes.teamImage} src="../images/ST_team.jpeg" />
                </div>

                <Typography className={classes.sectionTitleText}>Results/Recent Projects</Typography>

                <div class="teamImageWrapper">
                    <div class="teamNameImageWrapper">
                        <StaticImage className={classes.teamImage} src="../images/ST_deck_1.jpeg" />

                    </div>
                    <div class="teamNameImageWrapper">
                        <StaticImage className={classes.teamImage} src="../images/ST-fence_one.jpeg" />

                    </div>
                    <div class="teamNameImageWrapper">
                        <StaticImage className={classes.teamImage} src="../images/ST_walkway_one.jpeg" />
                    </div>
                    <div class="teamNameImageWrapper">
                        <StaticImage className={classes.teamImage} src="../images/ST_siding_four.jpeg" />

                    </div>
                    <div class="teamNameImageWrapper">
                        <StaticImage className={classes.teamImage} src="../images/ST_deck_two.jpeg" />

                    </div>
                    <div class="teamNameImageWrapper">
                        <StaticImage className={classes.teamImage} src="../images/ST_patio_two.jpeg" />
                    </div>

                    <div class="teamNameImageWrapper">
                        <StaticImage className={classes.teamImage} src="../images/ST_siding_five.jpeg" />

                    </div>
                    <div class="teamNameImageWrapper">
                        <StaticImage className={classes.teamImage} src="../images/ST_patio_1.jpeg" />

                    </div>
                    <div class="teamNameImageWrapper">
                        <StaticImage className={classes.teamImage} src="../images/ST_siding_one.jpeg" />
                    </div>
                </div>

                <div className={classes.containerSectionTwoScroll}>
                    <div className={classes.container}>
                        <span className={classes.scrollToSectionOne} id="sectionOne"></span>
                    </div>
                </div>
            </section>
            <div className={classes.containerSectionTwoScroll}>
                <span className={classes.scrollToSectionOne} id="sectionTwo"></span>
            </div>
            <br />
            <section class="productSectionWrapper">
                <div>
                    <Typography className={classes.someOfWorkHeaderProducts}>Services</Typography>
                    <div class="productCardWrapper">
                        <div
                            class="flip-card"
                            id="card1"
                        >
                            <div className="flip-card-inner">
                                <div className="card-content">
                                    <StaticImage src="../images/ST_pool.jpeg" />
                                    <Typography className={classes.productTitleText} gutterBottom variant="h5" component="div">
                                        Residential House Wash
                                    </Typography>
                                </div>
                                <div>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            <p class="moreText">More</p>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            Your home’s siding is a perfect place for mold, mildew, fungi, dirt, and other
                                            organic material to build up and become an eyesore. We use the industry’s best equipment and
                                            products to safely remove all organic material and bring your home back to its original shine. Our
                                            equipment uses a low pressure/ high volume pump system to carefully wash your house in safe yet
                                            effective soaps and chemicals that kill and remove all organic material. Your house is rinsed clean and
                                            will never look better!
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flip-card"
                            id="card2"
                        >
                            <div className="flip-card-inner">
                                <div className="card-content">
                                    <StaticImage src="../images/ST_roof_one.jpeg" />
                                    <Typography className={classes.productTitleText} gutterBottom variant="h5" component="div">
                                        Residential Roof Cleaning
                                    </Typography>
                                </div>
                                <div>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2-content"
                                            id="panel2-header"
                                        >
                                            <p class="moreText">More</p>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            Over time your roof will collect organic contaminants such as moss, mold,
                                            fungi, and lichen. Lichen is, most notably, an indicator of significant damage to your roof shingles. These
                                            organic contaminants will breakdown the limestone in your shingles, causing granule loss and advanced
                                            aging of your roof shingles. Moss is yet another indicator that your roof is suffering damage. Our roof
                                            cleaning service safely applies the necessary chemicals to kill and remove these organic materials. This
                                            process will not only preserve the integrity of your roof but it will also restore the original appearance of
                                            your roof.
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flip-card"
                            id="card3"
                        >
                            <div className="flip-card-inner">
                                <div className="card-content">
                                    <StaticImage src="../images/ST_gutter_brightenint.jpeg" />
                                    <Typography className={classes.productTitleText} gutterBottom variant="h5" component="div">
                                        Gutter Brightening
                                    </Typography>
                                </div>
                                <div>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel3-content"
                                            id="panel3-header"
                                        >
                                            <p class="moreText">More</p>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            The outer surface of your gutter system can, over time, accumulate striped stains as
                                            water overflows the gutters during heavy rain and/or during the spring thaw. These stains may become
                                            noticeably prominent after a house wash. We offer our gutter brightening service to address this very
                                            issue. We use an additional method to remove these stains and bring a new shine to your gutters.
                                            Restoring the shine to your gutter system will be the final touch needed to elevate your home’s curb
                                            appeal to its utmost potential.
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flip-card"
                            id="card4"
                        >
                            <div className="flip-card-inner">
                                <div className="card-content">
                                    <StaticImage src="../images/ST_concrete.jpeg" />
                                    <Typography className={classes.productTitleText} gutterBottom variant="h5" component="div">
                                        Concrete Cleaning
                                    </Typography>
                                </div>
                                <div>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel4-content"
                                            id="panel4-header"
                                        >
                                            <p class="moreText">More</p>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            Your concrete driveway/patio/walkway is extremely porous and permeable. This
                                            gives dirt, mold, and fungi the opportunity to embed themselves in your concrete surfaces. Over time
                                            this can drastically reduce your concrete’s visual appeal as well as its overall quality and longevity. We
                                            use the industry’s top formulated chemicals to penetrate the concrete and ensure the organic material
                                            is eliminated. After a short wait, a high pressure surface cleaner is used to safely rinse away the
                                            chemical and dead organic material; leaving behind a clean and bright concrete surface.
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flip-card"
                            id="card5"
                        >
                            <div className="flip-card-inner">
                                <div className="card-content">
                                    <StaticImage src="../images/ST_deck_1.jpeg" />
                                    <Typography className={classes.productTitleText} gutterBottom variant="h5" component="div">
                                        Decks and Fencing
                                    </Typography>
                                </div>
                                <div>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel5-content"
                                            id="panel5-header"
                                        >
                                            <p class="moreText">More</p>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            Mold, mildew, moss, and fungi seem to find their way onto every conceivable
                                            surface. Our trucks come equipped with the industry’s top performing equipment as well as products
                                            specifically designed to eliminate organic material then rejuvenate the condition of your wood framed
                                            deck and fencing. We have numerous post-cleaning treatments that condition and revitalize the
                                            appearance of your wood framed structures; giving your outdoor space a youthful appearance as well as
                                            extending the life of your deck and fencing. Have vinyl fencing or a deck laid with Trex? Not a problem
                                            whatsoever. Our highest quality equipment and our years of experience will bring out the glowing white
                                            shine of your vinyl fencing and bring your Trex decking back to life!
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flip-card"
                            id="card6"
                        >
                            <div className="flip-card-inner">
                                <div className="card-content">
                                    <StaticImage src="../images/ST_cams_photo.jpeg" />
                                    <Typography className={classes.productTitleText} gutterBottom variant="h5" component="div">
                                        Commercial
                                    </Typography>
                                </div>
                                <div>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel6-content"
                                            id="panel6-header"
                                        >
                                            <p class="moreText">More</p>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            Revitalize your property's appearance with our commercial power washing services. Our experienced team utilizes state-of-the-art equipment to remove dirt, grime, and stains from a variety of surfaces, including concrete, brick, siding, and more. Whether it's revitalizing a storefront, parking lot, or industrial facility, we tailor our services to meet your specific needs, restoring surfaces to their pristine condition. Enhance curb appeal, maintain cleanliness, and leave a lasting impression with our reliable and efficient commercial power washing solutions. Trust us to transform your space, leaving it looking fresh and inviting for customers and clients alike.
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </section>

            <span className={classes.scrollToLocation} id="sectionThree"></span>

            <section style={{ minHeight: "300px" }} className={classes.container}>
                <div className={classes.aboutWrapper}>
                    <div className={classes.aboutSectionWrapper}>
                        <Typography className={classes.aboutTitleHeader}>Get a Free Estimate</Typography>
                        <Typography className={classes.addressText}>Please use the form below for a free estimate</Typography>
                        <div className="markateFormWrapper">
                            <iframe id="markate-widget-contact-iframe" src="https://www.markate.com/public/widget/contact?id=1e9a9a7c1d65ccda6ff03ac63dddd7da:38520:9f82ff06" width="100%" height="1800" scrolling="no" frameborder="0" allowTransparency="true" style={{ border: "none", overflow: "hidden" }}></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <span className={classes.scrollToContact} id="testimonials"></span>
            <br />

            <section class="py-5 section-bubble4">
                <div className={classes.containerContactUs}>
                    <div>
                        <Typography className={classes.connectHeader}>Testimonials</Typography>
                        <br />
                        <div class="testimonialCardWrapper">
                            <div class="testimonialCard">
                                <p>We had Small & Tall power wash our house, concrete patio and concrete driveway.  Then they sealed all the concrete.  Roger & Sal were incredible!! They went above and beyond our expectations, even spraying our problem moss with a solution that killed it immediately.  Amazing!  We give them a rating of 5++ and will look to them for any upcoming jobs we have.</p>
                                <p>-Becky</p>
                            </div>
                            <div class="testimonialCard">
                                <p>Sal did an outstanding job power washing my house and cleaning the gutters. He is very  professional knowledgeable and courteous.
                                    My siding looks like it’s new!
                                    I highly recommend this company.</p>
                                <p>-Karen</p>
                            </div>
                            <div class="testimonialCard">
                                <p>When we purchased our house we knew that the exterior needed work. Couldn’t be more pleased with the job that was done to restore our siding/roof and also the overflowing gutters. House looks totally different. I would highly recommend this hard working team to anyone. Super easy to schedule, got the quote up front and over all great communication.</p>
                                <p>-Hannah</p>
                            </div>
                            <div class="testimonialCard">
                                <p>Couldn’t believe the difference in my siding. I didn’t know my house was so dirty until it was cleaned by Small and Tall! Would highly recommend to anyone and very fair pricing!</p>
                                <p>-Christopher</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <span className={classes.scrollToContact} id="contactForm"></span>
            <br />
            <section class="py-5 section-bubble4">
                <div className={classes.containerContactUs}>
                    <div>
                        <Typography className={classes.connectHeader}>Contact Us</Typography>
                        <br />

                        <div className={classes.phoneEmailWrapper}>
                            <a href="tel:585-568-7149" class="contactUsButtonStyled">
                                <Button style={{ textTransform: "none", color: "#3b3a73" }}>
                                    <PhoneIcon className={classes.phoneIcon} />
                                    (585) 568-7149
                                </Button>
                            </a>
                            <div className={classes.contactWrapper}>
                                {/* <Typography>General Questions</Typography> */}
                                <a href="mailto:smallandtallpw@gmail.com" class="contactUsButtonStyled">
                                    <Button style={{ textTransform: "none", color: "#3b3a73" }}>
                                        <EmailIcon className={classes.phoneIcon} />
                                        Email Us
                                    </Button>
                                </a>
                            </div>

                        </div>

                        <div style={{ backgroundColor: "white" }}>

                            {/* <div className={classes.reviewsWrapper}>
                                <a className={classes.reviewLink}
                                    href=""
                                    target="_blank"
                                >
                                    <Button
                                        className={classes.reviewButton}
                                    >
                                        <div className={classes.reviewStarWrapper}>
                                            <Typography className={classes.reviewHeader}>Leave us a review!</Typography>
                                            <img className={classes.socialFooterMargin} src={GoogleIcon} />
                                        </div>
                                    </Button>
                                </a>
                            </div> */}
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Main
