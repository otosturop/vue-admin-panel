/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        experiences: [],
        about: [],
        services: [],
        works: [],
        inspiration: [],
        token: localStorage.getItem('access_token') || null,
        user: {},
        wrongUser: false
    },
    mutations: {
        initExperience(state, experience) {
            state.experiences = experience
        },
        addExperience(state, experience) {
            state.experiences.push(experience);
        },
        updateExperience(state, experience) {
            let index = state.experiences.findIndex(ex => ex.id == experience.id)
            if(index > -1){
                state.experiences[index] = experience
            }    
        },
        deleteExperience(state, experienceID) {
            let index = state.experiences.findIndex(ex => ex.id == experienceID)
            if(index > -1){
                state.experiences.splice(index, 1)
            }
        },
        initAbout(state, about) {
            state.about = about
        },
        updateAbout(state, about) {
            state.about = about
        },
        initServices(state, services) {
            state.services = services
        },
        addService(state, service) {
            state.services.push(service)
        },
        updateService(state, service) {
            let index = state.services.findIndex(ex => ex.id == service.id )
            if(index > -1 ) {
                state.services[index] = service
            }
        },
        deleteService(state, serviceID) {
            let index = state.services.findIndex( service => service.id == serviceID)
            if(index != -1) {
                state.services.splice(index, 1)
            }
        },
        initWorks(state, works) {
            state.works = works
        },
        addWork(state, work) {
            state.works.push(work)
        },
        updateWork(state, work) {
            let index = state.works.findIndex(ex => ex.id == work.id)
            if(index > -1) {
                state.works[index] = work
            }
        },
        deleteWork(state, workID) {
            let index = state.works.findIndex( work => work.id == workID)
            if( index != -1 ) {
                state.works.splice(index, 1);
            }
        },
        initInspiration(state, inspiration) {
            state.inspiration = inspiration
        },
        userLogin(state, token) {     
            state.token = token
            state.wrongUser = false
        },
        destroy_token(state) {
            state.token = null 
        },
        failAuthentication(state) {
            state.wrongUser = true
        }
    },
    actions: {
        initApp(context) {
            axios.get("http://localhost/my-site/experience/get_experiences")
                .then(response => {
                    context.commit("initExperience",response.data)
                })
        },
        addExperience(context, experience) {
            return axios.post("http://localhost/my-site/experience/add", JSON.stringify(experience))
            .then( (response) => {  
                context.commit("addExperience", {id: response.data.insert_id, ...experience })
            })
        },
        updateExperience(context, experience) {
            return axios.post("http://localhost/my-site/experience/update", JSON.stringify(experience))
            .then( () => {
                context.commit("updateExperience",experience)
            })
        },
        deleteExperience(context, experienceID) {
            if(confirm("Emin misiniz?")){
                return axios.post("http://localhost/my-site/experience/delete", JSON.stringify({id: experienceID}))
                .then( () => {
                    context.commit("deleteExperience",experienceID)
                })
            }
        },
        initAbout(context) {
            axios.get("http://localhost/my-site/about/get_about")
            .then( (response) => {
                context.commit("initAbout", response.data)
            })
        },
        updateAbout(context, about) {
            return axios.post("http://localhost/my-site/about/update", JSON.stringify(about))
            .then( () => {
                context.commit("updateAbout", about)
            })
        },
        initServices(context) {
            axios.get("http://localhost/my-site/service/get_services")
            .then( (response) => {
                context.commit("initServices", response.data)
            })
        },
        addService(context, services) {
            return axios.post("http://localhost/my-site/service/add", JSON.stringify(services))
            .then( (response) => {
                context.commit("addService", {id: response.data.insert_id, ...services})
            })
        },
        updateService(context, service) {
            return axios.post("http://localhost/my-site/service/update", JSON.stringify(service))
            .then( () => {
                context.commit("updateService", service)
            })
        },
        deleteService(context, serviceID) {
            if(confirm("Emin misiniz?")) {
                return axios.post("http://localhost/my-site/service/delete", JSON.stringify({id: serviceID}))
                .then( () => {
                    context.commit("deleteService", serviceID)
                })
            }
        },
        initWorks(context) {
            axios.get("http://localhost/my-site/works/get_works")
            .then( (response) => {
                context.commit("initWorks", response.data)
            })
        },
        addWork(context, work) {
            return axios.post("http://localhost/my-site/works/add", JSON.stringify(work))
            .then( (response) => {
                context.commit("addWork", { id: response.data.insert_id, ...work})
            })
        },
        updateWork(context, work) {
            return axios.post("http://localhost/my-site/works/update", JSON.stringify(work))
            .then( () => {
                context.commit("updateWork", work)
            })
        },
        deleteWork(context, workID) {
            if(confirm("Emin misiniz?")) {
                return axios.post("http://localhost/my-site/works/delete", JSON.stringify({ id: workID }))
                .then( () => {
                    context.commit("deleteWork", workID)
                })
            }
        },
        initInspiration(context) {
            axios.get("http://localhost/my-site/inspiration/get_inspiration")
            .then( (response) => {
                context.commit("initInspiration", response.data)
            })
        },
        loginUser(context, user) {
            return new Promise((resolve, reject) => {
                axios.post("http://localhost/my-site/login/do_login", user)
                .then(response => {
                    if(response.data){
                        const token = response.data.user_token
                        localStorage.setItem('access_token', token)
                        context.commit("userLogin", token)
                        resolve(response.data)
                    }else {
                        context.commit("failAuthentication")
                        console.log("başarısız giriş")
                    }
                })
                .catch(error => {
                    reject(error)
                })
            })
        },
        destroyToken(context) {
            if(context.getters.isAuthentication) {
                localStorage.removeItem('access_token')
                context.commit('destroy_token')
            }
        }    
    },
    getters: {
        getExperience(state) {
            return state.experiences
        },
        getAbout(state) {
            return state.about
        },
        getServices(state) {
            return state.services
        },
        getWorks(state) {
            return state.works
        },
        getInspiration(state) {
            return state.inspiration
        },
        isAuthentication() {
            return localStorage.getItem("access_token") !== null || undefined || ''
        },
        failAuthentication(state) {
            return state.wrongUser
        }
    }
})

export default store;