import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Carousel } from "react-bootstrap"; // Correct import statement
import './Banner.css'




const Banner = () => {
  return (
    <>
      <Container fluid>
        <Row  className="justify-content-center align-items-center">
          <Col lg={14} >
            <Carousel>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={require("./frontpage1.jpg")}
                  alt="First slide"
             
                />
                <Carousel.Caption>
                  {/* <h1 className="web-mobile">Web & Mobile</h1> */}
                  <p className="d-none d-sm-block">
                    <h2 className="providing">Get upto <h1 className="offer">30% off</h1>  New Arrivals</h2> 
                  </p>
                  

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={require("./frontpag2.jpg")}
                  alt="Second slide"
          
                />

                <Carousel.Caption>
                  <div className="p2">
                    <p className="d-none d-sm-block">
                    <h1 className="online">Online Store</h1> 
                    <h2 className="onlineshop">  GET START YOUR FAVRIOT SHOPPING!</h2> </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"

                  src={require("./frontpag3.jpg")}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  {/* <h3 className="craft">NEW COLLECTION.</h3> */}
                  <div className="p3">
                  {/* <p className="d-none d-sm-block" >
                    Buy and Easy to Pay.
                  </p> */}
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <div className="text-center">
          <h2 className="display-5 mt-7">Welcome to buy & enjoying latest
Products!..</h2>
<h1><a href="http://localhost:3000/">SHOP NOW</a></h1>

</div>
      </Container>
      </>
 
   
   

  );
};


export default Banner;
