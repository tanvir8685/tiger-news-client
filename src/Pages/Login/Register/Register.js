import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted,setAccepted]=useState(false);
    const { createUser ,updateUserProfile,verifyEmail} = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, photoUrl, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name,photoUrl);
                handleEmailVerificaton();
                toast.success('Please verify your email address')

            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })

    }
    const handleUpdateUserProfile=(name,photoURL)=>{
        const profile={
            displayName:name,
            photoURL:photoURL
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error=>console.error(error))
    }
    const handleAccepted = event=>{
        setAccepted(event.target.checked)
    }

    const handleEmailVerificaton=()=>{
        return verifyEmail()
        .then(()=>{})
        .catch(e=>console.error(e))
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
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                type="checkbox" 
                onClick={handleAccepted}
                label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
            </Form.Group>


            <Button variant="primary" type="submit" disabled={!accepted}>
                register
            </Button>
            <Form.Text className="text-danger">
                {error}

            </Form.Text>
        </Form>
    );
};

export default Register;