import * as React from 'react';
import { connect } from 'react-redux';
import * as classNames from 'classnames';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { AppState, layouts } from '@reducers/index';
import {
  PageTransitionStatus,
  startPageTransitionAction,
  finishPageTransitionAction,
} from '@actions/layouts';

import './InternalLink.scss';

interface StateProps {
  pageTransitionStatus: string;
}

interface DispatchProps {
  startPageTransitionAction: () => void;
  finishPageTransitionAction: () => void;
}

interface ComponentProps extends RouteComponentProps < {} > {
  children: string | JSX.Element;
  className?: string;
  to: string;
}

type InternalLinkProps = StateProps & DispatchProps & ComponentProps;

class InternalLink extends React.Component<InternalLinkProps> {
  state = {
    clicked: false
  };

  componentWillReceiveProps(nextProps: InternalLinkProps) {
    const transitionPaused = this.props.pageTransitionStatus === PageTransitionStatus.START
      && nextProps.pageTransitionStatus === PageTransitionStatus.MIDDLE;

    if (this.state.clicked &&  transitionPaused) {
      this.props.history.push(this.props.to);
      this.props.finishPageTransitionAction();
      this.setState({ clicked: false });
    }
  }

  render() {
    const { className, children } = this.props;
    const internalLinkClasses = classNames('InternalLink', className);
    console.log(this.props);

    return (
      <span
        className={internalLinkClasses}
        onClick={this.handleClick}
      >
        {children}
      </span>
    );
  }

  handleClick = () => {
    this.setState({ clicked: true });
    this.props.startPageTransitionAction();
  }
}

// const InternalLink: React.SFC<InternalLinkAllProps> = ({ className, children, to }) => {
//   const internalLinkClasses = classNames('InternalLink', className);

//   return <Link to={to} className={internalLinkClasses}>{children}</Link>;
// };

const mapStateToProps = (state: AppState) => ({
  pageTransitionStatus: layouts.getPageTransitionStatus(state),
});

const mapDispatchToProps = {
  startPageTransitionAction,
  finishPageTransitionAction,
};

const ConnectedInternalLink = connect<StateProps, DispatchProps, ComponentProps>(
  mapStateToProps,
  mapDispatchToProps
)(InternalLink);

export default withRouter(ConnectedInternalLink);