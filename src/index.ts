import Vue from 'vue';
import FieldService from './FieldService';

new FieldService().getOperation('f112-o0').then(res => console.log(res));

const app = new Vue({
  el: '#app',
  data: {
    message: 'Привет, Vue!'
  }
});

console.log(app);