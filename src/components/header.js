import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Typography, makeStyles } from '@material-ui/core'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Button from '@material-ui/core/Button'
import chillGrillLogoOG from '../images/chill_logo_og.jpeg'
import NationWideLogoBird from "../images/logo/logo.svg"
import coneIcon from "../images/cone_icon.png"
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from "../images/facebook_icon4.svg"
import LinkedInIcon from "../images/linkedin_icon_blue.svg"
import InstagramIcon from "../images/instagram_icon4.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "./main.css"

const withStyles = makeStyles(() => ({
  "@global": {
    "*": {
      fontFamily: "'Montserrat', sans-serif !important",
      fontWeight: "100"
    }
  },
  navBarRoot: {
    position: "fixed",
    display: "flex",
    // background: "#4c86d1",
    backgroundColor: "transparent",
    color: "white",
    justifyContent: "space-between",
    width: "100%",
    height: "112px",
    top: 0,
    boxShadow: "1px 0 10px 0 rgb(89 98 115 / 20%)",
    zIndex: 2,
  },
  navBarRootScroll: {
    position: "fixed",
    display: "flex",
    // background: "#4c86d1",
    backgroundColor: "white",
    color: "white",
    justifyContent: "space-between",
    width: "100%",
    height: "112px",
    top: 0,
    boxShadow: "1px 0 10px 0 rgb(89 98 115 / 20%)",
    zIndex: 2,
  },
  navBarTitle: {
    maxWidth: 960,
    padding: "1rem",
  },
  navButton: {
    color: "gold",
    // fontWeight: "bold",
    textTransform: "none",
    margin: "auto 10px",
    textDecoration: "none"
  },
  navButtonScroll: {
    color: "black",
    textTransform: "none",
    margin: "auto 10px",
    textDecoration: "none"
  },
  navBarButtonWrapper: {
    display: "flex",
    color: "white",
    margin: "10px",
    "@media(max-width: 600px)": {
      display: "none"
    }
  },
  navBarHamburgerDrawerWrapper: {
    display: "none",
    "@media(max-width: 601px)": {
      display: "flex",
      margin: "auto"
    }
  },
  navLogo: {
    display: "flex",
    width: "60px",
    margin: "auto",
  },
  drawerItem: {
    "&:hover": {
      backgroundImage: "#f03d3dcf",
      border: "1px solid ##f03d3dcf",
      color: "white"
    },
    "&:selected:hover": {
      backgroundImage: "#f03d3dcf",
      border: "1px solid ##f03d3dcf",
      color: "white"
    }
  },
  list: {
    width: "250px"
  },
  hamburgerIcon: {
    margin: "1rem",
    fontSize: "2.5rem",
    color: "white",
    "@media(min-width: 601px)": {
      display: "none"
    }
  },
  hamburgerIconScroll: {
    color: "#0047bb",
    margin: "1rem",
    fontSize: "2.5rem",
    "@media(min-width: 601px)": {
      display: "none"
    }
  },
  navLeftWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  },
  navCallButton: {
    display: "flex",
    backgroundColor: "#0047bb",
    textDecoration: "none",
    alignItems: "center",
    padding: "8px 16px",
    color: "white",
    textTransform: "none",
    border: "1px solid gold",
    borderRadius: "35px",
    height: "50px",
    margin: "auto 20px"
  },
  navCallButtonMobile: {
    display: "flex",
    backgroundColor: "#0047bb",
    padding: "8px 16px",
    color: "white",
    textTransform: "none",
    borderRadius: "35px",
    height: "50px",
    margin: "auto 20px",
    "@media(max-width: 600px)": {
      fontSize: "0.75rem",
      margin: "auto"
    }
  },
  drawerLinkWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  navButtonMobile: {
    color: "black",
    // fontWeight: "bold",
    textTransform: "none",
    margin: "10px 16px",
    textDecoration: "none"
  },
  navLogoLink: {
    color: 'black',
    textDecoration: `none`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  navLogoText: {
    color: "gold"
  },
  navLogoTextScroll: {
    color: "black"
  }
}))




