import { attr, Model } from 'redux-orm';

class Location extends Model {
  toString() {
    return `Location: ${this.name}`;
  }
  // Declare any static or instance methods you need.
}
Location.modelName = 'Location';

// Declare your related fields.
Location.fields = {
  id: attr(), // non-relational field for any value; optional but highly recommended
  name: attr(),
  address_line_1: attr(),
  address_line_2: attr(),
  address_line_3: attr(),
  town_city: attr(),
  postcode: attr(),
  website: attr(),
};

export default Location;
