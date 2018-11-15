import { EVENT_TYPES, PERFORMANCE_TYPES, REPERTOIRE_TYPES } from './constants';

const eventTypeDisplayMap = {
  [EVENT_TYPES.LESSON]: 'Lesson',
  [EVENT_TYPES.PRACTICE]: 'Practice',
  [EVENT_TYPES.MASTERCLASS]: 'Masterclass',
  [EVENT_TYPES.CONCERT]: 'Concert',
  [EVENT_TYPES.OPERA]: 'Opera',
  [EVENT_TYPES.RECITAL]: 'Recital',
  [EVENT_TYPES.OTHER]: 'Other',
};

export const renderEventType = eventTypeConstant => eventTypeDisplayMap[eventTypeConstant];

const performanceTypesForRendering = {
  [PERFORMANCE_TYPES.CONCERT]: 'Concert',
  [PERFORMANCE_TYPES.OPERA]: 'Opera',
  [PERFORMANCE_TYPES.RECITAL]: 'Recital',
  [PERFORMANCE_TYPES.COMPETITION]: 'Competition',
  [PERFORMANCE_TYPES.AUDITION]: 'Audition',
};

export const renderPerformanceType = performanceType => performanceTypesForRendering[
  performanceType
];

export const createPerformanceTypeSelectOptionObject = performanceType => ({
  value: performanceType,
  label: renderPerformanceType(performanceType),
});

export const performanceTypesForSelectInput = Object.values(PERFORMANCE_TYPES).map(
  createPerformanceTypeSelectOptionObject,
);

const repertoireTypesForRendering = {
  [REPERTOIRE_TYPES.OPERA.ARIA]: 'Opera Aria',
  [REPERTOIRE_TYPES.OPERA.RECIT]: 'Opera Recit',
  [REPERTOIRE_TYPES.OPERA.RECIT_AND_ARIA]: 'Opera Recit and Aria',
  [REPERTOIRE_TYPES.ORATORIO.ARIA]: 'Oratorio Aria',
  [REPERTOIRE_TYPES.ORATORIO.RECIT]: 'Oratorio Recit',
  [REPERTOIRE_TYPES.ORATORIO.RECIT_AND_ARIA]: 'Oratorio Recit and Aria',
  [REPERTOIRE_TYPES.CONCERT_ARIA]: 'Concert Aria',
  [REPERTOIRE_TYPES.SONG]: 'Song',
};

export const repertoireTypesForSelectInput = Object.keys(repertoireTypesForRendering)
  .map(repType => ({
    value: repType,
    label: repertoireTypesForRendering[repType],
  }));
