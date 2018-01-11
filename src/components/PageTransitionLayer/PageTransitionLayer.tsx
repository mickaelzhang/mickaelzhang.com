import * as React from 'react';
import * as classNames from 'classnames';

import { PageTransitionStatus } from '@actions/layouts';

import animations from './animations.js';
import './PageTransitionLayer.scss';

interface PageTransitionLayerProps {
  className?: string;
  status: string;
  onTransitionPause: () => void;
  onTransitionEnd: () => void;
}

class PageTransitionLayer extends React.Component<PageTransitionLayerProps> {
  component: HTMLDivElement | null;

  componentWillReceiveProps(nextProps: PageTransitionLayerProps) {
    const transitionStarting = this.props.status === PageTransitionStatus.NONE
      && nextProps.status === PageTransitionStatus.START;
    const transitionEnding = this.props.status === PageTransitionStatus.MIDDLE
      && nextProps.status === PageTransitionStatus.END;

    if (transitionStarting) {
      animations.show(this.component, this.props.onTransitionPause);
    } else if (transitionEnding) {
      animations.hide(this.component, this.props.onTransitionEnd);
    }
  }

  render() {
    const { className } = this.props;
    const pageTransitionLayerClasses = classNames('PageTransitionLayer', className);

    return (
      <div
        className={pageTransitionLayerClasses}
        ref={component => { this.component = component; }}
      />
    );
  }
}

export default PageTransitionLayer;