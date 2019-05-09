<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <h1 class="headings">Markdown Previewer</h1>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-md-6">
        <h4 class="headings">Markdown</h4>
        <textarea class="in-out" v-model="md"/>
      </div>
      <div class="col-md-6">
        <h4 class="headings">Output</h4>
        <div class="in-out" :key="md" v-md>{{md}}</div>
      </div>
    </div>
  </div>
</template>

<script>

import md from '../directives/md'

export default {
  name: 'HelloWorld',
  data(){
    return {
      md: ``
    }
  },
  directives: {
    md
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headings{
  color: #fff;
  text-align: center;
}
h4{
  font-weight: 400;
}
textarea{
  resize: none;
  outline: none;
}
.in-out{
  height: 400px;
  width: 100%;
  background-color: #efefef;
  padding: 10px;
  overflow: scroll;
}
</style>
