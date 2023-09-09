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

    return (
        <Container className='mt-4'>
            <Card>
                <div style={{maxHeight: '500px', overflow: 'hidden'}}>
                    <Card.Img className='img-fluid' variant='top' src={post.image} alt={post.title}/>
                </div>
                <Card.Body>
                    <Card.Title>
                        {post.title}
                    </Card.Title>
                    <Card.Subtitle>
                        By: {post.author}
                    </Card.Subtitle>
                    <Card.Text>
                        {post.content}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default PostPage;