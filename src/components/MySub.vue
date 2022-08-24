<template>
    <a-sub-menu :title="props.item.name" :key="props.item.id">
        <div v-for="i in props.item.sub" :key="i">
            <component v-if="i.sub.length > 0" :is="MySubB" :item="i" @click="currentId(i.id)"></component>
            <a-menu-item v-else :key="i.id" @click="currentId(i.id)">{{ i.name }}</a-menu-item>
        </div>
    </a-sub-menu>
</template>

<script setup>
const props = defineProps(['item'])
import { defineAsyncComponent, computed, onMounted } from 'vue';
import { usePostStore } from './../store/post'
const store = usePostStore()

const currentId = (id) => {
    store.saveCategory(id)
    store.fetchPosts()
}

const MySubB = defineAsyncComponent(() => import("./MySubB.vue"))

</script>