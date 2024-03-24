import React from "react";
import { styled } from "styled-components";

import TagButton from "../button/TagButton";

const TagListContainer = styled.div`
    margin-top: 20px; // 상단 간격
    gap: 25px; // 버튼 사이 간격
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 20px;
`;

const PostTagSection = ({tags}) => {

    return (
        <TagListContainer>
            {tags.map((tag) => (
                <TagButton key={tag} tag={tag}/>
            ))}
        </TagListContainer>
    );
};

export default PostTagSection;

