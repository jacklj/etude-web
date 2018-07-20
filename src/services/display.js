const eventTypeDisplayMap = {
  'EVENT_TYPES.LESSON': 'Lesson',
  'EVENT_TYPES.PRACTICE': 'Practice',
  'EVENT_TYPES.MASTERCLASS': 'Masterclass',
  'EVENT_TYPES.CONCERT': 'Concert',
  'EVENT_TYPES.OPERA': 'Opera',
  'EVENT_TYPES.RECITAL': 'Recital',
  'EVENT_TYPES.OTHER': 'Other',
};

export const renderEventType = (eventTypeConstant) => eventTypeDisplayMap[eventTypeConstant];
