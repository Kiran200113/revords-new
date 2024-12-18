import { Link } from "react-router-dom";

export const BusinessPageData = [
    {
        slug: 'hotspotgaming',
        bannertitle: 'Hot spot Gaming',
        bannerTagline: 'Cafe & Lounge',
        businessLogo: "/Images/Hot Spot Logo.png",
        bannerImage: "https://images.unsplash.com/photo-1644461150893-19421f5020d8?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        mainheading: "About Hot spot gaming cafe",
        businessImages: [
            "/Images/Hot Spot Cafe - inside.png",
            "/Images/Hot Spot Cafe - outside ( Copy ).jpg",
        ],
        descriptionData: <>
            <p>Hot Spot Gaming Cafe is a warm and friendly gaming venue providing a comfortable and secure environment where guests can relax, enjoy drinks, and experience the latest in interactive entertainment.</p>
            <p><b>Address:&nbsp;</b>4609 S Harlem Ave, Unit A, Forest View, IL 60402</p>
            <p><b>Phone:</b><Link to="tel:7737169873">&nbsp;(773)-716-9873</Link></p>
            <p><b>Hours:</b></p>
            <ul>
                <li>Monday:&nbsp;9:00AM to 2:00AM</li>
                <li>Tuesday:&nbsp;9:00AM to 2:00AM</li>
                <li>Wednesday:&nbsp;9:00AM to 2:00AM</li>
                <li>Thursday:&nbsp;9:00AM to 2:00AM</li>
                <li>Friday:&nbsp;9:00AM to 2:00AM</li>
                <li>Saturday:&nbsp;9:00AM to 2:00AM</li>
                <li>Sunday:&nbsp;9:00AM to 2:00AM</li>
            </ul>
            <div>
                <p><b>Legal</b></p>
                <div>
                    <p><a href="/Images/Hot Spot Gaming Cafe LLC Terms And Conditions.pdf" target="_blank">Terms & Conditions
                    </a></p>
                    <p> <a href="/Images/Hot Spot Gaming Cafe - Privacy Policy.pdf" target="_blank">Privacy Policy
                    </a></p>
                </div>
            </div>
        </>
    },
    {
        slug: 'brickovenpizza',
        bannertitle: 'Brick Oven Pizza',
        bannerTagline: '',
        businessLogo: "/Images/Brick Oven Pizza Logo.png",
        bannerImage: "https://images.unsplash.com/photo-1644461150893-19421f5020d8?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        mainheading: "About Brick Oven Pizza",
        businessImages: [
            "/Images/Brick oven pizza - inside.png",
            "/Images/Brick oven pizza - outside.png",
        ],
        descriptionData: <>

            <p>Brick Oven Pizza is a great neighborhood spot to hang out and socialize, serving up freshly baked pizzas, juicy burgers, refreshing drinks, and indulgent desserts. Perfect for a cozy meal or a quick bite with friends!</p>
            <p> <b>Address: </b>
                48 E 34th Street, Steger, IL 60475
            </p>
            <p><b>Phone:</b><Link to="tel:7082539055">&nbsp;(708)-253-9055</Link></p>
            <p><b>Hours:</b></p>
            <ul>
                <li>Monday:&nbsp;11:00AM to 10:00PM</li>
                <li>Tuesday:&nbsp;11:00AM to 10:00PM</li>
                <li>Wednesday:&nbsp;11:00AM to 10:00PM</li>
                <li>Thursday:&nbsp;Closed</li>
                <li>Friday:&nbsp;11:00AM to 10:00PM</li>
                <li>Saturday:&nbsp;11:00AM to 10:00PM</li>
                <li>Sunday:&nbsp;11:00AM to 9PM</li>
            </ul>
            <div>
                <p><b>Legal</b></p>
                <div>
                    <p><a href="/Images/BrickOvenPizzaTermsAndConditions.pdf" target="_blank">Terms & Conditions
                    </a></p>
                    <p> <a href="/Images/BrickOvenPizzaPrivacyPolicy.pdf" target="_blank">Privacy Policy
                    </a></p>
                </div>
            </div>
        </>,

    },
];