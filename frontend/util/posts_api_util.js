export const fetchPosts = (user_id) => {
return $.ajax({
        method: 'GET',
        url: `api/users/${user_id}/posts`
    })
};

export const fetchPost = (id) => (
    $.ajax({
        url: `api/posts/${id}`,
        method: 'GET'
    })
);

export const createPost = (post) => {
    return (
        $.ajax({
            method: 'POST',
            url: `api/users/${post.user_id}/posts`,
            data: post,
            contentType: false,
            processData: false
        })
    );
};

export const updatePost = ({post}) => {
    debugger
    return $.ajax({
        method: "PATCH",
        url: `/api/posts/${post.id}`,
        data: {post},
    });
};

export const deletePost = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `api/posts/${id}`
    })
);