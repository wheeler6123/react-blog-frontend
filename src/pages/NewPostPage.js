import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';


const NewPostPage = () => {

    const [post, setPost] = useState({
        title: '',
        author: '',
        image: '',
        content: '',
    });

    const handleSubmit = async e => {
        e.preventDefault();
        const post = {
            title,
            content
        };
        await axios.post('http://localhost:3000/posts', post);
        navigate('/');
    }


}