<!--
* description: 车型配置弹出框  -- (新)
* author: luojx
* createdDate: 2019-08-02
-->
<template>
  <section class="carTypeConfig">
    <el-dialog v-dialogDrag
      :title="title"
      :visible.sync="curPopupsVisible"
      width="1000px"
      center
      @close="sendCode"
      :close-on-click-modal="false"
      :append-to-body="true"
    >
      <dialogHeader
        slot="title"
        :title="title"
        :styleType="$store.state.app.dialogType"
      ></dialogHeader>
      <one-table-template
        ref="multipleTable"
        :dynamicButtons="tableButtons"
        :dynamicComponents="tableComponents"
        :dynamicApiConfig="apiConfig"
        :dynamicTableCols="tableCols"
        :dynamicFormFields="formField"
        :dynamicIsShowSelect="isMul"
      />
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
import { orgApis } from "@/api/apiList/org";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins, valueObjectMixins],
  components: {
    OneTableTemplate,   dialogHeader: () => import("@/components/dialogHeader") //弹窗标题
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: orgApis.mdmOrgEmployeeQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          name: "search",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query")
        } /*查询*/,
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          name: "reset",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        } /*重置*/,
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          name: "confirm",
          clickEvent: () => this.sendCode("empId", "userName"),
          text: this.$t("sys.button.confirm")
        } /*确定*/
      ],
      // 动态组件-查询条件
      tableComponents: [
        // 显示组件
        {
          compKey: "compKey2",
          labelName: this.$t("org.label.department")+"ID" /*部门*/,
          codeField: "deptId",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t("org.label.UserName") /*用户名称*/,
          codeField: "userName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: this.$t("org.label.employeeName") /*员工姓名*/,
          codeField: "empName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
        },
        // {
        //   compKey: "compKey5",
        //   labelName: this.$t("org.label.PositionCode") /*系统岗位编码*/,
        //   codeField: "positionCode",
        //   component: () => import("@/components/org/commonInput"),
        //   type: "inputText",
        //   isMust: false,
        //   hidden: true
        // }
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "dlrShortName",
          label: this.$t("org.label.dlrName") /*经销商*/,
          width: null,
          align: "center"
        },
        {
          prop: "orgName",
          label: this.$t("org.label.department") /*部门*/,
          width: null,
          align: "center"
        },
        {
          prop: "userName",
          label: this.$t("org.label.UserName") /*用户名称*/,
          width: null,
          align: "center"
        },
        {
          prop: "empName",
          label: this.$t("org.label.employeeName") /*员工姓名*/,
          width: null,
          align: "center"
        },
        {
          prop: "empId",
          label: this.$t("org.label.empId") /*员工ID*/,
          width: 80,
          align: "center",
          hidden: true
        }
      ],
      //表单查询数据（查询条件）
      formField: {
        deptId:"",
        userName:"",
        empName: "",
        //positionCode: ""
      },
      title: this.$t("org.label.userSelTitle") /*用户选择*/
    };
  }
};
</script>
