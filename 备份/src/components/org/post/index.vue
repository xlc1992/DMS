<!--
* description: 是否组件 /业务岗位
*   2019-08-05 加入文字溢出效果 liyanm
*  2019-08-09 修改文字溢出效果-封装/校验效果 liyanm
-->
<template>
  <section>
    <el-col :span="span" v-if="curIsShow">
      <lableName
        :validrule="validrule"
        :curLabelName="curLabelName"
        :isShowLabel="isShowLabel"
        :isRequire="isRequire"
      ></lableName>
      <el-select
        :multiple="isMul"
        collapse-tags
        filterable
        v-model="modelCode"
        :placeholder="placeholder"
        @clear="clearCode"
        :clearable="clearable"
        @change="sendCode"
        :disabled="disabled"
        size="small"
      >
        <el-option
          v-for="item in optionDatas"
          :key="item[optionFields.length > 1 ? optionFields[0] : defOptionFields[0]]"
          :label="item[optionFields.length > 1 ? optionFields[1] : defOptionFields[1]]"
          :value="item[optionFields.length > 1 ? optionFields[0] : defOptionFields[0]]"
        >{{item[optionFields.length > 1 ? optionFields[1] : defOptionFields[1]]}}</el-option>
      </el-select>
      <validateFormate :curLabelName="curLabelName" :validrule="validrule"></validateFormate>
    </el-col>
  </section>
</template>
<script>
import { orgApis } from "@/api/apiList/org";
import { dropdownMixins } from "@/components/mixins/dropdownMixins";
// import lableName from "@/components/lableName";
// import validateFormate from "@/components/validateFormate";
export default {
  name: "isEnable",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labenName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  components: {
    lableName: () => import("@/components/lableName"), //标题溢出样式组件
    validateFormate: () => import("@/components/validateFormate") //校验提示样式组件
  },
  props: {
    isMul: { type: Boolean, default: false },
    isShow: { type: Boolean, default: true }
  },
  data() {
    return {
      curIsShow: this.isShow,
      // 默认绑定数据对象字段
      defOptionFields: ["stationId", "stationName"],
      apiConfig: orgApis.mdmOrgStationQueryFindAll,
      placeholder: this.$t("sys.tips.esTip0"),
      curLabelName: this.labelName === "" ? "岗位" : this.labelName,
      apiQueryRow: ["stationCode", "stationId", "stationName"],
      // 下拉查询条件
      listQuery: {}
    };
  },
  mothods: {}
};
</script>

<style scoped>
.el-col-12 {
  width: 100%;
}
</style>