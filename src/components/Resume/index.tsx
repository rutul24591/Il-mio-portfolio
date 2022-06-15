
import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import resume from '../../assets/files/resume_rutul_amin(15:06:22).pdf';

import './index.scss';

const link = 'https://drive.google.com/file/d/1DPxBMw3Xu-Ltk5HKf2PVN3NBa_8UlJK2/view?usp=sharing';

const Resume = () => {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return(
        <Container fluid className="resume-container">
            <Row className="download-button-row">
                <Button
                    variant="primary"
                    href={link}
                    target="_blank"
                    className="download-button"
                >
                    <FontAwesomeIcon icon={ faDownload } color="#FFFFFF" />
                    Download
                </Button>
            </Row>
            <Row className="resume-row">
                <Document file={resume} className="resume-document-viewer">
                    <Page pageNumber={1} scale={width > 786 ? 1.8 : 0.6} />
                </Document>
            </Row>
        </Container>
    );
}

export default Resume;