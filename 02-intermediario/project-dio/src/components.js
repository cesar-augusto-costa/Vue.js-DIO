import Vue from 'vue';

Vue.component('ButtonString', {
  template: '<button @click="click">Click ButtonString {{ count }} times</button>',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count++;
    },
  },
})

Vue.component('ButtonTemplateString', {
  template: `
  <button @click="click">
    Click ButtonTemplateString {{ count }} times
  </button>
  `,
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count++;
    },
  },
})

Vue.component('ButtonXTemplate', {
  template: '#button-x-template',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count++;
    }
  },
})

Vue.component('ButtonInLine', {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count++;
    }
  },
})

Vue.component('ButtonRender', {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count++;
    },
  },
  render(createElement) {
    return createElement(
      'button',
      {
        on: {
          click: () => this.count ++
        }
      },
      [
        `Click ButtonRender ${this.count} times`
      ]
    );
  }
})

Vue.component('ButtonJSX', {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count++;
    }
  },
  render() {
    return (
      <button onClick={this.click}>
        Click ButtonJSX { this.count } times
      </button>
    )
  }
})