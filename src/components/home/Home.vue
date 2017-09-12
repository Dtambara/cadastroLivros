
<template>
  <div>


    <input type="search"  v-on:input="filtro = $event.target.value" class="filtro" placeholder="filtre pelo título da foto">

    <ul class="lista-livros">

      <li class="lista-livros-item" v-for="livro in livrosComFiltro">

        <meu-painel :titulo="livro.titulo">
          <imagem-responsiva :url="livro.caminhoLivro" :titulo="livro.titulo"/>
          <botao class="button-fixed" size="sm" variant="primary" texto="Alterar" path="/cadastro"/>    
          <botao class="button-fixed" size="sm" variant="danger" texto="Remover" @click.native="remove(livro)"/>    
        </meu-painel>

      </li>
    </ul>

  </div>
</template>
<script>

    import Painel from '../shared/painel/Painel.vue';
    import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
    import Botao from '../shared/botao/Botao.vue'
    
    export default {

        components: {

            'meu-painel': Painel,
            'imagem-responsiva' : ImagemResponsiva,
            'botao' : Botao    
        },

        data() {
            return {
                livros: [],
                filtro: ''
            }
        },
        
        methods: {
            remove(livro) {
                confirm("Realmente deseja remover o livro: " + livro.titulo);
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

    .lista-livros .lista-livros-item {
        display: inline-block;
    }

    .filtro {
        width: 100%;
    }
    .button-fixed {
        width: 100px;
        margin-top: 5px;
        margin-left: 5px;
        display: inline-block;
    }
</style>
