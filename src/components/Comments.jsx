import React from 'react';
import {useAsyncValue} from "react-router-dom";

const Comments = () => {
    const comments = useAsyncValue();

    return (
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {
                comments.map(comment => (
                    <div key={comment.id} className="shadow-gray-100">
                        <div className="flex justify-between bg-gray-100 p-4">
                            <p>{comment.name}</p>
                            <p>{comment.email}</p>
                        </div>
                        <p className="p-4">{comment.body}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Comments;
