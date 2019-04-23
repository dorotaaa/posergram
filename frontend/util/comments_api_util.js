export const fetchComments = () => {
    debugger
    return $.ajax({
        method: "GET",
        url: `api/comments`
    });
};

export const createComment = (comment) => {
    debugger
    return $.ajax({
        method: "POST",
        url: `api/comments`,
        data: { comment }
    });
};

export const deleteComment = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `api/comments/${id}`
    });
};