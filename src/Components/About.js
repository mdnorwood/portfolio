import React, { Component } from 'react';
import resumePDF from './../Assets/Marcus_Dale_Norwood_Resumé_for_Web_Positions.pdf';
const WebServices = 'https://dalestreetwebdesign.com/';
const AudioServices = 'https://dalestreetstudio.com/';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var reactwebexperience = this.props.data.reactwebexperience;
      var cmswebexperience = this.props.data.cmswebexperience;
      var vanillawebexperience = this.props.data.vanillawebexperience;
      var netwebexperience = this.props.data.netwebexperience;
      var projectmanagementexperience = this.props.data.projectmanagementexperience;
      var multimediaexperience = this.props.data.multimediaexperience;
      var audioexperience = this.props.data.audioexperience;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Nordic Giant Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <h2>Web Development & Support</h2>
            <h3>React + Firebase</h3>
            <p>{reactwebexperience}</p>
            <h3>Drupal & Wordpress CMS</h3>
            <p>{cmswebexperience}</p>
            <h3>Vanilla HTML, CSS, Javascript</h3>
            <p>{vanillawebexperience}</p>
            <h3>.NET MVC C# & Other</h3>
            <p>{netwebexperience}</p>
            <h2>Web Project Management</h2>
            <p>{projectmanagementexperience}</p>
            <h2>Multimedia Production</h2>
            <p>{multimediaexperience}</p>
            <h2>Audio Experience</h2>
            <p>{audioexperience}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>

               <div className="columns download">
                  <p>
                     <a target="_blank" rel="noopener noreferrer" href='https://us7.list-manage.com/contact-form?u=daea54b2881619a66ef815217&form_id=5187f677a6d5390aef0c1e09d8470b9e' className="button"><i class="fas fa-address-book"></i>Contact Me</a>
                     <a href={resumePDF} target="_blank" rel="noopener noreferrer"  className="button btn github-btn"><i class="fab fa-resume"></i>Download Resume</a>
                     <a href={WebServices} target="_blank" rel="noopener noreferrer"  className="button btn github-btn"><i class="fab fa-web"></i>Web Services</a>
                     <a href={AudioServices} target="_blank" rel="noopener noreferrer"  className="button btn github-btn"><i class="fab fa-audio"></i>Audio Services</a>
                  </p>
               </div>

            </div>

         </div>
      </div>

   </section>
    );
  }
}

export default About;
