import React from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import ProjectPreview from "../ProjectPreview";

import "./styles.scss";

const PreviewList = ({previewNumber, slug}) => {
  const previewList = [];

  for (var i = 0; i < previewNumber; i++) {
    previewList.push(<ProjectPreview key={i} slug={slug} index={i} />)
  }

  return (
    <CSSTransitionGroup
        transitionName="PreviewList"
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnter={false}
        transitionLeave={false}>
      <div className="PreviewList">
        {previewList}
      </div>
    </CSSTransitionGroup>
  );
};

export default PreviewList;