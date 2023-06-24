import { Userfeed } from './Userfeed';

import './home.scss';

const Homepage = () => {
  return (
    <div className="home-container">
      <Userfeed />
      <div className="controls"></div>
    </div>
  );
};

export default Homepage;
