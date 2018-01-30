import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, details } from '@reducers/index';
import { IDetail } from '@models/detail';
import Link from '@components/Link';
import Text from '@components/Text';

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

    return (
      <div className="About">
        <div className="About__Content">
          <Text className="About__Description" value={info.description} />
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
