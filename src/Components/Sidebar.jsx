import {
  HomeIcon,
  ProfileIcon,
  BookmarkIcon,
  ExploreIcon,
} from '../Assets/SVGIcons';

import './sidebar.scss';

const sideBarItems = [
  {
    name: 'Home',
    icon: <HomeIcon />,
  },
  {
    name: 'Explore',
    icon: <ExploreIcon />,
  },
  {
    name: 'Bookmarks',
    icon: <BookmarkIcon />,
  },
  {
    name: 'Profile',
    icon: <ProfileIcon />,
  },
];

const SidebarItem = ({ item }) => {
  return (
    <div className="sidebar-item">
      <div className="icon">{item.icon}</div>
      <p className="item-name">{item.name}</p>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      {sideBarItems.map((item, index) => (
        <SidebarItem item={item} key={index} />
      ))}
    </div>
  );
};

export default Sidebar;
