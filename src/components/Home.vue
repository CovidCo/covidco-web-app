<template>
    <div>        
        <section>
            <b-col>
                <b-row>                    
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">                        
                        <a class="navbar-brand" href="#">
                            <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
                            COVID
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <!-- <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Features</a>
                                </li>                           
                            </ul>
                        </div> -->
                    </nav>
                </b-row>
                <b-row>
                    <b-col class="header" sm="12" md="12">
                        <h1>¿Crees tener covid-19 y estás en Popayán?</h1>
                    </b-col>                                     
                </b-row>   

                <!-- Informatio cards-->
                <b-row>
                    <b-col sm="12" md="4">
                        <div class="card">
                            <img src="../assets/old-man.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h2 class="card-title">Tienes mas de 60 años</h2>
                                <p class="card-text">Evita el contacto con quienes presenten síntomas respiratorios o estén diagnosticados con alguna infección respiratoria</p>
                                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                            </div>
                        </div>  
                    </b-col>
                    <b-col sm="12" md="4">
                        <div class="card">
                            <img src="../assets/hands-wash.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h2 class="card-title">Lavado de manos</h2>
                                <p class="card-text">Lávese frecuentemente las manos con agua y jabón antes y después de ingerir alimentos, toser o estornudar y utilizar el baño.</p>
                                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                            </div>
                        </div>  
                    </b-col>
                    <b-col sm="12" md="4">
                        <div class="card">
                            <img src="../assets/face-mask.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h2 class="card-title">¿Tienes sintomas de resfrio?</h2>
                                <p class="card-text">Cúbrete la boca y nariz con la parte interna del codo <br>
                                    Evita saludar de beso o dar la mano
                                </p>
                                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                            </div>
                        </div>  
                    </b-col>                                      
                </b-row>
                <!-- Informatio cards-->
            </b-col>
        </section>        
    </div>            
</template>

<script>

export default {
    name: 'home',
    data(){
        return{

        }
    }

}
</script>

<style>
/* Style the navigation bar */
.navbar {
  width: 100%;    
}

/* Navbar links */
.navbar a {
  float: left;
  text-align: center;
  padding: 12px;
  color: white;
  text-decoration: none;
  font-size: 17px;
}

/* Navbar links on mouse-over */
.navbar a:hover {
  background-color: #ced2d8;
}

.header{
    text-align: center;    
    
}

/* Add responsiveness - will automatically display the navbar vertically instead of horizontally on screens less than 500 pixels */
@media screen and (max-width: 500px) {
  .navbar a {
    float: none;
    display: block;
  }
}
</style>
