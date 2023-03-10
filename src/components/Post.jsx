import React from "react";
import {useAsyncValue} from "react-router-dom";

const Post = () => {
    const post = useAsyncValue();

    return (
        <div className="mb-4">
            <p className="font-bold text-2xl">
                {post.title}
            </p>
            <p>{post.body}</p>
            <p className="font-semibold text-gray-500">Комменты:</p>
        </div>
    )
}

export default Post;
