export const fetchUsers = () => {
    return $.ajax({
        method: 'GET',
        url: `api/users/`
    });
};


export const fetchUser = (userid) => {
    return $.ajax({
        method: "GET",
        url: `api/users/${id}`
    });
};

export const updateUser = (user) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/users/${user.id}`,
        data: user,
    });
};