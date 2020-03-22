<template>
  <div class="container panel">
    <section>
      <h1 class="title">¿No se siente bien?</h1>
      <p>Al llenar este formulario, podras determinar si eres es un posible caso de coronavirus.</p>
      <form @submit.prevent>
        <b-row>
          <b-col sm="12" md="6" lg="5">
            <div class="card">
              <div class="card-header">
                1. Síntomas
              </div>
              <div class="card-body">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="fever" v-model="fever">
                    <label class="form-check-label" for="fever">Fiebre mayor a 38 grados °C, durante los últimos 2 días</label>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="cough" v-model="cough">
                    <label class="form-check-label" for="cough">Tos seca</label>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="pain" v-model="pain">
                    <label class="form-check-label" for="pain">Dolor de garganta</label>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="breathing" v-model="breathing">
                    <label class="form-check-label" for="breath">Fatiga o dificultad respiratoria</label>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="fatigue" v-model="fatigue">
                    <label class="form-check-label" for="tired">Cansancio o malestar general</label>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="diarrhea" v-model="diarrhea">
                    <label class="form-check-label" for="diarrhea">Diarrea</label>
                  </div>
              </div>
            </div>
            <br>
            <div class="card">
              <div class="card-header">
                2. Historial epidemiológico
              </div>
              <div class="card-body">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="travel" v-model="travel">
                    <label class="form-check-label" for="abroad">¿Ha estado en el exterior durante los últimos 14 días?</label>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="health_worker" v-model="health_worker">
                    <label class="form-check-label" for="employee">¿Eres trabajador asistenial de salud?</label>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="personal_contact" v-model="personal_contact">
                    <label class="form-check-label" for="hadContact">¿Ha estado en contacto con una persona diagnósticada con COVID-19 o que haya
                      tenido síntomas gripales y haya viajado al extranjero?</label>
                  </div>
              </div>
            </div>
          </b-col>
          <b-col sm="12" md="6">
            <div class="card">
              <div class="card-header">
                3. Datos de contacto
              </div>
              <div class="card-body">
                  <div class="form-group">
                    <label for="name"> <small id="nameHelp" class="form-text text-muted">Nombres y apellidos</small></label>
                    <input type="text" class="form-control" id="name" placeholder="Nombres y apellidos" v-model="name">
                  </div>
                  <b-row>
                    <b-col sm="4" md="4" lg="6">
                      <div class="form-group">
                        <label for="phone"><small id="emailHelp" class="form-text text-muted">Celular</small></label>
                        <input type="Number" class="form-control" id="phone" placeholder="Celular" v-model="phone_number">
                      </div>
                    </b-col>
                    <b-col sm="4" md="4" lg="3">
                      <div class="form-group">
                        <label for="age"> <small id="emailHelp" class="form-text text-muted">Edad</small></label>
                        <input type="Number" class="form-control" id="age" placeholder="Edad" v-model="age">
                      </div>
                    </b-col>
                    <b-col>
                      <small class="form-text text-muted">Sexo</small>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="female" value="woman" v-model="gender" checked>
                        <label class="form-check-label" for="female">
                          Mujer
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="male" value="man" v-model="gender">
                        <label class="form-check-label" for="male">
                          Hombre
                        </label>
                      </div>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="4" md="4" lg="6">
                      <div class="form-group">
                        <label for="city"><small id="emailHelp" class="form-text text-muted">Ciudad</small></label>
                        <input type="text" class="form-control" id="city" placeholder="Ciudad" v-model="city">
                      </div>
                    </b-col>
                    <b-col sm="4" md="4" lg="6">
                      <div class="form-group">
                        <label for="neighborhood"><small id="emailHelp" class="form-text text-muted">Barrio</small></label>
                        <input type="text" class="form-control" id="neighborhood" placeholder="Barrio" v-model="neighborhood">
                      </div>
                    </b-col>
                  </b-row>
              </div>
            </div>
          </b-col>
        </b-row>
        <hr>
        <b-row>
          <b-col sm="6" md="4" lg="3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck">
              <label class="form-check-label" for="gridCheck">
                <a href="" target="blank">Aceptar términos y condiciones</a>
              </label>
            </div>
          </b-col>
        </b-row>
        <b-row class="submit-container">
            <b-col sm="12" md="12" lg="12">
              <button type="submit" class="btn btn-primary submit-button" @click.prevent="submitForm">Registrar información</button>
            </b-col>
        </b-row> 
      </form>
    </section>
  </div>
</template>

<script>

export default {
  name: 'InitialDiagnosis',
  data(){
    return{
      cough: false, 
      sore: false, 
      breathing:  false, 
      fatigue: false, 
      diarrhea: false,
      travel: false, 
      health_worker: false, 
      personal_contact: false,
      name: '', 
      phone_number:  null, 
      city: '', 
      age: null,
      fever: false, 
      gender: '', 
      neighborhood: '', 
      terms_and_conditions: false, 
      pain: false
    }
  }, 
  methods: {
    submitForm: async function(){
      let payload = {
        "data": {
          "cough": this.cough,
          "fever": this.fever, 
          "sore": this.sore, 
          "breathing": this.breathing, 
          "fatigue": this.fatigue, 
          "diarrhea": this.diarrhea,
          "travel": this.travel,
          "health_worker": this.health_worker,
          "personal_contact": this.personal_contact, 
          "name":this.name, 
          "phone_number": this.phone_number, 
          "city": this.city, 
          "age": this.age, 
          "gender": this.gender,
          "neighborhood": this.neighborhood, 
          "terms_and_conditions": this.terms_and_conditions,
          "pain": this.pain
        }
      }
      console.log(payload)

      let response = await this.$https.post('/cases', payload)
      if (response.status == 200){
        this.$noty.success("Hemos recibido tus datos, trataremos de ayudarte proonto!")
        this.$router.push('/main')
      } else { 
          this.$noty.warning("No hemos podido registrar tu solicitud")
      }
    }

  }
}

</script>

<style>

  .title{ 
    padding: 1rem; 
  }

  .panel{
    background-color: #ebedef;
  }
  
  .submit-container{
    padding: 1rem; 
    margin: 1rem;
  }

  .submit-button{
    margin: auto; 
    display: block; 
  }

</style>
