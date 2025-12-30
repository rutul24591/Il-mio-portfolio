import { useEffect, useState, useMemo } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Document, Page } from "react-pdf";

import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

import resume from "../../assets/files/RUTUL_V_AMIN_RESUME(12:11:25).pdf";
import "./index.scss";

const link =
  "https://drive.google.com/file/d/1EEfMmcQ7HDJ43Wpx0c1E0gjhK8J1T2wo/view?usp=sharing";

const Resume = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scale = useMemo(() => {
    if (width <= 500) return 0.6;
    if (width > 500 && width <= 767) return 0.8;
    if (width > 767 && width <= 991) return 1.2;
    if (width > 991 && width <= 1200) return 1.4;
    return 1.6;
  }, [width]);

  return (
    <Container fluid className="resume-container">
      <Row className="download-button-row">
        <Button
          variant="primary"
          href={link}
          target="_blank"
          className="download-button"
        >
          <FontAwesomeIcon icon={faDownload} color="#FFFFFF" />
          Download
        </Button>
      </Row>
      <Row className="resume-row">
        <Document file={resume} className="resume-document-viewer">
          <Page pageNumber={1} scale={scale} />
        </Document>
      </Row>
    </Container>
  );
};

export default Resume;
