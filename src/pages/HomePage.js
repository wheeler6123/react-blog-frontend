import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Column, Col } from 'react-bootstrap';

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
    return (
        <Container>
            <Row>
                {posts.map(post => (
                    <Col md={4} key={post.id} className='mb-4'>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant='top' src={post.image} alt={post.title}/>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Subtitle className='mb-2 text-muted'>By: {post.author}</Card.Subtitle>
                                <Card.Text>{post.content}</Card.Text>
                                <Button variant='primary' className='mr-2' as={Link} to={`/posts/${post.id}`}>Read More</Button>
                                <Button variant='danger' onClick={() => handleDelete(post.id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )

}

export default HomePage;