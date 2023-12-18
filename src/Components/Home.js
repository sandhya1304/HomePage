import React from 'react';
import Bg from './Background.png';
import './HomePage.css'; 

const Home = () => {
    const handleLearnAboutSourceClick = () => {
        alert("Learn about Source button clicked!");
      };
    
      const handleGetNotifiedClick = () => {
        alert("Get Notified button clicked!");
      };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className='display-3'>Demand More Power</h1>
                        <h1 className='display-4'>Over Your Data</h1>
                        <p className="subtitle">
                            Own the internet of the future, with decentralized tools and infrastructure that<br />
                            prioritize data interoperability, privacy preservation, and trustless ownership.
                        </p>
                        <div className="button-container">
                            <a href="#" className="btn btn-primary-blue mb-2 mb-md-0"  onClick={handleLearnAboutSourceClick}>Learn about Source</a>
                            <a href="#" className="btn btn-primary-white" onClick={handleGetNotifiedClick} >Get Notified</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
