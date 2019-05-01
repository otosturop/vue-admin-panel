<template>
    <div>
        <Sidebar />
        <div class="container">
            <div class="row">
                <div class="col-md-12 mt-5">
                    <table v-if="works.length > 0" class="table table-hover table-dark table-striped border border-dark shadow-lg">
                        <thead>
                            <tr class="d-flex">
                                <th class="col-1"><font-awesome-icon icon="bars" /></th>
                                <th class="col-4">Başlık</th>
                                <th class="col-4">Resim Url</th>
                                <th class="col-2">İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="work in works" :key="work.id" class="d-flex">
                                <td class="text-danger col-sm-1">#{{work.id}}</td>
                                <td class="text-warning font-italic col-sm-4">{{work.work_title}}</td>
                                <td class="text-info font-italic col-sm-4">{{work.work_img_url}}</td>
                                <td class="col-sm-2">
                                    <router-link
                                        :to="{name : 'duzenle-is', params: {work: work}}"
                                        tag="button"
                                        class="btn btn-sm btn-outline-warning mr-1"
                                    >
                                        Düzenle
                                    </router-link>
                                    <button @click="deleteWork(work.id)" class="btn btn-sm btn-outline-danger">Sil</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                         <div v-else class="alert alert-info border-0 text-center">
                        <b>Henuz eklenmiş bir veri bulunmamatadır.</b>
                    </div>
                    <router-link
                        to="/islerim/yeni"
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
import Sidebar from "../components/Sidebar"
export default {
    components: {
        Sidebar
    },
    computed: {
        works() {
            return this.$store.getters.getWorks
        },
    },
    methods: {
        deleteWork(id) {
            return this.$store.dispatch("deleteWork", id)
        }
    }

}
</script>
