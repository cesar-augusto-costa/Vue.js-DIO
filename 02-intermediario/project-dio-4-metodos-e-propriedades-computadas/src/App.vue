<template>
  <div id="app">
    
    <button @click="fullName = 'Alvo Dumbledore'">Click</button>
    <br>
    <span>{{ fullName }}</span>

  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        firstName: 'Harry',
        lastName: 'Potter',
      }
    },
    computed: {
      fullName: {
        get() {
          return `${this.firstName} ${this.lastName}`;
        },
        set(value) {
          const [first, last] = value.split(' ');
          this.firstName = first;
          this.lastName = last;
        }
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
