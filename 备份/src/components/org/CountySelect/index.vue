<!--
* description: 区县下拉框（多选，单选）,支持搜索
* author: liyanm
* createdDate: 2019-07-27
 *   2019-08-05 加入文字溢出效果 liyanm
*  2019-08-09 修改文字溢出效果-封装/校验效果 liyanm
-->
<template>
  <section>
    <el-col :span="span">
      <lableName    :validrule="validrule"   
        :curLabelName="curLabelName"
        :isShowLabel="isShowLabel"
        :isRequire="isRequire"
      ></lableName>
      <el-select
        :multiple="isMul"
        collapse-tags
        :filterable="filterable"
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
      <validateFormate
        :curLabelName="curLabelName"
        :validrule="validrule"
      ></validateFormate>
    </el-col>
  </section>
</template>
<script>
import { orgApis } from "@/api/apiList/org";
import { dropdownMixins } from "@/components/mixins/dropdownMixins";
// import lableName from "@/components/lableName";
// import validateFormate from "@/components/validateFormate";
export default {
  name: "orgCitySelect",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labenName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  components: {
    lableName: () => import("@/components/lableName"), //标题溢出样式组件
    validateFormate: () => import("@/components/validateFormate"), //校验提示样式组件
  },
  props: {
    // 省份ID编号
    provinceId: { type: String, default: "" },
    // 城市ID编号
    cityId: { type: String, default: "" }
  },
  data() {
    return {
      // 默认绑定数据对象字段
      defOptionFields: ['countyId', 'countyName'],
      placeholder: this.$t("sys.tips.esTip0"),
      curLabelName: this.labelName === "" ? "区县" : this.labelName,
      // API配置对象
      apiConfig: orgApis.mdmOrgCommunityQueryFindAll,
      // 表格中台返回网格的字段
      apiQueryRow: [
        "provinceId",
        "cityId",
        "countyName",
        "countyId",
        "countyCode",
        "updateControlId"
      ],
      // 下拉查询条件
      listQuery: {
        isEnable: "1",
        cityId: this.cityId,
        // provinceId: this.provinceId
      }
    };
  }
};
</script>
