import React from 'react';
import { Carousel } from 'react-bootstrap';

const BrandCarusel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://media.istockphoto.com/photos/logotype-collection-of-wellknown-world-brands-picture-id477404752?s=612x612'
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://media.istockphoto.com/photos/social-media-apps-logotypes-printed-on-a-cubes-picture-id1173494845?s=612x612'
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        </div>
    );
};

export default BrandCarusel;