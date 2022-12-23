import React from "react";
import {Link, useAsyncValue} from "react-router-dom";

const Post = ({id}) => {
    const post = useAsyncValue();

    return (
        <>
            <div className="mb-4">
                <p className="font-bold text-2xl">
                    {post.title}
                </p>
                <p>
                    {post.body}
                </p>
            </div>
            <Link
                className="inline-block bg-primary-blue hover:bg-primary-blue/90 disabled:bg-primary-blue/90 shadow text-white px-8 py-4 mb-8"
                to={('/posts/' + id + '/edit')}>Редактировать</Link>
        </>
    )
}

export default Post;
