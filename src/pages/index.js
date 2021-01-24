/*import React from "react"
import Helmet from 'react-helmet'
//import Head from '../components/head'
//import Main from '../components/main'
import {Styled ,jsx} from 'theme-ui'

import '../gatsby-plugin-theme-ui/index'
import logo from '../images/logo.png'
import image_1 from '../images/1.png'
import  image_2 from '../images/2.png'
import image_3 from '../images/3.png'


const spanStyle = {
        padding: '0px 5px 0px 5px',
        borderRight: '2px solid red',
        fontSize: '15px'

}
const footerStyle= {
    width:'100%',
    height: ['auto','auto','80px'],
    display: 'flex',
    flexDirection: ['column','column','row'],
    justifyContent:'space-evenly',
    alignContent:'center',
    alignItems: ['flex-start','flex-start','center'],
    textAlign: ['left','left','center'],
    backgroundColor: 'primary'

}
const smLink = {
        width: ['100%','100%','fit-content'],
        height: '100%',
        padding: '10px 10px 10px 10px',
        display:'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: ['flex-start','flex-start','center'],
        textAlign: ['left','left','center'],
        color: 'footer'
}

const IndexPage = ()=> (
    <div>
        <Helmet>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
             <script src="https://kit.fontawesome.com/yourcode.js"></script>
        </Helmet>
        <div class="main" sx={{ background: 'linear-gradient(#fff,lightyellow,rgb(238, 238, 184))', width: '100%', height:'auto' , textAlign: 'justify', fontSize:['12px','15px', '18px']}}>
            <div class="header">
            <img src={logo} sx={{width:'auto',height:['80px','100px','150px'],display:'block', margin:'auto'}}/>
                <div class="header-main" sx={{ width:'100%', height:'100%', display:'flex', flexDirection:['column','column', 'row'], justifyContent:'center',Height:['auto','auto', 'auto']}}>
                    <div class="header-1" sx={{width:['100%','100%', '75%'],height:'100%',margin:'auto', display:'flex', justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                        <img src={image_1} sx={{width:['auto','auto','auto'],display:'block',margin:['0 auto','0 auto', null], height:['50vh','50vh', '80%']}}/>
                    </div>
                    <div class="header-2" sx={{width:['100%','100%', 'auto'], height:'100%' ,fontSize: ['11px', '13px', '15px']}} >
                        <div sx={{width:['100%','100%', '100%'], margin:'auto'}}>
                            <div sx={{width:['90%','90%', null], margin:['auto','auto', '0']}}>
                                <h4>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
                                    <ul>
                                        <li>C.R.I.s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                                        <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                                    </ul>
                            </div>
                            <div>
                                <img src={image_2} sx={{height:['25vh','30vh','auto'], width:['auto','auto','80%'], display:'block', margin:'15px auto'}}/>
                            </div>
                            <div sx={{width:['90%', null], margin:['auto','auto', null]}}>
                                    Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contents" sx={{height:'fit-content', width:['98%','90%', '95%'], margin:['auto','auto','auto']}}>
                <div class="main-1" sx={{fontSize:'15px'}}>
INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
                </div>
                <div>
                    <img src={image_3} sx={{width:['100%', '80%'], height:['35%','35vh','100%'], display:'block', margin:[null, 'auto']}} />
                </div>
                <div class="main-1" sx={{width:['98%','90%', 'fit-content'], margin:[null, ' 10px auto'] }}>
                    Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
                </div>
            </div>
            <div sx={{borderTop:'2px solid red', width:'95%', margin:'auto', padding: "10px 0px"}}>
                <h4 sx={{textAlign:'center'}}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
                <div sx={{textAlign:'center', width:['100%','100%','95%'], margin: 'auto'}}>
                    <span sx={spanStyle}>CHEMICALS & PROCESS</span>
                    <span sx={spanStyle}>POWER </span>
                    <span sx={spanStyle}> WATER & WASTE WATER</span>
                    <span sx={spanStyle}>OILS & GAS</span>
                    <span sx={spanStyle}> PHARMA </span>
                    <span sx={spanStyle}> SUGARS & DISTILLERIES</span>
                    <span sx={spanStyle}>PAPER & PULP</span>
                    <span sx={spanStyle}>MARINE & DEFENCE</span>
                    <span sx={spanStyle}>METAL & MINING</span>
                    <span sx={spanStyle}> FOOD & BEVERAGE</span>
                    <span sx={spanStyle}>PETROCHEMICAL & REFINERIES</span>
                    <span sx={spanStyle}>SOLAR  </span>
                    <span sx={spanStyle}>BUILDING  </span>
                    <span sx={spanStyle}>HVAC</span>
                    <span sx={spanStyle}>FIRE FIGHTING</span>
                    <span sx={{padding: '0px 5px 0px 5px',
                    fontSize: '15px'
            }}>AGRICULTURE & RESIDENTIAL</span>
                </div>
            </div>
            <div class={"footer"} sx={footerStyle}>
                <div sx={smLink}>
                     <span className="fa-stack ">
                            <i className="fa fa-circle-thin fa-stack-1x" style={{backgroundColor: 'white'}}></i>
                            <i className="fa fa-phone fa-stack-1x" aria-hidden="true" style={{color: 'red'}}></i>
                        </span>
                    <span>Toll free 1800 200 1234</span>
                </div>
                <div sx={smLink}>
                    <span class="fa-stack">
                            <i class="fa fa-circle-thin fa-stack-1x" sx={{backgroundColor: 'white'}}></i>
                            <i class="fa  fa-facebook  fa-stack-1x" aria-hidden="true" sx={{color: 'red'}}></i>
                        </span>
                    <span>www.facebook.com/cripumps</span>
                </div>
                <div sx={smLink}>
                    <span class="fa-stack">
                            <i class="fa fa-circle-thin fa-stack-1x" sx={{backgroundColor: 'white'}}></i>
                            <i class="fa fa-globe fa-stack-1x" aria-hidden="true" sx={{color: 'red'}}></i>
                        </span>
                    <span>www.crigroups.com</span>
                </div>
            </div>
            </div>
</div>
)

export default IndexPage
*/


