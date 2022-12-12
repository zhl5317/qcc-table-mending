<template>
  <div style="width: 100%; text-align: center">
    <div style="width: 90%; text-align: center; margin: 20px auto">
      <canvas id="cvs1" style="position: absolute; z-index: 1"></canvas>
      <canvas
        id="cvs"
        @contextmenu="clearHighlight"
        style="position: absolute; z-index: 1"
      ></canvas>
    </div>

    <div class="tooltips left" :style="{ '--toolsLeft': toolsLeft + 'px' }">
      <a
        href="javascript:void(0)"
        @click="toolsHandle(2)"
        :class="type === 2 ? 'active' : ''"
        title="添加竖线"
        ><svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="border-horizontal"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M540 144h-56c-4.4 0-8 3.6-8 8v720c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V152c0-4.4-3.6-8-8-8zm-166 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm498 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-664 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm498 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM208 310h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm664 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-664 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 166h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm664 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM374 808h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"
          ></path></svg
      ></a>
      <a
        href="javascript:void(0)"
        @click="toolsHandle(1)"
        :class="type === 1 ? 'active' : ''"
        title="添加横线"
        ><svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="border-verticle"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M872 476H152c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-166h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 498h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-664h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 498h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM650 216h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm56 592h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-56-592h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-166 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm332 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM208 808h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM152 382h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm332 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM208 642h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"
          ></path></svg
      ></a>
      <a
        href="javascript:void(0)"
        @click="toolsHandle(5)"
        :class="type === 5 ? 'active' : ''"
        title="合并单元格"
        ><svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="border-outer"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM484 366h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM302 548h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm364 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-182 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 182h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z"
          ></path></svg
      ></a>
      <a
        href="javascript:void(0)"
        @click="toolsHandle(3)"
        :class="type === 3 ? 'active' : ''"
        title="删除线"
        ><svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="close-square"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M354 671h58.9c4.7 0 9.2-2.1 12.3-5.7L512 561.8l86.8 103.5c3 3.6 7.5 5.7 12.3 5.7H670c6.8 0 10.5-7.9 6.1-13.1L553.8 512l122.4-145.9c4.4-5.2.7-13.1-6.1-13.1h-58.9c-4.7 0-9.2 2.1-12.3 5.7L512 462.2l-86.8-103.5c-3-3.6-7.5-5.7-12.3-5.7H354c-6.8 0-10.5 7.9-6.1 13.1L470.2 512 347.9 657.9A7.95 7.95 0 00354 671z"
          ></path>
          <path
            d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"
          ></path></svg
      ></a>
      <a  href="javascript:void(0)"
        @click="toolsHandle(4)"
        :class="type === 4 ? 'active' : ''"
        title="清空画布">
          <svg viewBox="64 64 896 896" focusable="false" data-icon="clear" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6a25.95 25.95 0 0025.6 30.4h723c1.5 0 3-.1 4.4-.4a25.88 25.88 0 0021.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"></path></svg>
        </a>
      <a
        href="javascript:void(0)"
        @click="toolsHandle(6)"
        :class="type === 6 ? 'active' : ''"
        title="保存"
        ><svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="save"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"
          ></path></svg
      ></a>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "TableMendingVue",
  components: {},
  data() {
    return {
      type: 0,
      ctx: null,
      ctx1: null,
      cvs: null,
      cvs1: null, // 参考层
      lines: this.data.lines,
      boxes: this.data.boxs,
      mouseFlag: false,
      active_rect: [0, 0, 0, 0],
      merge_bboxs: [],
      bl: 1,
      toolsLeft: 0,
      parsedData: {
        lines: { cols: [], rows: [] },
        boxs: [],
      },
    };
  },
  props: {
    image: {
      type: String,
      require: true,
      default: () => "",
    },
    options: {
      type: Object,
      require: false,
      default: () => {
        return {
          isShowGuideLine: true,
          maxWidth: 650,
          linesColor: "blue",
          linewidth: 1,
        };
      },
    },
    data: {
      type: Object,
      require: false,
      default: () => {
        return {
          boxs: [],
          lines: { cols: [], rows: [] },
        };
      },
    },
  },
  created() {
    this.parsedData = this.data;
  },
  async mounted() {
    this.merge_bboxs = [];
    this.mouseFlag = false;
    const im = this.image;
    this.active_rect = [0, 0, 0, 0];
    let { width, height } = await this.getImageSize(im);
    if (width > this.options.maxWidth) {
      this.bl = (width / this.options.maxWidth).toFixed(15);
      width = this.options.maxWidth;
      height = height / this.bl;
    } else {
      this.bl = 1;
    }
    this.cvs1 = document.querySelector("#cvs1");
    this.cvs1.style.setProperty("background-image", `url(${im})`);
    this.cvs1.style.setProperty("background-repeat", `no-repeat`);
    this.cvs1.style.setProperty("background-size", `100% 100%`);
    this.ctx1 = this.cvs1.getContext("2d");
    this.cvs1.width = width;
    this.cvs1.height = height;
    this.cvs1.style.border = "1px solid #ccc";
    this.cvs = document.querySelector("#cvs");
    this.ctx = this.cvs.getContext("2d");
    this.cvs.width = width;
    this.cvs.height = height;
    this.cvs.style.border = "1px solid #ccc";
    this.cvs.style.setProperty("left", `calc((100% - ${width}px) / 2)`);
    this.cvs1.style.setProperty("left", `calc((100% - ${width}px) / 2)`);
    this.toolsLeft = width / 2 + 10;
    this.boxes = this.compressionRatio(this.boxes);
    if (this.boxes.length > 0) {
      this.lines = this.boxes_to_lines(this.boxes);
      this.drawLine(
          this.options.linesColor,
          this.options.lineWidth,
          this.lines
        );
    } else {
      this.supplyRangeLines();
    }
    this.mouseEvent();
  },
  watch: {
    lines: {
      immediate: true,
      deep: true,
      handler(val) {
        this.parsedData.lines = this.recoveryRatio(val);
      },
    },
    boxes: {
      immediate: true,
      deep: true,
      handler(val) {
        this.parsedData.boxs = this.recoveryRatio(val);
      },
    },
    parsedData: {
      handler(newValue, oldValue) {
        this.$emit("input", newValue);
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    toolsHandle(type) {
      this.type = type;
      if (type === 5) {
        if (this.merge_bboxs.length === 0) {
          this.type = 0;
          return false;
        }
        let merged_boxes = _.difference(this.boxes, this.merge_bboxs);
        merged_boxes.push(this.calRangeBoxs(this.merge_bboxs));
        this.lines = this.boxes_to_lines(merged_boxes);
        this.boxes = merged_boxes;
        this.ctx1.clearRect(0, 0, this.cvs1.width, this.cvs1.height);
        this.drawLine(
          this.options.linesColor,
          this.options.lineWidth,
          this.lines
        );
        this.merge_bboxs = [];
        this.active_rect = [0, 0, 0, 0];
        this.type = 0;
      } else if (type === 6) {
        this.type = 0;
        this.$emit("savemending", {
          lines: this.recoveryRatio(this.lines),
          boxs: this.recoveryRatio(this.boxes),
        });
      } else if (type === 4 ) {
        this.boxes = []
        this.lines = {"cols":[], "rows": []}
        this.supplyRangeLines();
      } else {
        this.merge_bboxs = [];
        this.active_rect = [0, 0, 0, 0];
        this.ctx1.clearRect(0, 0, this.cvs1.width, this.cvs1.height);
      }
    },

    compressionRatio(data) {
      if (data.constructor === Array) {
        return data.map((v) => {
          return Array.from(v, (value) => value / this.bl);
        });
      } else if (data.constructor === Object) {
        let new_lines = { cols: [], rows: [] };
        Object.keys(data).forEach((f) => {
          const cur = data[f];
          new_lines[f] = cur.map((v) => {
            return Array.from(v, (value) => value / this.bl);
          });
        });
        return new_lines;
      }
    },

    recoveryRatio(data) {
      if (data.constructor === Array) {
        return data.map((v) => {
          return Array.from(v, (value) => value * this.bl);
        });
      } else if (data.constructor === Object) {
        let new_lines = { cols: [], rows: [] };
        Object.keys(data).forEach((f) => {
          const cur = data[f];
          new_lines[f] = cur.map((v) => {
            return Array.from(v, (value) => value * this.bl);
          });
        });
        return new_lines;
      }
    },
    supplyRangeLines() {
      this.lines.rows.push([...[0, 0], ...[this.cvs.width, 0]]);
      this.lines.rows.push([
        ...[0, this.cvs.height],
        ...[this.cvs.width, this.cvs.height],
      ]);
      this.lines.cols.push([...[0, 0], ...[0, this.cvs.height]]);
      this.lines.cols.push([
        ...[this.cvs.width, 0],
        ...[this.cvs.width, this.cvs.height],
      ]);
      this.drawLine(
        this.options.linesColor,
        this.options.lineWidth,
        this.lines
      );
    },
    getImageSize(url) {
      if (url.includes(";base64=")) {
        //base64
        url = url.split("src=")[1].replace('"', "").replace('">', "");
      }
      return new Promise((resolve) => {
        var img = document.createElement("img");
        img.src = url;
        img.onload = () => {
          resolve({ width: img.naturalWidth, height: img.naturalHeight });
        };
      });
    },

    drawLine(linecolor, linewidth, lines) {
      this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
      lines.rows.forEach(([from, to, start, end]) => {
        this.ctx.beginPath();
        this.ctx.lineWidth = linewidth;
        this.ctx.strokeStyle = linecolor;
        this.ctx.moveTo(from, to);
        this.ctx.lineTo(start, end);
        this.ctx.stroke();
      });
      lines.cols.forEach(([from, to, start, end]) => {
        this.ctx.beginPath();
        this.ctx.lineWidth = linewidth;
        this.ctx.strokeStyle = linecolor;
        this.ctx.moveTo(from, to);
        this.ctx.lineTo(start, end);
        this.ctx.stroke();
      });
      const bbox = this.lines_to_boxes(lines);
      this.boxes = bbox;
    },

    hightlightDrawLine: _.throttle(function (linecolor, linewidth, y, x) {
      this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
      this.lines.rows.forEach(([from, to, start, end]) => {
        if (to >= y - 2 && to <= y + 2) {
          linewidth = 2;
        } else {
          linewidth = 1;
        }
        this.ctx.beginPath();
        this.ctx.lineWidth = linewidth || 1;
        this.ctx.strokeStyle = linecolor || "blue";
        this.ctx.moveTo(from, to);
        this.ctx.lineTo(start, end);
        this.ctx.stroke();
      });
      this.lines.cols.forEach(([from, to, start, end]) => {
        if (from <= x + 2 && from >= x - 2) {
          linewidth = 2;
        } else {
          linewidth = 1;
        }
        this.ctx.beginPath();
        this.ctx.lineWidth = linewidth || 1;
        this.ctx.strokeStyle = linecolor || "blue";
        this.ctx.moveTo(from, to);
        this.ctx.lineTo(start, end);
        this.ctx.stroke();
      });
    }, 100),

    deleteLines(linecolor, linewidth, y, x) {
      this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
      _.remove(this.lines.rows, (n) => {
        if (n[1] <= y + 2 && n[1] >= y - 2) {
          this.$emit("deleteline", ...this.recoveryRatio([n]));
        }
        return n[1] <= y + 2 && n[1] >= y - 2;
      });

      _.remove(this.lines.cols, (n) => {
        if (n[0] <= x + 2 && n[0] >= x - 2) {
          this.$emit("deleteline", ...this.recoveryRatio([n]));
        }
        return n[0] <= x + 2 && n[0] >= x - 2;
      });
      this.boxes = this.lines_to_boxes(this.lines);
      this.lines = this.boxes_to_lines(this.boxes);
      this.drawLine(
        this.options.linesColor,
        this.options.lineWidth,
        this.lines
      );
    },

    drawGuideLine(from, to, linecolor) {
      this.ctx1.beginPath();
      this.ctx1.strokeStyle = "red";
      this.ctx1.setLineDash([5]); // 虚线
      this.ctx1.moveTo(from[0], from[1]);
      this.ctx1.lineTo(to[0], to[1]);
      this.ctx1.stroke();
      this.ctx1.closePath();
    },

    mouseEvent() {
      cvs.onmouseup = () => {
        this.mouseFlag = false;
      };
      cvs.onmousemove = (e) => {
        if (!this.mouseFlag) {
          if (this.merge_bboxs.length === 0) {
            // 合并单元格时不清空底层canvas
            this.ctx1.clearRect(0, 0, this.cvs1.width, this.cvs1.height);
          }
          if (this.type === 1 && this.options.isShowGuideLine) {
            this.drawGuideLine(
              [0, e.offsetY],
              [this.cvs1.width, e.offsetY],
              "#ccc"
            );
            this.ctx1.fillText(
              "x:" +
                (e.clientX - this.cvs1.offsetLeft) +
                " y:" +
                (e.clientY - this.cvs1.offsetTop),
              e.clientX - this.cvs1.offsetLeft + 10,
              e.clientY - this.cvs1.offsetTop - 10
            );
          } else if (this.type === 2 && this.options.isShowGuideLine) {
            this.drawGuideLine(
              [e.offsetX, 0],
              [e.offsetX, this.cvs1.height],
              "#ccc"
            );
            this.ctx1.fillText(
              "x:" +
                (e.clientX - this.cvs1.offsetLeft) +
                " y:" +
                (e.clientY - this.cvs1.offsetTop),
              e.clientX - this.cvs1.offsetLeft + 10,
              e.clientY - this.cvs1.offsetTop - 10
            );
          } else if (this.type === 3) {
            // 删除
            this.hightlightDrawLine(
              this.options.linesColor,
              2,
              e.offsetY,
              e.offsetX
            );
          }
        } else {
          this.active_rect[2] = e.clientX - this.cvs1.offsetLeft;
          this.active_rect[3] = e.clientY - this.cvs1.offsetTop;
          if (this.boxes.length > 1) {
            this.drawRect(this.active_rect);
          }
          this.type = 0;
        }
      };

      cvs.onmousedown = (e) => {
        const _l_r = e.button; // 0-左键  2-右键
        if (_l_r === 0) {
          this.mouseFlag = true;
          this.active_rect = [
            e.clientX - this.cvs1.offsetLeft,
            e.clientY - this.cvs1.offsetTop,
            0,
            0,
          ];
          if (this.type === 1) {
            let isForbidden = false;
            this.lines.rows.some(([from, to, start, end]) => {
              if (to >= e.offsetY - 2 && to <= e.offsetY + 2) {
                isForbidden = true;
                return;
              }
            });
            if (!isForbidden) {
              this.lines.rows.push([
                ...[0, e.offsetY],
                ...[this.cvs.width, e.offsetY],
              ]);
              this.drawLine(
                this.options.linesColor,
                this.options.lineWidth,
                this.lines
              );
              this.$emit(
                "rowadd",
                ...this.recoveryRatio([
                  [...[0, e.offsetY], ...[this.cvs.width, e.offsetY]],
                ])
              );
            }
          } else if (this.type === 2) {
            let isForbidden = false;
            this.lines.cols.some(([from, to, start, end]) => {
              if (from <= e.offsetX + 2 && from >= e.offsetX - 2) {
                isForbidden = true;
                return;
              }
            });
            if (!isForbidden) {
              this.lines.cols.push([
                ...[e.offsetX, 0],
                ...[e.offsetX, this.cvs.height],
              ]);
              this.drawLine(
                this.options.linesColor,
                this.options.lineWidth,
                this.lines
              );
              this.$emit(
                "coladd",
                ...this.recoveryRatio([
                  [...[e.offsetX, 0], ...[e.offsetX, this.cvs.height]],
                ])
              );
            }
          } else if (this.type === 3) {
            this.deleteLines(this.options.linesColor, 1, e.offsetY, e.offsetX);
          }
        }
      };
    },
    boxOverlap(rec1, rec2) {
      const maxOfX = (rec) => Math.max(rec[0], rec[2]);
      const maxOfY = (rec) => Math.max(rec[1], rec[3]);
      const minOfX = (rec) => Math.min(rec[0], rec[2]);
      const minOfY = (rec) => Math.min(rec[1], rec[3]);
      const NolappingFromX =
        maxOfX(rec1) <= minOfX(rec2) || minOfX(rec1) >= maxOfX(rec2);
      const NolappingFromY =
        maxOfY(rec1) <= minOfY(rec2) || minOfY(rec1) >= maxOfY(rec2);
      if (!(NolappingFromX || NolappingFromY)) {
        return true;
      } else {
        return false;
      }
    },
    boxes_to_lines(boxes) {
      const overlap = (l1, r1, l2, r2) => {
        return Math.min(r1, r2) - Math.max(l1, l2);
      };
      const merge_lines = (lines, dim) => {
        let [result, temp] = [[], lines[0]]; // 初始化temp
        for (let i = 1; i < lines.length; i++) {
          let point = lines[i];
          let [_l, _t, _r, _b] = temp;
          let [l, t, r, b] = point;
          if (_r === l && _b === t) {
            temp[2] = r;
            temp[3] = b;
          } else if (
            [...new Set([_t, _b, t, b])].length === 1 &&
            overlap(_l, _r, l, r) > 0
          ) {
            l = Math.min(_l, l);
            r = Math.max(_r, r);
            temp = [l, t, r, b];
          } else if (
            [...new Set([_l, _r, l, r])].length === 1 &&
            overlap(_t, _b, t, b) > 0
          ) {
            t = Math.min(_t, t);
            b = Math.max(_b, b);
            temp = [l, t, r, b];
          } else {
            result.push(temp);
            temp = point;
          }
        }
        result.push(temp);
        return result;
      };
      let [col_merge, row_merge] = [[], []];
      if (boxes.length > 0) {
        // 不空
        // 拆线
        let [col_lines, row_lines] = [[], []];
        for (let w of boxes) {
          let [l, t, r, b] = w;
          col_lines = [
            ...col_lines,
            ...[
              // 列线
              [l, t, l, b],
              [r, t, r, b],
            ],
          ];
          row_lines = [
            ...row_lines,
            ...[
              // 行线
              [l, t, r, t],
              [l, b, r, b],
            ],
          ];
        }
        // 排序
        let col_sort = _.orderBy(
          col_lines,
          [
            (v) => {
              return v[0];
            },
            (v) => {
              return v[1];
            },
          ],
          ["asc", "asc"]
        );
        let row_sort = _.orderBy(
          row_lines,
          [
            (v) => {
              return v[1];
            },
            (v) => {
              return v[0];
            },
          ],
          ["asc", "asc"]
        );
        // 合并
        col_merge = merge_lines(col_sort);
        row_merge = merge_lines(row_sort);
      }
      let lines = {
        cols: col_merge,
        rows: row_merge,
      };
      return lines;
    },
    clearHighlight(e) {
      e.preventDefault();
      this.active_rect = [0, 0, 0, 0];
      this.merge_bboxs = [];
      this.ctx1.clearRect(0, 0, this.cvs1.width, this.cvs1.height);
      this.type = 0;
      this.drawLine(
        this.options.linesColor,
        this.options.lineWidth,
        this.lines
      );
    },
    boxes_to_points(boxes) {
      const duplicate = (arr) => {
        let res = {};
        arr.forEach((item) => {
          item.sort((a, b) => a - b);
          res[item] = item;
        });
        return Object.values(res);
      };
      let points = [];
      for (let k of boxes) {
        let [l, t, r, b] = k;
        points = [
          ...points,
          ...[
            [l, t],
            [r, t],
            [r, b],
            [l, b],
          ],
        ];
      }
      points = duplicate(points);
      return points;
    },
    lines_to_points(lines) {
      const cross_point = (row, col) => {
        let point;
        let [l, t, r, b] = row; // 行
        let [_l, _t, _r, _b] = col; // 列
        if (l <= _l && _l <= r && _t <= t && t <= _b) point = [_l, t];
        else point = null;
        return point;
      };

      const col_lines = lines.cols;
      const row_lines = lines.rows;
      let points = [];
      for (let row of row_lines) {
        // 行
        for (let col of col_lines) {
          // 列
          let point = cross_point(row, col);
          if (point) {
            points.push(point);
          }
        }
      }
      return points;
    },
    points_to_boxes(points, lines) {
      const merge_lists = (points, dim) => {
        let [lists, temp] = [[], []];
        for (let point of points) {
          if (temp.length === 0 || temp[temp.length - 1][dim] === point[dim]) {
            temp.push(point);
          } else {
            lists.push(temp);
            temp = [point];
          }
        }
        if (temp.length > 0) {
          lists.push(temp);
        }
        return lists;
      };

      const ensure_line = (line, lines) => {
        const [l, t, r, b] = line;
        for (let _line of lines) {
          let [_l, _t, _r, _b] = _line;
          if (_l <= l && l <= r && r <= _r && _t <= t && t <= b && b <= _b) {
            return true;
          }
        }
        return false;
      };

      const ensure_box = (box, lines) => {
        const [l, t, r, b] = box;
        if (
          ensure_line([l, t, r, t], lines["rows"]) &&
          ensure_line([r, t, r, b], lines["cols"]) &&
          ensure_line([l, b, r, b], lines["rows"]) &&
          ensure_line([l, t, l, b], lines["cols"])
        )
          return true;
        else return false;
      };

      let col_sort = _.orderBy(
        points,
        [
          (v) => {
            return v[0];
          },
          (v) => {
            return v[1];
          },
        ],
        ["asc", "asc"]
      ); // 列
      let row_sort = _.orderBy(
        points,
        [
          (v) => {
            return v[1];
          },
          (v) => {
            return v[0];
          },
        ],
        ["asc", "asc"]
      ); // 行
      let col_lists = merge_lists(col_sort, 0);
      let col_map = {};
      for (let item of col_lists) {
        col_map[item[0][0]] = item;
      }
      let row_lists = merge_lists(row_sort, 1);
      let row_length = row_lists.length;
      let boxes = [];
      for (let i = 0; i < [...Array(row_length - 1).keys()].length; i++) {
        // 按行循环，跳过最后一行
        for (
          let j = 0;
          j < [...Array(row_lists[i].length - 1).keys()].length;
          j++
        ) {
          // 每行跳过最后一个点，循环每一个box的左上顶点
          let point = row_lists[i][j]; // 左上顶点
          let [l, t] = point;
          let ranage = row_lists[i].length - (j + 1);
          if (ranage > 0) {
            for (let s = 0; s < [...Array(ranage).keys()].length; s++) {
              let k = s + j + 1;
              let point_r = row_lists[i][k]; // 右上顶点
              let r = point_r[0];
              let l_bs = [];
              let r_bs = [];
              for (let x1 of col_map[l]) {
                // 左上顶点这一列下方的y
                if (x1[1] > t) {
                  l_bs.push(x1[1]);
                }
              }
              for (let x2 of col_map[r]) {
                // 右上顶点这一列下方的y
                if (x2[1] > t) {
                  r_bs.push(x2[1]);
                }
              }

              let b = null;
              for (let _b of l_bs) {
                if (r_bs.indexOf(_b) > -1) {
                  b = _b;
                  if (ensure_box([l, t, r, b], lines)) break;
                  else {
                    b = null;
                    continue;
                  }
                }
              }
              if (b !== null) {
                // 满足匹配，减枝
                boxes.push([l, t, r, b]);
                break;
              }
            }
          }
        }
      }
      return boxes;
    },
    lines_to_boxes(lines) {
      try {
        const points = this.lines_to_points(lines);
        const _boxes = this.points_to_boxes(points, lines);
        return _boxes;
      } catch (e) {
        return []
      }  
    },

    drawRect: _.throttle(function (rect) {
      this.merge_bboxs = [];
      this.ctx1.clearRect(0, 0, this.cvs1.width, this.cvs1.height);
      for (let box of this.boxes) {
        if (this.boxOverlap(box, rect)) {
          this.merge_bboxs.push(box);
        }
      }
      if (this.merge_bboxs.length > 1) {
        for (let box of this.merge_bboxs) {
          // 盘鼠标轨迹对呀的rect对角线 2点坐标在 box内 高亮bbox
          this.ctx1.fillRect(box[0], box[1], box[2] - box[0], box[3] - box[1]);
          this.ctx1.fillStyle = "rgba(165, 0, 0, 0.4)";
        }
        this.$emit("mergelines", this.recoveryRatio(this.merge_bboxs));
      }
    }, 100),

    calRangeBoxs(bboxs) {
      const zip_bbox = _.zip(...bboxs);
      return [
        Math.min(...zip_bbox[0]),
        Math.min(...zip_bbox[1]),
        Math.max(...zip_bbox[2]),
        Math.max(...zip_bbox[3]),
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";
</style>
