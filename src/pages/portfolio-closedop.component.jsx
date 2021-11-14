import React, {useState, useEffect} from 'react';
import './css/closedop.styles.css';
import ReactGA from 'react-ga';
import $ from 'jquery';
import Footer from './../Components/Footer';
import ClosedOpMainLogo from './images/ClosedOpp/ClosedOpp-Logo-No-Text.png';
import Logo from './images/ClosedOpp/ClosedOpp-Full-Logo.png';
import ClosedOpScreenshot from './images/ClosedOpp/ClosedOpp-Screenshot.png';
import TabletScreenshotHome from './images/ClosedOpp/ClosedOpp-Tablet-Screenshot-Home.png';
import ResponsiveScreenshotHome from './images/ClosedOpp/ClosedOpp-Screenshot-Home-Responsive.png';
import OpenMobileMenu from './images/ClosedOpp/ClosedOpp-Mobile-Screenshot-Home-Menu.png';
import OptimizationPage from './images/ClosedOpp/ClosedOpp-Screenshot-Optimization.png';
import ProcessPage from './images/ClosedOpp/ClosedOpp-Screenshot-Process.png';
import IntegrationPage from './images/ClosedOpp/ClosedOpp-Screenshot-Integration.png';
import ReportsPage from './images/ClosedOpp/ClosedOpp-Screenshot-Reports.png';
import GuaranteePage from './images/ClosedOpp/ClosedOpp-Screenshot-OurGurantee.png';
import DemoPage from './images/ClosedOpp/ClosedOpp-Screenshot-Schedule-Demo.png';
import AdVersion1 from './images/ClosedOpp/Add-Version-1-1.png';
import AdVersion2 from './images/ClosedOpp/Add-Version-1-2.png';
import AdVersion3 from './images/ClosedOpp/Add-Version-1-3.png';
import AdVersion4 from './images/ClosedOpp/Add-Version-1-4.png';
import AdVersion5 from './images/ClosedOpp/Add-Version-1-5.png';
import AdVersion6 from './images/ClosedOpp/Add-Version-2-1.png';
import AdVersion7 from './images/ClosedOpp/Add-Version-2-2.png';
import AdVersion8 from './images/ClosedOpp/Add-Version-2-3.png';
import Tabs from "./../Components/tabs/Tabs";
const portfolioHomeURL = '/#portfolio';


