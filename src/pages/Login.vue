<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-8 offset-2 card card-primary p-3 border">
                <h3 class="text-center mb-3 mt-3">Yönetim Paneline Hoşgeldin</h3>
                <form @submit.prevent="onSubmit">
                    <div class="form-group">
                        <label>Kullanıcı Adı</label>
                        <input v-model="user.name" type="text" class="form-control" placeholder="Kullanıcı adını giriniz" />
                    </div>
                    <div class="form-group">
                        <label>Şifre</label>
                        <input v-model="user.password" type="password" class="form-control" placeholder="Şifreniz..." />
                    </div>
                    <div class="button-container d-flex  flex-column align-items-center">
                        <button type="submit" class="btn btn-block mb-2 btn-primary">Giriş Yap</button>
                    </div>
                </form>
            </div>
        </div>
        <div :class="wrongUser" class="alert alert-danger border-0 text-center">
            <b>Kullanıcı adı veya şifte yanlış</b>
        </div>
    </div>
</template>

<script>
/* eslint-disable no-console */
    export default {
        data() {
            return {
                user: {
                    name: '',
                    password: ''
                }

            }
        },
        methods: {
            onSubmit() {
                return this.$store.dispatch("loginUser", this.user)
                .then( () => {
                    this.$router.push('/anasayfa')
                    console.log("anasayfa yönlendirme")
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        },
        computed: {
            wrongUser() {
                return{
                    "d-none": !this.$store.getters.failAuthentication
                }
            }
        }

    }

</script>