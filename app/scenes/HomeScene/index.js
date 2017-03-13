import React, { Component } from "react";

import Logo from "@components/Logo";
import AboutMe from "./components/AboutMe";
import ProjectList from "./components/ProjectList";

import "./styles.scss";

class HomeScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Mickael Zhang',
      email: 'mickael.zhg@gmail.com',
      github: 'github.com/mickaelzhang',
      description: `
        Le Lorem Ipsum est simplement du faux texte employé dans la composition
        et la mise en page avant impression. Le Lorem Ipsum est le faux texte
        standard de l’imprimerie depuis les années 1500, quand un peintre
        anonyme assembla ensemble des morceaux de texte pour réaliser un livre
        spécimen de polices de texte.
      `,
      projects: [
        {
          name: 'Vaivai',
          type: 'Front-End Development'
        },
        {
          name: 'Julien Liénard',
          type: 'Front-End Development'
        }
      ]
    };
  }

  render() {
    return (
      <div className="HomeScene">
        <div className="HomeScene__Container">
          <Logo title={this.state.title}/>
          <AboutMe
            text={this.state.description}
            email={this.state.email}
            github={this.state.github}
          />
          <ProjectList projects={this.state.projects} />
        </div>
      </div>
    );
  }
}

export default HomeScene;