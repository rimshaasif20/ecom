import React from 'react';
import Navigate from './Navigate';
import { Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Style.css';
function Home() {
    return (
        <>
            <Navigate />
            <div className='container mt-1'>
                <Carousel >
                    <Carousel.Item className='slider'>
                        <img
                            className="d-block w-100 images"
                            src="Pic1.jpg"
                            alt="First slide"

                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='slider'>
                        <img
                            className="d-block w-100 images"
                            src="Pic2.jpg"
                            alt="Second slide"

                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='slider'>
                        <img
                            className="d-block w-100 images"
                            src="Pic3.jpg"
                            alt="Third slide"

                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className='container mt-5 text-center' >
                    <div className='row' >
                        <div className='col' >
                            <Card style={{  height: '25 rem', width: '18rem' }}>
                                <Card.Img variant="top" src="angularp.png" />
                                <Card.Body>
                                    <Card.Title>Angular</Card.Title>
                                    <Card.Text>
                                       Angular is a development platform, built on TypeScript. As a platform, Angular includes: A component-based framework for building scalable web applications.
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col'>
                            <Card style={{ height: '25 rem', width: '18rem' }}>
                                <Card.Img variant="top" src="Node.js-logo.webp" style={{width: '200px', marginLeft: '50px', marginTop: '25px'}} />
                                <Card.Body>
                                    <Card.Title>Node JS</Card.Title>
                                    <Card.Text>
                                        Node. js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. 
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col'>
                            <Card style={{ height: '25 rem', width: '18rem' }}>
                                <Card.Img variant="top" src="reactp.png" style={{width: '150px', height: '150px' ,marginLeft: '60px', marginTop: '15px'}} />
                                <Card.Body>
                                    <Card.Title>React JS</Card.Title>
                                    <Card.Text>
                                        React is a JavaScript-based UI development library. Facebook and an open-source developer community run it.
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <Card style={{ height: '23 rem', width: '18rem' }}>
                                <Card.Img variant="top" src="vue.png" style={{width: '150px', height: '150px' ,marginLeft: '60px', marginTop: '25px'}} />
                                <Card.Body>
                                    <Card.Title>Vue</Card.Title>
                                    <Card.Text>
                                        ​ Vue is a JavaScript framework for building user interfaces. it consists of single-file component-based architecture based on HTML, CSS, and JavaScript.
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col'>
                            <Card style={{ height: '25 rem', width: '18rem' }}>
                                <Card.Img variant="top" src="android.jpg" style={{width: '150px', height: '150px' ,marginLeft: '60px', marginTop: '40px'}} />
                                <Card.Body>
                                    <Card.Title>Android</Card.Title>
                                    <Card.Text>
                                       Android OS is a Linux-based mobile operating system that primarily runs on smartphones and tablets.
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col'>
                            <Card style={{ height: '25 rem', width: '18rem' }}>
                                <Card.Img variant="top" src="python.jpg" style={{width: '130px', height: '130px' ,marginLeft: '60px', marginTop: '20px'}} />
                                <Card.Body>
                                    <Card.Title>Python</Card.Title>
                                    <Card.Text>
                                        Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis.
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Home;
