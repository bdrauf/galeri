import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  const captionStyle = {
    color: "black",
  };
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-full" src="/peta.jpg" alt="firstslide" />
          <Carousel.Caption style={captionStyle}>
            <h3>Lumbung Kelana</h3>
            <p>Kesana kemari berbagi</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-full" src="sudut1.jpg" alt="secondslide" />
          <Carousel.Caption>
            <h3>Lumbung Kelana</h3>
            <p>Kesana kemari berbagi</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-full" src="sudut2.jpg" alt="thirdslide" />
          <Carousel.Caption>
            <h3>Lumbung Kelana</h3>
            <p>Kesana kemari berbagi</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-full" src="siku1.jpg" alt="fourthslide" />
          <Carousel.Caption>
            <h3>Lumbung Kelana</h3>
            <p>Kesana kemari berbagi</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-full" src="siku2.jpg" alt="fourthslide" />
          <Carousel.Caption>
            <h3>Lumbung Kelana</h3>
            <p>Kesana kemari berbagi</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
