import React, { useState, useEffect } from 'react';
import appwriteService from '../appwrite/config'
import {Container,PostForm} from '../components/index'
import {useNavigate,useParams} from 'react-router-dom'


export default function EditPost(){
    const [post,setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        if(slug){
            appwriteService.getPost(slug)
            .then((post) => {
                if(post){
                    setPosts(post)
                }
            })
        } else{
            navigate('/')
        }
    },[slug,navigate])


    return post? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}