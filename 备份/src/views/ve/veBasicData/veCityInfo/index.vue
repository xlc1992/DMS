<template>
  <section class="app-container app-container-table">
    <div id="TreeTable">
      <!--树形区域-->
      <el-aside class="el-slide">
        <input type="text" placeholder="请输入搜索内容" class="tree-input">
        <el-tree
          :data="menueList"
          highlight-current
          :props="defaultProps"
          @node-click="handleNodeClick"
        />
      </el-aside>
      <el-main ref="mainHeight">
      <!--网格区域-->
        <!-- <one-table-template
          ref="multipleTable"
          :dynamic-buttons="tableButtons"
          :dynamic-components="tableComponents"
          :dynamic-api-config="apiConfig"
          :dynamic-table-cols="tableCols"
          :dynamic-form-fields="formField"
          :dynamic-is-show-select="false"
          :dynamic-is-init-table="false"
          :dynamic-is-column-drop="true"
        /> -->
        <div class="hander-bg filter-container app-common-pad matter-bg">
       <el-tabs v-model="activeName">
      <el-tab-pane
        label="新增仓库"
        name="one"
      >
        <pageOne/>
      </el-tab-pane>
      <el-tab-pane
        label="新增储区"
        name="two"
      >
        <pageTwo/>
      </el-tab-pane>
      <el-tab-pane
        label="新增库位"
        name="three"
      >
        <pageThree/>
      </el-tab-pane>
    </el-tabs>
     </div>
      </el-main>
    </div>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins'
import { orgApis } from "@/api/apiList/org"
// import TreeTable from '@/components/templates/treeTable'
import OneTableTemplate from "@/components/templates/oneTable"
import pageOne from './common/pageOne'
import pageTwo from './common/pageTwo'
import pageThree from './common/pageThree'
import Vue from 'vue'
export default {
  name: "RoleMenuRelationLook",
  components: {
    OneTableTemplate,
    pageOne,
    pageTwo,
    pageThree
  },
  filters: {},
  mixins: [oneTableWithViewTemplateMixins],
    beforeRouteEnter(to, from, next) {
    Vue.prototype.$ConfigCache.CacheConfig.initData(
      // 同时加载当前页面和编辑框页面的配置
      to.path,
      function(){
        next()
      })
  },
  data() {
    // 页面标识（与上面beforeRouteEnter中的对应）
    let viewPageCode = this.$route.path
    // 绑定事件配置化事件
    this.$ConfigCache.CacheConfig.bindEvent(this, [viewPageCode])
    return {
      activeName: 'one',
      // 树形结构
      menueParam: {},
      menueList:[
        {
          label: '门店1',
          children: [{
            label: '广州城市仓库',
          }]
        },
        {
          label: '广州交付店',
          children: [{
            label: '广州天河库',
            children: [{
              label: '98128931',
              children: [{
                label: '123123123',
              }]
            }]
          }]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },

      // 网格查询API配置对象
      apiConfig: orgApis.sysMenuRoleQueryByPage,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
        //   clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query"),
          name: "search", //按钮图标样式
          position: "right",
          fuzzySearch: true
        } // 查询
      ],
      // 动态组件-查询条件
      tableComponents: this.$ConfigCache.CacheConfig.cacheData[viewPageCode] && 
      this.$ConfigCache.CacheConfig.cacheData[viewPageCode].tableComponents.length > 0 ? 
      this.$ConfigCache.CacheConfig.cacheData[viewPageCode].tableComponents : [
        {
          compKey: "compKey1",
          span: 12,
          labelName: this.$t("org.label.roleName"),
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        } // 角色名称
      ],
      // 动态生成网格列
      tableCols:this.$ConfigCache.CacheConfig.cacheData[viewPageCode]&& 
      this.$ConfigCache.CacheConfig.cacheData[viewPageCode].tableCols.length > 0 ? 
      this.$ConfigCache.CacheConfig.cacheData[viewPageCode].tableCols: [
        {
          prop: "roleId",
          label: "角色ID",
          hidden: true,
          width: null,
          align: "center"
        },

        {
          prop: "roleName",
          label: this.$t("org.label.roleName"),
          width: null,
          align: "center"
        }, // 角色名称
        // { prop: 'roleCode', label: this.$t('org.label.roleCode'), width: 150, align: 'center', hidden: true},//角色编码
        {
          prop: "roleDesc",
          label: this.$t("org.label.roleDesc"),
          width: null,
          align: "center"
        }, // 描述
        {
          prop: "orgName",
          label: this.$t("org.label.orgName"),
          width: null,
          align: "center"
        } // 所属组织

        // {
        //   prop: "updateControlId",
        //   label: "并发控制",
        //   width: null,
        //   align: "center",
        //   hidden: true
        // }
      ],
      // 表单查询数据
      formField: {
        menuId: "",
        roleName: ""
      },

      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      },

      // 组件数据
      isEnableSpan: 20
    };
  },
  created() {
    // this.queryMenue(true);
  },
  mounted() {},
  methods: {
    // 网格
    // queryTable(page, dataType, size, filterObj, cb) {
    //   if (this.formField.menuId === "") {
    //     this.$message({
    //       message: this.$t("org.message.selMul") /*请选择一条数据*/,
    //       type: "warning",
    //       duration: 1000
    //     });
    //     return false;
    //   }
    //   // popups 组件弹窗  page 表单查询
    //   this.$utils.validataMoth(this, "validpage");
    //   if (this.valid) {
    //     this.$refs.multipleTable.queryTable(
    //       page,
    //       dataType,
    //       size,
    //       filterObj,
    //       cb
    //     );
    //   }
    // },
    // 树形结构
    // queryMenue(page) {
    //   const that = this;
    //   const queryObj = {
    //     // api配置
    //     apiConfig: orgApis.sysMenuQueryByPage,
    //     // 需要调用的API服务配置
    //     apiServices: [
    //       {
    //         // 表格中台返回网格的字段
    //         apiQueryRow: [
    //           "menuCode",
    //           "menuId",
    //           "menuName",
    //           "menuOrder",
    //           "parentMenuId"
    //         ]
    //       }
    //     ],
    //     // 条件/实体参数（变量），根据typeParam中的定义配置
    //     variables: {
    //       pageSize: "",
    //       pageIndex: "",
    //       // 当前中台使用的名称有dataInfo、info，具体查看API文档
    //       dataInfo: that.menueParam
    //     }
    //   };
    //   // 转换了中台请求格式数据
    //   var paramD = that.$getParams(queryObj);
    //   // 调用中台API方法（可复用）
    //   that.$requestAPI(paramD).then(response => {
    //     if (
    //       response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
    //       response.data[queryObj.apiConfig.ServiceCode].rows != ""
    //     ) {
    //       var dataList = response.data[queryObj.apiConfig.ServiceCode].rows;
    //       // that.menueList = response.data[queryObj.apiConfig.ServiceCode].rows;
    //       // 数据格式转换
    //       var tree = this.$utils.parseTreeFromList(
    //         dataList,
    //         "parentMenuId",
    //         "menuId"
    //       );
    //       that.menueList = tree;
    //     }
    //   });
    // },
    handleNodeClick(menueList) {
        console.log(menueList)
    //   this.formField.menuId = b.data.menuId;  a  b  c
    //   this.queryTable(1);
      // this.formField.orgName = b.data.orgName;
    }
  }
};
</script>
<style scoped>
.tree-input{
    width: 90%;
    border: 1px solid #999;
    outline: none;
    margin:10px 5%;
}
.hander-bg{
  height: 514px;
  background: white;
}

</style>
