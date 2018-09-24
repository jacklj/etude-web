import { ORM } from 'redux-orm';
import Event from './Event';
import Location from './Location';
import Note from './Note';

const orm = new ORM();
orm.register(Event, Location, Note);

export default orm;
