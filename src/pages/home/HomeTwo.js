import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';



function Home() {
    return (
        <>
            <section className='bg-hero'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className='inner-content'>
                                <h1>India’s No.1 Accounting and GST Billing Software</h1>
                                <p className="mt-3">Create GST-Compliant Invoices with the Best Billing Software</p>
                                <div className="d-flex mt-4">
                                    <button className="inquiry-now">
                                        Inquiry Now
                                    </button>
                                    <button className="more-details ml-3">
                                        More Details
                                    </button>
                                </div>
                            </div>
                        </Col>

                        <Col md={6}>
                            <img src="img/hero.png" alt="" className="w-100" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="about-section">
                <Container fluid>
                    <Row>
                        <Col md={4}>
                            <div className="single-about text-center">
                                <img src="img/tax-about.png" alt="" />

                                <h3>What is Lorem Ipsum?</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="single-about text-center">
                                <img src="img/tax-about.png" alt="" />

                                <h3>What is Lorem Ipsum?</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </Col>


                        <Col md={4}>
                            <div className="single-about text-center">
                                <img src="img/tax-about.png" alt="" />

                                <h3>What is Lorem Ipsum?</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="details-page position-relative">
            <div className='bg-round'> </div>
                <Container>
                    <Row>
                        <Col md={6}>
                            <img src="img/computer.png" alt="" className="w-100" />
                        </Col>
                        <Col md={6}>
                            <div className="details-inner-section">
                                <h4>Contrary to popular belief, Lorem Ipsum is not simply random text</h4>
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                <button className="inquiry-now mt-3">
                                    Inquiry Now
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="about-section about-section-two">
                <Container fluid>
                    <h3 className="title">HOW WE WORK</h3>
                    <Row>
                        <Col md={4}>
                            <div className="single-about text-center">
                                <img src="img/tax-about.png" alt="" />

                                <h3>What is Lorem Ipsum?</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="single-about text-center">
                                <img src="img/tax-about.png" alt="" />

                                <h3>What is Lorem Ipsum?</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </Col>


                        <Col md={4}>
                            <div className="single-about text-center">
                                <img src="img/tax-about.png" alt="" />

                                <h3>What is Lorem Ipsum?</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="details-page">
            <h3 className="title">App  Features</h3>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="details-inner-section">
                                <h4>Contrary to popular belief, Lorem Ipsum is not simply random text</h4>
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                <button className="inquiry-now mt-3">
                                    Inquiry Now
                                </button>
                            </div>
                        </Col>
                        <Col md={6}>
                            <img src="img/about2.png" alt="" className="w-100" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Home
