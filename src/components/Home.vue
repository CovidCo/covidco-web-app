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
                    <h1>Home</h1>
                </b-row> 
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

/* Add responsiveness - will automatically display the navbar vertically instead of horizontally on screens less than 500 pixels */
@media screen and (max-width: 500px) {
  .navbar a {
    float: none;
    display: block;
  }
}
</style>
