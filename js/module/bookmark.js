const bookmarked = () => {

    // BOOKMARKS
    const bookmark = document.querySelectorAll('[data-js="bookmark"]');
    const addBookmark = (event) => {
        event.preventDefault();
        const bookmarkThis = event.target;
        bookmarkThis.classList.toggle("is--bookmarked");
    }

    bookmark.forEach((el) => {
        el.addEventListener('click', addBookmark);
    });
}

export {bookmarked};