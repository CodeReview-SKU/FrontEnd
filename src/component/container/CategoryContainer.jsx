import React, { useState } from "react";
import styled from "styled-components";
import CategorySelectButton from "../button/CategorySelectButton";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-top: 10px;
`;

const Title = styled.div`
    font-size: 16px;
    color: black;
    margin-bottom: 4px;
    text-align: left;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
`;

const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;



const CategoryContainer = () => {

    // 카테고리 버튼 목록
    const categories = ['리뷰', '질문', '문의'];

    const tags = ['#태그1', '#태그2', '#태그3', '#태그4', '#태그5'];

    // 카테고리 선택 상태
    const [selectedCategory, setSelectedCategory] = useState(null);

    // 태그 선택 상태
    const [selectedTags, setSelectedTags] = useState([]);

    // 카테고리 선택했을 때
    const handleCategorySelect = (category) => {
        console.log('Selected category:', category);
        setSelectedCategory(category);
    };

    // 태그 선택했을 때
    const handleTagSelect = (tag) => {
        console.log('Selected tag:', tag);
        setSelectedTags(prevTags => [...prevTags, tag]);
    };

    return (

        <Container>
            <Title>카테고리</Title>
            <ButtonContainer>
                {categories.map((category) => (
                    <CategorySelectButton
                    key={category}
                    category={category}
                    onClick={handleCategorySelect} />
                ))}
            </ButtonContainer>

            <Title>태그</Title>
            <TagContainer>
                {tags.map((tag) => (
                    <CategorySelectButton
                        key={tag}
                        category={tag}
                        onClick={handleTagSelect}
                    />
                ))}
            </TagContainer>
        </Container>       
    );
};

export default CategoryContainer;