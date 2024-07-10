<template>
  <div>
    <div>
      <p>messagesit1: {{ message1 }}</p>
      <p>messagesit2: {{ message2 }}</p>
      <p>messagesit3: {{ message3 }}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'listee',
  props: {
    message1: {
      type: String,
      required: true
    },
    message2: {
      type: String,
      required: true
    },
    message3: {
      type: String,
      required: true
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
