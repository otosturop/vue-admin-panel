<template>
    <div>
        <Sidebar />
        <div class="container">
            <div class="row">
                <div class="col-md-12 mt-5">
                    <table v-if="experiences.length > 0" class="table table-hover table-dark table-striped border border-dark shadow-lg">
                        <thead>
                            <tr class="d-flex">
                                <th class="col-1"><font-awesome-icon icon="bars" /></th>
                                <th class="col-1">Date</th>
                                <th class="col-3">Title</th>
                                <th class="col-5">Description</th>
                                <th class="col-2">Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="experience in experiences" :key="experience.id" class="d-flex">
                                <td class="text-danger col-sm-1">#{{experience.id}}</td>
                                <td class="text-info col-sm-1">{{experience.experience_date}}</td>
                                <td class="text-success col-sm-3">{{experience.experience_title}}</td>
                                <td class="text-warning font-italic col-sm-5">{{experience.experience_description}}</td>
                                <td class="col-sm-2">
                                    <router-link
                                        :to="{name : 'duzenle-param', params: {experience: experience}}"
                                        tag="button"
                                        class="btn btn-sm btn-outline-warning mr-1"
                                    >
                                        Düzenle
                                    </router-link>
                                    <button @click="deleteExperience(experience.id)" class="btn btn-sm btn-outline-danger">Sil</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-else class="alert alert-info border-0 text-center">
                        <b>Henuz eklenmiş bir veri bulunmamatadır.</b>
                    </div>
                    <router-link
                        to="/deneyimler/yeni"
                        tag="button"
                        class="btn btn-dark text-info float-right"
                    >
                        Yeni Ekle
                    </router-link>
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>
    import Sidebar from '../components/Sidebar'
    export default {
        components: {
            Sidebar
        },
        computed: {
            experiences() {
                return this.$store.getters.getExperience
            },
        },
        methods: {
            deleteExperience(id) {
                return this.$store.dispatch("deleteExperience", id)
            }
        }
    }
</script>

<style scoped>

</style>

