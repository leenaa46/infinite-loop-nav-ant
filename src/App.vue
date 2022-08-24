<template>
  <div>
    <a-menu mode="horizontal">
      <div v-for="item in category" :key="item.id">
        <component v-if="item.sub.length > 0" :is="MySub" :item="item" @click="currentId(item.id)"></component>
        <a-menu-item v-else :key="item.id" @click="currentId(item.id)">{{ item.name }}</a-menu-item>
      </div>
    </a-menu>

    <a-card v-for="post in posts" :key="post.id" hoverable style="width: 240px">
      <template #cover>
        <img alt="example" :src="post.image_title.url" />
      </template>
      <a-card-meta :title="post.title">
        <template #description>{{ post.category.name }}</template>

      </a-card-meta>
    </a-card>
  </div>
</template>

<script setup>
import { ref, onMounted, defineAsyncComponent, computed } from 'vue';
import { usePostStore } from './store/post'
import axios from 'axios'

const store = usePostStore()
const MySub = defineAsyncComponent(() => import("./components/MySub.vue"))

const category = ref([])

const posts = computed(() => { return store.posts })

const currentId = (id) => {
  store.saveCategory(id)
  store.fetchPosts()
}

onMounted(async () => {
  const res = await axios.get('http://8.219.56.149:8000/api/category', { params: { scope: 'parent' } })
  category.value = res.data.data

  store.fetchPosts()
})

</script>
