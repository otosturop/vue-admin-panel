<template>
    <div>
        <Sidebar />
        <div class="container">
            <div class="row">
                <div class="col-md-12 mt-5">
                    <table v-if="inspirations.length > 0" class="table table-hover table-dark table-striped border border-dark shadow-lg">
                        <thead>
                            <tr class="d-flex">
                                <th class="col-1"><font-awesome-icon icon="bars" /></th>
                                <th class="col-2">Başlık</th>
                                <th class="col-2">Resim Url</th>
                                <th class="col-5">Açıklama</th>
                                <th class="col-2">İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="inspiration in inspirations" :key="inspiration.id" class="d-flex">
                                <td class="text-danger col-sm-1">#{{inspiration.id}}</td>
                                <td class="text-warning font-italic col-sm-2">{{inspiration.inspiration_name}}</td>
                                <td class="text-info font-italic col-sm-2">{{inspiration.inspiration_img_url}}</td>
                                <td class="text-warning font-italic col-sm-5">{{inspiration.inspiration_description}}</td>
                                <td class="col-sm-2">
                                    <router-link
                                        :to="{name : 'duzenle-is', params: {inspiration: inspiration}}"
                                        tag="button"
                                        class="btn btn-sm btn-outline-warning mr-1"
                                    >
                                        Düzenle
                                    </router-link>
                                    <button @click="deleteInspiration(inspiration.id)" class="btn btn-sm btn-outline-danger">Sil</button>
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
        inspirations() {
            return this.$store.getters.getInspiration
        },
    },
    methods: {
        deleteInspiration(id) {
            return this.$store.dispatch("deleteInspiration", id)
        }
    }
}
</script>
