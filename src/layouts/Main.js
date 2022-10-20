import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Headers from '../Pages/Shared/Headers/Headers';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Container>
            <Row>
                <Col lg='2' className='d-none d-lg-block'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg='7'>
                    <Outlet></Outlet>
                </Col>
                <Col lg='3'>
                    <RightSideNav></RightSideNav>
                </Col>
            </Row>
           </Container>
           <Footer></Footer>
        </div>
    );
};

export default Main;