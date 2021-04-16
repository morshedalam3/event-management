import React, { useState } from 'react';
import Sidebar from '../DashBoard/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Col, Form } from 'react-bootstrap';
const AddReview = () => {
    const { register, handleSubmit} = useForm();
    const [imageUrl, setImageUrl] = useState(null)
    const onSubmit = data => {
        const CustomerData = {
            name: data.name,
            email: data.email,
            description: data.description,
            images: imageUrl
        }
        const url = `https://immense-hamlet-65512.herokuapp.com/addReview`

        console.log(CustomerData);

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(CustomerData)
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
         <div className="container">
         <form onSubmit={handleSubmit(onSubmit)}>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" placeholder="Enter name" ref={register} />
                        </Col>
                        <Col>
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" placeholder="Enter Email" ref={register} />
                        </Col>
                    </Form.Row>
                </Form>
                <Form>
                    <Form.Row>
                        <Col>
                        <label for="exampleFormControlTextarea1" className="form-label">Your Comment Here</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="description" placeholder="Description" ref={register} />
                        </Col>
                        <Col>
                            <br /><input className="file btn btn-lg primary" name="file" type="file" onChange={handleImageUpload} />
                        </Col>
                    </Form.Row>
                </Form>
                <br />
                <input className="btn btn-success" type="submit" />
            </form>
         </div>
        </section>

    );
};

export default AddReview;