const dummydata = [
    {
        id: 1,
        title: "첫 번째 글",
        content: "첫 번째 글의 내용입니다.",
        category: "리뷰",
        tags: ["태그1", "태그2"],
        author: "작성자1",
        comments: 5,
        likes: 10,
        date: "2024-01-01",
    },
    {
        id: 2,
        title: "두 번째 글",
        content: "두 번째 글의 내용입니다.",
        category: "질문",
        tags: ["태그3"],
        author: "작성자2",
        comments: 3,
        likes: 8,
        date: "2024-01-02",
    },
    {
        id: 3,
        title: "세 번째 글",
        content: "세 번째 글의 내용입니다.",
        category: "공지",
        tags: ["태그4"],
        author: "작성자3",
        comments: 8,
        likes: 12,
        date: "2024-01-03",
    },
    {
        id: 4,
        title: "네 번째 글",
        content: "네 번째 글의 내용입니다.",
        category: "리뷰",
        tags: ["태그5"],
        author: "작성자4",
        comments: 2,
        likes: 6,
        date: "2024-01-04",
    },
    {
        id: 5,
        title: "다섯 번째 글",
        content: "다섯 번째 글의 내용입니다.",
        category: "질문",
        tags: ["태그6"],
        author: "작성자5",
        comments: 4,
        likes: 9,
        date: "2024-01-05",
    },
    {
        id: 6,
        title: "여섯 번째 글",
        content: "여섯 번째 글의 내용입니다.",
        category: "공지",
        tags: ["태그7"],
        author: "작성자6",
        comments: 6,
        likes: 15,
        date: "2024-01-06",
    },
    {
        id: 7,
        title: "일곱 번째 글",
        content: "일곱 번째 글의 내용입니다.",
        category: "리뷰",
        tags: ["태그8"],
        author: "작성자7",
        comments: 3,
        likes: 7,
        date: "2024-01-07",
    },
    {
        id: 8,
        title: "여덟 번째 글",
        content: "여덟 번째 글의 내용입니다.",
        category: "질문",
        tags: ["태그9"],
        author: "작성자8",
        comments: 7,
        likes: 11,
        date: "2024-01-08",
    },
    {
        id: 9,
        title: "아홉 번째 글",
        content: "아홉 번째 글의 내용입니다.",
        category: "공지",
        tags: ["태그10"],
        author: "작성자9",
        comments: 9,
        likes: 18,
        date: "2024-01-09",
    },
    {
        id: 10,
        title: "열 번째 글",
        content: "열 번째 글의 내용입니다.",
        category: "리뷰",
        tags: ["태그11"],
        author: "작성자10",
        comments: 5,
        likes: 14,
        date: "2024-01-10",
    }
];

export function fetchDataById(id) {
    const data = dummydata.find(item => item.id === id);
    return data;
}

export function fetchData() {
    return dummydata;
}