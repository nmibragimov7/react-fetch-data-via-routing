import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";

import Main from "./Main";
import Posts, {postsLoader} from "./Posts/Posts";
import PostDetail, {postLoader} from "./Posts/PostDetail";
import Layout from "../layouts/Layout";
import NotFound from "./NotFound";
import RequireAuth from "../hoc/RequireAuth";
import Login from "./Login";
import CreatePost, {createPostAction} from "./Posts/CreatePost";
import ErrorPage from "../components/ErrorPage";
import ErrorBoundary from "../hoc/ErrorBoundary";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>} />
            <Route path="login" element={<Login/>} />
            <Route path="posts">
                <Route
                    index
                    element={
                        <RequireAuth>
                            <Posts/>
                        </RequireAuth>
                    }
                    errorElement={<ErrorPage/>}
                    loader={postsLoader} />
                <Route
                    path=":id"
                    element={
                        <ErrorBoundary>
                            <RequireAuth>
                                <PostDetail/>
                            </RequireAuth>
                        </ErrorBoundary>
                    }
                    errorElement={<ErrorPage/>}
                    loader={postLoader}/>
                <Route
                    path="create"
                    element={
                        <RequireAuth>
                            <CreatePost/>
                        </RequireAuth>
                    }
                    errorElement={<ErrorPage/>}
                    action={createPostAction}/>
            </Route>
            <Route path="*" element={<NotFound/>} />
        </Route>
    </>
))

export default router;
