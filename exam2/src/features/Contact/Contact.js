import React from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Contact extends React.Component {
    render() {
        return (
            <div className='contact'>
              <a name='contact'></a>
                <div className='contact-title'>
                    <h2>Contact</h2>
                </div>
                <div className='contact-number'>
                    <p>"XXXXX"-XXX</p>
                </div>
                <div className='contact-form'>
                    <div className='contact-column'>
                        <div className='reaching'>
                            <h4>Reaching Out to me</h4>
                            <p>
                            Don't be afraid to contact me! I'm happy to answer any questions, 
                            provide more information, or just have a nice conversation! Fill out 
                            the form below to being reaching out to me. If you prefer another email 
                            client other than your default, which will appear after clicking the button 
                            and have all of the information you just entered, you can email me at XXXXX.
                            </p>
                        </div>
                        <div className='contact-info'>
                            <h4>Contact Information</h4>
                            <p>XXXX</p>
                            <p>XXXX</p>
                            <p>(XXXX)-445-7747</p>
                            <p>XXXXXX@gmail.com</p>
                        </div>
                    </div>
                    <div className='contact-column'>
                    <Form className='test'>
                      <div className='form-container'>
                      <Form.Group controlId="formGridAddress1" className='form-name'>
                        <Form.Label>First Name*</Form.Label>
                        <Form.Control placeholder="First Name" />
                      </Form.Group>
                      <Form.Group controlId="formGridAddress1" className='form-name'>
                        <Form.Label>Last Name*</Form.Label>
                        <Form.Control placeholder="Last Name" />
                      </Form.Group>
                      </div>
                      <Form.Group controlId="formGridEmail" className='form-name'>
                          <Form.Label>Email*</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1" className='form-name'>
                          <Form.Label>Message*</Form.Label>
                          <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                      <div className='form-btn'>
                        <Button variant="outline-light">
                          Submit
                        </Button>
                      </div>
                    </Form>
                    </div>
                </div>
            </div>
        )
    }
}