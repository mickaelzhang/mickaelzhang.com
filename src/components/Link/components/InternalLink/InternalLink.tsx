import * as React from 'react';
import { connect } from 'react-redux';
import * as classNames from 'classnames';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { AppState } from '@reducers/index';

import './InternalLink.scss';

interface StateProps {
}

interface DispatchProps {
}

interface ComponentProps {
  children: string | JSX.Element;
  className?: string;
  to: string;
}

type InternalLinkAllProps = StateProps & DispatchProps & ComponentProps & RouteComponentProps<any>;

class InternalLink extends React.Component<InternalLinkAllProps> {
  render() {
    const { className, children } = this.props;
    const internalLinkClasses = classNames('InternalLink', className);

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
    console.log('this is handleClick');
  }
}

// const InternalLink: React.SFC<InternalLinkAllProps> = ({ className, children, to }) => {
//   const internalLinkClasses = classNames('InternalLink', className);

//   return <Link to={to} className={internalLinkClasses}>{children}</Link>;
// };

const mapStateToProps = (state: AppState) => ({
});

const mapDispatchToProps = {
};

export default withRouter<InternalLinkAllProps>(connect<StateProps, DispatchProps, ComponentProps> (
  mapStateToProps,
  mapDispatchToProps
)(InternalLink));