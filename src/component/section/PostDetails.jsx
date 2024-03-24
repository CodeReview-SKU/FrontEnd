import React from "react";
import styled from 'styled-components';

import commentIcon from '../../images/commentIcon.png';
import likeIcon from '../../images/likeIcon2.png'


const PostDetailContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    margin-left :20px;
    margin-right: 20px;
`;

const PostDetail = styled.h4`
    margin: 0;
    font-weight: bold;
    color: black;
`;

const MetaInfo = styled.div`
    color: gray;
    font-size: 0.9em;
`;

const Icon = styled.img`
    margin-right: 5px;
    width: 12px; 
    height: 12px; 
`;

const PostDetails = ({ author, date}) => {
    return (
        <PostDetailContainer>
            <div>
                <PostDetail>{author} | {date}</PostDetail>
            </div>
        </PostDetailContainer>
    );
};

export default PostDetails;
