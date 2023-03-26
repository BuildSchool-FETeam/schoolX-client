import {
  CourseIconOutlined,
  CourseIconFilled
} from 'theme/icons/SVGs/course';
import {
  ExploreIconFilled,
  ExploreIconOutlined
} from 'theme/icons/SVGs/explore';

export const navList = [
  {
    IconCollapsed: CourseIconOutlined,
    IconExpanded: CourseIconFilled,
    title: 'Learning',
    subItems: [
      { title: 'Dashboard' },
      { title: 'Courses' },
      { title: 'Ask question' }
    ]
  },
  {
    IconCollapsed: ExploreIconOutlined,
    IconExpanded: ExploreIconFilled,
    title: 'Explore',
    subItems: [
      { title: 'Labs' },
      { title: 'More challenge' },
      { title: 'Ranking' }
    ]
  }
];
