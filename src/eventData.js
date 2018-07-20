const eventData = [
  {
    id: 65,
    start: '2018-06-25T16:00:00.000Z',
    end: '2018-06-25T17:00:00.000Z',
    type: 'EVENT_TYPES.LESSON',
    name: 'Alex Ashworth Lesson',
    location_id: 103,
    rating: 5,
    location: {
      id: 103,
      name: 'Royal Academy of Music',
      address_line_1: 'Royal Academy of Music',
      address_line_2: 'Marylebone Rd',
      address_line_3: null,
      town_city: 'London',
      postcode: 'NW1 5HT',
      website: 'http://www.ram.ac.uk/',
    },
    people: [
      {
        id: 154,
        first_name: 'Alex',
        surname: 'Ashworth',
        role: 'Teacher',
      },
    ],
    items: [
      {
        id: 86,
        repertoire_id: 86,
        item_id: 81,
        name: 'Mein Sehnen, mein Wähnen',
        composer: {
          id: 159,
          first_name: 'Eric',
          surname: 'Korngold',
          role: 'Composer',
        },
        composition_date: '1920-12-04T00:00:00.000Z',
        larger_work: 'Die tote Stadt',
        character_that_sings_it: 'Fritz',
        type: 'ITEM_TYPES.PIECE',
      },
    ],
  },
  {
    id: 66,
    start: '2018-06-28T10:00:00.000Z',
    end: '2018-06-28T12:00:00.000Z',
    type: 'EVENT_TYPES.MASTERCLASS',
    name: 'Mary Dunleavy Masterclass Lesson',
    location_id: 104,
    rating: 5,
    location: {
      id: 104,
      name: 'Neville Mariner Room, St Martin-in-the-Fields',
      address_line_1: 'St Martin-in-the-Fields',
      address_line_2: 'Trafalgar Square',
      address_line_3: null,
      town_city: 'London',
      postcode: 'WC2N 4JJ',
      website: 'http://www.stmartin-in-the-fields.org/',
    },
    people: [
      {
        id: 156,
        first_name: 'Mary',
        surname: 'Dunleavy',
        role: 'Teacher',
      },
    ],
    items: [],
  },
  {
    id: 67,
    start: '2018-07-03T13:00:00.000Z',
    end: '2018-07-03T14:15:00.000Z',
    type: 'EVENT_TYPES.LESSON',
    name: 'Mary Dunleavy Lesson',
    location_id: 105,
    rating: 4,
    location: {
      id: 105,
      name: 'Blüthner Pianos',
      address_line_1: 'Blüthner Pianos',
      address_line_2: '6 Baker Street',
      address_line_3: 'Marylebone',
      town_city: 'London',
      postcode: 'W1U 3AA',
      website: 'http://www.bluthner.co.uk/',
    },
    people: [
      {
        id: 156,
        first_name: 'Mary',
        surname: 'Dunleavy',
        role: 'Teacher',
      },
    ],
    items: [
      null,
      {
        id: 52,
        exercise_id: 52,
        item_id: 83,
        name: 'Humming 5th pattern',
        score: `options space=20
        tabstave
        notation=true tablature=false

        notes :q G-F-E-F-G-F-E-D-C/4

        options space=5`,
        details: 'down 3rd, up 3rd, down 5th',
        teacher_who_created_it: {
          id: 154,
          first_name: 'Alex',
          surname: 'Ashworth',
          role: 'Teacher',
        },
        type: 'ITEM_TYPES.EXERCISE',
      },
    ],
  },
  {
    id: 68,
    start: '2018-07-05T17:00:00.000Z',
    end: '2018-07-05T17:30:00.000Z',
    type: 'EVENT_TYPES.PRACTICE',
    name: 'Practice at Glyndebourne',
    location_id: 108,
    rating: 3,
    location: {
      id: 108,
      name: 'Practice rooms, Glyndebourne',
      address_line_1: 'Glyndebourne',
      address_line_2: 'Lewes',
      address_line_3: 'East Sussex',
      town_city: null,
      postcode: 'BN8 5UU',
      website: 'http://www.glyndebourne.com/',
    },
    people: [],
    items: [null, null],
  },
];

export default eventData;
