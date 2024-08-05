import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./bestcard.css";

const BestCard = ({ images, pdfFile, onClick }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <>
      <Card className="landing-ibook__best-card">
        <Card.Img
          variant="top"
          src={images}
          className="landing-ibook__best-image"
        />
        <Card.Body className="landing-ibook__best-body">
          <Button
            variant="primary"
            className="landing-ibook__best-button"
            onClick={handleShow}
          >
            Read Now
          </Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Read PDF</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}
          >
            <div style={{ height: "750px" }}>
              <Viewer
                fileUrl={pdfFile}
                plugins={[defaultLayoutPluginInstance]}
              />
            </div>
          </Worker>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BestCard;
