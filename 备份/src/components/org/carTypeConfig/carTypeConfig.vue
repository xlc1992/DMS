 <!--
* description: 城市弹出框（含输入框）
* author: meijq
* createdDate: 2019-08-19
-->
<template>
  <section class="cartypeQuery">
    <el-dialog
      id="cartypeq"
      v-dialogDrag
      title="车型配置"
      :visible.sync="popupsVisible"
      width="1050px"
      center
      :append-to-body="true"
      :lock-scroll="true"
      :before-close="handleClose"
    >
      <dialogHeader
        slot="title"
        :title="'车型配置'"
        :style-type="$store.state.app.dialogType"
      />
      <one-table-template
        ref="multipleTable"
        :dynamic-api-config="dynamicApiConfig"
        :dynamic-buttons="dynamicButtons"
        :dynamic-components="tableComponents"
        :dynamic-table-cols="dynamicTableCols"
        :dynamic-form-fields="formField"
        :dynamicTableDefultHeight="300"
        :dynamic-is-show-more-btn="true"
        :dynamic-is-show-select="true"
        :dynamic-api-style="apiStyle"
        :dynamicPageSize="15"
        :refresh-table-key="refreshTableKey"
        :callback-obj="callbackObj"
        @hiddenColData="hiddenColData"
      />
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          size="mini"
          type="primary"
          icon="iconfont  icon-confirm"
          @click="sendCode"
        >{{ $t('sys.button.confirm') }}
        </el-button>
        <!-- 确认 -->
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins'
import OneTableTemplate from '@/components/templates/oneTable'
import Vue from "vue";
export default {
  name: 'carTypeConfig',
  components: {
    lableName: () => import('@/components/lableName'), // 标题溢出样式组件
    dialogHeader: () => import('@/components/dialogHeader'), // 弹窗标题,
    OneTableTemplate
  },
  mixins: [oneTableWithViewTemplateMixins],
  props: {
    popupsVisible: { type: Boolean, default: false },
    code: { type: String, default: '' },
    comType: { type: String, default: '' },
    codeField: { type: String, default: '' },
    popupsKey: { type: String, default: '' },
    isMul: { type: Boolean, default: true },
    validrule: {
      type: Object,
      default: () => {}
    }
  },
  beforeRouteEnter(to, from, next) {
    Vue.prototype.$ConfigCache.CacheConfig.initData(
      // 同时加载当前页面和编辑框页面的配置
      [to.path, ''],
      function() {
        next()
      })
  },
  data() {

    const viewPageCode = this.$route.path
    // 绑定事件配置化事件
    this.$ConfigCache.CacheConfig.bindEvent(this, [viewPageCode])
    return {
      table:null,
      curSelected:null,
      selectData:{},
      clickRowsData:{},
      dynamicApiConfig:{
        APIUrl:'ve/config/cartype',
      },
      apiStyle: 'restful',
      dynamicButtons: this.$ConfigCache.CacheConfig.cacheData[viewPageCode] &&
      this.$ConfigCache.CacheConfig.cacheData[viewPageCode].tableButtons &&
      this.$ConfigCache.CacheConfig.cacheData[viewPageCode].tableButtons.length > 0
        ? this.$ConfigCache.CacheConfig.cacheData[viewPageCode].tableButtons :
        [
          {
            compKey: 'btnKey1',
            type: 'primary',
            size: 'small',
            name: 'search',
            clickEvent: () => this.queryTable(1),
            position:'component',
            text: '查询'
          },
          {
            compKey: 'btnKey2',
            type: '',
            size: 'small',
            name: 'reset',
            clickEvent: this.reset,
            position:'component',
            text: '重置'
          },

        ],

      tableComponents:
        this.$ConfigCache.CacheConfig.cacheData[viewPageCode] &&
        this.$ConfigCache.CacheConfig.cacheData[viewPageCode].tableComponents.length > 0
          ? this.$ConfigCache.CacheConfig.cacheData[viewPageCode].tableComponents :
          [
            {
              compKey: 'compKey1',
              labelName: '车型配置编码',
              codeField: 'carConfigCode',
              component: () => import('@/components/org/commonInput'),
              type: 'inputText',
              isMust: true,
              span: 8
            },
            {
              compKey: 'compKey2',
              labelName: '车型配置名称',
              codeField: 'carConfigName',
              component: () => import('@/components/org/commonInput'),
              type: 'inputText',
              isMust: true,
              span: 8
            },
          ],
      dynamicTableCols: this.$ConfigCache.CacheConfig.cacheData[viewPageCode] &&
      this.$ConfigCache.CacheConfig.cacheData[viewPageCode].tableCols.length > 0
        ? this.$ConfigCache.CacheConfig.cacheData[viewPageCode].tableCols :
        [
          {
            prop: 'releaseId',
            label: '主键ID',
            hidden: true,
            alwaysHidden: true
          },
          {
            prop: 'updateControlId',
            label: '并发控制ID',
            hidden: true,
            alwaysHidden: true
          },
          {
            prop: 'carSeriesCode',
            label: '车系编码'
          },
          {
            prop: 'carSeriesName',
            label: '车系名称'
          },
          {
            prop: 'vehicleCode',
            label: '车型编码',
            isFlag:true
          },
          {
            prop: 'vehicleName',
            label: '车型名称'
          },
          {
            prop: 'vehicleConfigCode',
            label: '车型配置编码',
          },
          {
            prop: 'vehicleConfigName',
            label: '车型配置名称'
          },
        ],
      refreshTableKey: '0',
      ruleSettingShow: false,

      curPopupsVisible: this.popupsVisible,
      // 单表格模版页面组件回调事件
      callbackObj: {
        // 当选择项发生变化时会触发该事件（多选时）
        onCheckSelectChange: (selection) => {
          // console.log(this.$refs.multipleTable.$parent.$parent)
          this.handleOneSelect(selection)
          this.handleSelectionChange(selection)
        },
        // onCheckSelectAll(selection){
        //   console.log(selection)
        // },
        // onCheckSelect(selection, row){
        //
        // }
      },

      formField: this.$utils.getFormField(this, {
        carConfigCode:'',
        carConfigName:''
      }, this.$ConfigCache.CacheConfig.cacheData[viewPageCode]),

    }
  },


  methods: {
    // 获取数据
    sendCode() {
      if(this.selectData.hasOwnProperty('index')){
        this.$parent.modelText = this.selectData.vehicleConfigName
        this.$parent.modelCode = this.selectData.vehicleConfigCode
        this.$emit('update:popupsVisible', false)
        this.table.toggleRowSelection(this.curSelected,false)
      }else {
        this.$message('还没有选择车型配置！')
      }

    },

    // 设置表格选择框 是否禁用
    // getSelectable(row, index) {
    // },

    // 设置表格单选
    handleOneSelect(selection){
      if(selection.length === 0) { this.selectData = {}; return }
      let lastIndex = selection.length - 1
      this.table = this.$refs.multipleTable.$children[2]
      this.selectData = selection[lastIndex]
      selection.forEach((sel,idx) => {
        lastIndex !== idx? this.table.toggleRowSelection(sel,false) : this.curSelected = sel
      })
    },
    handleSelectionChange(selection) {
      const btns = this.dynamicButtons.filter(o => o.disabled !== undefined)
      if (btns.length > 0) {
        const isCheck = selection && selection.length > 0
        btns.forEach((item) => {
          item.disabled = !isCheck
        })
      }
    },
    handleClose(){
      let message ;
      this.selectData.hasOwnProperty('index') ? message = '确认关闭？' : message = '还未选择车型配置，确认关闭？'
      this.$confirm(`${message}`)
        .then(_ => {
          this.$emit('update:popupsVisible',false)
          this.table.toggleRowSelection(this.curSelected,false)
          done();
        })
        .catch(_ => {});
    },
    hiddenColData(data) {
      if (data && data.length > 0) {
        this.refreshTableKey += 1
        this.dynamicTableCols = data
      }
    },
  }
}
</script>

<style lang="css" scoped>
  >>>div.el-table__empty-block{
    height: 200px;
  }
  div.el-table__body-wrapper.is-scrolling-none{
    height: 200px;
  }
  >>>.el-table__header .el-checkbox{
    display:none
  }
</style>
