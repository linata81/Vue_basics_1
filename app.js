const App = {
  //набор данных
  data() {
    return {
      counter: 0,
      title: 'Список заметок',
      placeholder: 'Введите название заметки',
      inputValue: '',
      notes: ['Заметка 1']
    }
  },
  // набор функций
  methods: {
    // inputChangeHandler(event) {
    //   this.inputValue = event.target.value;
    // },
    addNewNote() {
      if(this.inputValue !== '') {
        this.notes.push(this.inputValue);
        this.inputValue = '';        
      }
    },
    removeNote(index) {
      // начинаем с индекса и удаляем 1 элемент
      this.notes.splice(index, 1);
    },
    toUpperCase(item) {
      return item.toUpperCase();
    }
  },
  computed:{
    doubleCount() {
      return this.notes.length * 2;
    }
  },
  watch: {
    inputValue(value) {
      // console.log(value);
      if(value.length > 10) {
        this.inputValue = '';
      }
    }
  }
}

Vue.createApp(App).mount('#app');
