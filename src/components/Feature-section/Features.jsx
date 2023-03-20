import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Tomorrow’s Indian Engineers need us Today to build a better tomorrow We are Edwisely, Indian Engineering Student Learning and Career Platform",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "We are just a call away for your help and support Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions",
  },

  {
    title: "Certification",
    desc: "Edwisely CERTIFICATES: The value of a certificate earned through Edwisely is based on the specific course as well as the student's motivation for participating in the program.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
