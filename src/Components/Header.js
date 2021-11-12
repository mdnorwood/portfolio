import React, { Component, useState } from 'react';
import ParticlesBg  from "particles-bg";
import './Header-Styles.css';

class Header extends Component {

  render() {

    if(this.props.data){
       var project = this.props.data.project;
       var github = this.props.data.github;
      var name = this.props.data.name;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
       <div>
       <nav id="nav-wrap" style={{ backgroundColor: 'black' }}>
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">Experience</a></li>
               <li><a className="smoothscroll" href="#resume">Resumé</a></li>
               <li><a className="smoothscroll" href="#portfolio">Web Portfolio</a></li>
               <li><a href="https://dalestreetwebdesign.com/">Web Services</a></li>
            </ul>
          </nav>
       <header id="home" className="header-overlay">
          <ParticlesBg color="#ffffff" num={200} type="cobweb" bg={true} />
          <div className="row banner">
             <div className="banner-text">
                <h1 className="responsive-headline">{name}</h1>
                <h3>{description}</h3>
                <hr />
                <ul className="social">
                   <a href={github} className="button btn github-btn"><i class="fab fa-github"></i>Github</a>
                </ul>
                <div>
                </div>
             </div>
          </div>
          <p className="scrolldown">
             <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
          </p>
       </header>
       </div>
    );
  }
}

export default Header;
