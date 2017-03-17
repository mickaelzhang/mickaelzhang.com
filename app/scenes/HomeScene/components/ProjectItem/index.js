import React, { Component } from "react";
import { debounce } from "lodash";

import "./styles.scss";

class ProjectItem extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    console.log('SCROLL');
  }

  componentDidMount() {
    window.addEventListener('scroll', debounce(this.handleScroll, 50));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', debounce(this.handleScroll, 50));
  }

  render() {
    const { name, type, url, slug, imgPath } = this.props;

    return (
      <article
        className="ProjectItem"
        ref={(ref) => this.projectItem = ref}
      >
        <a className="ProjectItem__Link" href={url}>
          <div className="ProjectItem__Visual" style={{backgroundImage: `url(${imgPath + slug}.png)`}}></div>
          <div className="ProjectItem__Title">
              <span className="ProjectItem__Name">{name}</span>
              <span className="ProjectItem__Role">{type}</span>
          </div>
        </a>
      </article>
    );
  }
}

export default ProjectItem;