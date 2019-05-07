export const fetchUsers = () => {
    return $.ajax({
        method: 'GET',
        url: `api/users`
    });
};

export const fetchUser = (id) => {
    return $.ajax({
        method: "GET",
        url: `api/users/${id}`
    });
};

export const updateUser = ({user}) => {
    debugger
    return $.ajax({
        method: 'PATCH',
        url: `api/users/${user.id}`,
        data: { user },
        // data: user.formData,
        contentType: false,
        processData: false
    });
};