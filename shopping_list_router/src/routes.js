import Home from "./components/Home"
import List from "./components/List"
import Lists from "./components/Lists"
import About from "./components/About"
import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/list/:id",
        component: List
    },
    {
        path: "/lists",
        component: Lists
    },
    {
        path: "/about",
        component: About
    }

]

export default new Router({
    routes
})
