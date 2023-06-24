import { Userfeed } from './Userfeed';
import { SortSection } from './SortSection';

import './home.scss';

const Homepage = () => {
  return (
    <div className="home-container">
      <Userfeed />
      <SortSection />
    </div>
  );
};

export default Homepage;
