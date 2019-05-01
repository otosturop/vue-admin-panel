<template>
    <div>
        <Sidebar />
        <div class="row">
            <div class="col-md-6 offset-3">
                <form class="card mt-5 p-3 border border-dark bg-dark shadow-lg" @submit.prevent="onSubmit">
                    <div class="form-group">
                        <label class="text-light" for="date">Tarih</label>
                        <input v-model="experience.experience_date" type="text" class="bg-dark border border-info text-info form-control" id="date" placeholder="Yapım Tarihini giriniz">
                    </div>
                    <div class="form-group">
                        <label class="text-light" for="title">Başlık</label>
                        <input v-model="experience.experience_title" type="text" class="bg-dark border border-success text-success form-control" id="title" placeholder="Başlığı giriniz">
                    </div>
                    <div class="form-group">
                        <label class="text-light" for="description">Açıklama Giriniz</label>
                        <textarea v-model="experience.experience_description" class="bg-dark border border-warning text-warning form-control" id="description" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <label class="text-light" for="key">Anahtar Kelimeler</label>
                        <input v-model="experience.experience_keywords" type="text" class="bg-dark border border-primary text-primary form-control" id="key" placeholder="Anahtar kelimeleri giriniz">
                    </div>
                    <div class="button-container">
                        <router-link
                            to="/deneyimler"
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
                experience: {
                    experience_date: '',
                    experience_title: '',
                    experience_description: '',
                    experience_keywords: ''
                }
            }
        },
        methods : {
            onSubmit(){
                this.$store.dispatch("addExperience", this.experience)
                .then( () => {
                    this.$router.push('/deneyimler')
                })
            }
        }
    }

</script>
