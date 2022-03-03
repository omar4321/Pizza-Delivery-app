import React, { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbarr from '../../Components/Navbar/Navbar';
import Cart from '../Cart';
import Profile from '../Profile/Profile';

const Dashboard = () => {
  const [current, setCurrent] = useState('Profile');
  function profileHandler(e) {
    setCurrent(e.target.value);
  }
  function cartHandler(e) {
    setCurrent(e.target.value);
  }

  return (
    <>
      <Navbarr></Navbarr>
      <div>
        <div className="d-flex my-2 justify-content-center">
          <input
            className="p-2 mx-2"
            onClick={profileHandler}
            type="button"
            value="Profile"
          />
          <input
            className="p-2 "
            onClick={cartHandler}
            type="button"
            value="Cart"
          />
        </div>

        {(current === 'Profile' && <Profile></Profile>) ||
          (current === 'Cart' && <Cart></Cart>)}
      </div>
    </>
  );
};

export default Dashboard;
