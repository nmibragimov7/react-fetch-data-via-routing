import React from "react";
import axios from "axios";
import {Form, redirect, useNavigation} from "react-router-dom";
import Fallback from "../../components/Fallback/Fallback";


const CreatePost = () => {
    const navigation = useNavigation();

    return (
        <Form className="max-w-2xl mx-auto" action={"/posts/create"} method={"post"}>
            <h3 className="text-2xl font-bold text-primary-blue text-center mb-2">Добавить пост</h3>
            <input
                name="title"
                className="input"
                type="text"
                placeholder="Заголовок"/>
            <input
                name="body"
                className="input"
                type="text"
                placeholder="Контент"/>
            {/*    className="cursor-pointer bg-primary-blue hover:bg-primary-blue/90 disabled:bg-primary-blue/90 shadow text-white px-8 py-4"/>*/}
            <button
                type={"submit"}
                className="cursor-pointer bg-primary-blue hover:bg-primary-blue/90 disabled:bg-primary-blue/90 shadow text-white px-8 py-4"
                disabled={navigation.state === 'submitting'}>
                {navigation.state === 'submitting' ?
                   'Loading...' : 'Добавить'
                }
            </button>
        </Form>
    );
};

const createPost = async (post) => {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        ...post
    })

    return response.data;
}

export const createPostAction = async ({request}) => {
    const formData = await request.formData();
    const newPost = {
        title: formData.get("title"),
        body: formData.get("body")
    }

    const post = await createPost(newPost);
    console.log(post.id)
    // return redirect("/posts/" + post.id);
}

export default CreatePost;
