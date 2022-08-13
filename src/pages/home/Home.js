import React from 'react';
import { Col, Row, Container, Form } from 'react-bootstrap';
import Slider from 'react-slick';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
};



const about = [
    {

        img: 'img/tax.png',
        about: 'What is Lorem Ipsum?',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {

        img: 'img/tax.png',
        about: 'What is Lorem Ipsum?',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {

        img: 'img/tax.png',
        about: 'What is Lorem Ipsum?',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
]

const list = [
    {
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    },
    {
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    },
    {
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    },

]

const testimonial = [
    {
        img: "",
        para: ' It so numerous if he outlived disposal. How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved resolution.',
        name: "sondagar ravi",
        position: "jwellers"
    },
    {
        img: "",
        para: ' It so numerous if he outlived disposal. How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved resolution.',
        name: "sondagar ravi",
        position: "jwellers"
    },
    {
        img: "",
        para: ' It so numerous if he outlived disposal. How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved resolution.',
        name: "sondagar ravi",
        position: "jwellers"
    },

]

function Home() {
    return (
        <>
            <section className='bg-hero hero-sections' id="home" style={{ backgroundImage: `url("img/man.jpeg")` }}>
                <div className='layer-mobile d-md-none d-block'></div>
                <Container>
                    <Row>
                        <Col md={6} className="order-md-1 order-2">
                            <div className='inner-content'>
                                <p className="mt-3">Accounting and GST Billing</p>
                                <h1 className='mt-3'>Software</h1>
                                <div className='position-relative'>
                                    <input type="text" placeholder='Enter Your Mobile Number' className='mobile-get' />
                                    <button className='try-btn'>Get Free Trail</button>
                                </div>
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

                        {/* <Col md={6} className="order-md-2 order-1">
                            <img src="img/hero.png" alt="" className="w-100" />
                        </Col> */}
                    </Row>
                </Container>
            </section>

            <section className="about-section px-md-5 mt-5 pb-5" id="about">
                <Container fluid>
                    <Row>
                        {about.map((item) =>
                            <Col md={4} className="mt-md-0 mt-5">
                                <div className="single-about text-center">
                                    <div className='about-bg-main'>
                                        <div className='about-bg'>
                                            <img src={item.img} alt="" />
                                        </div>
                                    </div>

                                    <h3>{item.about}</h3>
                                    <p>{item.para}</p>
                                </div>
                            </Col>
                        )}

                    </Row>
                </Container>
            </section>


            <section className="details-page position-relative  px-md-5 px-0" id="feature">
                <div className='bg-round-2'> </div>
                <h3 className="title">App  Features</h3>
                <Container fluid>
                    <Row>
                        <Col md={4}>
                            <div className='form-info'>
                                <Row className='inquiry-now-title'>
                                    <Col md={12}>
                                    <h3>INQUIRY NOW</h3>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group className="col-md-6" controlId="formGridAddress1">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control placeholder="Enter First Name" />
                                    </Form.Group>

                                    <Form.Group className="col-md-6" controlId="formGridAddress2">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control placeholder="Enter Last Name" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group className="col-md-6" controlId="formGridAddress1">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control placeholder="Enter First Name" />
                                    </Form.Group>

                                    <Form.Group className="col-md-6" controlId="formGridAddress2">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control placeholder="Enter Last Name" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group className="col-md-6" controlId="formGridAddress1">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control placeholder="Enter First Name" />
                                    </Form.Group>

                                    <Form.Group className="col-md-6" controlId="formGridAddress2">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control placeholder="Enter Last Name" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group className="col-md-6" controlId="formGridAddress1">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control placeholder="Enter First Name" />
                                    </Form.Group>

                                    <Form.Group className="col-md-6" controlId="formGridAddress2">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control placeholder="Enter Last Name" />
                                    </Form.Group>

                                    <Col md={12} className="form-submit mt-3">
                                    <button className='bg-submit'>submit</button>
                                    </Col>
                                </Row>
                              
                            </div>
                        </Col>

                        <Col md={4}>
                            <img src="img/about2.png" alt="" className="w-100 pt-5" />
                        </Col>
                        <Col md={4}>
                            <div className="details-inner-section">
                                <h4 className='mb-5'>Contrary to popular belief, Lorem Ipsum is not simply random text</h4>

                                {list.map((item) =>
                                    <div className='mt-2 d-flex'>
                                        <img src="img/check-number.png" alt="" className='right-click' />
                                        <p className='mt-0 ml-2'>{item.para}</p>
                                    </div>
                                )}
                                <button className="inquiry-now mt-3">
                                    Inquiry Now
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='plan-section px-md-5 px-0' id="price">
                <h3 className="title">Our plan</h3>
                <Container fluid>
                    <Row className='mt-5'>
                        <Col md={3}>
                            <div className='single-plan-section-main'>


                                <div className='single-plan-section'>
                                    <h3 className='title-plan'>Basic Plan</h3>

                                    <div className='d-flex align-items-center price-discount'>
                                        <del>₹2000</del>
                                        <p>40% Discount</p>
                                    </div>

                                    <div className='total-price'>
                                        <h3>₹100<span>/mo</span></h3>
                                        <button>Add to Cart</button>
                                        <h5>₹ 133.33 /mo after 31 august</h5>
                                    </div>

                                    <div className='see-features'>
                                        <h4>See all Features</h4>


                                        <h5 className='d-flex align-itmes-center'>
                                            <b>Only Billing</b>&nbsp;Uses
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <b>2 Staff</b>&nbsp;User
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <b>Android, IOS & Web</b>&nbsp;Access
                                        </h5>
                                        <h5 className='d-flex align-items-center'>
                                            <span className='mr-1'><img src="img/cross.svg" alt="" /></span>
                                            Generate E-Way Bill
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <span className='mr-1'><img src="img/cross.svg" alt="" /></span>
                                            Generate E-Invoicing
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <span className='mr-1'><img src="img/cross.svg" alt="" /></span>
                                            Generate and Print Barcode
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <span className='mr-1'><img src="img/cross.svg" alt="" /></span>
                                            SMS Marketing
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <b>Call & Chat</b>&nbsp;Support
                                        </h5>

                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='single-plan-section-main'>
                                <div className='single-plan-section'>
                                    <h3 className='title-plan'>Standard Plan</h3>

                                    <div className='d-flex align-items-center price-discount'>
                                        <del>₹3000</del>
                                        <p>40% Discount</p>
                                    </div>

                                    <div className='total-price'>
                                        <h3>₹150<span>/mo</span></h3>
                                        <button>Add to Cart</button>
                                        <h5>₹ 200 /mo after 31 august</h5>
                                    </div>

                                    <div className='see-features'>
                                        <h4>See all Features</h4>


                                        <h5 className='d-flex align-itmes-center'>
                                            <b>Bill and Inventory</b>&nbsp;Uses
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <b>3 Staff</b>&nbsp;User
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <b>Android, IOS & Web</b>&nbsp;Access
                                        </h5>
                                        <h5 className='d-flex align-items-center'>
                                            <span className='mr-1'><img src="img/cross.svg" alt="" /></span>
                                            Generate E-Way Bill
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <span className='mr-1'><img src="img/cross.svg" alt="" /></span>
                                            Generate E-Invoicing
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <span className='mr-1'><img src="img/cross.svg" alt="" /></span>
                                            Generate and Print Barcode
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <span className='mr-1'><img src="img/right.svg" alt="" /></span>
                                            500 SMS (Per Year)
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <b>Call & Chat</b>&nbsp;Support
                                        </h5>

                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='single-plan-section-main single-plan-section-main-populer'>
                                <div className='most-popular'>
                                    <h3>Most Popular</h3>
                                </div>
                                <div className='single-plan-section'>
                                    <h3 className='title-plan'>Premium Plan</h3>

                                    <div className='d-flex align-items-center price-discount'>
                                        <del>₹5000</del>
                                        <p>40% Discount</p>
                                    </div>

                                    <div className='total-price'>
                                        <h3>₹250<span>/mo</span></h3>
                                        <button>Add to Cart</button>
                                        <h5>₹ 333.33 /mo after 31 august</h5>
                                    </div>

                                    <div className='see-features'>
                                        <h4>See all Features</h4>


                                        <h5 className='d-flex align-itmes-center'>
                                            <b>Bill and Inventory</b>&nbsp;Uses
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <b>3 Staff</b>&nbsp;User
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <b>Android, IOS & Web</b>&nbsp;Access
                                        </h5>
                                        <h5 className='d-flex align-items-center'>
                                            <span className='mr-1'><img src="img/right.svg" alt="" /></span>
                                            Generate E-Way Bill
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <span className='mr-1'><img src="img/cross.svg" alt="" /></span>
                                            Generate E-Invoicing
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <span className='mr-1'><img src="img/right.svg" alt="" /></span>
                                            Generate and Print Barcode
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <span className='mr-1'><img src="img/right.svg" alt="" /></span>
                                            1000 SMS (Per Year)
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <b>Priority Call & Chat</b>&nbsp;Support
                                        </h5>

                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='single-plan-section-main'>
                                <div className='single-plan-section'>
                                    <h3 className='title-plan'>Enterprise Plan</h3>

                                    <div className='d-flex align-items-center price-discount'>
                                        <del>₹6000</del>
                                        <p>40% Discount</p>
                                    </div>

                                    <div className='total-price'>
                                        <h3>₹300<span>/mo</span></h3>
                                        <button>Add to Cart</button>
                                        <h5>₹ 400 /mo after 31 august</h5>
                                    </div>

                                    <div className='see-features'>
                                        <h4>See all Features</h4>


                                        <h5 className='d-flex align-itmes-center'>
                                            <b>Bill and Inventory</b>&nbsp;Uses
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <b>Unlimited</b>&nbsp;User
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <b>Android, IOS & Web</b>&nbsp;Access
                                        </h5>
                                        <h5 className='d-flex align-items-center'>
                                            <span className='mr-1'><img src="img/right.svg" alt="" /></span>
                                            Generate E-Way Bill
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <span className='mr-1'><img src="img/right.svg" alt="" /></span>
                                            Generate E-Invoicing (on Request)
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <span className='mr-1'><img src="img/right.svg" alt="" /></span>
                                            Generate and Print Barcode
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <span className='mr-1'><img src="img/right.svg" alt="" /></span>
                                            2000 SMS (Per Year)
                                        </h5>
                                        <h5 className='d-flex align-itmes-center'>
                                            <b>Priority Call & Chat</b>&nbsp;Support
                                        </h5>

                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="about-section about-section-two px-md-5" id="work">
                <Container fluid>
                    <h3 className="title">HOW WE WORK</h3>
                    <Row className='mt-md-5 mt-0'>
                        {about.map((item) =>
                            <Col md={4} className="mt-md-0 mt-5">
                                <div className="single-about text-center">
                                    <div className='about-bg-main'>
                                        <div className='about-bg'>
                                            <img src={item.img} alt="" />
                                        </div>
                                    </div>

                                    <h3>{item.about}</h3>
                                    <p>{item.para}</p>
                                </div>
                            </Col>
                        )}
                    </Row>
                </Container>
            </section>





            <section className='bg-testiimonial' id="testmonial">
                <Container>
                    <Row>
                        <Col md={2} className="text-md-left text-center">
                            <img src="img/avater.png" alt="" className='user-img' />
                        </Col>
                        <Col md={10}>
                            <Slider {...settings}>
                                {testimonial.map((item) =>
                                    <div className='testimonial-content'>
                                        <h5>{item.para}</h5>
                                        <h2 className='mt-3'>{item.name}</h2>
                                        <h5 className='mt-3'>{item.position}</h5>
                                        <img src="img/five-star.png" alt="" className='mt-3 mx-md-0 mx-auto' />
                                    </div>
                                )}
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>


            {/* <section className='plan-section' id="price">
                <h3 className="title">Our Plan</h3>
                <Container fluid className='p-0'>

                    <div className='price-table'>
                        <table>
                            <thead>

                                <tr>
                                    <th><img src="img/billwale.png" alt="" /></th>
                                    <th>Demo</th>
                                    <th>Sliver Plan</th>
                                    <th>Golden Plan</th>
                                    <th>Platinum Plan</th>
                                    <th>Diamond Plan</th>
                                </tr>

                            </thead>
                            <tbody>
                                {plan.map((item) =>
                                    <tr>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td className={item.demo === "NO" ? "no-color" : item.demo === "Yes" ? "green-color" : ""}>

                                            {item.demo}
                                        </td>
                                        <td className={item.silver === "NO" ? "no-color" : item.silver === "Yes" ? "green-color" : ""}>
                                            {item.silver}
                                        </td>
                                        <td className={item.golden === "NO" ? "no-color" : item.golden === "Yes" ? "green-color" : ""}>
                                            {item.golden}
                                        </td>
                                        <td className={item.platinum === "NO" ? "no-color" : item.platinum === "Yes" ? "green-color" : ""}>
                                            {item.platinum}
                                        </td>
                                        <td className={item.diamond === "NO" ? "no-color" : item.diamond === "Yes" ? "green-color" : ""}>
                                            {item.diamond}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                </Container>
            </section> */}



            <section className="details-page position-relative" >
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
        </>
    )
}

export default Home
