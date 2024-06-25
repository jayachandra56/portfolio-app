import React from 'react'
import './experience.css'
import restaurantWeb from '../../images/restaurantWeb.png';
import restaurantMobile from '../../images/smartRest.gif';
import venuegif from '../../images/venuebees.gif';
import dilpay from '../../images/dilpay.gif';
function experience() {
    return (
        <div className="fluid-container projects" id="projectsID">
            <h1>Projects</h1>
            <div className="contanier shadow project-card">
                <h3>VenueBees</h3>
                <p className="projectDesc">Provides rich and relevant travel-related information to users on the move. The idea is to create a smart travel guide app that users can access anytime and from anywhere.
                </p>
                <img className="image" src={venuegif} alt="VenueBees" />
            </div>
            <div className="contanier shadow project-card">
                <h3>Kolors</h3>
                <p className="projectDesc">The main objective of this Android project is to provide a ​private online consultation that is taken by Health Counselors to analyse and help users to work towards their weight loss goals.​ The idea is to make an app that users can keep track of the complete weight reducing process.This​ saves time and traveling to users waiting for appointments.

                </p>
            </div>
            <div className="contanier shadow project-card">
                <h3>AvaniGroup RealEstate</h3>
                <p className="projectDesc">Avani is a real estate E-Commerce web application, where users can search for the properties which are available in different locations.
                </p>
            </div>
            <div className="contanier shadow project-card">
                <h3>Smart Restaurant</h3>
                <p className="projectDesc">The goal of this project is to design and implement an online restaurant
                    reservation system that would enable diners to order food and also reserve
                    tables and parking spaces at restaurants to optimize food ordering and table
                    reservation. This will be managed by the owner to check the booking and make
                    the availability for the customer. This system is wake to provide service
                    facilitating both restaurant and also the customer and hence makes it a best
                    competitive tool.The services provided include food ordering, managing the
                    reservations of tables and vehicle parking spaces for the customer.
                </p>
                <img className="image" src={restaurantMobile} alt="Smart Restaurant" />
                <img className="imageWeb" src={restaurantWeb} alt="Smart Restaurant" />
            </div>
            <div className="contanier shadow project-card">
                <h3>DilPay</h3>
                <p className="projectDesc">DilPay is a multi-purpose payments app encapsulated by online bus ticket bookings, mobile recharge, DTH Recharge, and also utility bill payment services.
                </p>
                <img className="image" src={dilpay} alt="DilPay" />
            </div>
            <div className="contanier shadow project-card">
                <h3>Trinity Payment Solutions</h3>
                <p className="projectDesc">Trinity Payment Solutions is a US-based company dedicated to supporting merchants. Trinity web application is designed to streamline the process of obtaining business loans and managing business credit cards.
                </p>
            </div>
            <div className="contanier shadow project-card">
                <h3>KIRKE ( VERIZON Product )</h3>
                <p className="projectDesc">KIRKE is a VERIZON product in the US. KIRKE is a pretty nifty ticketing tool that helps cell tower operators keep everything running smoothly. Whenever there's a need at a cell tower, like swapping out some hardware or updating the software, the client just jumps into Kirke and creates a new ticket.
                </p>
                <p className="projectDesc">Once the ticket's in the system, they can assign it to the right on-field technician to take care of it. The cool thing is, everyone can track the ticket's progress right from Kirke. No more wondering what's happening - you just log in and see the status updates.
                </p>
            </div>
        </div>
    )
}
export default experience