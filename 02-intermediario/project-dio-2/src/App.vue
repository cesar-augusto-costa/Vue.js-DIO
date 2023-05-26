<template>
  <div id="app">
    <button @click="count++">Click</button>
    {{ count }}
    <button @click="$data.$count++">Click</button>
    {{ $data.$count }}
    <button @click="counts.x++">Click</button>
    {{ counts }}
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        count: 0,
        $count: 0,
        counts: {
          x: 0,
        }
      }
    },
    mounted() {
      console.log(this);
      console.log(this.count);
      this.count = 2;

      this.$set(this.counts, 'y', 1)
      this.counts = {...this.counts, ...{a:1, b:2}}
    }
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
