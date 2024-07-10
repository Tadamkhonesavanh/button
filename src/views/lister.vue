<template>
    <div>
    <input v-model="message1" placeholder="Enter message 1"/><br/><br/>
    <input v-model="message2" placeholder="Enter message 2"/><br/><br/>
    <input v-model="message3" placeholder="Enter message 3"/><br/><br/>
    <button @click="sendAllMessages">Send All Messages</button>
    <Listee v-if="allMessagesSent" :message1="message1" :message2="message2" :message3="message3" /><br/><br/>
     
      <!-- <p>Message from child: {{ messageFromChild }}</p>
      <input v-model="messageToChild" placeholder="Enter message for child"/> -->
      <button @click="clearData">Clear Data</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import Listee from '../components/listee.vue';
  
  export default {
    name: 'lister',
    components: {
      Listee
    },
    setup() {
    const message1 = ref('');
    const message2 = ref('');
    const message3 = ref('');
    const allMessagesSent = ref(false);
  
    const sendAllMessages = () => {
      allMessagesSent.value = true;
    };
    const messages = () => {
      allMessagesSent.value = true;
    };
    const clearData = () => {
      message1.value = '';
      message2.value = '';
      message3.value = '';
    };
  
      return {
      message1,
      message2,
      message3,
      allMessagesSent,
      sendAllMessages,
      messages,
      clearData
      };
    }
  };
  </script>