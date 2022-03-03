import React from 'react';
import Slide from 'react-reveal/Slide';
import useAuth from '../../hooks/useAuth';

import ServiceContent from '../ServiceContent/ServiceContent';

const Services = () => {
  const { service } = useAuth();

  return (
    <div id="services" className="container">
      <div className="text-center mb-4">
        <Slide left>
          <h1> Choose</h1>
        </Slide>

        <Slide right>
          <h1 className="mb-0">
            Your Favorite Pizza <i className="fas fa-pizza-slice"></i>
          </h1>
        </Slide>
      </div>
      <div className="row g-5 mb-5">
        {service.map((service, _id) => (
          <ServiceContent service={service} key={_id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
