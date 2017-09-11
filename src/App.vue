<template>
  <div class="corpo">
    <my-nav :routes="routes"/>    

    <transition name="pagina">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>

    import { routes }  from './routes';
    import Navbar from './components/shared/navbar/NavbarHorizontal.vue'
    export default {
        components: {
            'my-nav': Navbar
        },
        data() {
            return {
                routes: routes
            }
        }
    }
</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .pagina-enter-active, .pagina-leave-active {
    transition: opacity .3s
  }
  .pagina-enter, .pagina-leave-active {
    opacity: 0
  }
</style>