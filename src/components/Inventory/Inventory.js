import axios from 'axios';
import React, { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Sidebar from '../DashBoard/Sidebar/Sidebar';
// import events from '../../Data/Events.json';
// import speaker from '../../Data/Speaker.json';
const Inventory = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl, setImageUrl] = useState(null)
    const onSubmit = data => {
        const productData = {
            name: data.name,
            type: data.type,
            description: data.description,
            images: imageUrl
        }
        const url = `https://immense-hamlet-65512.herokuapp.com/addevent`

        console.log(productData);

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
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
                            <Form.Label>Service Name</Form.Label>
                            <Form.Control name="name" placeholder="Product name" ref={register} />
                        </Col>
                        <Col>
                            <Form.Label>Service Type</Form.Label>
                            <Form.Control name="type" placeholder="Type" ref={register} />
                        </Col>
                    </Form.Row>
                </Form>
                <Form>
                    <Form.Row>
                        <Col>
                            <br /><br /><Form.Label>Service description</Form.Label>
                            <Form.Control name="description" placeholder="Id" ref={register} />
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
export default Inventory;