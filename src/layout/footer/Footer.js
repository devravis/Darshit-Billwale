import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (

        <div className='footer-custom'>
            <section>
                <Container className='p-0'>
                   
                        <div className='text-center'>
                            <img src="img/billwale.png" alt="" />
                        </div>
                        <div className='footer-liink'>
                            <a href='#home'>Home</a>
                            <a href='#about'>About</a>
                            <a href='#work'>How We Work</a>
                            <a href='#feature'>Feature</a>
                            
                            <a href='#testmonial'>Testiimonial</a>
                            <a href='#price'>Price</a>
                            
                        </div>
                        <div className='copyrights'>
                            <div className='copy-right-inner d-lg-flex align-items-center justify-content-between'>
                                <p>Copyright @ Billwale 2022</p>
                                <div>
                                    <a href='#'>Privacy Policy</a>
                                    <a href='#'>Terms & Condition</a>

                                </div>
                            </div>
                        </div>
                   
                </Container>
            </section>
        </div>


    )
}

export default Footer
