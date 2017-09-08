<template>
  <div>

    <h1 class="centralizado">Listagem de Livros</h1>

    <input type="search"  v-on:input="filtro = $event.target.value" class="filtro" placeholder="filtre pelo título da foto">

    <ul class="lista-livros">

      <li class="lista-livros-item" v-for="livro in livrosComFiltro">

        <meu-painel :titulo="livro.titulo">
          <imagem-responsiva :url="livro.caminhoLivro" :titulo="livro.titulo"/>
        </meu-painel>

      </li>
    </ul>

  </div>
</template>
<script>

    import Painel from '../shared/painel/Painel.vue';
    import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';

    export default {

        components: {

            'meu-painel': Painel,
            'imagem-responsiva' : ImagemResponsiva

        },

        data() {
            return {
                livros: [],
                filtro: ''
            }
        },

    computed: {
        livrosComFiltro() {
         if (this.filtro) {
           let exp = new RegExp(this.filtro.trim(), 'i');
            return this.livros.filter(livro => exp.test(livro.titulo));
        } else {
            // se o campo estiver vazio, não filtramos, retornamos a lista
            return this.livros;
        }
        }
    },
        created() {
            this.$http.get('https://dtlivraria.herokuapp.com/livros/')
            .then(res => res.json())
            .then(livros => this.livros = livros, err => console.log(err));
        }
    }
</script>

<style>

    .centralizado {
        text-align: center;
    }

    .lista-livros {
        list-style: none;
    }

    .lista-livros .lista-livros-item{
        display: inline-block;
    }

    .filtro{
        width: 100%;
    }

</style>
