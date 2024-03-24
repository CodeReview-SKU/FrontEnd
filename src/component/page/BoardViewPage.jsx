import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchDataById } from '../../dummydata';
import {fetchCommentsByPostId} from '../../dummycomments';
import { styled } from "styled-components";

import Header from "../section/Header";
import PostHeader from "../section/PostHeader";
import PostDetails from "../section/PostDetails";
import PostTagSection from "../section/PostTagSection";
import PostBody from "../section/PostBody";
import PostComment from "../section/PostComment";


const BoardViewPage = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const postId = parseInt(params.get('id'));

    const [postData, setPostData] = useState(null);
    const [postComments, setPostComments] = useState(null);

    useEffect(() => {
        const data = fetchDataById(postId);
        setPostData(data);
        const comments = fetchCommentsByPostId(postId);
        setPostComments(comments);
        console.log(postComments);
    }, [postId]);

    return (
        <div>
            <Header />
            {postData && (
                <div>
                    <PostHeader
                        category={postData.category}
                        title={postData.title}
                        comments={postData.comments}
                        likes={postData.likes}
                        author={postData.author}
                        date={postData.data}
                    />
                    <PostDetails
                        author={postData.author}
                        date={postData.date}
                    />
                    <PostTagSection
                        tags={postData.tags}
                    />
                    <PostBody
                        content={postData.content}
                    />
                </div>
            )}
            <hr/>
            <PostComment/>
            <hr/>

        </div>
    );
};

export default BoardViewPage;
