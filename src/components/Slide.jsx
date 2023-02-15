import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bg1 from '../img/bg1.jpg'
import bg2 from '../img/bg2.jpg'
import bg3 from '../img/bg3.jpg'
function Slide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Your Dream House</h3>
          <p>Just a click away.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg2}
          alt="Second slide"
        />

        <Carousel.Caption >
          <h3>Get Great Deals</h3>
          <p>Find properties and contact us.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg3}
          alt="Third slide"
        />

        <Carousel.Caption >
          <h3>Ease Real Estate</h3>
          <p>
            Powered by technology.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;