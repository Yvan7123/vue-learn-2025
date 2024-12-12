<template>
  <div>
    <child-test :to="to"></child-test>
    <!-- <tree-transfer
      :ref="transferRef"
      :fromData="fromData"
      :toData="toData"
      :defaultProps="{
        id: 'id',
        parentId: 'parentId',
        label: 'label',
        children: 'children',
        disabled: 'disabled'
      }"
      :checkStrictly="true"
      @add="handleAdd"
      @remove="handleRemove"
    >
    </tree-transfer> -->
  </div>
</template>

<script setup>
import TreeTransfer from 'tree-transfer-vue3'; 
import { ref } from "vue";

const to = ref([])

const val = ref("123");
const fromData = ref([
  {
    id: '1',
    parentId: 0,
    label: '一级 1',
    children: [
      {
        id: '1-1',
        parentId: '1',
        label: '二级 1-1',
        children: [],
      },
      {
        id: '1-2',
        parentId: '1',
        label: '二级 1-2',
        children: [
          {
            id: '1-2-1',
            parentId: '1-2',
            children: [],
            label: '二级 1-2-1',
          },
          {
            id: '1-2-2',
            parentId: '1-2',
            children: [],
            label: '二级 1-2-2',
          },
          {
            id: '1-2-3',
            parentId: '1-2',
            children: [],
            label: '二级 1-2-3',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    parentId: 0,
    label: '一级 2',
    children: [
      {
        id: '2-1',
        parentId: '2',
        label: '二级 2-1',
      },
      {
        id: '2-2',
        parentId: '2',
        label: '二级 2-2',
      },
    ],
  },
  {
    id: '4',
    parentId: 0,
    label: '一级 4',
    children: [
      {
        id: '4-1',
        parentId: '4',
        label: '二级 4-1',
      },
      {
        id: '4-2',
        parentId: '4',
        label: '二级 4-2',
      },
    ],
  },
]);

const transferRef = ref(null);

const toData = ref([]);
const handleAdd = (_fromData, _toData, { checkedKeys, checkedNodes, harfKeys, harfNodes }) => {
  // console.log('handleAdd', checkedKeys, checkedNodes, harfKeys, harfNodes);
  console.log(toData.value)
};
const handleRemove = (_fromData, _toData, { checkedKeys, checkedNodes, harfKeys, harfNodes }) => {
  console.log('handleremove', checkedKeys, checkedNodes, harfKeys, harfNodes);
};
</script>

<style></style>
