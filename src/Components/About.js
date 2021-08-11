import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var webexperience = this.props.data.webexperience;
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
            <h2>Web Experience</h2>
            <p>{webexperience}</p>
            <h2>Multimedia Experience</h2>
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
                     <a target="_blank" href='https://us7.list-manage.com/contact-form?u=daea54b2881619a66ef815217&form_id=5187f677a6d5390aef0c1e09d8470b9e' className="button"><i class="fas fa-address-book"></i>Contact Me</a>
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
