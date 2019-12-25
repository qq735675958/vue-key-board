export default {
  template: `
  <div id="settlement-account-virtual-keyboard">
    <div class="key-container" v-show="isShow">
      <div class="error-down" @click="hideBoard">
        <span></span>
      </div>
      <div class="row">
        <p class="num-item" @click="getValue('1',$event)">1</p>
        <p class="num-item" @click="getValue('2',$event)">2</p>
        <p class="num-item" @click="getValue('3',$event)">3</p>
      </div>
      <div class="row">
        <p class="num-item" @click="getValue('4',$event)">4</p>
        <p class="num-item" @click="getValue('5',$event)">5</p>
        <p class="num-item" @click="getValue('6',$event)">6</p>
      </div>
      <div class="row">
        <p class="num-item" @click="getValue('7',$event)">7</p>
        <p class="num-item" @click="getValue('8',$event)">8</p>
        <p class="num-item" @click="getValue('9',$event)">9</p>
      </div>
      <div class="row">
        <p class="num-item gray" @click="getValue('.',$event)">.</p>
        <p class="num-item" @click="getValue('0',$event)">0</p>
        <div class="delete gray" id="cross" @click="deleteElement()">&#215;</div>
      </div>

      </div>
  </div>

  `,
  props: {
    // refObject: {
    //   type: Object,
    //   default() {
    //     return {};
    //   },
    // },
    // isShowBoard: {
    //   type: Boolean,
    //   default: false,
    // }
  },
  data() {
    return {
      isShow: false,
      refObject: {}
    }
  },
  methods: {
    deleteElement() {
      this.refObject.deleteElement();
    },
    hideBoard() {
      this.isShow = false;
    },
    showKeyBoard(){
      this.isShow = true;
    },
    getValue(val,event) {
      event.preventDefault();
      if(event.target.className == 'num-item'){
        event.target.classList.add("active")
      }
      this.refObject.getValue(val);
      setTimeout(()=>{
          event.target.classList.remove("active")
      },100)
    },
  },
  mounted() {
    // var pElements = this.$el.getElementsByClassName('num-item');
    // var elements = Array.prototype.slice.call(pElements);
    // var value = '';
    // elements.forEach((val, index) => {
    //   val.addEventListener('click', function(event) {
    //     this.value = event.currentTarget.innerText;
    //     this.$emit('getInputItem', this.value);
    //   });
    // });
    this.$on('getInputVm', function(obj) {
      this.refObject = obj;
      this.isShow = true;
    });

  }
}