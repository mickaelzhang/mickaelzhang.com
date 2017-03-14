import React, { Component } from "react";

import Logo from "@components/Logo";
import ReturnToTop from "@components/ReturnToTop";
import AboutMe from "./components/AboutMe";
import ProjectList from "./components/ProjectList";

import "./styles.scss";

class HomeScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Mickael Zhang',
      email: 'mickael.zhg@gmail.com',
      github: '//github.com/mickaelzhang',
      description: `
        French student at Hetic looking for an summer intership in FrontEnd
        Development from July to October. Feel free to contact me.
      `,
      projects: [
        {
          name: 'Vaivai',
          slug: 'vaivai',
          type: 'WordPress Theme Development',
          url: '//www.vaivai.fr'
        },
        {
          name: 'Julien Liénard',
          slug: 'julien-lienard',
          type: 'WordPress Theme Development',
          url: '//www.julienlienard.net/'
        },
        {
          name: 'Packshot Creator',
          slug: 'packshot-create',
          type: 'Front-End Development',
          url: '//packshot-creator.com'
        },
        {
          name: 'Parme Avocats',
          slug: 'parme-avocats',
          type: 'Front-End Development',
          url: '//www.parme-avocats.com'
        },
      ],
      window: {
        viewPosY: 0
      }
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const top  = window.pageYOffset || document.documentElement.scrollTop;

    console.log(`top: ${top}`);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div className="HomeScene" onScroll={this.handleScroll}>
        <div className="HomeScene__Container">
          <Logo title={this.state.title}/>
          <AboutMe
            text={this.state.description}
            email={this.state.email}
            github={this.state.github}
          />
          <ProjectList projects={this.state.projects}/>
          <ReturnToTop isActive={true} />
        </div>
      </div>
    );
  }
}

export default HomeScene;