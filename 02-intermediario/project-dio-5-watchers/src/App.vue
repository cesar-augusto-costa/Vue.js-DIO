<template>
  <div id="app">
    <!-- todas as maneiras -->
    <!-- <input type="text" v-model="text"> -->
    <!-- final de todas as maneiras -->
    <!-- somente a ultima maneira -->
    <input type="text" v-model="text.question">
    <!-- final de somente a ultima maneira -->
    <span>Text: {{ text }}</span>
    <span>Api: {{ apiResponse }}</span>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        apiResponse: 'Start',
        text: {
          question: ''
        }
      }
    },
    methods: {
      simulateApi(response, time) {
        return new Promise(() => {
          setTimeout(() => {
            this.apiResponse = response;
          }, 1000 * time); // segundos
        });
      },
      async fetchApi(value, time) {
        await this.simulateApi(value, time);
      },
      /* segunda e quarta maneira */ /*
      callApi(newValue, oldValue) {
        console.log(newValue, oldValue)
        if (newValue.length > 7) {
          this.fetchApi('Call', 3)
        }
      }
      /* fim da segunda e quarta maneira */
    },
    watch: {
      /* primeira maneira */ /*
      text(newValue, oldValue) {
        console.log(newValue, oldValue)
        if (newValue.length > 7) {
          this.fetchApi(Math.random());
        }
      },
      /* fim da primeira maneira */

      /* segunda maneira */ /*
      text: 'callApi'
      /* fim da segunda maneira */

      /* terceira maneira */ /*
      text: {
        immediate: true,
        handler(newValue, oldValue) {
          console.log(newValue, oldValue)
          if (newValue.length > 3) {
            this.fetchApi(Math.random());
          }
        },
      }
      /* fim da terceira maneira */

      /* quarta maneira */ /*
      text: [
        'callApi',
        function handler1(val, old) {
          console.log(val, old)
          this.fetchApi('handler1', 3);
        },
        {
          handler: function handler2(val, old) {
            console.log(val, old)
            this.fetchApi('handler2', 3);
          }
        }
      ]
      /* fim da quarta maneira */

      /* ultima maneira */
      'text.question'(val, old) {
        console.log(val, old)
      }
      /* ultima maneira */

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
