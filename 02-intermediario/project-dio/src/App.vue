<template>
  <div id="app">
    <ButtonVue></ButtonVue>
    <ButtonString></ButtonString>
    <ButtonTemplateString></ButtonTemplateString>
    <ButtonXTemplate></ButtonXTemplate>
    <ButtonInLine inline-template>
      <button @click="click">
        Click ButtonInLine {{ count }} times
      </button>
    </ButtonInLine>
    <ButtonRender></ButtonRender>
    <ButtonJSX></ButtonJSX>
  </div>
</template>

<script>
  import ButtonVue from './ButtonVue.vue';

  export default {
    name: 'App',
    components: {
      ButtonVue,
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
