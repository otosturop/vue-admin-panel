<template>
    <div>
        <Sidebar/>
        <div class="row">
            <div class="col-md-6 offset-3">
                <form class="card mt-5 p-3 border border-dark bg-dark shadow-lg" @submit.prevent="onSubmit">
                    <div class="form-group">
                        <label class="text-light" for="name">İşin Adı</label>
                        <input v-model="work.work_title" type="text" class="bg-dark border border-info text-info form-control" id="name" placeholder="İşin adını giriniz">
                    </div>
                    <div class="form-group">
                        <label class="text-light" for="url">Resim Url</label>
                        <input v-model="work.work_img_url" type="text" class="bg-dark border border-success text-success form-control" id="url" placeholder="Resim url giriniz">
                    </div>
                    <div class="button-container">
                        <router-link
                            to="/islerim"
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
import Sidebar from "../components/Sidebar"
export default {
    components: {
        Sidebar
    },   
    data() {
        return{
            work: {
                work_title: '',
                work_img_url: ''
            }
        }
    },
    methods : {
        onSubmit(){
            this.$store.dispatch("updateWork", this.work)
            .then( () => {
                this.$router.push('/islerim')
            })
        }
    },
    created() {
        this.work = {
            ...this.$route.params.work
        }
    }
}
</script>
