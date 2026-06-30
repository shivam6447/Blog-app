import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

export default function AllPost() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts([])
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
            });
    }, []);

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <PostCard key={post.$id} {...post} />
                    ))}
                </div>
            </Container>
        </div>
    );
}