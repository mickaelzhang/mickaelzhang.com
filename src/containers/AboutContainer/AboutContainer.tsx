import * as React from 'react';
import { connect } from 'react-redux';
import * as DOMPurify from 'dompurify';

import { AppState, details } from '@reducers/index';
import { IDetail } from '@models/detail';
import Link from '@components/Link';

import './AboutContainer.scss';

interface StateProps {
  info: IDetail | null;
}

class AboutContainer extends React.Component<StateProps> {
  render() {
    const { info } = this.props;

    if (!info) {
      return null;
    }

    const paragraphes = info.description.map((paragraph, index) => (
      <p key={index} className="About__Paragraph" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(paragraph) }} />
    ));

    return (
      <div className="About">
        <div className="About__Content">
          <div className="About__Description">{paragraphes}</div>
          <div className="About__LinkList">
            <Link className="About__Link" to={info.github}>github</Link>
            <Link className="About__Link" to={info.resume}>resume</Link>
            <Link className="About__Link" to={info.email}>email</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  info: details.getData(state),
});

export default connect<StateProps, {}, any>(mapStateToProps, {})(AboutContainer);
