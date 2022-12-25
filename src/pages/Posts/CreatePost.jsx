import React from "react";
import {useFormik} from "formik";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const CreatePost = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            title: "",
            body: ""
        },
        async onSubmit(values) {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
                title: values.title,
                body: values.body
            })
            if(response.status === 201) {
                navigate('/posts');
            }
        }
    });

    return (
        <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-blue text-center mb-2">Добавить пост</h3>
            <input
                name="title"
                className="input"
                value={formik.values.title}
                onChange={formik.handleChange}
                type="text"
                placeholder="Заголовок"/>
            <input
                name="body"
                className="input"
                value={formik.values.body}
                onChange={formik.handleChange}
                type="text"
                placeholder="Контент"/>
            <button
                className="bg-primary-blue hover:bg-primary-blue/90 disabled:bg-primary-blue/90 shadow text-white px-8 py-4"
                onClick={formik.handleSubmit}>
                Добавить
            </button>
        </div>
    );
};

export default CreatePost;
