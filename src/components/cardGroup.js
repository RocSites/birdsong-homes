import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"
import Typography from '@material-ui/core/Typography'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./main.css"


const CardGroup = () => {
    return (
        <div class="productCardWrapper">
            <div
                class="flip-card"
                id="card1"
            >
                <div className="flip-card-inner">
                    <div className="card-content">
                        <StaticImage src="../images/house_plans_example.jpg" />
                        <Typography class="productTitleText" gutterBottom variant="h5" component="div">
                            House Plan Option 1
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
                                <ul>
                                    <li><strong>Single-story, open-concept design</strong> with high ceilings and seamless flow.</li>
                                    <li><strong>3 bedrooms, 2 bathrooms</strong>, including a master suite with walk-in closet.</li>
                                    <li><strong>Modern kitchen</strong> with island seating, energy-efficient appliances, and pantry.</li>
                                    <li><strong>Indoor-outdoor living</strong> with a covered patio and large sliding glass doors.</li>
                                    <li><strong>Two-car garage</strong> with extra storage and a dedicated laundry room.</li>
                                    <li><strong>Energy-efficient features</strong>, including insulated windows and solar-ready roofing.</li>
                                    <li><strong>Spacious living areas</strong> designed for comfort and natural light.</li>
                                    <li><strong>Flexible customization</strong> with optional home office or flex space.</li>
                                    <li><strong>Sustainable materials</strong> and eco-friendly construction options available.</li>
                                    <li><strong>High-quality finishes</strong> with multiple design choices for personalization.</li>
                                </ul>
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
                        <StaticImage src="../images/house_plans_example.jpg" />
                        <Typography class="productTitleText" gutterBottom variant="h5" component="div">
                            Home Plan Option 2
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
                                <ul>
                                    <li><strong>Single-story, open-concept design</strong> with high ceilings and seamless flow.</li>
                                    <li><strong>3 bedrooms, 2 bathrooms</strong>, including a master suite with walk-in closet.</li>
                                    <li><strong>Modern kitchen</strong> with island seating, energy-efficient appliances, and pantry.</li>
                                    <li><strong>Indoor-outdoor living</strong> with a covered patio and large sliding glass doors.</li>
                                    <li><strong>Two-car garage</strong> with extra storage and a dedicated laundry room.</li>
                                    <li><strong>Energy-efficient features</strong>, including insulated windows and solar-ready roofing.</li>
                                    <li><strong>Spacious living areas</strong> designed for comfort and natural light.</li>
                                    <li><strong>Flexible customization</strong> with optional home office or flex space.</li>
                                    <li><strong>Sustainable materials</strong> and eco-friendly construction options available.</li>
                                    <li><strong>High-quality finishes</strong> with multiple design choices for personalization.</li>
                                </ul>
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
                        <StaticImage src="../images/house_plans_example.jpg" />
                        <Typography class="productTitleText" gutterBottom variant="h5" component="div">
                            Home Plan Option 3
                        </Typography>
                    </div>
                    <div>
                        <Accordion defaultExpanded={true}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <p class="moreText">More</p>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul>
                                    <li><strong>Single-story, open-concept design</strong> with high ceilings and seamless flow.</li>
                                    <li><strong>3 bedrooms, 2 bathrooms</strong>, including a master suite with walk-in closet.</li>
                                    <li><strong>Modern kitchen</strong> with island seating, energy-efficient appliances, and pantry.</li>
                                    <li><strong>Indoor-outdoor living</strong> with a covered patio and large sliding glass doors.</li>
                                    <li><strong>Two-car garage</strong> with extra storage and a dedicated laundry room.</li>
                                    <li><strong>Energy-efficient features</strong>, including insulated windows and solar-ready roofing.</li>
                                    <li><strong>Spacious living areas</strong> designed for comfort and natural light.</li>
                                    <li><strong>Flexible customization</strong> with optional home office or flex space.</li>
                                    <li><strong>Sustainable materials</strong> and eco-friendly construction options available.</li>
                                    <li><strong>High-quality finishes</strong> with multiple design choices for personalization.</li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardGroup


