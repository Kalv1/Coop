<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <h1>Coop</h1>
        </div>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            <router-link to="/">
              Conversation
              <i class="far fa-comments"></i>
            </router-link>
          </a>

          <a class="navbar-item">
            <router-link to="/membres">
              Membres
              <i class="fas fa-user"></i>
            </router-link>
          </a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons" v-if="!this.$store.state.token">
              <a class="button is-primary">
                <router-link to="/connexion" style="text-decoration: none; color: inherit;">
                  <strong>Connexion</strong>
                </router-link>
              </a>
              <a class="button is-light">
                <router-link to="/inscription" style="text-decoration: none; color: inherit;">
                  <strong>Inscription</strong>
                </router-link>
              </a>
            </div>
            <div v-else class="buttons">
              <a class="button is-primary">
                <router-link to="/deconnexion" style="text-decoration: none; color: inherit;">
                  <strong>Deconnexion</strong>
                  <i class="ml-2 fas fa-sign-out-alt"></i>
                </router-link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style scoped>

</style>
