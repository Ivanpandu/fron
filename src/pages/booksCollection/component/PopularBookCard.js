import React from "react";
import { Button, Container } from "react-bootstrap";
import { FaBookmark } from "react-icons/fa";

export default function PopularBookCard({url, title}) {
    return (
        <div>
            <div style={{
                width: '250px',
                height: '350px',
                backgroundColor: 'blue',
                borderRadius: '16px',
                backgroundImage: `url(${url})`,
                backgroundSize: 'cover'
            }}>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'row-reverse' }}>
                    <Button variant="danger"><FaBookmark /> </Button>
                </div>
            </div>
            <Container style={{ marginTop: '1em', marginBottom: '1em', color: 'var(--fontColorPrimary)' }}>
                <h2>{title}</h2>
            </Container>
        </div>
    )
}