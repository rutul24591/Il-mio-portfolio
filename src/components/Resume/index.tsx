
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
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener("resize", onResize)
        }
    }, [setWidth]);

    useEffect(() => {
        if(width <= 500){
            setScale(0.6);
        }else if(width > 500 && width <= 767){
            setScale(0.8);
        }else if(width > 767 && width <= 991){
            setScale(1.2);
        }else if(width > 991 && width <= 1200){
            setScale(1.4);
        }else{
            setScale(1.6);
        }
    }, [width]);

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
                    <Page pageNumber={1} scale={scale} />
                </Document>
            </Row>
        </Container>
    );
}

export default Resume;