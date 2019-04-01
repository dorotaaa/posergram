export const fetchPosts = () => (
    $.ajax({
        url: `api/users/${user_id}/posts`,
        method: 'GET'
    })
);

export const fetchPost = (id) => (
    $.ajax({
        url: `api/users/${user_id}/posts/${id}`,
        method: 'GET'
    })
);

export const createPost = (post) => {
    return (
        $.ajax({
            url: `api/users/${user_id}/posts`,
            method: 'POST',
            data: post
        })
    );
};

export const updatePost = (post) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/users/${user_id}/posts/${id}`,
        data: post,
    });
};

export const deletePost = (id) => (
    $.ajax({
        url: `api/users/${user_id}/posts/${id}`,
        method: 'DELETE'
    })
);