import React from 'react'
/** @jsx jsx*/
import {Styled ,jsx} from 'theme-ui'
import '../gatsby-plugin-theme-ui/index'
import logo from '../images/logo.png'
import image_1 from '../images/1.png'
import  image_2 from '../images/2.png'
import image_3 from '../images/3.png'
import Helmet from 'react-helmet'

/* styles */

const header = {
    width: "100%",
    height: "120px"
}
const headerImg = {
    display: 'block',
    width: "auto",
    height: "120px",
    margin: 'auto'
}
const section_1 = {
    width:'100%',
    Height: 'calc(100vh - 120px)',
    display: 'flex',
    flexDirection: ['column','column','row'],
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
}
const section_1_left = {
    width: ['100%','100%','35vw'],
    height: 'auto',
}
const section_1_img_l = {
    display:'block',
    width:['auto','auto','100%'],
    height: ['35vh','50vh','auto'],
    margin:['auto','auto',null]
}
const section_12 = {
    width: ['95%','95%','60vw'],
    height: 'fit-content'
}
const section_12_img = {
    display: 'block',
    width: ['95%','90%','80%'],
    height: '25%',
    margin: '15px auto'
}
const section_12_containers = {
    width: ['95%','95%','100%'],
    height: ['auto','auto','33%'],
    textOverflow: 'ellpsis',
    margin: "10px auto",
    padding: 'body'
}
const section_2 = {
    width:['95%','95%','100%'],
    height: 'auto',
    margin: 'auto'
}
const section_2_content = {
    width: ["95%","90%","95%"],
    height:'auto',
    margin: '7px auto'
}
const section_2_img = {
    width: ['auto','auto','90%'],
    height: ['30vh','30vh','100%'],
    display: 'block',
    margin: 'auto'
}

