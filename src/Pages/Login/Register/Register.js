import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error,setError]=useState('');
    const {createUser}=useContext(AuthContext);
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photoUrl=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,photoUrl,password);
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            setError('');
            form.reset();
        })
        .catch(error=>{
            console.error(error);
            setError(error.message);
        })

    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter your name" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photo' type="text" placeholder="Photo URL" />

            </Form.Group>




            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required/>
            </Form.Group>


            <Button variant="primary" type="submit">
                register
            </Button>
            <Form.Text className="text-danger">
                {error}

            </Form.Text>
        </Form>
    );
};

export default Register;