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

    
}