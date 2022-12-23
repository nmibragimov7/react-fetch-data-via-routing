import React, {Suspense} from 'react';
import axios from "axios";
import {defer, useLoaderData, useNavigate, Await} from "react-router-dom";
import Fallback from "../../components/Fallback/Fallback";

const Posts = () => {
    const navigate = useNavigate();
    const {posts} = useLoaderData();

    return (
        <div className="flex flex-col gap-4">
            <Suspense fallback={<Fallback/>}>
                <Await resolve={posts}>
                    {
                        (resolvedPosts) => (
                            <>
                                {
                                    resolvedPosts.map(post => (
                                        <div
                                            key={post.id}
                                            className="p-4 border border-solid border-primary-blue cursor-pointer hover:bg-light-blue"
                                            onClick={() => navigate('/posts/' + post.id)}
                                        >
                                            <p>
                                                {post.id}. {post.title}
                                            </p>
                                            <p>
                                                {post.body}
                                            </p>
                                        </div>
                                    ))
                                }
                            </>
                        )
                    }
                </Await>
            </Suspense>
        </div>
    );
};

export default Posts;

const fetchPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
}

export const postsLoader = async () => {
    return defer({
        posts: fetchPosts()
    })
}