const ClosedOppPortolioPage = () => {

    const [resumeData, setResumeData] = useState('')

    useEffect(() => {
  
      function getResumeData() {
        $.ajax({
          url:'./resumeData.json',
          dataType:'json',
          cache: false,
          success: function(data){
            setResumeData(data);
          }.bind(setResumeData),
          error: function(xhr, status, err){
            console.log(err);
            alert(err);
          }
        });
      }
      ReactGA.initialize('UA-110570651-1');
      ReactGA.pageview(window.location.pathname);
      getResumeData();
    }, []);
    return (
        <div style={{backgroundColor: 'white'}} id='home'>       
            <section className="pfblock-gray" >
                <div className="container">
                    <div className="row">
                        <div className="">
                            <center>
                                <img className="top-5" src={ClosedOpMainLogo} width="200" height="100" alt="ClosedOpp Logo" />
                            </center>
                        </div>
                    
                        <hr />
                        <h1>ClosedOp</h1>
                        <p>1-year contract for startup. Implemented the new re-build utlizing Bootstrap responsive framework and customizing it with various graphics and more. Redesigned the new logo and branding scheme including various ads for PPC campaigns. Also included a Wordpress blog hosted with the site domain itself.</p>
                        <a href={portfolioHomeURL} target="_blank" rel="noopener noreferrer"  className="button btn"><i class=""></i>Back to Portfolio</a>
                        </div>
                </div>

                <Tabs>
                    <div label="ClosedOp Home" class="row" style={{marginLeft: 'auto', marginRight: 'auto', width: '60%' }}>
                                                            
                                    <center>
                                        <h2 className="bottom-5px">Full Size Home</h2>
                                        <img className="bottom-5 screenshot-border" style={{width: '100%'}} src={ClosedOpScreenshot}alt="ClosedOpp-Home-Screenshot-Full" />
                                    </center>                           
                                    <hr/>
                                    <center> 
                                        <h3 className="bottom-5px">Tablet Size Home</h3>
                                        <img className="bottom-5 screenshot-border" style={{width: '60%'}} src={TabletScreenshotHome} alt="ClosedOpp-Home-Screenshot-Tablet" />
                                    </center>
                                    <hr/>                           
                                        <center>
                                            <h3 className="bottom-5px">Mobile Responsive Home</h3>
                                            <img className="bottom-5 screenshot-border" style={{width: '40%'}} src={ResponsiveScreenshotHome}  alt="ClosedOpp-Home-Screenshot-Mobile" />
                                        </center>
                                    <hr/>                            
                                        <center>
                                            <h3 className="bottom-5px">Mobile Size Opened Menu</h3>
                                            <img className="bottom-5 screenshot-border" style={{width: '30%'}} src={OpenMobileMenu} alt="ClosedOpp-Home-Screenshot-Mobile-Menu" />
                                        </center>                          
                        </div>
                        <div label="Optimization Page">
                            <div className="col-md-12">
                                <center>
                                    <h3>Optimization</h3>
                                    <img className="bottom-5 screenshot-border" src={OptimizationPage} width="1902" height="1695" alt="ClosedOpp-Screenshot-Optimization" />
                                </center>
                            </div>                  
                        </div>
                        <div label="Process Page">
                            <div className="col-md-12">
                                <center>
                                    <h3>Process</h3>
                                        <img className="bottom-5 screenshot-border" src={ProcessPage} width="1904" height="1440" alt="ClosedOpp-Home-Screenshot-Process" />
                                </center>
                            </div>   
                        </div>
                        <div label="Integration Page">
                            <div className="col-md-12">
                                <center>
                                    <h3>Integration</h3>
                                    <img className="bottom-5 screenshot-border" src={IntegrationPage} width="1904" height="1816" alt="ClosedOpp-Screenshot-Integration" />
                                </center>
                            </div> 
                        </div>
                        <div label="Reports Page">
                            <div className="col-md-12">
                            <center>
                                <h3>Reports</h3>
                                <img className="bottom-5 screenshot-border" src={ReportsPage} width="1904" height="2072" alt="ClosedOpp-Home-Screenshot-Reports" />
                            </center>
                            </div>   
                        </div>
                        <div label="Our Guarantee Page">
                            <div className="col-md-12">
                            <center>
                                <h3>Our Guarantee</h3>
                                <img className="bottom-5 screenshot-border" src={GuaranteePage} width="1904" height="1440" alt="ClosedOpp-Screenshot-Our-Guarantee" />
                            </center>
                            </div> 
                        </div>
                        <div label="Schedule a Demo Page">
                            <div className="col-md-12">
                            <center>
                                <h3>Schedule Demo</h3>
                                <img className="bottom-5 screenshot-border" src={DemoPage} width="1902" height="1281" alt="ClosedOpp-Screenshot-Schedule-Demo" />
                            </center>
                            </div>   
                        </div>
                        <div label="Graphic Design Elements">
                            <div className="col-md-12">
                            <center>
                                <h3>Extras (Logo, Ads, Blog, etc.)</h3>
                            </center>
                                <hr/>
                                <center>
                                    <img src={Logo} width="800" height="160" alt="" />
                                </center>
                            <hr />
                            <center>
                                <div style={{marginLeft: '20%', marginRight: '20%'}}>
                                    <div className="" style={{ float: 'left' }}>
                                        <a className="thumbnail">
                                            <img className="img-responsive" src={AdVersion1} alt="" />
                                        </a>
                                    </div>
                                    <div className="" style={{ float: 'left' }}>
                                        <a className="thumbnail">
                                            <img className="img-responsive" src={AdVersion2} alt="" />
                                        </a>
                                    </div>
                                    <div className="" style={{ float: 'left' }}>
                                        <a className="thumbnail">
                                            <img className="img-responsive" src={AdVersion3} alt="" />
                                        </a>
                                    </div>
                                    <div className="" style={{ float: 'left' }}>
                                        <a className="thumbnail">
                                            <img className="img-responsive" src={AdVersion4} alt="" />
                                        </a>
                                    </div>
                                    <div className="" style={{ float: 'left' }}>
                                        <a className="thumbnail">
                                            <img className="img-responsive" src={AdVersion5} alt="" />
                                        </a>
                                    </div>
                                    <div className="" style={{ float: 'left' }}>
                                        <a className="thumbnail">
                                            <img className="img-responsive" src={AdVersion6} alt="" />
                                        </a>
                                    </div>
                                    <div className="" style={{ float: 'left' }}>
                                        <a className="thumbnail">
                                            <img className="img-responsive" src={AdVersion7} alt="" />
                                        </a>
                                    </div>
                                    <div className="" style={{ float: 'left' }}>
                                        <a className="thumbnail">
                                            <img className="img-responsive" src={AdVersion8} alt="" />
                                        </a>
                                    </div>
                                </div>
                                </center>
                            </div>     
                        </div>
                    </Tabs>
                </section>
                <hr/>
                <Footer data={resumeData.main}/>
        </div>
    )
}

export default ClosedOppPortolioPage;
