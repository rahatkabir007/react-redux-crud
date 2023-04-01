import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Localstorage } from "../utils/Localstorage";
import { ToastMessage } from "../utils/ToastMessage";


export const getPosts = createAsyncThunk('post/getPosts', async () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => data.slice(0, 6))
})

const PostSlice = createSlice({
    name: "post",
    initialState: {
        loading: false,
        posts: [],
        showModal: false,
        error: null
    },
    reducers: {
        addPost: (state, action) => {
            console.log(action.payload);
            const olderPosts = Localstorage.getPosts();
            olderPosts.push(action.payload);
            Localstorage.setPosts(olderPosts);
        },
        editPost: (state, action) => {
            const { id, title, body } = action.payload;
            const olderPosts = Localstorage.getPosts();
            const newPosts = olderPosts.map((item) => {
                if (item.id === parseInt(id)) {
                    item.title = title;
                    item.body = body;
                }
                return item
            });
            Localstorage.setPosts(newPosts)
            state.posts = newPosts

        },
        deletePost: (state, action) => {
            const id = action.payload;
            const olderPosts = Localstorage.getPosts();
            const newPosts = olderPosts.filter((item) => item.id !== parseInt(id));
            Localstorage.setPosts(newPosts)
            state.posts = newPosts
            state.showModal = false
            ToastMessage.notifySuccess("Post Deleted Successfully")
        },
        setShowModal: (state, action) => {
            state.showModal = action.payload
        }
    },
    extraReducers: {
        [getPosts.pending]: (state, action) => {
            state.loading = true
        },
        [getPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
            if (Localstorage.getPosts() === null) {
                Localstorage.setPosts(state.posts)
            }
            state.posts = Localstorage.getPosts()
        },
        [getPosts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export const { addPost, editPost, deletePost, setShowModal } = PostSlice.actions;
export default PostSlice.reducer