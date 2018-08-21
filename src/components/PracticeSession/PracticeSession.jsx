/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

import { eventFetchRequest } from '../../redux/events/events.actions';
import { selectEvent } from '../../redux/events/events.selectors';

momentDurationFormatSetup(moment);

class PracticeSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsed: undefined,
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    // getPracticeSession to ensure it's up to date in the store (e.g. if user navigates
    // directly to a specific lesson page, so all lessons aren't already in the
    // store)
    this.props.eventFetchRequest(this.props.eventId);
    this.timer = setInterval(this.tick, 50);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    const { practiceSession } = this.props;
    if (practiceSession) {
      const start = moment(this.props.practiceSession.start);
      const now = moment();
      const diff = now.diff(start);
      const elapsed = moment.duration(diff);
      this.setState({ elapsed });
    }
  }

  render() {
    const { elapsed } = this.state;
    let jsx;
    if (!this.props.practiceSession) {
      jsx = <div>Loading</div>;
    } else {
      const { start } = this.props.practiceSession;
      jsx = (
        <div>
          <h3>Practice session</h3>
          {start}
          <div>{elapsed ? elapsed.format('h:m:ss') : null}</div>
        </div>
      );
    }
    return jsx;
  }
}

PracticeSession.defaultProps = {
  practiceSession: undefined,
};

PracticeSession.propTypes = {
  eventId: PropTypes.number.isRequired,
  practiceSession: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  eventFetchRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  // ownProps isn't recursive - just props supplied from 'above'
  eventId: Number(ownProps.match.params.id),
  practiceSession: selectEvent(state, ownProps),
});

const mapDispatchToProps = {
  eventFetchRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PracticeSession);
