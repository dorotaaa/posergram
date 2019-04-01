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

export const updateUser = ({user, id}) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/users/${id}`,
        data: {user},
    });
};