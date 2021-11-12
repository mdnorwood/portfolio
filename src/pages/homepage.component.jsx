import React, {Component, useEffect, useState, lazy, Suspense} from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import Header from './../Components/Header';
import Footer from './../Components/Footer';
import About from './../Components/About';
import Resume from './../Components/Resume';
import Portfolio from './../Components/Portfolio';




const HomePage = () => {

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
        <div>
        <h1>Home</h1>
          <Header data={resumeData.main}/>
          <About data={resumeData.main}/>
          <Resume data={resumeData.resume}/>
          <Portfolio data={resumeData.portfolio}/>
          <Footer data={resumeData.main}/>
      </div>
    );
}

export default HomePage;