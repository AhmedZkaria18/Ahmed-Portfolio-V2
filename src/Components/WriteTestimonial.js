import React from 'react';
import { Button, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';

function WriteTestimonial() {
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1zrrxxs', 'template_cbmjh3t', e.target, 'user_Eg6uYSShr8fVeYSPqDVsr')
        .then( result => {
            console.log(result);
        }).catch(error => {
            console.log(error.text);
        });

        e.target.reset();
    }

    return (
        <>
            <Form onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Friend Name</Form.Label>
                    <Form.Control type="text" placeholder="Type your name" name='name'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Friend Vision</Form.Label>
                    <Form.Control as="textarea" placeholder="Type your vision / feedback on my portfolio" rows={3} name='message'/>
                </Form.Group>
                <Button variant="primary" type="submit"> Send Msg </Button>
            </Form>
        </>
    )
}

export default WriteTestimonial
