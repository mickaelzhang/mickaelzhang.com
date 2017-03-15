import React, { Component } from "react";

import HomeScene from "@scenes/HomeScene";

class HomeContainer extends Component {
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
          url: '//www.vaivai.fr',
          isDisplayed: true
        },
        {
          name: 'Julien Liénard',
          slug: 'julien-lienard',
          type: 'WordPress Theme Development',
          url: '//www.julienlienard.net/',
          isDisplayed: true
        },
        {
          name: 'Packshot Creator',
          slug: 'packshot-create',
          type: 'Front-End Development',
          url: '//packshot-creator.com',
          isDisplayed: true
        },
        {
          name: 'Parme Avocats',
          slug: 'parme-avocats',
          type: 'Front-End Development',
          url: '//www.parme-avocats.com',
          isDisplayed: true
        },
      ],
      returnToTop: {
        isActive: false
      }
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const topPos  = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    // Change state if window view is low enough and if the state would be different than de previous one
    if ((windowHeight < topPos) != this.state.returnToTop.isActive) {
      this.setState({ returnToTop: { isActive: !this.state.returnToTop.isActive } });
    }
  }

  render() {
    return (
      <HomeScene
        handleScroll={this.handleScroll}
        data={this.state}
      />
    );
  }
}

export default HomeContainer;