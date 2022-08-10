import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Slider from 'react-slick';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
};

const plan = [
    {
        name: 'Software Uses',
        demo: 'Bill + Inventory',
        silver: 'Only Billing',
        golden: 'Bill + Inventory',
        platinum: 'Bill + Inventory',
        diamond: 'Bill + Inventory',
    },
    {
        name: 'Software No of staff User',
        demo: '1 User ',
        silver: '2 User ',
        golden: '3 User ',
        platinum: '3 User ',
        diamond: 'Unlimited ',
    },
    {
        name: 'Access to Billwale',
        demo: 'Android & Web',
        silver: 'Android , Web & IOS',
        golden: 'Android , Web & IOS',
        platinum: 'Android , Web & IOS',
        diamond: 'Android , Web & IOS ',
    },
    {
        name: 'Generate E-Way Bill',
        demo: 'NO',
        silver: 'NO',
        golden: 'NO',
        platinum: 'Unlimited',
        diamond: 'Unlimited',
    },
    {
        name: 'Generate E-Way Invoice',
        demo: 'NO',
        silver: 'NO',
        golden: 'NO',
        platinum: 'NO',
        diamond: 'Available to add on request',
    },
    {
        name: 'Generate & Print Pincode',
        demo: 'NO',
        silver: 'NO',
        golden: 'NO',
        platinum: 'Yes',
        diamond: 'Yes',
    },
    {
        name: 'SMS Marketing',
        demo: 'NO',
        silver: 'NO',
        golden: '500 SMS (Per Year)',
        platinum: '1000 SMS (Per Year)',
        diamond: '2000 SMS (Per Year)',
    },
    {
        name: 'Access to Customer Support',
        demo: 'Call & Chat Support ',
        silver: 'Call & Chat Support',
        golden: 'Call & Chat Support',
        platinum: 'Priority Call & Chat Support',
        diamond: 'Priority Call & Chat Support',
    },
    {
        name: 'Remove Billwale Branding From Invoice & Greeting',
        demo: 'NO',
        silver: 'Yes',
        golden: 'Yes',
        platinum: 'Yes',
        diamond: 'Yes',
    },
    {
        name: 'Use Advance GST themes for Bills',
        demo: 'NO',
        silver: 'Yes',
        golden: 'Yes',
        platinum: 'Yes',
        diamond: 'Yes',
    },
    {
        name: 'Adv. Reports such as GST Report and Profit & Loss',
        demo: 'NO',
        silver: 'Yes',
        golden: 'Yes',
        platinum: 'Yes',
        diamond: 'Yes',
    },
    {
        name: 'Recover Deleted Invoices (Mobile Only)',
        demo: 'NO',
        silver: 'Yes',
        golden: 'Yes',
        platinum: 'Yes',
        diamond: 'Yes',
    },
    {
        name: 'Share Premium Bussiness Card (Android)',
        demo: 'NO',
        silver: 'Yes',
        golden: 'Yes',
        platinum: 'Yes',
        diamond: 'Yes',
    },
]

const about = [
    {
       
        img: 'img/bg-2.png',
        about: 'What is Lorem Ipsum?',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
       
        img: 'img/bg-2.png',
        about: 'What is Lorem Ipsum?',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      
        img: 'img/bg-2.png',
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

            {/* <section className="about-section" id="about">
                <Container fluid>
                    <Row>
                        {about.map((item) =>
                            <Col md={4}>
                                <div className="single-about text-center">
                                  
                                    <img src={item.img} alt="" />

                                    <h3>{item.about}</h3>
                                    <p>{item.para}</p>
                                </div>
                            </Col>
                        )}

                    </Row>
                </Container>
            </section> */}


            <section className="details-page details-page-two position-relative" id="about">
            <h3 className="title">About us</h3>
                <Container>
                    <Row>
                        <Col md={6}>
                            <img src="img/Untitled3.png" alt="" className="w-100" />
                        </Col>
                        <Col md={6}>
                            <div className="details-inner-section pt-5">
                                <h4>Contrary to popular belief  </h4>
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                
                            </div>
                        </Col>
                    </Row>
                    <Row>
                       
                        <Col md={6}>
                            <div className="details-inner-section pt-5">
                                <h4>Contrary to popular belief</h4>
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                               
                            </div>
                        </Col>
                        <Col md={6}>
                            <img src="img/Untitled5.png" alt="" className="w-100" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <img src="img/Untitled4.png" alt="" className="w-100" />
                        </Col>
                        <Col md={6}>
                            <div className="details-inner-section pt-5">
                                <h4>Contrary to popular belief</h4>
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        
                        <Col md={6}>
                            <div className="details-inner-section pt-5">
                                <h4>Contrary to popular belief</h4>
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                
                            </div>
                        </Col>
                        <Col md={6}>
                            <img src="img/Untitled6.png" alt="" className="w-100" />
                        </Col>
                    </Row>
                </Container>
            </section>


           


            <section className="about-section about-section-two px-md-5 px-0" id="work">
                <Container fluid>
                    <h3 className="title">HOW WE WORK</h3>
                    <Row>
                        {about.map((item) =>
                            <Col md={4}>
                                <div className="single-about text-center">
                                    <img src={item.img} alt="" />

                                    <h3>{item.about}</h3>
                                    <p>{item.para}</p>
                                </div>
                            </Col>
                        )}
                    </Row>
                </Container>
            </section>


            <section className="details-page position-relative" id="feature">
                <div className='bg-round-2'> </div>
                <h3 className="title">App  Features</h3>
                <Container>
                    <Row>
                        <Col md={6} className="order-md-1 order-2">
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
                        <Col md={6} className="order-md-2 order-1">
                            <img src="img/about2.png" alt="" className="w-100" />
                        </Col>
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


            <section className='plan-section' id="price">
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
            </section>

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
