<!--
* description: 车型配置（含弹窗）
* author: zhhx
* createdDate: 2019-08-08
-->

<template>
  <section class="cartypeInp">
    <el-col :span="span">
      <lableName
        :curLabelName="curLabelName"
        :isShowLabel="isShowLabel"
        :isRequire="isRequire"
      ></lableName>
      <el-input
         :placeholder="placeholder"
        v-model="modelCode"
        size="small"
        suffix-icon="el-icon-search"
        clearable
        @blur="sendCode"
        @focus="getFocusCode"
        @clear="clearCode"
      ></el-input>
      <validateFormate
        :curLabelName="curLabelName"
        :validrule="validrule"
      ></validateFormate>
    </el-col>
    <carTypeConfig
      :popupsVisible.sync="curPopupsVisible"
      :codeField="codeField"
      :comType="comType"
      :popupsKey="popupsKey"
      :code="modelCode"
      :key="curPopupsKey"
      :text="modelText"
      :valueObject="curValueObject"
      @changeCode="getComponentCode"
      :isMul='isMul'
      ref="carType"
    ></carTypeConfig>
  </section>
</template>
<script>
import { searchInputMixins } from "@/components/mixins/searchInputMixins";
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";

import carTypeConfig from "./experienceCenter";
export default {
  name:'experienceCenterInput',
  // 组件混入对象
  mixins: [searchInputMixins,valueObjectMixins],
  components: {
    carTypeConfig,
    lableName: () => import("@/components/lableName"), //标题溢出样式组件
    validateFormate: () => import("@/components/validateFormate"), //校验提示样式组件
  },
  data() {
    return {
      editPageClassName:'testDriver',
      editEl:null,
      curPopupsVisible:false,
      placeholder: '选择体验中心',
      curLabelName: this.labelName === "" ? "体验中心" : this.labelName
    };
  },
  watch:{
    modelCode(val){
      // if(this.editEl===null) this.foundEl(this.editPageClassName)
      // this.editEl.formField[this.codeField] = val
      // this.$parent.$parent.$parent.formField[this.codeField] = val
      this.$emit('changeCode', val, this.text, this.codeField, this.comType, this.popupsKey, this.textField, null, null)
    }
  },
  methods: {
     // foundEl(className,parent=this.$parent){
     //   let el_classname = parent.$el['className']
     //   el_classname === className ? this.editEl = parent : this.foundEl(className,parent.$parent)
     // },
     getFocusCode(){
       this.curPopupsVisible = true
       this.$nextTick(()=>{
         // 加载dialog中的数据
         this.$refs['carType'].queryTable(1)
       })
     },

  }
};
</script>
