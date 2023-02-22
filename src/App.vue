<template>
  <div style="width: 100%; display: block">
    <TableMendingVue
      :image="image"
      :data="{...jsonData}"
      :options="options"
      @rowadd="rowadd"
      @coladd="coladd"
      @mergelines="mergelines"
      @deleteline="deleteline"
      @savemending="savemending"
      @automending="automending"
      @clearmending="clearmending"
      @autorowsmending="autorowsmending"
    />
  </div>
</template>

<script>
import TableMendingVue from "./components/TableMending.vue";
export default {
  name: "HelloWorld",
  data() {
    return {
      jsonData:  {
          boxs: [],
          lines: { cols: [], rows: [] },
          cells:[]
        }
    };
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          boxs: [],
          lines: { cols: [], rows: [] },
          cells:[]
        };
      },
    },
    options: {
      type: Object,
      default: () => {},
    },
    image: {
      type: String,
      default: () => "./ss.png",
    },
  },
  components: {
    TableMendingVue,
  },
  watch: {
    data: {
      immediate: false,
      deep: true,
      handler(val) {
        this.jsonData = val
        console.log(val, "1111fff");
      },
    },
  },
  created(){
    this.jsonData = this.data
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
      console.log("savemending", e)
      this.$emit("savemending", e);
    },
    automending(e){
      this.$emit("automending", e);
    },
    clearmending(e){
      this.$emit("clearmending", e);
    },
    autorowsmending(e){
      this.$emit("autorowsmending", e);
    },
  },
};
</script>
