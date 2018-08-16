/* eslint-disable react/jsx-filename-extension */
import renderer from 'react-test-renderer';

import React from 'react';
import { Note } from '../components/Lesson/Note';

test('Note renders correctly', () => {
  const component = renderer.create(
    <Note
      key={1}
      note="A note"
      score="a b c"
      type="TECHNICAL"
      id={1}
      eventId={1}
      generalNoteUpdateRequest={() => ({})}
      noteDeleteRequest={() => ({})}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // tree.props.onMouseEnter();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
  //
  // // manually trigger the callback
  // tree.props.onMouseLeave();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});
