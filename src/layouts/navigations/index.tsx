import { Fragment } from 'react';
import LeftNav from './LeftNav';
import NavContent from './NavContent';
import TopNav from './TopNav';

const Navigation = () => {
  const mockData = {
    userName: 'Doraemon',
    imgSrc:
      'https://img.freepik.com/free-photo/handsome-smiling-young-african-man_171337-9650.jpg',
    noticCount: 40
  };

  return (
    <Fragment>
      <TopNav
        userName={mockData.userName}
        imgSrc={mockData.imgSrc}
        notificationCount={mockData.noticCount}
      />
      <LeftNav />
      <NavContent />
    </Fragment>
  );
};

export default Navigation;
