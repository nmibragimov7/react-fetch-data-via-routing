import React, {Suspense} from 'react';
import axios from "axios";
import {defer, useLoaderData, Await} from "react-router-dom";

import Comments from "../../components/Comments";
import Post from "../../components/Post";
import Fallback from "../../components/Fallback/Fallback";

const PostDetail = () => {
    const {post, comments, id} = useLoaderData();

    return (
        <div className="flex flex-col items-start">
            <Suspense fallback={<Fallback/>}>
                <Await resolve={post}>
                    <Post id={id}/>
                </Await>
            </Suspense>
            <Suspense fallback={<Fallback/>}>
                <Await resolve={comments}>
                    <Comments/>
                </Await>
            </Suspense>
        </div>
    );
};

export default PostDetail;

const fetchPostById = async (id) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
    return response.data;
}

const fetchCommentsByPost = async (id) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + id);
    return response.data;
}

export const postLoader = async ({params}) => {
    const id = params.id;

    return defer({
        post:  fetchPostById(id), // если задать await, то переход по роуту не произойдет пока не загрузится пост
        comments: fetchCommentsByPost(id),
        id
    });
}
