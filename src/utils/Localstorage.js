

const POSTS = "POSTS"

export class Localstorage {

    static setPosts(data) {
        localStorage.setItem(POSTS, JSON.stringify(data))
    }

    static getPosts() {
        const getPosts = JSON.parse(localStorage.getItem(POSTS));
        return getPosts;
        // const p = JSON.parse(h);
    }


    static removePost() {
        // localStorage.removeItem(POSTS)
    }

}