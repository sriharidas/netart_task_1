import React from 'react'
import './style.css'
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'
const Main = ()=> (
    <div classNameName="main-container">
            <div className="main-content-1">
                <div className="img-1">
                    <img src={img1} alt=""/>
                </div>
                <div className="cont-2">
                    <div>
                        <p> <b> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b></p>
                        <ul>
                            <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>

                        </ul>

                    </div>
                    <div className="img-2">
                        <img src={img2} alt=""/>
                    </div>
                    <div>
                        <p>
                            Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.

                        </p>
                    </div>
                </div>
            </div>
            <div className="main-content-2">
                <p>
                    INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
                </p>
                <div className="main-image-container">
                   <img src={img3} alt=""/>
                </div>
                <div className="main-item">
                    <p> Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
                </div>
            </div>
        </div>
)
export default Main