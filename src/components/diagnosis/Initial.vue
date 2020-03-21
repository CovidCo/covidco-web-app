<template>
  <div class="container panel">  
    <div class="wrapper">             
      <b-modal  title="Términos y condiciones" 
                size="lg" 
                v-model="largeModal" 
                @ok="largeModal = false" 
                variant="primary" 
                header-bg-variant="primary" 
                content-class="border-primary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </b-modal>
    </div>  

    <section>
      
      <h1>¿No se siente bien?</h1>
      <p>Al llenar este formulario, podrá determinar si usted es un posible caso SOSPECHOSO de coronavirus.</p>
      
      <b-row>
        <b-col sm="12" md="6" lg="5">
          <div class="card">
            <div class="card-header">
              1. Síntomas
            </div>
            <div class="card-body">
              <form>                            
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="fever">
                  <label class="form-check-label" for="fever">Fiebre mayor a 38 grados °C, durante los últimos 2 días</label>
                </div>            
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="cough">
                  <label class="form-check-label" for="cough">Tos seca</label>
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="pain">
                  <label class="form-check-label" for="pain">Dolor de garganta</label>
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="breath">
                  <label class="form-check-label" for="breath">Fatiga o dificultad respiratoria</label>
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="tired">
                  <label class="form-check-label" for="tired">Cansancio o malestar general</label>
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="diarrhea">
                  <label class="form-check-label" for="diarrhea">Diarrea</label>
                </div>                            
              </form>
            </div>
          </div>

          <br>

          <div class="card">
            <div class="card-header">
              2. Historial epidemiológico
            </div>
            <div class="card-body">
               <form>                                                          
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="abroad">
                  <label class="form-check-label" for="abroad">¿Ha estado en el exterior durante los últimos 14 días?</label>
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="employee">
                  <label class="form-check-label" for="employee">¿Eres trabajador asistenial de salud?</label>
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="hadContact">
                  <label class="form-check-label" for="hadContact">¿Ha estado en contacto con una persona diagnósticada con COVID-19 o que haya
                    tenido síntomas gripales y haya viajado al extranjero?</label>
                </div>                                    
              </form>
            </div>
          </div>
        </b-col>
      
        <b-col sm="12" md="6">
          <div class="card">
            <div class="card-header">
              3. Datos de contacto
            </div>
            <div class="card-body">
              <form>                                                           
                <div class="form-group">
                  <label for="name"> <small id="emailHelp" class="form-text text-muted">Nombres y apellidos</small></label>                 
                  <input type="text" class="form-control" id="name" placeholder="Nombres y apellidos">                 
                </div>

                <b-row>
                  <b-col sm="4" md="4" lg="6">
                    <div class="form-group">
                      <label for="phone"><small id="emailHelp" class="form-text text-muted">Celular</small></label>
                      <input type="Number" class="form-control" id="phone" placeholder="Celular">                 
                    </div>
                  </b-col>
                  <b-col sm="4" md="4" lg="3">
                    <div class="form-group">
                      <label for="age"> <small id="emailHelp" class="form-text text-muted">Edad</small></label>  
                      <input type="Number" class="form-control" id="age" placeholder="Edad">                 
                    </div>
                  </b-col>
                  <b-col>
                    <small class="form-text text-muted">Sexo</small>          
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="female" value="woman" checked>
                      <label class="form-check-label" for="female">
                        Mujer
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="male" value="man">
                      <label class="form-check-label" for="male">
                        Hombre
                      </label>
                    </div>
                  </b-col>
                </b-row>

                <div class="form-group">
                  <label for="email"><small id="emailHelp" class="form-text text-muted">Correo electrónico</small></label>
                  <input type="email" class="form-control" id="email" placeholder="Correo electrónico">                 
                </div>

                <b-row>
                  <b-col sm="4" md="4" lg="6">
                    <div class="form-group">
                      <label for="city"><small id="emailHelp" class="form-text text-muted">Ciudad</small></label>
                      <input type="text" class="form-control" id="city" placeholder="Ciudad">                 
                    </div>
                  </b-col>
                  <b-col sm="4" md="4" lg="6">
                    <div class="form-group">
                      <label for="neighborhood"><small id="emailHelp" class="form-text text-muted">Barrio</small></label>
                      <input type="text" class="form-control" id="neighborhood" placeholder="Barrio">                 
                    </div>
                  </b-col>
                </b-row>                              
              </form>
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
              <!-- <a href="">Aceptar términos y condiciones</a> -->
              <button type="submit" class="btn btn-link" @click="largeModal = true">Términos y condiciones</button>
            </label>
          </div>          
        </b-col> 
        <b-col sm="6" md="4" lg="4">
          <button type="submit" class="btn btn-primary" @click="largeModal = true">Registrar información</button>
        </b-col>                     
      </b-row>      
    </section>
  </div>
  
</template>

<script>

export default {
  name: 'InitialDiagnosis',
  data(){
    return{      
      largeModal: false,     
    }
  }
}

</script>

<style>
.panel{
  background-color: #ebedef;
}
</style>
