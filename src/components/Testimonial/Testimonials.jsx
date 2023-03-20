import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        They will prepare you how to face Data Science job
                        interviews along with this upGrad will also provide mock
                        interviews and mock MCQ tests to check your capability
                        for the interviews.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Gangadhar Mathyam</h6>
                        <p>Pune, India</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        A great aspect of this course is the student mentors.
                        These people are always there to help, support, and
                        motivate the student to complete modules on time.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Deepesh Kothari</h6>
                        <p>Goa, India</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        I am extremely thankful to the upGrad team for
                        conducting the Hackerrank sessions. During technical &
                        coding rounds I was asked to code in Python and was
                        commended for the same. Apart from that Python crash
                        course and the content has helped me majorly to clear
                        the interview rounds.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Suryanidhi Dandale</h6>
                        <p>Nagpur, India</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
