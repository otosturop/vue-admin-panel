<template>
    <div>
        <Sidebar />
        <div class="container">
            <div class="row">
                <div class="col-md-12 mt-5">
                    <form class="card p-3 border border-dark bg-dark shadow-lg" @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label class="text-light" for="title">Hakkımda Başlığı</label>
                            <input v-model="about.about_title" type="text" class="bg-dark border border-success text-success form-control" id="title" placeholder="Başlığı giriniz">
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="text-light" for="facebook">Facebook</label>
                                    <input v-model="about.facebook" type="text" class="bg-dark border border-info text-info form-control" id="facebook" placeholder="Facebook adresinizi giriniz">
                                </div>
                                <div class="col-md-6">
                                    <label class="text-light" for="url" >Profil Resmi Url</label>
                                    <input v-model="about.avatar_img_url" type="text" class="bg-dark border border-success text-success form-control" id="url" placeholder="Profil resim url">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="text-light" for="linkedin">Linkedin</label>
                            <input v-model="about.linkedin" type="text" class="bg-dark border border-primary text-primary form-control" id="linkedin" placeholder="Linkedin adresinizi giriniz">
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="text-light" for="tel">Tel No</label>
                                    <input v-model="about.tel_no" type="text" class="bg-dark border border-success text-success form-control" id="tel" placeholder="Linkedin adresinizi giriniz">
                                </div>
                                <div class="col-md-6">
                                    <label class="text-light" for="web">Web Site</label>
                                    <input v-model="about.web_site" type="text" class="bg-dark border border-info text-info form-control" id="web" placeholder="Linkedin adresinizi giriniz">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="text-light" for="adress">Adres</label>
                            <textarea v-model="about.address" class="bg-dark border border-warning text-warning form-control" id="adress" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label class="text-light" for="description">Hakkımda Yazısı</label>
                            <textarea v-model="about.about_description" class="bg-dark border border-warning text-warning form-control" id="description" rows="10"></textarea>
                        </div>
                        <div class="button-container">
                            <router-link
                                to="/anasayfa"
                                tag="button"
                                class="btn btn-outline-danger mr-2"
                            >
                                İptal
                            </router-link>
                            <button type="submit" class="btn btn-outline-success">Kaydet</button>
                        </div> 
                    </form>
                    <div v-if="showSuccess" class="alert alert-success border-0 text-center">
                        <b>Güncelleme işlemi başarılı</b>
                    </div>
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
                about: {
                    about_description: '',
                    about_title: '',
                    address: '',
                    avatar_img_url: '',
                    facebook: '',
                    linkedin: '',
                    tel_no: '',
                    web_site: ''
                },
                showSuccess: false
            }
        },
        methods: {
            onSubmit() {
                this.$store.dispatch("updateAbout", this.about)
                .then( () => {
                    this.showSuccess = true
                    setTimeout( () => {
                        this.showSuccess = false
                    },2000);
                    
                })
            }
        },
        created() {
            this.about = {
                ...this.$store.getters.getAbout
            }
        }
    }
</script>

