import React, { Component } from "react";

import img from "@shared/images/julien-lienard.png";
import "./styles.scss";

class ProjectItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elem: {}
    };

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.updateItemSizes = this.updateItemSizes.bind(this);
  }

  componentDidMount() {
    this.updateItemSizes();

    window.addEventListener("resize", this.updateItemSizes);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateItemSizes);
  }

  handleMouseOver() {
    console.log(this.state.elem);
  }

  updateItemSizes() {
    const elem = this.projectItem.getBoundingClientRect();

    this.setState({elem: {
      height: elem.height,
      width: elem.width
    }});
  }

  render() {
    const { name, type, url } = this.props;

    return (
      <article
        className="ProjectItem"
        ref={(ref) => this.projectItem = ref}
        onMouseOver={this.handleMouseOver}
      >
        <div className="ProjectItem__Visual" style={{backgroundImage: `url(${img})`}}></div>
        <div className="ProjectItem__Title">
            <a className="ProjectItem__Name" href={url}>{name}</a>
            <a className="ProjectItem__Role" href={url}>{type}</a>
        </div>
      </article>
    );
  }
}

export default ProjectItem;