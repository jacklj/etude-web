import React from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Button from '@material-ui/core/Button';

import { EVENT_TYPES } from '../../services/constants';
import { renderDuration } from '../../services/datetime';

const styles = theme => ({
  card: {
    maxWidth: 700,
    marginBottom: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

const renderName = person => `${person.first_name} ${person.surname}`;

const renderTitleAndIconLetterAndLinkPath = event => {
  const {
    event_id: eventId, type,
  } = event;
  let title;
  let iconLetter;
  let linkPath;
  switch (type) {
    case EVENT_TYPES.LESSON: {
      title = `Lesson${event.teacher ? ` with ${renderName(event.teacher)}` : ''}`;
      iconLetter = 'L';
      linkPath = `/lesson/${eventId}`;
      break;
    }
    case EVENT_TYPES.MASTERCLASS: {
      title = `Masterclass with ${renderName(event.teacher)}`;
      iconLetter = 'M';
      break;
    }
    case EVENT_TYPES.PRACTICE: {
      title = `Practice${event.location ? ` at ${event.location.name}` : ''}`;
      iconLetter = 'P';
      linkPath = `/practice_session/${eventId}`;
      break;
    }
    case EVENT_TYPES.PERFORMANCE: {
      title = `Performance: ${event.name}`;
      iconLetter = 'P';
      linkPath = `/performance/${eventId}`;
      break;
    }
    case EVENT_TYPES.OTHER: {
      title = `Other: ${event.name}`;
      iconLetter = 'O';
      break;
    }
    default:
      title = 'Event';
      iconLetter = 'E';
      break;
  }

  return {
    title,
    iconLetter,
    linkPath,
  };
};

const renderSubtitles = event => {
  const {
    end, location, start,
  } = event;
  const duration = start ? renderDuration(start, end) : undefined;
  return (
    <div>
      <div>{duration}</div>
      {location && <div>{location.name}</div>}
    </div>
  );
};

const EventSummaryCard = ({ classes, event }) => {
  const { rating } = event;
  const { title, iconLetter, linkPath } = renderTitleAndIconLetterAndLinkPath(event);
  const linkButtonProps = linkPath ? { component: Link, to: linkPath } : {};
  const subheader = renderSubtitles(event);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={(
          <Avatar aria-label="Recipe" className={classes.avatar}>
            {iconLetter}
          </Avatar>
        )}
        title={title}
        subheader={subheader}
      />
      <CardContent>
        <StarRatingComponent
          name="EventRating" /* name of the radio input, it is required */
          value={rating} /* number of selected icon (`0` - none, `1` - first) */
          starCount={5} /* number of icons in rating, default `5` */
          editing={false} /* is component available for editing, default `true` */
        />
        <Typography>
          Exercises: Exercise 1, excercise 2...
        </Typography>
        <Typography>
        Repertoire: Piece 1, piece 2...
        </Typography>
        <Typography>
          Notes: Semi occluded, with relaxed and vertical sound - not force placed. Then I feel
          a slight air pressure...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" {...linkButtonProps}>
          View / Edit
        </Button>
      </CardActions>
    </Card>
  );
}

Event.propTypes = {
  event: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(EventSummaryCard);
