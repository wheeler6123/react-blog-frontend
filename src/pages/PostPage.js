import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

const PostPage = () => {

    const [post, setPost] = useState({
        title: '',
        author: '',
        image: '',
        content: ''
    });

    const { id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`http://localhost:3000/posts/${id}`);
            setPost(res.data);
        }
        fetchPost();
    }, [id]);
}