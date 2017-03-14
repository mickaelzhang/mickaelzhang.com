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