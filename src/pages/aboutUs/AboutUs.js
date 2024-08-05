import React from "react";
import NavbarHome from "../../component/navbar/NavbarHome";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "./assets/logo.png";
import "./AboutUs.css";
// import memberIqbal from './assets/member-iqbal.jpeg'
// import memberShobrina from './assets/member-shobrina.jpg'
// import memberYandi from './assets/member-yandi.jpg'
// import memberAhmad from './assets/member-ahmad.jpeg'
// import memberNahrul from './assets/member-nahrul.jpg'
//import memberIrvan from './assets/member-irvan.jpeg'
// import memberSuryati from './assets/member-suryati.jpeg'

export default function AboutUs() {
  return (
    <div>
      <NavbarHome />
      <Container style={{ marginTop: "3em" }}>
        <Row>
          <Col sm={8}>
            <Container>
              <h1 className="about-us__title">
                <span>About </span>iRead
              </h1>
              <div className="description-1">
                <p>
                  iRead adalah sebuah platform digital untuk membaca buku yang
                  menyediakan akses mudah ke berbagai jenis buku dan membantu
                  penggunanya mengelola koleksi buku digital mereka. Dengan
                  fitur-fitur seperti bookmarking, penanda halaman, dan
                  pengaturan pencahayaan layar yang dapat disesuaikan, pengguna
                  dapat menikmati pengalaman membaca yang nyaman dan personal.
                </p>
              </div>
            </Container>
          </Col>
          <Col sm={4}>
            <div className="container-logo">
              <Image className="about-logo" src={logo} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
