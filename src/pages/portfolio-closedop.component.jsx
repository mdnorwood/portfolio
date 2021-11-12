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
                                    <p>Click <a href="http://closedopp.com/salesforce-ppc-service.html">here</a> for live view.</p>
                                    <img className="bottom-5 screenshot-border" src="assets/images/ClosedOpp/ClosedOpp-Screenshot-Optimization.png" width="1902" height="1695" alt="ClosedOpp-Screenshot-Optimization" />
                                </center>
                            </div>                  
                        </div>
                        <div label="Process Page">
                            <div className="col-md-12">
                                <center>
                                    <h3>Process</h3>
                                    <p>Click <a href="http://closedopp.com/process.html">here</a> for live view.</p>
                                        <img className="bottom-5 screenshot-border" src="assets/images/ClosedOpp/ClosedOpp-Screenshot-Process.png" width="1904" height="1440" alt="ClosedOpp-Home-Screenshot-Process" />
                                </center>
                            </div>   
                        </div>
                        <div label="Integration Page">
                            <div className="col-md-12">
                                <center>
                                    <h3>Integration</h3>
                                    <p>Click <a href="http://closedopp.com/salesforce-integration.html">here</a> for live view.</p>
                                    <img className="bottom-5 screenshot-border" src="assets/images/ClosedOpp/ClosedOpp-Screenshot-Integration.png" width="1904" height="1816" alt="ClosedOpp-Screenshot-Integration" />
                                </center>
                            </div> 
                        </div>
                        <div label="Reports Page">
                            <div className="col-md-12">
                            <center>
                                <h3>Reports</h3>
                                <p>Click <a href="http://closedopp.com/reports.html">here</a> for live view.</p>
                                <img className="bottom-5 screenshot-border" src="assets/images/ClosedOpp/ClosedOpp-Screenshot-Reports.png" width="1904" height="2072" alt="ClosedOpp-Home-Screenshot-Reports" />
                            </center>
                            </div>   
                        </div>
                        <div label="Our Guarantee Page">
                            <div className="col-md-12">
                            <center>
                                <h3>Our Guarantee</h3>
                                <p>Click <a href="http://closedopp.com/guarantee.html">here</a> for live view.</p>
                                <img className="bottom-5 screenshot-border" src="assets/images/ClosedOpp/ClosedOpp-Screenshot-OurGurantee.png" width="1904" height="1440" alt="ClosedOpp-Screenshot-Our-Guarantee" />
                            </center>
                            </div> 
                        </div>
                        <div label="Schedule a Demo Page">
                            <div className="col-md-12">
                            <center>
                                <h3>Schedule Demo</h3>
                                <p>Click <a href="http://closedopp.com/schedule-demo.html">here</a> for live view.</p>
                                <img className="bottom-5 screenshot-border" src="assets/images/ClosedOpp/ClosedOpp-Screenshot-Schedule-Demo.png" width="1902" height="1281" alt="ClosedOpp-Screenshot-Schedule-Demo" />
                            </center>
                            </div>   
                        </div>
                        <div label="Graphic Design Elements">
                            <div className="col-md-12">
                            <center>
                                <h3>Extras (Logo, Ads, Blog, etc.)</h3>
                            </center>
                            <ol>
                                <li>In addition to developing and maintaining the ClosedOpp responsive website that utilized HTML5, CSS3, Javascript, Bootstrap, various custom graphics and more, I also installed and a blog onto the main hosting server that was utilized. This blog was not used directly from Wordpress itself, but utilized their backend. Click <a href="http://closedopp.com/blog/">here</a> for live view of the installed <a href="http://closedopp.com/blog/">Wordpress Blog</a>. </li>
                                <li>I was also responsible for re-designing the ClosedOpp logo. There were two versions I built that were used, one with the full ClosedOpp wording, and one without.</li>
                                <li>Lastly, I also built numerous ads for online PPC ad campaigns and more. Some of these are shown below as well.</li>
                                </ol>
                                <hr/>
                                <center>
                                    <img src={Logo} width="800" height="160" alt="" />
                                </center>
                            <hr />
                                <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                                    <a className="thumbnail">
                                        <img className="img-responsive" src="assets/images/ClosedOpp/Add-Version-1-1.png" alt="" />
                                    </a>
                                </div>
                                <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                                    <a className="thumbnail">
                                        <img className="img-responsive" src="assets/images/ClosedOpp/Add-Version-1-2.png" alt="" />
                                    </a>
                                </div>
                                <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                                    <a className="thumbnail">
                                        <img className="img-responsive" src="assets/images/ClosedOpp/Add-Version-1-3.png" alt="" />
                                    </a>
                                </div>
                                <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                                    <a className="thumbnail">
                                        <img className="img-responsive" src="assets/images/ClosedOpp/Add-Version-1-4.png" alt="" />
                                    </a>
                                </div>
                                <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                                    <a className="thumbnail">
                                        <img className="img-responsive" src="assets/images/ClosedOpp/Add-Version-1-5.png" alt="" />
                                    </a>
                                </div>
                                <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                                    <a className="thumbnail">
                                        <img className="img-responsive" src="assets/images/ClosedOpp/Add-Version-2-1.png" alt="" />
                                    </a>
                                </div>
                                <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                                    <a className="thumbnail">
                                        <img className="img-responsive" src="assets/images/ClosedOpp/Add-Version-2-2.png" alt="" />
                                    </a>
                                </div>
                                <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                                    <a className="thumbnail">
                                        <img className="img-responsive" src="assets/images/ClosedOpp/Add-Version-2-3.png" alt="" />
                                    </a>
                                </div>
                            </div>     
                        </div>
                    </Tabs>
                </section>
            <Footer data={resumeData.main}/>

        </div>
    )
}

export default ClosedOppPortolioPage;
