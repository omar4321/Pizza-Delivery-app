import React from 'react';
import Button from 'react-bootstrap/Button';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Col, Row } from 'react-bootstrap';
import { Zoom } from 'react-reveal';
import { NavLink } from 'react-router-dom';

const ServiceContent = (props) => {
  const Navigate = useNavigate();
  const { _id, img, name, description, price, rating, ratingCount } =
    props.service || {};
  const { addToCart, allcontext } = useAuth();
  const { user } = allcontext;

  const { uid } = user;

  return (
    <div className="col-lg-4 col-md-3 col-sm-6">
      <div>
        <Zoom>
          {' '}
          <div className="card" style={{ width: '18rem' }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <h5> price: {price}</h5>
            </div>
            <div className="  p-2 m-0">
              <div className="text-danger fs-5 ">
                {' '}
                <Row>
                  <Col>
                    <Rating
                      initialRating={rating}
                      readonly
                      emptySymbol={
                        <FontAwesomeIcon
                          className="text-warning"
                          icon={emptyStar}
                        />
                      }
                      fullSymbol={
                        <FontAwesomeIcon
                          className="text-warning"
                          icon={fullStar}
                        />
                      }
                    />
                    <span>{rating}</span>
                  </Col>
                  <Col>
                    {' '}
                    <p>review {ratingCount} </p>
                  </Col>
                </Row>
              </div>
              <div>
                {' '}
                <NavLink
                  className="btn btn-primary  w-50 mx-2"
                  to={`services/${_id}`}
                >
                  {' '}
                  View Details
                </NavLink>
                <Button
                  onClick={() => {
                    if (uid) {
                      addToCart(addToCart);
                    } else {
                      Navigate('/login');
                    }
                  }}
                  variant="primary "
                >
                  Buy Now{' '}
                  <span>
                    {' '}
                    <i class="fas fa-shopping-bag"></i>
                  </span>
                </Button>{' '}
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default ServiceContent;
