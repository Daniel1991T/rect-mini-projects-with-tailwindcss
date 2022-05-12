const paginate = (users) => {
    const ITEM_PER_PAGE = 9;
    const pages = Math.ceil(users.length / ITEM_PER_PAGE)
    const newUser = Array.from({ length: pages }, (_, index) => {
        const start = index * ITEM_PER_PAGE;
        return users.slice(start, start + ITEM_PER_PAGE)
    })
    return newUser;
}

export default paginate;