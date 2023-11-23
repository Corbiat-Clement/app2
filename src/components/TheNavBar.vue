<template>
  
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="../assets/images/icone_nuage.png" width="50px" alt=""></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/nuages" class="nav-link">Nuages</router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">lien2</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">lien3</a>
          </li>
        </ul>
        <div class="">
          <img src="../assets/images/login.png" width="50px" class="" alt="">
        </div>
      </div>
    </div>
  </nav>

</template>

<script>


export default {
  name: 'TheNavBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>