const spanStyle = {
        padding: '0px 5px 0px 5px',
        borderRight: '2px solid red',
        fontSize: '15px'

}
const footerStyle= {
    width:'100%',
    height: ['auto','auto','80px'],
    display: 'flex',
    flexDirection: ['column','column','row'],
    justifyContent:'space-evenly',
    alignContent:'center',
    alignItems: ['flex-start','flex-start','center'],
    textAlign: ['left','left','center'],
    backgroundColor: 'footer'

}
const smLink = {
        width: ['100%','100%','fit-content'],
        height: '100%',
        padding: '10px 10px 10px 10px',
        display:'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: ['flex-start','flex-start','center'],
        textAlign: ['left','left','center'],
        color: 'footerText'
}


const centered_cont = {
        width: ['90%','90%','fit-content'],
        height:'auto',
        margin: '15px auto',
        textAlign: 'center'
    }


const IndexPage = () => (
    <div>
        <helmet>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
             <script src="https://kit.fontawesome.com/yourcode.js"></script>
        </helmet>
        <div sx={{breakpoints: ['420px', '840px', '1200px'],width:"100%", height:"auto",background: "linear-gradient(#fff,lightyellow,rgb(238, 238, 184))", fontSize: ['13px','15px','17px'], textAlign:'justify'}}>

        <div class="header" sx={header}>
            <img src={logo} sx={headerImg}/>
        </div>

        <div class="section-1" sx={section_1}>
            <div class="cont-1" sx={section_1_left}>
                <img src={image_1} sx={section_1_img_l} />
            </div>
            <div class="cont-2" sx={section_12}>
                <div sx={section_12_containers}>
                    <h4>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
                    <ul>
                    <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                    </ul>
                <div sx={section_12_containers}>
                    <img src={image_2} sx={section_12_img}/>
                </div>
                <div sx={section_12_containers}>
Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                </div>
            </div>
        </div>
        </div>
        <div class="section-2"  sx={section_2}>
            <div  sx={section_2_content}>
INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
            </div>

            <div sx={section_2_content}>
                <img src={image_3} sx={section_2_img} />
            </div>

            <div sx={centered_cont}>
Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
            </div>
        </div>
         <div sx={{borderTop:'2px solid red', width:'95%', margin:'auto', padding: "10px 0px"}}>
                <h4 sx={{textAlign:'center'}}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
                <div sx={{textAlign:'center', width:['100%','100%','95%'], margin: 'auto'}}>
                    <span sx={spanStyle}>CHEMICALS & PROCESS</span>
                    <span sx={spanStyle}>POWER </span>
                    <span sx={spanStyle}> WATER & WASTE WATER</span>
                    <span sx={spanStyle}>OILS & GAS</span>
                    <span sx={spanStyle}> PHARMA </span>
                    <span sx={spanStyle}> SUGARS & DISTILLERIES</span>
                    <span sx={spanStyle}>PAPER & PULP</span>
                    <span sx={spanStyle}>MARINE & DEFENCE</span>
                    <span sx={spanStyle}>METAL & MINING</span>
                    <span sx={spanStyle}> FOOD & BEVERAGE</span>
                    <span sx={spanStyle}>PETROCHEMICAL & REFINERIES</span>
                    <span sx={spanStyle}>SOLAR  </span>
                    <span sx={spanStyle}>BUILDING  </span>
                    <span sx={spanStyle}>HVAC</span>
                    <span sx={spanStyle}>FIRE FIGHTING</span>
                    <span sx={{padding: '0px 5px 0px 5px',
                    fontSize: '15px'
            }}>AGRICULTURE & RESIDENTIAL</span>
                </div>
            </div>
            <div class={"footer"} sx={footerStyle}>
                <div sx={smLink}>
                     <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
                    <span  sx={{padding:'5px', display:'block'}}>Toll free 1800 200 1234</span>
                </div>
                <div sx={smLink}>
                    <i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
                    <span sx={{padding:'5px', display:'block'}}>www.facebook.com/cripumps</span>
                </div>
                <div sx={smLink}>
                    <i class="fa fa-globe fa-2x" aria-hidden="true"></i>
                    <span sx={{padding:'5px', display:'block'}}>www.crigroups.com</span>
                </div>

            </div>
            </div>
    </div>





)
export default IndexPage