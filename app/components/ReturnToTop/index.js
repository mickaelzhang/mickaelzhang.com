import React, { Component } from "react";
import classNames from "classnames";

import SvgIconReturnToTop from "./components/SvgIconReturnToTop";

import "./styles.scss";

class ReturnToTop extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.scrollToTop(600);
  }

  render() {
    return (
      <div
        onClick={this.handleClick}
        className={classNames(
          'ReturnToTop',
          { 'ReturnToTop--active': this.props.isActive }
        )}
      >
        <SvgIconReturnToTop className="ReturnToTop__Icon"/>
        <span className="ReturnToTop__Text">top</span>
      </div>
    );
  }

  scrollToTop(scrollDuration) {
    const scrollStep = -window.scrollY / (scrollDuration / 15);

    let scrollInterval = setInterval(function() {
      if ( window.scrollY != 0 ) {
        window.scrollBy( 0, scrollStep );
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }
}

export default ReturnToTop;