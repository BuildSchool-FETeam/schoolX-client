import { Flex } from '@chakra-ui/react';
import { useRef, MouseEvent } from 'react';
import RecentCourse, { ICourseCardProps } from '.';
import { styles } from './styles';

interface IRecentCoursesSliderProps {
  listItems: ICourseCardProps[];
  width?: number;
  cardItem?: JSX.Element;
}

const RecentCoursesSlider = (props: IRecentCoursesSliderProps) => {
  const { listItems, width = '100%' } = props;

  const sliderRef = useRef<HTMLDivElement>(null);
  let isMouseDown = false;
  const pos = { left: 0, x: 0, top: 0, y: 0 };
  const _onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    const sliderDOM = sliderRef.current;
    if (sliderDOM) {
      // set data where we start
      isMouseDown = true;
      pos.left = sliderDOM.scrollLeft;
      pos.x = e.clientX;
      pos.top = sliderDOM.scrollTop;
      pos.y = e.clientY;
      sliderDOM.style.cursor = 'grabbing';
      sliderDOM.style.userSelect = 'none';
    }
  };

  const _onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const sliderDOM = sliderRef.current;
    if (sliderDOM && isMouseDown) {
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;
      // set data where we end
      sliderDOM.scrollLeft = pos.left - dx;
      sliderDOM.scrollTop = pos.top - dy;
    }
  };

  const _onMouseUpAndLeave = () => {
    isMouseDown = false;
    const sliderDOM = sliderRef.current;
    if (sliderDOM) {
      sliderDOM.style.cursor = 'grab';
      sliderDOM.style.removeProperty('user-select');
    }
  };

  return (
    <Flex
      w={width}
      sx={styles.root}
      ref={sliderRef}
      onMouseDown={_onMouseDown}
      onMouseMove={_onMouseMove}
      onMouseUp={_onMouseUpAndLeave}
      onMouseLeave={_onMouseUpAndLeave}
    >
      {listItems.map((item) => (
        <RecentCourse
          className="recentCourseItem"
          key={listItems.indexOf(item)}
          imgUrl={item.imgUrl}
          title={item.title}
          timeByHour={item.timeByHour}
        />
      ))}
    </Flex>
  );
};

export default RecentCoursesSlider;
