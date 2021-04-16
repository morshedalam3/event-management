import axios from 'axios';
import React, { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Sidebar from '../DashBoard/Sidebar/Sidebar';

const Admin = () => {
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState(null)
    const onSubmit = data => {
        const adminData = {
            name: data.name,
            email: data.email,
            images: imageUrl
        }
        const url = `http://localhost:8080/addAdmin`

        console.log(adminData);

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => console.log('server site response', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '6bf0cd718179276f282785bb56c7be39');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
     <section className="container-fluid row">
         <Sidebar></Sidebar>
         <div className="container col-md-6 my-5">
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Label>Admin Name</Form.Label>
                            <Form.Control name="name" placeholder="Enter name" ref={register} />
                        </Col>
                        <Col>
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" placeholder="Enter email" ref={register} />
                        </Col>
                    </Form.Row>
                </Form>
                <Form>
                        <Col>
                            <br /><br /><br /> <input className="file btn btn-lg primary" name="file" type="file" onChange={handleImageUpload} />
                        </Col>
                   
                </Form>
                <br />
                <input className="btn btn-success" type="submit" />
            </form>
    
        </div>

     </section>
    );
};

export default Admin;