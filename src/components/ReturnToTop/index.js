import React, { Component } from "react";
import classNames from "classnames";
import { throttle } from "lodash";

import SvgIconReturnToTop from "./components/SvgIconReturnToTop";

import "./styles.scss";

class ReturnToTop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = throttle(this.handleClick.bind(this), 500);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div
        onClick={this.handleClick}
        className={classNames(
          'ReturnToTop',
          { 'ReturnToTop--active': this.state.isActive }
        )}
      >
        <SvgIconReturnToTop className="ReturnToTop__Icon"/>
        <span className="ReturnToTop__Text">top</span>
      </div>
    );
  }

  handleScroll() {
    const topPos  = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    // Change state if window view is low enough and if the state would be different than de previous one
    if ((windowHeight < topPos) == !this.state.isActive) {
      this.setState({ isActive: !this.state.isActive });
    }
  }

  handleClick() {
    this.scrollToTop(400);
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