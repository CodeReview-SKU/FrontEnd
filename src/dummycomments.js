const dummyComments = [
    {
        id: 1,
        postId: 1,
        author: "댓글 작성자1",
        content: "첫 번째 댓글의 내용입니다.",
        //comments: 5,
        //likes: 10,
        date: "2024-01-01"
    }
];

export function fetchCommentsByPostId(postId) {
    const commentData = dummyComments.find(item => item.postId === postId);
    return commentData;
}

// export function fetchData() {
//     return dummydata;
// }