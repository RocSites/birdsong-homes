import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Header from "./header"
import PhoneIcon from '@material-ui/icons/Phone'
import FaxIcon from '@mui/icons-material/Fax';
import Typography from '@material-ui/core/Typography'
import FacebookIcon from "../images/facebook_icon4_white.svg"
import LinkedInIcon from "../images/linkedin_icon.svg"
import "./layout.css"

const withStyles = makeStyles(() => ({
  "@global": {
    p: {
      // fontFamily: "Raleway, sans-serif"
    }
  },
  layoutRoot: {
    display: "flex",
    flexDirection: "column"
  },
  mainContent: {
    flexGrow: 1,
    minHeight: "100vh"
  },
  footerRoot: {
    backgroundColor: "#0047bb",
    color: "black",
    display: "flex",
    minHeight: "50px"
  },
  footerContent: {
    display: "flex",
    padding: "1rem",
    width: "100%",
    flexDirection: "column"

  },
  copyrightText: {
    marginTop: "auto",
    marginBottom: "auto",
    color: "white",
    "@media(max-width: 600px)": {
      textAlign: "center"
    }
  },
  dougDesignText: {
    fontSize: "0.7rem"
  },
  footerPhone: {
    display: "flex",
    margin: "5px 0",
    color: "white",
    textDecoration: "none",
    "@media(max-width: 600px)": {
      textAlign: "center"
    }
  },
  footerAddress: {
    marginTop: "auto",
    marginBottom: "auto",
    "@media(max-width: 600px)": {
      textAlign: "center"
    }
  },
  list: {
    width: "200px"
  }
}))

const Layout = ({ children }) => {
  const classes = withStyles();

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className={classes.layoutRoot}>
        <main className={classes.mainContent}>{children}</main>
        <footer class="footerRoot">
          <div className={classes.footerContent}>
            <a href="tel:(585) 298-8934" className={classes.footerPhone}>
              <PhoneIcon className={classes.phoneIcon} />
              (585) 298-8934
            </a>
            <div class="socialLinkWrapper">
              <a href="https://www.facebook.com/p/Small-Tall-Power-Washing-100076344693110/" target="_blank" class="socialLink">
                <img className={classes.socialFacebookSpacing} src={FacebookIcon} />
              </a>
            </div>

            <div style={{ width: "100%", border: "1px solid gold", marginBottom: "20px" }}></div>
            <p className={classes.copyrightText}> © {new Date().getFullYear()} Small & Tall Powerwashing</p>
            <p class="rocsitesText">Website by <span><a href="https://www.rocsites.com/" target="_blank">RocSites</a></span></p>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
