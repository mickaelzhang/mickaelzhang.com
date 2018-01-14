import * as React from 'react';
import { connect } from 'react-redux';
import * as DOMPurify from 'dompurify';

import { AppState, getDetailsState } from '@reducers/index';
import { State as DetailsState } from '@reducers/details';
import Link from '@components/Link';

import './AboutContainer.scss';

interface StateProps {
  details: DetailsState | null;
}

class AboutContainer extends React.Component<StateProps> {
  render() {
    const { details } = this.props;

    if (!details) {
      return null;
    }

    const paragraphes = details.description.map(paragraph => (
      <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(paragraph) }} />
    ));

    return (
      <div className="About">
        <div className="About__Description">{paragraphes}</div>
        <div className="About__LinkList">
          <Link className="About__Link" to={details.github}>github</Link>
          <Link className="About__Link" to={details.resume}>resume</Link>
          <Link className="About__Link" to={details.email}>email</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  details: getDetailsState(state),
});

export default connect<StateProps, {}, any>(mapStateToProps, {})(AboutContainer);
