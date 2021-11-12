import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title}>
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>These are just some fun web projects I've built recently. Especially the React and Javascript based builds. Along with a few past responsive site build examples. In addition I have tons of projects and sites that I've built in the past decade via stacks and companies mentioned above. </h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
