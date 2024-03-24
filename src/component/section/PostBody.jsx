import React from "react";
import styled from 'styled-components';

import commentIcon from '../../images/commentIcon.png';
import likeIcon from '../../images/likeIcon2.png'


const PostBodyContainer = styled.div`
    display: flex;
    display: inline-block;
    align-items: center;
    margin: 20px;
    padding: 10px;
    border: solid;
    border-radius: 10px;
    height: 100px;
    width: 90%;
`;

const PostContent = styled.h4`
    margin: 0 0 10px 0;
    font-weight: bold;
    color: black;
`;

const MetaInfo = styled.div`
    margin: 0 0 20px 22px;
    color: gray;
    font-size: 0.9em;
`;

const Icon = styled.img`
    margin-right: 5px;
    width: 12px; 
    height: 12px; 
`;

const PostBody = ({ content }) => {
    return (
        <div>
            <PostBodyContainer>
                <PostContent>리뷰내용</PostContent>
                <div>
                    {content}
                </div>
            </PostBodyContainer>
            <MetaInfo>
                <span>좋아용 </span>
                <Icon src={likeIcon} alt="comment icon" />
            </MetaInfo>
        </div>
    );
};

export default PostBody;
