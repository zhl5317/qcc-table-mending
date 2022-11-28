<template>
  <TableMendingVue
    :image="image"
    :data="data"
    :options="{
      isShowGuideLine: isShowGuideLine,
      maxWidth: maxWidth,
      linewidth: linewidth,
      linesColor: linesColor,
    }"
    @rowAdd="rowAdd"
    @colAdd="colAdd"
    @mergeLines="mergeLines"
    @deleteLine="deleteLine"
    @saveMending="saveMending"
  />
</template>

<script>
import TableMendingVue from "./TableMending.vue";
export default {
  name: "HelloWorld",
  data() {
    return {
      data: {
        boxs: [],
        lines: { cols: [], rows: [] },
      },
      linesColor: "blue",
      linewidth: 1,
      isShowGuideLine: true,
      image: "./ss.png",
      maxWidth: 650,
    };
  },
  components: {
    TableMendingVue,
  },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler(val) {
        console.log(val, "!11");
      },
    },
  },
  methods: {
    rowAdd(e) {
      console.log(e);
    },
    colAdd(e) {
      console.log(e);
    },
    mergeLines(e) {
      console.log(e);
    },
    deleteLine(e) {
      console.log(e);
    },
    saveMending(e) {
      console.log(e);
    },
  },
};
</script>
