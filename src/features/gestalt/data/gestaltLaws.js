import { CANDY_COLORS } from '../../../utils/colors';

export const gestaltLaws = [
  {
    id: 'proximity',
    title: 'Proximity',
    subtitle: 'Elements that are close are perceived as a group',
    description: 'Our mind automatically groups objects that are near each other.',
    color: CANDY_COLORS.pink,
    animation: 'proximity',
    geometry: 'box'
  },
  {
    id: 'similarity',
    title: 'Similarity',
    subtitle: 'Similar things are grouped mentally',
    description: 'Elements with similar visual characteristics are perceived as part of the same set.',
    color: CANDY_COLORS.blue,
    animation: 'colorChange',
    geometry: 'box'
  },
  {
    id: 'continuity',
    title: 'Continuity',
    subtitle: 'We naturally follow lines and curves',
    description: 'We prefer to perceive continuous and smooth figures.',
    color: CANDY_COLORS.cyan,
    animation: 'wave',
    geometry: 'box'
  },
  {
    id: 'closure',
    title: 'Closure',
    subtitle: 'We complete incomplete shapes',
    description: 'Our brain fills in the missing gaps.',
    color: CANDY_COLORS.purple,
    animation: 'opacity', 
    geometry: 'box'
  },
  {
    id: 'figure-ground',
    title: 'Figure and Ground',
    subtitle: 'We separate objects from the background',
    description: 'We distinguish between the main figure and its background.',
    color: CANDY_COLORS.blue,
    animation: 'mirror', 
    geometry: 'box'
  },
  {
    id: 'prägnanz',
    title: 'Prägnanz',
    subtitle: 'We prefer simple forms',
    description: 'We interpret ambiguity as simple, organized shapes.',
    color: CANDY_COLORS.purple,
    animation: 'scale',
    geometry: 'box'
  },
  {
    id: 'common-region',
    title: 'Common Region',
    subtitle: 'Boundaries create groups',
    description: 'Elements within defined boundaries are perceived together.',
    color: CANDY_COLORS.pink,
    animation: 'rotation',
    geometry: 'box'
  },
  {
    id: 'common-fate',
    title: 'Common Fate',
    subtitle: 'Synchronized movement groups elements',
    description: 'Objects moving in the same direction are seen as part of the same group.',
    color: CANDY_COLORS.cyan,
    animation: 'orbit', 
    geometry: 'box'
  }
];