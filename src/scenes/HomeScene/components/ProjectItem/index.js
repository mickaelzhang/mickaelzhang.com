import React, { Component } from "react";
import { throttle } from "lodash";
import classNames from "classnames";
import { Link } from 'react-router-dom';

import "./styles.scss";

class ProjectItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisplayed: true,
      isAbove: false,
      isUnder: false
    };

    this.updateElemState = throttle(this.updateElemState.bind(this), 50);
  }

  componentDidMount() {
    this.updateElemState();

    window.addEventListener('scroll', this.updateElemState);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateElemState);
  }

  updateElemState() {
    const elem = this.projectItem.getBoundingClientRect();

    const elemRelativeToBorder = {
      Bottom: (window.innerHeight - elem.top),
      Top: (elem.bottom)
    };

    if (this.state.isDisplayed) {
      // If the project is displayed, we hide it only if the project is
      // completely out of screen
      const isUnderWindow = (elemRelativeToBorder.Bottom) < 0;
      const isAboveWindow = (elemRelativeToBorder.Top) < 0;

      if (isUnderWindow || isAboveWindow) {
        this.setState({
          isDisplayed: false,
          isAbove: isAboveWindow,
          isUnder: isUnderWindow
        });
      }
    } else {
      // If the project is not displayed, we display it only if the project
      // is a little bit visible
      const isOnScreen = 0 < (elemRelativeToBorder.Bottom)
        && 0 < (elemRelativeToBorder.Top);

      if (isOnScreen) {
        this.setState({
          isDisplayed: true,
          isAbove: false,
          isUnder: false
        });
      }
    }
  }

  render() {
    const { name, type, url, slug } = this.props;
    const imgPath = require('@shared/images/'+slug+'.png');

    return (
      <article
        className={classNames(
          "ProjectItem",
          {
            "ProjectItem--displayed": this.state.isDisplayed,
            "ProjectItem--above": this.state.isAbove,
            "ProjectItem--under": this.state.isUnder,
          }
        )}
        ref={(ref) => this.projectItem = ref}
      >
        <Link className="ProjectItem__Link" to={`/projects/${slug}`}>
          <div className="ProjectItem__Visual" style={{backgroundImage: `url(${imgPath})`}}>
          </div>
          <div className="ProjectItem__Title">
              <span className="ProjectItem__Name">{name}</span>
              <span className="ProjectItem__Role">{type}</span>
          </div>
        </Link>
      </article>
    );
  }
}

export default ProjectItem;