import React, { Component } from "react";
import { throttle } from "lodash";
import classNames from "classnames";

import "./styles.scss";

class ProjectItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisplayed: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const elem = this.projectItem.getBoundingClientRect();

    const elemRelativeToBorder = {
      Bottom: (window.innerHeight - elem.top),
      Top: (elem.bottom)
    };

    const offset = {
      top: window.innerHeight * 0.1,
      bottom: window.innerHeight * 0.1 + 50
    };

    if (this.state.isDisplayed) {
      // If the project is displayed, we hide it only if the project is
      // completely out of screen
      const isOutOfScreen = (elemRelativeToBorder.Bottom + offset.top) < 0
        || (elemRelativeToBorder.Top + offset.bottom) < 0;

      if (isOutOfScreen) {
        this.setState({isDisplayed: false});
      }
    } else {
      // If the project is not displayed, we display it only if the project
      // is a little bit visible
      const isInScreen = 0 < (elemRelativeToBorder.Bottom - offset.top)
        && 0 < (elemRelativeToBorder.Top - offset.bottom);

      if (isInScreen) {
        this.setState({isDisplayed: true});
      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScroll, 50));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', throttle(this.handleScroll, 50));
  }

  render() {
    const { name, type, url, slug, imgPath } = this.props;

    return (
      <article
        className={classNames(
          "ProjectItem",
          { "ProjectItem--displayed": this.state.isDisplayed }
        )}
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