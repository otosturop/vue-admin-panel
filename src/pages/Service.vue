<template>
    <div>
        <Sidebar />
        <div class="container">
            <div class="row">
                <div class="col-md-12 mt-5">
                    <table v-if="services.length > 0" class="table table-hover table-dark table-striped border border-dark shadow-lg">
                        <thead>
                            <tr class="d-flex">
                                <th class="col-1"><font-awesome-icon icon="bars" /></th>
                                <th class="col-3">Hizmet Adı</th>
                                <th class="col-2">Hizmet İconu</th>
                                <th class="col-4">Hizmet Açıklaması</th>
                                <th class="col-2">Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="service in services" :key="service.id" class="d-flex">
                                <td class="text-danger col-sm-1">#{{service.id}}</td>
                                <td class="text-info col-sm-3">{{service.service_name}}</td>
                                <td class="text-success col-sm-2">{{service.service_icon}}</td>
                                <td class="text-warning font-italic col-sm-4">{{service.service_description}}</td>
                                <td class="col-sm-2">
                                    <router-link
                                        :to="{name : 'duzenle-hizmet', params: {service: service}}"
                                        tag="button"
                                        class="btn btn-sm btn-outline-warning mr-1"
                                    >
                                        Düzenle
                                    </router-link>
                                    <button @click="deleteSevice(service.id)" class="btn btn-sm btn-outline-danger">Sil</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-else class="alert alert-info border-0 text-center">
                        <b>Henuz eklenmiş bir veri bulunmamatadır.</b>
                    </div>
                    <router-link
                        to="/hizmetler/yeni"
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
    data() {
        return {
            service_name: '',
            service_icon: '',
            service_description: ''
        }
    },
    methods: {
        deleteSevice(id) {
            return this.$store.dispatch("deleteService", id);
        }
    },
    computed: {
        services() {
            return this.$store.getters.getServices
        },
    }
}
</script>
