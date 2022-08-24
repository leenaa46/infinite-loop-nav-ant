import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostStore = defineStore('post', {
    state: () => ({ posts: [], category_id: "" }),
    getters: {
        getPosts: (state) => state.posts,
    },
    actions: {
        savePosts(posts) {
            this.posts = posts
        },
        saveCategory(category_id) {
            this.category_id = category_id
        },
        async fetchPosts() {
            const option = {}
            if (this.category_id) option.category_id = this.category_id
            const res = await axios.get("http://8.219.56.149:8000/api/post", {
                params: option
            })
            this.posts = res.data.data
        }
    },
})