const Header = ({ siteTitle }) => {

  const classes = withStyles();
  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleDrawer = () => {
    setOpenDrawer(drawerOpen => !drawerOpen)
  }

  //navbar scroll when active state
  const [navbarScroll, setNavbarScroll] = useState(false)

  //logo scroll when active
  const [navBarColor, setNavBarColor] = useState("white")

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbarScroll(true)
    } else {
      setNavbarScroll(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  //logo scroll function
  const changeColor = () => {
    if (window.scrollY >= 60) {
      setNavBarColor("blue")
    } else {
      setNavBarColor("white")
    }
  }

  useEffect(() => {
    changeColor()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeColor)
  })

  return (
    <header
      className={navbarScroll ? classes.navBarRootScroll : classes.navBarRoot}
    >
      <div className={classes.navLeftWrapper}>
        <div className={classes.navBarTitle}>
          <Link to="/" className={classes.navLogoLink}>
            <img className={classes.navLogo} src={NationWideLogoBird} alt="company logo" />
            <Typography className={navbarScroll ? classes.navLogoTextScroll : classes.navLogoText}>Beth Rogers Agency</Typography>
          </Link>
        </div>
        <div className={classes.navBarButtonWrapper}>
          <AnchorLink className={navbarScroll ? classes.navButtonScroll : classes.navButton}
            to="/#sectionOne" title="About Us">
          </AnchorLink>
          <AnchorLink className={navbarScroll ? classes.navButtonScroll : classes.navButton}
            to="/#sectionTwo" title="Products">
          </AnchorLink>
          <AnchorLink className={navbarScroll ? classes.navButtonScroll : classes.navButton}
            to="/#sectionThree" title="Get a Quote">
          </AnchorLink>
          <AnchorLink className={navbarScroll ? classes.navButtonScroll : classes.navButton}
            to="/#sectionFour" title="Carriers">
          </AnchorLink>
          <AnchorLink className={classes.navCallButton}
            to="/#contactForm" title="Contact Us">
          </AnchorLink>


          {/* <Button
            className={classes.navCallButton}
            target="_blank" href="tel:(585) 321-0015"
          >
            <PhoneIcon class="drawerPhoneIcon" />
            Call Us
          </Button> */}
        </div>
      </div>

      {/* <div class="socialLinkWrapperNav">
        <a href="" target="_blank" class="socialLink">
          <img class="socialNav" src={InstagramIcon} />
        </a>
        <a href="" target="_blank" class="socialLink">
          <img class="socialNavFb" src={FacebookIcon} />
        </a>
      </div> */}
      <div className={classes.navBarHamburgerDrawerWrapper}>
        {/* <Button
          className={classes.navCallButtonMobile}
          target="_blank" href="tel:"
        >
          <PhoneIcon class="drawerPhoneIcon" />
          Call Us
        </Button> */}
        <MenuIcon
          className={navbarScroll ? classes.hamburgerIconScroll : classes.hamburgerIcon}
          onClick={toggleDrawer}
        />
        <Drawer
          open={openDrawer}
          onClose={toggleDrawer}
          anchor="right"
          className={classes.drawerRoot}
        >
          <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List>
              <div className={classes.drawerLinkWrapper}>
                <AnchorLink className={classes.navButtonMobile}
                  to="/#sectionOne" title="About Us">
                </AnchorLink>
                <AnchorLink className={classes.navButtonMobile}
                  to="/#sectionTwo" title="Products">
                </AnchorLink>
                <AnchorLink className={classes.navButtonMobile}
                  to="/#sectionThree" title="Get a Quote">
                </AnchorLink>
                <AnchorLink className={classes.navButtonMobile}
                  to="/#sectionFour" title="Carriers">
                </AnchorLink>
              </div>

              <Button
                class="drawerItemLogin"
                target="_blank" href="tel:(585) 321-0015"
              >
                <PhoneIcon class="drawerPhoneIcon" />
                Call Us
              </Button>
              <div class="socialLinkWrapperNavMobile">
                {/* <a href="" target="_blank" class="socialLink">
                  <img class="socialDrawer" src={InstagramIcon} />
                </a> */}
                <a href="https://www.facebook.com/bethrogersagency/" target="_blank" class="socialLink">
                  <img class="socialDrawerFb" src={FacebookIcon} />
                </a>
                <a href="https://www.linkedin.com/in/beth-rogers-378a2710/" target="_blank" class="socialLink">
                  <img className={classes.socialFacebookSpacing} src={LinkedInIcon} />
                </a>
              </div>
            </List>

          </div>
        </Drawer>

      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
