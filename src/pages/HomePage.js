import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Column } from 'react-bootstrap';

const HomePage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('http://localhost:5000/posts');
            setPosts(res.data);
        }
        fetchPosts();
    }, [])

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/posts/${id}`);
        const newPosts = posts.filter(post => post.id !== id);
        setPosts(newPosts);
    }

    
}