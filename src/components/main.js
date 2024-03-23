import React, { useState } from 'react'
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import bethRogersBuilding from "../images/office_photo-min.jpg"
import houseWideOne from "../images/ST_house_one.jpeg"
import houseTruck from "../images/ST_house_truck_one.jpeg"
import housePool from "../images/ST_pool.jpeg"
import houseRoof from "../images/ST_roof_one.jpeg"
import kidBackgroundImage from "../images/kelli-mcclintock-kid-1.jpg"
import fiveStar from '../images/fiveStar.png'
import Divider from '@material-ui/core/Divider'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@mui/icons-material/Email';
import StarRateIcon from '@material-ui/icons/StarRate';
import FacebookIcon from "../images/facebook_icon4.svg"
import InstagramIcon from "../images/instagram_icon4.svg"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GoogleIcon from "../images/google_icon.png"
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
        "@media(max-width: 600px)": {
            flexDirection: "column",
            textAlign: "center"
        }
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
        "@media(max-width:600px)": {
            margin: "30% auto"
        }
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
        if (serviceName === "card1") {
            setFlippedOne(enabled)
        } else if (serviceName === "card2") {
            setFlippedTwo(enabled)
        } else if (serviceName === "card3") {
            setFlippedThree(enabled)
        } else if (serviceName === "card4") {
            setFlippedFour(enabled)
        } else if (serviceName === "card5") {
            setFlippedFive(enabled)
        }
    }

   


    const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query { 
      desktopImage: file(relativePath: { eq: "yassine-khalfalli-roc-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImage: file(relativePath: { eq: "yassine-khalfalli-roc-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 650, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
    }
  `)

    const sources = [
        mobileImage.childImageSharp.fluid,
        {
            ...desktopImage.childImageSharp.fluid,
            media: `(min-width: 650px)`
        }
    ]

    const productInfo = [
        {
            title: "Auto",
            imagePath: "../images/yassine-khalfalli-roc-image.jpg",
            description: "auto insurance description"
        },
        {
            title: "Commercial",
            imagePath: "../images/yassine-khalfalli-roc-image.jpg",
            description: "commercial insurance description"
        },
        {
            title: "Farm",
            imagePath: "../images/yassine-khalfalli-roc-image.jpg",
            description: "farm insurance description"
        },
        {
            title: "Home",
            imagePath: "../images/yassine-khalfalli-roc-image.jpg",
            description: "home insurance description"
        },
        {
            title: "Powersports",
            imagePath: "../images/yassine-khalfalli-roc-image.jpg",
            description: "powersports insurance description"
        },

    ]


    const ProductCard = ({ imagePath, title, description }) => {
        return (
            <Card sx={{ maxWidth: 345 }}>
                <StaticImage alt="" src={imagePath} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        )
    }


    return (
        <div className={classes.mainRoot}>
            <div className={classes.mainBanner}>
                <div className={classes.mainBannerTextWrapper}>
                    <Typography className={classes.mainBannerText}>Small & Tall Power Washing <br /></Typography>
                    <Typography style={{ color: "white", textAlign: "center" }}>Serving Rochester since 2021</Typography>
                    {/* <i>every time</i> */}
                    <a href="tel:(585) 298-8934" class="bannerCallButton">(585) 298-8934</a>
                    <Typography style={{ color: "white", textAlign: "center" }}>Free Estimates</Typography>

                </div>
            </div>
            <span className={classes.scrollToSectionOne} id="sectionOne"></span>

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
                        <StaticImage className={classes.teamImage} src="../images/ST_patio_1.jpeg" />

                    </div>
                    <div class="teamNameImageWrapper">
                        <StaticImage className={classes.teamImage} src="../images/ST_deck_two.jpeg" />

                    </div>
                    <div class="teamNameImageWrapper">
                        <StaticImage className={classes.teamImage} src="../images/ST_patio_two.jpeg" />
                    </div>
                    <div class="teamNameImageWrapper">
                        <StaticImage className={classes.teamImage} src="../images/ST_patio_1.jpeg" />

                    </div>
                    <div class="teamNameImageWrapper">
                        <StaticImage className={classes.teamImage} src="../images/ST_deck_two.jpeg" />

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
            <section class="productSectionWrapper">
                <div>
                    <Typography className={classes.someOfWorkHeaderProducts}>Services</Typography>
                    <div class="productCardWrapper">
                        <div
                            className={`flip-card ${isFlippedOne ? "flipped" : ""}`}
                            id="card1"
                            onMouseOver={handleFlip("card1", true)}
                            onMouseOut={handleFlip("card1", false)}
                            onClick={handleFlip("card1", !isFlippedOne)}
                        >
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="card-content">
                                        <StaticImage src="../images/ST_pool.jpeg" />
                                        <Typography className={classes.productTitleText} gutterBottom variant="h5" component="div">
                                            Residential House Wash
                                        </Typography>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="card-content">
                                        <Typography class="backCardText" variant="body2" color="text.secondary">
                                            Your home’s siding is a perfect place for mold, mildew, fungi, dirt, and other
                                            organic material to build up and become an eyesore. We use the industry’s best equipment and
                                            products to safely remove all organic material and bring your home back to its original shine. Our
                                            equipment uses a low pressure/ high volume pump system to carefully wash your house in safe yet
                                            effective soaps and chemicals that kill and remove all organic material. Your house is rinsed clean and
                                            will never look better!
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                             onMouseOver={handleFlip("card2", true)}
                             onMouseOut={handleFlip("card2", false)}
                             onClick={handleFlip("card2", !isFlippedTwo)}
                            // onMouseEnter={handleFlip("card2", true)}
                            // onMouseLeave={handleFlip("card2", false)}
                            className={`flip-card ${isFlippedTwo ? "flipped" : ""
                                }`}
                            id="card2"
                        >
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="card-content">
                                        <StaticImage src="../images/ST_roof_one.jpeg" />
                                        <Typography className={classes.productTitleText} gutterBottom variant="h5" component="div">
                                            Residential Roof Cleaning
                                        </Typography>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="card-content">
                                        <Typography class="backCardText" variant="body2" color="text.secondary">
                                            Over time your roof will collect organic contaminants such as moss, mold,
                                            fungi, and lichen. Lichen is, most notably, an indicator of significant damage to your roof shingles. These
                                            organic contaminants will breakdown the limestone in your shingles, causing granule loss and advanced
                                            aging of your roof shingles. Moss is yet another indicator that your roof is suffering damage. Our roof
                                            cleaning service safely applies the necessary chemicals to kill and remove these organic materials. This
                                            process will not only preserve the integrity of your roof but it will also restore the original appearance of
                                            your roof.
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                              onMouseOver={handleFlip("card3", true)}
                              onMouseOut={handleFlip("card3", false)}
                              onClick={handleFlip("card3", !isFlippedThree)}
                            // onMouseEnter={handleFlip("card3", true)}
                            // onMouseLeave={handleFlip("card3", false)}
                            className={`flip-card ${isFlippedThree ? "flipped" : ""
                                }`}
                            id="card3"
                        >
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="card-content">
                                        <StaticImage src="../images/ST_gutter_one.jpeg" />
                                        <Typography className={classes.productTitleText} gutterBottom variant="h5" component="div">
                                            Gutter Brightening
                                        </Typography>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="card-content">
                                        <Typography class="backCardText" variant="body2" color="text.secondary">
                                            The outer surface of your gutter system can, over time, accumulate striped stains as
                                            water overflows the gutters during heavy rain and/or during the spring thaw. These stains may become
                                            noticeably prominent after a house wash. We offer our gutter brightening service to address this very
                                            issue. We use an additional method to remove these stains and bring a new shine to your gutters.
                                            Restoring the shine to your gutter system will be the final touch needed to elevate your home’s curb
                                            appeal to its utmost potential.
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                           onMouseOver={handleFlip("card4", true)}
                           onMouseOut={handleFlip("card4", false)}
                           onClick={handleFlip("card4", !isFlippedFour)}
                            className={`flip-card ${isFlippedFour ? "flipped" : ""
                                }`}
                            id="card4"
                        >
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="card-content">
                                        <StaticImage src="../images/ST_concrete.jpeg" />
                                        <Typography className={classes.productTitleText} gutterBottom variant="h5" component="div">
                                            Concrete Cleaning
                                        </Typography>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="card-content">
                                        <Typography class="backCardText" variant="body2" color="text.secondary">
                                            You concrete driveway/patio/walkway is extremely porous and permeable. This
                                            gives dirt, mold, and fungi the opportunity to embed themselves in your concrete surfaces. Over time
                                            this can drastically reduce your concrete’s visual appeal as well as its overall quality and longevity. We
                                            use the industry’s top formulated chemicals to penetrate the concrete and ensure the organic material
                                            is eliminated. After a short wait, a high pressure surface cleaner is used to safely rinse away the
                                            chemical and dead organic material; leaving behind a clean and bright concrete surface.
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            onMouseOver={handleFlip("card5", true)}
                            onMouseOut={handleFlip("card5", false)}
                            onClick={handleFlip("card5", !isFlippedFive)}
                            className={`flip-card ${isFlippedFive ? "flipped" : ""
                                }`}
                            id="card5"
                        >
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="card-content">
                                        <StaticImage src="../images/ST_deck_1.jpeg" />
                                        <Typography className={classes.productTitleText} gutterBottom variant="h5" component="div">
                                            Decks and Fencing
                                        </Typography>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="card-content">
                                        <Typography class="backCardText" variant="body2" color="text.secondary">
                                            Mold, mildew, moss, and fungi seem to find their way onto every conceivable
                                            surface. Our trucks come equipped with the industry’s top performing equipment as well as products
                                            specifically designed to eliminate organic material then rejuvenate the condition of your wood framed
                                            deck and fencing. We have numerous post-cleaning treatments that condition and revitalize the
                                            appearance of your wood framed structures; giving your outdoor space a youthful appearance as well as
                                            extending the life of your deck and fencing. Have vinyl fencing or a deck laid with Trex? Not a problem
                                            whatsoever. Our highest quality equipment and our years of experience will bring out the glowing white
                                            shine of your vinyl fencing and bring your Trex decking back to life!
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* {console.log(productInfo.map(obj => obj.imagePath))}

                    <img src={productInfo[0].imagePath}/>

                    {productInfo.length > 0 ? productInfo.map(obj =>
                        <ProductCard key={obj.title} imagePath={obj.imagePath} title={obj.title} description={obj.description} />
                    ) : null} */}
                </div>



            </section>

            <span className={classes.scrollToLocation} id="sectionThree"></span>

            <section style={{ minHeight: "300px" }} className={classes.container}>
                <div className={classes.aboutWrapper}>
                    <div className={classes.aboutSectionWrapper}>
                        <Typography className={classes.aboutTitleHeader}>Get a Free Estimate</Typography>
                        <Typography className={classes.addressText}>Please use the form below for a free estimate</Typography>
                        <Button className={classes.quoteButtonLink} href="https://www.markate.com/" target="_blank">
                            Free Estimate
                        </Button>
                    </div>
                </div>
            </section>

            {/* <span className={classes.scrollToLocation} id="sectionFour"></span>
            <section style={{ minHeight: "300px" }} className={classes.container}>
                <div>Section (if needed)</div>
            </section>


            <span className={classes.scrollToLocation} id="sectionFive"></span>

            <section style={{ minHeight: "300px" }} className={classes.container}>
                <div>Section (if needed)</div>
            </section>

            <span className={classes.scrollToContact} id="contactForm"></span> */}
            <br />
            <section class="py-5 section-bubble4">
                <div className={classes.containerContactUs}>
                    <div>
                        <Typography className={classes.connectHeader}>Contact Us</Typography>
                        <br />

                        <div className={classes.phoneEmailWrapper}>
                            <a href="tel:(585) 298-8934" className={classes.contactPhone}>
                                <Button className={classes.contactButton}>
                                    <PhoneIcon className={classes.phoneIcon} />
                                    (585) 298-8934
                                </Button>
                            </a>

                        </div>
                        {/* <div class="mapWrapper">
                            <Typography style={{ margin: "15px", color: "black" }}>4072 W Henrietta Rd, Rochester, NY 14623</Typography>
                            <Button className={classes.getDirectionsLinkDark} href="https://www.google.com/maps/dir/?api=1&destination_place_id=ChIJmWIbp49L0YkRIDrRV_zTZyc&destination=direct" target="_blank">
                                Get Directions
                            </Button>
                            <iframe style={{ margin: "25px" }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11658.336155770092!2d-77.6448535!3d43.0712153!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d14b8fa71b6299%3A0x2767d3fc57d13a20!2sNationwide%20Insurance%3A%20Beth%20Rogers%20Agency%20Inc.!5e0!3m2!1sen!2sus!4v1693494349904!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div> */}
                        <div style={{ backgroundColor: "white" }}>

                            <div className={classes.reviewsWrapper}>
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
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Main
