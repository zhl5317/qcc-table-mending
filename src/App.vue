<template>
  <div style="width: 100%; display: block">
    <TableMendingVue
      :image="image"
      :data="data"
      :options="options"
      @rowadd="rowadd"
      @coladd="coladd"
      @mergelines="mergelines"
      @deleteline="deleteline"
      @savemending="savemending"
    />
  </div>
</template>

<script>
import TableMendingVue from "./components/TableMending.vue";
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          boxs: [],
          lines: { cols: [], rows: [] },
        };
      },
    },
    options: {
      type: Object,
      default: () => {},
    },
    image: {
      type: String,
      default: () => "./2354.png",
    },
  },
  components: {
    TableMendingVue,
  },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler(val) {
        console.log(val);
      },
    },
  },
  methods: {
    rowadd(e) {
      this.$emit("rowadd", e);
    },
    coladd(e) {
      this.$emit("coladd", e);
    },
    mergelines(e) {
      this.$emit("mergelines", e);
    },
    deleteline(e) {
      this.$emit("deleteline", e);
    },
    savemending(e) {
      this.$emit("savemending", e);
    },
  },
};
</script>
