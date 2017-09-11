<template>

    <div class="card card-primary fixed-panel">
      <div class="card-header">
        <h3 class="card-title text-center" v-on:dblclick="visivel = !visivel">{{ titulo }}</h3>
      </div>    
      <transition name="painel-fade">
        <div class="card-block" v-show="visivel">
            <slot></slot>
        </div>
      </transition>  
    </div>
</template>

<script>
    export default {

        props: ['titulo'],

        data() {
            return {
                visivel: true
            }
        }
    }
</script>

<style scoped>

  .painel-fade-enter, .painel-fade-leave-active {
    opacity: 0
  }

  .painel-fade-enter-active, .painel-fade-leave-active {
    transition: opacity .4s
  }

    .fixed-panel{
        width: 220px;
    }    
    
  </style>
