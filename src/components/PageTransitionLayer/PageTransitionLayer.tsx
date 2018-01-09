import * as React from 'react';
import * as classNames from 'classnames';

import animations from './animations.js';
import './PageTransitionLayer.scss';

interface PageTransitionLayerProps {
  className?: string;
  isActive: boolean;
}

class PageTransitionLayer extends React.Component<PageTransitionLayerProps> {
  component: HTMLDivElement | null;

  componentWillReceiveProps(nextProps: PageTransitionLayerProps) {
    const showLayer = !this.props.isActive && nextProps.isActive;
    const hideLayer = this.props.isActive && !nextProps.isActive;

    if (showLayer) {
      animations.show(this.component);
    } else if (hideLayer) {
      animations.hide(this.component);
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