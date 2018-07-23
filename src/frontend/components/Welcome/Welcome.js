import React from 'react';
import WelcomeLogo from '../../logo/WelcomeLogo.png';
import './Welcome.css'

class Welcome extends React.Component {
    render(){
        return (
            <div className='welcome'>
                <header className='welcomeHeader'>
                    <img src={WelcomeLogo} className='welcomeLogo' alt='welcomeLogo' />
                    <h1 className='welcomeTitle'>Welcome to Kodflix</h1>
                </header>
            </div>
        )
    }
}
export default Welcome;