<template>
  <div id="app">
    <button @click="increment(2, $event)">Click</button>
    {{ count }}
    <br>
    <button @click="firstName = 'New name'">Click</button>
    <br>methods<br>
    <span>{{ fullName() }}</span>
    <span>{{ fullName() }}</span>
    <br>computed<br>
    <span>{{ fullNameComputed }}</span>
    <span>{{ fullNameComputed }}</span>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        count: 0,
        firstName: 'Harry',
        lastName: 'Potter',
        random: 0,
      }
    },
    computed: {
      fullNameComputed() {
        //só executa uma vez
        this.random = Math.random()
        return `${this.firstName} ${this.lastName} ${this.random}`;
      },
    },
    methods: {
      increment(value, event) {
        this.count += value;
        console.log(event)
      },
      fullName() {
        //muda em cada execução
        this.random = Math.random()
        return `${this.firstName} ${this.lastName} ${this.random}`;
      }
    },
  }
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    /* font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px; */
  }
</style>
