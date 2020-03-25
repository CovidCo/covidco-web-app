<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <h1>Iniciar Sesión</h1>
                <p class="text-muted">Aquí podras hacer seguimiento de tu estado de salud</p>
                  <b-row>
                    <b-input-group class="mb-3">
                      <b-form-input type="text" class="form-control" placeholder="Número de Teléfono" v-model="phoneNumber"/>
                    </b-input-group>
                    <div id="recaptcha-container" class="capcha"></div>
                    <b-button type="submit" class="btn btn-success mb-3" block v-on:click.prevent="login">
                      <span>Enviar codigo de verificación </span>
                    </b-button>
                  </b-row>
                  <b-input-group class="mb-4">
                    <b-form-input type="text" class="form-control" 
                      placeholder="Codigo de confirmación" v-model="confirmationCode" v-if="confirmationCodeStage"/>
                  </b-input-group> 
                  <b-row>
                    <b-col cols="12">
                      <b-button class="btn btn-success mb-3" block v-on:click.prevent="confirmCode">
                          <span>Iniciar sesión </span>
                      </b-button>
                    </b-col>
                  </b-row>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login', 
  data: function() {
      return {
          phoneNumber: '', 
          confirmationCode: '',
          confirmationCodeStage: false,
          confirmationResult: null, 
          error: false,
          redirect: null, 
          errors: []
      }

  },
  created(){
    if (this.$route.query){
     let redirect =  this.$route.query.redirect 
     let id = this.$route.query.id 
     this.redirect = {'redirect': redirect, 'id': id}
    }
  },
  methods: {
      login: function(){
        this.$firebase.auth().languageCode = 'es';
        let recapcha = new this.$firebase.auth.RecaptchaVerifier('recaptcha-container');
        this.$firebase.auth().signInWithPhoneNumber(this.phoneNumber, recapcha).then((confirmationResult) => {
          this.confirmationResult = confirmationResult
          this.confirmationCodeStage = true 
        }).catch((error) =>  {
          console.log(error)
        });
      },
      visitSignUp: function(){
        if (this.redirect){
          this.$router.replace({ path: '/pages/register', query: this.redirect})
        } else {
          this.$router.replace('/pages/register')
        }
      }, 
      confirmCode: function(){
        console.log('code confirmation')
        let confirmation = this.confirmationResult.confirm(this.confirmationCode)
        console.log(confirmation)
      }
  }
}
</script>

<style scoped>
    .sign-up-link {
        color: white;
    }

    .recaptcha-container{
      height: 100px;
      width: 100%;
    }

    .capcha{
      width: 100%; 
    }
</style>
