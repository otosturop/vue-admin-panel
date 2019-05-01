import Vue from 'vue';
import VueRouter from "vue-router"

import store from './store'
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Home from "./pages/Home";
import About from "./pages/About";

import Experience from "./pages/Experience";
import ExperienceEdit from "./pages/EditExperience";
import ExperienceNew from "./pages/NewExperience";

import Service from "./pages/Service";
import ServiceEdit from "./pages/EditService"
import NewService from "./pages/NewService";

import Works from "./pages/MyWorks";
import NewWork from "./pages/NewWorks";
import WorkEdit from "./pages/EditWork";

import Inspiration from "./pages/Inspiration";

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {
            path: "/", 
            component: Login
        },
        {
            path: "/cikis",
            component: Logout
        },
        {
            path: "/anasayfa", 
            component: Home,
            beforeEnter( to, from, next ) {
                if(store.getters.isAuthentication) {
                    next()
                }else {
                    next("/")
                }
            }
        },
        {
            path: "/hakkimda", 
            component: About,
            beforeEnter( to, from, next ) {
                if(store.getters.isAuthentication) {
                    next()
                }else {
                    next("/")
                }
            }
        },
        {
            path: "/deneyimler", 
            component: Experience,
            beforeEnter( to, from, next ) {
                if(store.getters.isAuthentication) {
                    next()
                }else {
                    next("/")
                }
            }
        },
        {
            path: "/deneyimler/yeni", 
            component: ExperienceNew,
            beforeEnter( to, from, next ) {
                if(store.getters.isAuthentication) {
                    next()
                }else {
                    next("/")
                }
            }
        },
        {
            name: "duzenle-param", 
            path: "/deneyimler/duzenle", 
            component: ExperienceEdit,
            beforeEnter( to, from, next ) {
                if(store.getters.isAuthentication) {
                    next()
                }else {
                    next("/")
                }
            }
        },
        {
            path: "/hizmetler", 
            component: Service,
            beforeEnter( to, from, next ) {
                if(store.getters.isAuthentication) {
                    next()
                }else {
                    next("/")
                }
            }
        },
        {
            name: "duzenle-hizmet", 
            path: "/hizmetler/duzenle", 
            component: ServiceEdit,
            beforeEnter( to, from, next ) {
                if(store.getters.isAuthentication) {
                    next()
                }else {
                    next("/")
                }
            }
        },
        {
            path: "/hizmetler/yeni", 
            component: NewService,
            beforeEnter( to, from, next ) {
                if(store.getters.isAuthentication) {
                    next()
                }else {
                    next("/")
                }
            }
        },
        {
            path: "/islerim", 
            component: Works,
            beforeEnter( to, from, next ) {
                if(store.getters.isAuthentication) {
                    next()
                }else {
                    next("/")
                }
            }
        },
        {
            path: "/islerim/yeni", 
            component: NewWork,
            beforeEnter( to, from, next ) {
                if(store.getters.isAuthentication) {
                    next()
                }else {
                    next("/")
                }
            }
        },
        {
            name: "duzenle-is", 
            path: "/islerim/duzenle", 
            component: WorkEdit,
            beforeEnter( to, from, next ) {
                if(store.getters.isAuthentication) {
                    next()
                }else {
                    next("/")
                }
            }
        },
        {
            path: "/motivasyonlar", 
            component: Inspiration,
            beforeEnter( to, from, next ) {
                if(store.getters.isAuthentication) {
                    next()
                }else {
                    next("/")
                }
            }
        },
        {
            path: "/*", 
            redirect: "/anasayfa",
            beforeEnter() {

            }
        }
        
    ],
    mode: "history"
})
