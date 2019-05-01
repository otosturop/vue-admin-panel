<template>
     <div>
        <Sidebar />
        <div class="row">
            <div class="col-md-6 offset-3">
                <form class="card mt-5 p-3 border border-dark bg-dark shadow-lg" @submit.prevent="onSubmit">
                    <div class="form-group">
                        <label class="text-light" for="name">Hizmet Adı</label>
                        <input v-model="service.service_name" type="text" class="bg-dark border border-info text-info form-control" id="name" placeholder="Hizmet adını giriniz">
                    </div>
                    <div class="form-group">
                        <label class="text-light" for="icon">Hizmet İconu</label>
                        <input v-model="service.service_icon" type="text" class="bg-dark border border-success text-success form-control" id="icon" placeholder="İconu giriniz">
                    </div>
                    <div class="form-group">
                        <label class="text-light" for="description">Hizmet Açıklaması</label>
                        <textarea v-model="service.service_description" class="bg-dark border border-warning text-warning form-control" id="description" rows="3"></textarea>
                    </div>
                    <div class="button-container">
                        <router-link
                            to="/hizmetler"
                            tag="button"
                            class="btn btn-outline-danger mr-2"
                        >
                            İptal
                        </router-link>
                        <button type="submit" class="btn btn-outline-success">Kaydet</button>
                    </div> 
                </form>
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
            service: {
                service_name: '',
                service_icon: '',
                service_description: ''
            }
        }
    },
    methods: {
        onSubmit() {
            this.$store.dispatch("addService", this.service)
            .then( () => {
                this.$router.push("/hizmetler")
            })
        }
    }
}
</script>
