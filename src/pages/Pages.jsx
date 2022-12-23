import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";

import Main from "./Main";
import Posts, {postsLoader} from "./Posts/Posts";
import PostDetail, {postLoader} from "./Posts/PostDetail";
import Layout from "../layouts/Layout";
import NotFound from "./NotFound";
import PostEdit from "./Posts/PostEdit";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>} />
            <Route path="posts">
                <Route index element={<Posts/>} loader={postsLoader} />
                <Route path=":id" element={<PostDetail/>} loader={postLoader}/>
                <Route path=":id/edit" element={<PostEdit/>} loader={postLoader}/>
            </Route>
            <Route path="*" element={<NotFound/>} />
        </Route>
    </>
))

export default router;
