export const createFollow = follow => (
    $.ajax({
        method: "POST",
        url: "api/follows",
        data: { follow }
    })
);

export const deleteFollow = (follow) => {
    debugger
    return $.ajax({
        method: "DELETE",
        url: `api/follows/${follow}`
    });
};