<template>
                     
    <b-navbar toggleable="md" type="dark" variant="dark">

  <b-nav-toggle target="nav_collapse"></b-nav-toggle>

   <router-link class="navbar-brand" to="/">Livraria</router-link>

  <b-collapse is-nav id="nav_collapse">

    <b-nav is-nav-bar v-for="route in routes" class="nav-item">
      <router-link class="navbar-item" :to="route.path ? route.path : '/'">{{ route.titulo }}</router-link>
    </b-nav>

    <b-nav is-nav-bar class="ml-auto">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Insira o título aqui"/>
      </b-nav-form>

      </b-nav>

  </b-collapse>
</b-navbar>
      

</template>

<script>

    export default {

        props: ['routes'],

        data() {
            return {
            }
        }
    }

</script>

<style scoped>
    .navbar-item {
        color: white;
        font-size: 1em;
        margin-left: 1em;
    }

</style>
