import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-full" src="/1.png" alt="firstslide" />
          <Carousel.Caption>
            <h3>Peta</h3>
            <p>ini adalah deskripsi yang tidak akan menjelaskan apa apa</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-full" src="2.jpg" alt="secondslide" />
          <Carousel.Caption>
            <h3>Foto_1</h3>
            <p>ini adalah deskripsi yang tidak akan menjelaskan apa apa</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-full" src="1.png" alt="thirdslide" />
          <Carousel.Caption>
            <h3>Foto_2</h3>
            <p>ini adalah deskripsi yang tidak akan menjelaskan apa apa</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-full" src="2.jpg" alt="fourthslide" />
          <Carousel.Caption>
            <h3>Foto_3</h3>
            <p>ini adalah deskripsi yang tidak akan menjelaskan apa apa</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
