
import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import './index.scss';

const link = 'https://drive.google.com/file/d/1n5FdaBWq2ZNCx90Rodik9vWtvKHfKJ2b/view?usp=sharing';
const Resume = () => {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return(
        <Container fluid className="resume-container">
            <Row>
                <Button
                    variant="primary"
                    href="../../assets/../assets/files/RutulAminResume(12152021)"
                    target="_blank"
                    style={{maxWidth : "300px"}}
                >
                    <FontAwesomeIcon icon={ faDownload } color="#FFFFFF" />
                    Download
                </Button>
            </Row>
            <Row className="resume-row">
                <Document file={link} className="d-flex justify-content-center">
                    <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                </Document>
            </Row>
        </Container>
    );
}

export default Resume;