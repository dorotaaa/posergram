export const fetchPosts = (user_id) => (
    $.ajax({
        url: `api/users/${user_id}/posts`,
        method: 'GET'
    })
);

export const fetchPost = (id) => (
    $.ajax({
        url: `api/posts/${id}`,
        method: 'GET'
    })
);

export const createPost = (post) => {
    return (
        $.ajax({
            url: `api/users/${post.user_id}/posts`,
            method: 'POST',
            data: post,
            contentType: false,
            processData: false
        })
    );
};


export const deletePost = (id) => (
    $.ajax({
        url: `api/posts/${id}`,
        method: 'DELETE'
    })
);