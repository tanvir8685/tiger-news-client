import React from 'react';
import { FaGoogle, FaGithub ,FaFacebook,FaInstagram,FaTwitter,FaWhatsapp,FaLinkedinIn} from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';

import BrandCarusel from '../BrandCarusel/BrandCarusel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>  Login With Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub>  Login With Github</Button>
            </ButtonGroup>
            <div>
                <h5 className='mt-5'>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook>  FaceBook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaInstagram></FaInstagram>  Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter>  Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp>  WhatsUp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaLinkedinIn></FaLinkedinIn>  LinkedIn</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarusel></BrandCarusel>
            </div>

        </div>
    );
};

export default RightSideNav;