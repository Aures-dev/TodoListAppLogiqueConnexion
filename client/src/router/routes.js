import SignInView from "@/views/signInView.vue";
import TodoList from "@/components/TodoList.vue";
import { createRouter, createMemoryHistory } from "vue-router";

const routes = [
    {path:'/', component: SignInView},
    {path:'/todolist', component: TodoList} 
]

const router  = createRouter({
    history: createMemoryHistory(),
    routes
})
export default router;