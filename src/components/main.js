import React from 'react'
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import bethRogersBuilding from "../images/beth_rogers_office.jpeg"
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
    aboutBackgroundImage: {
        width: "100%",
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
        marginBottom: "50px",
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
        color: "white",
        backgroundColor: "#0047bb",
        padding: "10px",
        width: "100%",
        margin: "auto",
        "@media(max-width: 600px)": {
            // padding: "50px 25px",
        }
    },
    productCard: {
        margin: "15px",
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
        backgroundColor: "#0047bb",
        color: "white",
        textTransform: "none",
        width: "300px",
        borderRadius: "35px"
    },
    getDirectionsLinkDark: {
        backgroundColor: "#333333",
        color: "white",
        textTransform: "none",
        width: "300px",
        borderRadius: "35px"
    },
    aboutWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    scrollToLocation: {
        height: "100px",
        flexDirection: "column"
    },
    connectHeader: {
        fontSize: "2rem",
        textAlign: "center",
        color: "white",
        backgroundColor: "#0047bb"
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
        backgroundColor: "#0047bb4d"

    },
    containerSectionTwoScroll: {
        display: "flex",
        flexDirection: "column",
        // backgroundColor: "#0047bb"
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
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${kidBackgroundImage})`,
        backgroundSize: "cover",
        justifyContent: "flex-end",
        height: "100vh",
        "@media(max-width:600px)": {
            justifyContent: "center",
            backgroundPosition: "center"
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
        margin: "10% auto",
        width: "100%",
        flexDirection: "column",
        "@media(max-width:600px)": {
            margin: "30% auto"
        }
    },
    sectionTitleText: {
        fontSize: "2rem",
        textAlign: "center",
        margin: "40px 0"
    },
    teamImage: {
        maxWidth: "600px",
        padding: "10px",
        borderRadius: "10px",
        height: "100%",
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
        color: "white"
    }

}))

const Main = () => {
    const classes = withStyles();
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

    const FiveStar = () => {
        return (
            <div className={classes.fiveStar}>
                <StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon />
            </div>
        )
    }

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
            {/* <div className={classes.mainBanner}>We are closed Tuesday, August 1st. We will reopen Wednesday, August 2nd</div> */}
            <div className={classes.mainBanner}>
                <div className={classes.mainBannerTextWrapper}>
                    <Typography className={classes.mainBannerText}>Beth Rogers Agency <br />
                        <Typography>A third-generation, local, friendly insurance agency</Typography>
                        {/* <i>every time</i> */}
                    </Typography>
                </div>
            </div>
            <section class="sectionOneSectionWrapper">
                <div className={classes.containerSectionTwoScroll}>
                    <div className={classes.container}>
                        <span className={classes.scrollToSectionOne} id="sectionOne"></span>
                    </div>
                    <div className={classes.containerMarginBottomSmall}>
                        {/* <Typography className={classes.someOfWorkHeader}>Our Mission:</Typography> */}
                        <Typography className={classes.someOfWorkHeader}>We strive to provide the best possible service, while meeting your insurance needs.</Typography>
                    </div>
                </div>
            </section>
            <section class="aboutSectionWrapper">
                <Typography className={classes.someOfWorkHeaderProducts}>About Us</Typography>
                <div class="aboutWrapper">
                    <div class="aboutUsTextWrapper">
                        <Typography className={classes.aboutUsText}>We are <b>third-generation</b>, <b>local</b> Nationwide agency, started by my grandfather, Charles Crandall.
                            <br /> <br />
                            Led by our Principal Agent and Owner, <b>Beth Rogers</b>, we strive to provide the best possible service while meeting your insurance needs.
                        </Typography>
                        <br />
                        <Typography className={classes.aboutUsText}>Whether it's coverage for your family, home, or business, we've got you covered.</Typography>
                    </div>
                    <StaticImage className={classes.teamImage} src="../images/beth_sign.jpeg" />
                </div>

                <Typography className={classes.sectionTitleText}>Meet the Team</Typography>

                <div class="teamImageWrapper">
                    <div class="teamNameImageWrapper">
                        <Typography className={classes.employeeNameText}>Ellie</Typography>
                        <StaticImage className={classes.teamImage} src="../images/ellie_image_1.jpeg" />
                        <br />
                        <a class="emailButtonLink" href="mailto:ellie@bethrogersagency.com" target="_blank">
                            <EmailIcon style={{ color: "white", marginRight: "10px" }} />
                            Ellie@bethrogersagency.com
                        </a>
                    </div>
                    <br /><br />
                    <div class="teamNameImageWrapper">
                        <Typography className={classes.employeeNameText}>Mary Rogers</Typography>
                        <StaticImage className={classes.teamImage} src="../images/mary_image_1.jpeg" />
                        <br />
                        <a class="emailButtonLink" href="mailto:mary@bethrogersagency.com" target="_blank">
                            <EmailIcon style={{ color: "white", marginRight: "10px" }} />
                            Mary@bethrogersagency.com
                        </a>
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
                    <Typography className={classes.someOfWorkHeaderProducts}>Products</Typography>
                    <div class="productCardWrapper">
                        <Card className={classes.productCard} sx={{ maxWidth: 345 }}>
                            <StaticImage src="../images/jamie-street-car-white.jpg" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Auto
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Auto description auto description auto description auto description auto description auto description auto description auto description
                                </Typography>
                            </CardContent>

                        </Card>
                        <Card className={classes.productCard} sx={{ maxWidth: 345 }}>
                            <StaticImage src="../images/francesca-tosolini-home.jpg" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Home
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Home description Home description Home description Home description Home description Home description Home description Home description
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.productCard} sx={{ maxWidth: 345 }}>
                            <StaticImage src="../images/tierra-mallorca-renters.jpg" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Renters
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Renters description Renters description Renters description Renters description Renters description Renters description Renters description Renters description
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.productCard} sx={{ maxWidth: 345 }}>
                            <StaticImage src="../images/harley-davidson-one.jpg" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Motorcycle
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Motorcycle description Motorcycle description Motorcycle description Motorcycle description Motorcycle description Motorcycle description Motorcycle description Motorcycle description
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.productCard} sx={{ maxWidth: 345 }}>
                            <StaticImage src="../images/vincent-ghilione-boat-one.jpg" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Boat
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Boat description Boat description Boat description Boat description Boat description Boat description Boat description Boat description
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.productCard} sx={{ maxWidth: 345 }}>
                            <StaticImage src="../images/lawrence-crayton-life-one.jpg" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Life
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Life description Life description Life description Life description Life description Life description Life description Life description
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.productCard} sx={{ maxWidth: 345 }}>
                            <StaticImage src="../images/yassine-khalfalli-business.jpg" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Business
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Business description Business description Business description Business description Business description Business description Business description Business description
                                </Typography>
                            </CardContent>
                        </Card>
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
                        <Typography className={classes.aboutTitleHeader}>Get a quote</Typography>
                        <Typography className={classes.addressText}>Use the link below to get a free quote</Typography>
                        <Button className={classes.quoteButtonLink} href="https://nwexpress.com/beth-rogers/multi-quote/getting-started?fbclid=IwAR3_P2WjSWAkt608SHBMEdq3BjuIp3ahR5jyoWmEqHdbTyKPXOIJZqG2mD8" target="_blank">
                            Free Quote
                        </Button>
                    </div>
                </div>
            </section>

            <span className={classes.scrollToContact} id="contactForm"></span>
            <section class="py-5 section-bubble4">
                <div className={classes.containerContactUs}>
                    <div style={{ backgroundColor: "#0047bbb0" }}>
                        <Typography className={classes.connectHeader}>Contact Us</Typography>
                        <br />

                        <div className={classes.phoneEmailWrapper}>
                            <a href="tel:(585) 321-0015" className={classes.contactPhone}>
                                <Button className={classes.contactButton}>
                                    <PhoneIcon className={classes.phoneIcon} />
                                    (585) 321-0015
                                </Button>
                            </a>

                        </div>
                        <div class="mapWrapper">
                            <Typography style={{ margin: "15px", color: "white" }}>4072 W Henrietta Rd, Rochester, NY 14623</Typography>
                            <Button className={classes.getDirectionsLinkDark} href="https://www.google.com/maps/dir/?api=1&destination_place_id=ChIJmWIbp49L0YkRIDrRV_zTZyc&destination=direct" target="_blank">
                                Get Directions
                            </Button>
                            <iframe style={{ margin: "25px" }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11658.336155770092!2d-77.6448535!3d43.0712153!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d14b8fa71b6299%3A0x2767d3fc57d13a20!2sNationwide%20Insurance%3A%20Beth%20Rogers%20Agency%20Inc.!5e0!3m2!1sen!2sus!4v1693494349904!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div style={{ backgroundColor: "white" }}>
                            <Typography className={classes.connectHeader}>Hours</Typography>
                            <div class="hoursWrapper">
                                <div class="hoursDayTime">
                                    <p>Monday - Thursday</p>
                                    <p class="hoursTime">9:00 AM - 5:00 PM</p>
                                </div>
                                <div class="hoursDayTime">
                                    <p>Friday</p>
                                    <p class="hoursTime">9:00 AM - 4:30 PM</p>
                                </div>
                                <div class="hoursDayTime">
                                    <p>Saturday<span>*</span> - Sunday</p>
                                    <p class="hoursTime">Closed</p>
                                </div>

                                <p class="saturdayAppt">*<i>Saturday by Appointment Only</i></p>
                            </div>
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
