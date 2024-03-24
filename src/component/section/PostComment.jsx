import React from "react";
import styled from 'styled-components';

import commentIcon from '../../images/commentIcon.png';
import likeIcon from '../../images/likeIcon2.png'


const PostCommentContainer = styled.input`
    display: flex;
    display: inline-block;
    align-items: center;
    margin: 0px 20px 20px 20px;
    padding: 10px;
    border: solid;
    border-radius: 10px;
    height: 50px;
    width: 90%;
`;

const StyledButton = styled.button`
    background-color: blue;
    color: white;
    padding: 8px 20px;
    border: 1px solid blue;
    border-radius: 8px;
    width: 95px;
    height: 34px;
    cursor: pointer;
`;

const PostComment = ({ content }) => {
    return (
        <div>
            <h3 style={{ marginLeft: "20px", fontWeight: "bold" }}>댓글</h3>
            <PostCommentContainer placeholder="댓글 작성하는 곳"/>
            <div style={{ display: "flex", justifyContent: "right", margin: "0 20px", padding: "0 10px"}}>
                <StyledButton>댓글 작성</StyledButton>
            </div>
        </div>
    );
};

export default PostComment;
