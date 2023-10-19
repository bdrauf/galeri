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
          <img className="d-block w-full" src="/peta.jpg" />
          <Carousel.Caption style={captionStyle}>
            <h3>Lumbung Kelana</h3>
            <p>Kesana kemari berbagi</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-full" src="sudut1.jpg" />
          <Carousel.Caption>
            <h3>Lumbung Kelana</h3>
            <p>Kesana kemari berbagi</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-full" src="sudut2.jpg" />
          <Carousel.Caption>
            <h3>Lumbung Kelana</h3>
            <p>Kesana kemari berbagi</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-full" src="siku1.png" />
          <Carousel.Caption>
            <h3>Lumbung Kelana</h3>
            <p>Kesana kemari berbagi</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-full" src="siku2.jpg" />
          <Carousel.Caption>
            <h3>Lumbung Kelana</h3>
            <p>Kesana kemari berbagi</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-full" src="troto1.jpg" />
          <Carousel.Caption>
            <h3>Lumbung Kelana</h3>
            <p>Kesana kemari berbagi</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-full" src="troto2.jpg" />
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
