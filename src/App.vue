<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TreeTransferTest from './components/TreeTransferTest.vue';
import ChildTest  from './components/ChildTest.vue';

import {ref} from 'vue';
const child = ref("abc");
</script>

<template>
  <tree-transfer-test></tree-transfer-test>
  <child-test v-model="child"></child-test>
  <div>测试：</div>
  {{ child }}
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
