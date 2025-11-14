// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// 페이지 컴포넌트들
import HomePage from '@/pages/HomePage.vue'
import RoutesPage from '@/pages/RoutesPage.vue'
import BoardPage from '@/pages/BoardPage.vue'
import MyPage from '@/pages/MyPage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/routes', component: RoutesPage },
    { path: '/board', component: BoardPage },
    { path: '/mypage', component: MyPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
