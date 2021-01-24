import React from 'react'
import logo from '../images/logo.png'
const Head = () => (
<div style={{
    width:'100%',
    height: 'auto'
}}>
            <div className="header-container" style={{
                width: '100%'
            }}>
                <div className="logo" style={{
                    width: 'fit-content',
                     height: 'auto',
                     margin:'auto'
                }}>
                    <img src={logo} alt="Logo" style={{
                         width: '50%',
                        height: 'inherit',
                        display: 'block',
                        margin: 'auto'
                    }}/>
                </div>
            </div>
        </div>
)

export default Head;