/**
 * description: 大区、小区、省份、经销商、城市、值列表、资金类型、大客户、内饰组件模拟数据
 * author: liyanm
 * createdDate: 2019-07-24
 */
import Mock from 'mockjs'
import { orgApis } from '../../src/api/apiList/org'

const cH = '/'

// 值列表查询
const mdsLookupValueQueryByPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdsLookupValueQueryByPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [

        // 产品层次类型
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0633',
          lookupValueCode: '0',
          lookupValueName: '全局',
          carBrandName: '东风日产',
          carBrandCode: '1',
          isEnable: '1'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0633',
          lookupValueCode: '1',
          lookupValueName: '品牌',
          carBrandName: '东风日产',
          carBrandCode: '1',
          isEnable: '1'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0633',
          lookupValueCode: '2',
          lookupValueName: '车系',
          carBrandName: '东风日产',
          carBrandCode: '1',
          isEnable: '1'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0633',
          lookupValueCode: '3',
          lookupValueName: '基准车系',
          carBrandName: '东风日产',
          carBrandCode: '1',
          isEnable: '1'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0633',
          lookupValueCode: '4',
          lookupValueName: '车型',
          carBrandName: '东风日产',
          carBrandCode: '1',
          isEnable: '1'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0633',
          lookupValueCode: '5',
          lookupValueName: '车型配置',
          carBrandName: '东风日产',
          carBrandCode: '1',
          isEnable: '1'
        },

        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0188',
          lookupValueCode: '1',
          lookupValueName: '值列表值1',
          carBrandName: '东风日产',
          carBrandCode: '1',
          isEnable: '1'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0188',
          lookupValueCode: '2',
          lookupValueName: '值列表值2',
          carBrandName: '东风日产',
          carBrandCode: '1',
          isEnable: '1'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0188',
          lookupValueCode: '3',
          lookupValueName: '值列表值3',
          carBrandName: '东风日产',
          carBrandCode: '1',
          isEnable: '1'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0188',
          lookupValueCode: '4',
          lookupValueName: '值列表值4',
          carBrandName: '东风日产',
          carBrandCode: '1',
          isEnable: '0'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'BASE0003',
          lookupValueCode: '5',
          lookupValueName: '总店',
          carBrandName: '东风日产',
          carBrandCode: '1',
          isEnable: '0'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'BASE0003',
          lookupValueCode: '6',
          lookupValueName: '专营店',
          carBrandName: '东风日产',
          carBrandCode: '1',
          isEnable: '1'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'BASE0003',
          lookupValueCode: '7',
          lookupValueName: '部门',
          carBrandName: '东风日产',
          carBrandCode: '1',
          isEnable: '1'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'BASE0003',
          lookupValueCode: '8',
          lookupValueName: '科室',
          carBrandName: '东风日产',
          carBrandCode: '1',
          isEnable: '1'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0042',
          lookupValueCode: '9',
          lookupValueName: '待制作',
          carBrandName: '东风日产',
          carBrandCode: '1',
          isEnable: '0'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0042',
          lookupValueCode: '10',
          lookupValueName: '待DLR审核',
          carBrandCode: '东风日产',
          isEnable: '0'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0042',
          lookupValueCode: '11',
          lookupValueName: '待主机厂审核',
          carBrandCode: '东风日产',
          isEnable: '1'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0042',
          lookupValueCode: '12',
          lookupValueName: '主机厂已审核',
          carBrandCode: '东风日产',
          isEnable: '1'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0042',
          lookupValueCode: '13',
          lookupValueName: '主机厂驳回',
          carBrandCode: '东风日产',
          isEnable: '1'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'BASE0003',
          lookupValueCode: '14',
          lookupValueName: '总部',
          carBrandCode: '东风日产',
          isEnable: '0'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'BASE0003',
          lookupValueCode: '15',
          lookupValueName: '专营店',
          carBrandCode: '东风日产',
          isEnable: '0'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'BASE0003',
          lookupValueCode: '16',
          lookupValueName: '部门',
          carBrandCode: '东风日产',
          isEnable: '1'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'BASE0003',
          lookupValueCode: '17',
          lookupValueName: '科室',
          carBrandCode: '东风日产',
          isEnable: '1'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'LX063',
          lookupValueCode: '18',
          lookupValueName: '短信',
          carBrandCode: '东风日产',
          isEnable: '1'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'LX063',
          lookupValueCode: '19',
          lookupValueName: '电话',
          carBrandCode: '东风日产',
          isEnable: '0'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'LX063',
          lookupValueCode: '20',
          lookupValueName: '电子邮件',
          carBrandCode: '东风日产',
          isEnable: '1'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'LX063',
          lookupValueCode: '21',
          lookupValueName: '其他',
          carBrandCode: '东风日产',
          isEnable: '1'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'DXLX',
          lookupValueCode: '22',
          lookupValueName: '人员',
          carBrandCode: '东风日产',
          isEnable: '1'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'DXLX',
          lookupValueCode: '23',
          lookupValueName: '岗位',
          carBrandCode: '东风日产',
          isEnable: '0'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0014',
          lookupValueCode: 'TR',
          lookupValueName: '不生产不供应',
          carBrandCode: '东风日产',
          isEnable: '0'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0014',
          lookupValueCode: 'TP',
          lookupValueName: '不生产供应',
          carBrandCode: '东风日产',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0014',
          lookupValueCode: 'PR',
          lookupValueName: '生产不供应',
          carBrandCode: '东风日产',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0014',
          lookupValueCode: 'SP',
          lookupValueName: '生产供应',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'DB0001',
          lookupValueCode: 'DB',
          lookupValueName: '公共',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'DB0001',
          lookupValueCode: 'VE',
          lookupValueName: '整车',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'DB0001',
          lookupValueCode: 'SE',
          lookupValueName: '服务',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'DB0001',
          lookupValueCode: 'PA',
          lookupValueName: '备件',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'DB0001',
          lookupValueCode: 'AI',
          lookupValueName: '保险',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'DB0001',
          lookupValueCode: 'UC',
          lookupValueName: '二手车',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'DB0001',
          lookupValueCode: 'FI',
          lookupValueName: '财务',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'DB0001',
          lookupValueCode: 'CA',
          lookupValueName: '活动',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'DB0001',
          lookupValueCode: 'MDM',
          lookupValueName: '客户',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'DB0001',
          lookupValueCode: 'APP',
          lookupValueName: 'APP',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'DB0052',
          lookupValueCode: '24',
          lookupValueName: '启用',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'DB0052',
          lookupValueCode: '25',
          lookupValueName: '停用',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0185',
          lookupValueCode: '26',
          lookupValueName: '是',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0185',
          lookupValueCode: '27',
          lookupValueName: '否',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0280',
          lookupValueCode: '28',
          lookupValueName: '国IV',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0280',
          lookupValueCode: '29',
          lookupValueName: '国V',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0280',
          lookupValueCode: '30',
          lookupValueName: '欧V',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0280',
          lookupValueCode: '31',
          lookupValueName: '国VI',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0283',
          lookupValueCode: '32',
          lookupValueName: '汽油动力',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0283',
          lookupValueCode: '33',
          lookupValueName: '电动',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0180',
          lookupValueCode: '34',
          lookupValueName: '寒带',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0180',
          lookupValueCode: '35',
          lookupValueName: '温带',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0180',
          lookupValueCode: '36',
          lookupValueName: '极寒',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0625',
          lookupValueCode: '37',
          lookupValueName: '350KM',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0625',
          lookupValueCode: '38',
          lookupValueName: '600KM',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0624',
          lookupValueCode: '39',
          lookupValueName: '电机1',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0624',
          lookupValueCode: '40',
          lookupValueName: '电机2',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0626',
          lookupValueCode: '41',
          lookupValueName: '电控1',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0626',
          lookupValueCode: '42',
          lookupValueName: '电控2',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0015',
          lookupValueCode: '43',
          lookupValueName: '本店仓库',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0015',
          lookupValueCode: '44',
          lookupValueName: '直营二网仓库',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0015',
          lookupValueCode: '45',
          lookupValueName: '非直营二网仓库',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0074',
          lookupValueCode: '46',
          lookupValueName: '等待出货确认指示',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0074',
          lookupValueCode: '47',
          lookupValueName: '自动出货确认中',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0074',
          lookupValueCode: '48',
          lookupValueName: '已做出货确认指示',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0074',
          lookupValueCode: '49',
          lookupValueName: 'DFL已出货',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0074',
          lookupValueCode: '50',
          lookupValueName: '专营店已验收',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0074',
          lookupValueCode: '51',
          lookupValueName: '财务已验收确认',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0074',
          lookupValueCode: '52',
          lookupValueName: '已取消',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0074',
          lookupValueCode: '53',
          lookupValueName: '驳回作废',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0074',
          lookupValueCode: '54',
          lookupValueName: '进口车待汇总',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0074',
          lookupValueCode: '55',
          lookupValueName: 'OCF分配处理中',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0074',
          lookupValueCode: '56',
          lookupValueName: '批次分配处理中',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0074',
          lookupValueCode: '57',
          lookupValueName: '模拟分配处理中',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0079',
          lookupValueCode: '58',
          lookupValueName: '自提',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0627',
          lookupValueCode: '59',
          lookupValueName: '大客户预留',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0627',
          lookupValueCode: '60',
          lookupValueName: '员工购车',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0627',
          lookupValueCode: '61',
          lookupValueName: '捐赠用车',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'AI0021',
          lookupValueCode: '62',
          lookupValueName: '未审核',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'AI0021',
          lookupValueCode: '63',
          lookupValueName: '已审核',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0284',
          lookupValueCode: '64',
          lookupValueName: '扣车款',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0284',
          lookupValueCode: '65',
          lookupValueName: '罚款',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0284',
          lookupValueCode: '66',
          lookupValueName: '折扣',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0284',
          lookupValueCode: '67',
          lookupValueName: '保证金',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0284',
          lookupValueCode: '68',
          lookupValueName: '调整上月底余额',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0284',
          lookupValueCode: '69',
          lookupValueName: '手工转款-其它',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0284',
          lookupValueCode: '70',
          lookupValueName: '到款',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0284',
          lookupValueCode: '71',
          lookupValueName: '自动汇款',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0284',
          lookupValueCode: '72',
          lookupValueName: '销货退回还款',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0284',
          lookupValueCode: '73',
          lookupValueName: '自动汇款',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0284',
          lookupValueCode: '74',
          lookupValueName: '手工对帐',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0284',
          lookupValueCode: '75',
          lookupValueName: '售后结算',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0284',
          lookupValueCode: '76',
          lookupValueName: '其它销售扣款',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0284',
          lookupValueCode: '77',
          lookupValueName: '免息还款',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0284',
          lookupValueCode: '78',
          lookupValueName: '自筹转融资银行',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0284',
          lookupValueCode: '79',
          lookupValueName: '同店同资金类型转款',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0284',
          lookupValueCode: '80',
          lookupValueName: '垫付扣款（备注中注明替何单位垫付车款）',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0284',
          lookupValueCode: '81',
          lookupValueName: '手工扣款-其它',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0284',
          lookupValueCode: '82',
          lookupValueName: '垫付到款（备注中注明何单位替该单位垫付车款)',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '83',
          lookupValueName: '售后结算',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '84',
          lookupValueName: '银行电汇',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '85',
          lookupValueName: '银行承兑汇票',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '86',
          lookupValueName: '调账',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '87',
          lookupValueName: '保证金转车款',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '88',
          lookupValueName: '备件款转整车款',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '89',
          lookupValueName: '垫付到款（备注中注明何单位替该单位垫付车款）',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '90',
          lookupValueName: '手工转款-其它',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '91',
          lookupValueName: '自筹转融资银行',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '92',
          lookupValueName: '同店同资金类型转款',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '93',
          lookupValueName: '专营店培训费',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '94',
          lookupValueName: '补办合格证',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '95',
          lookupValueName: '商务罚款',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '96',
          lookupValueName: '垫付扣款（备注中注明替何单位垫付车款）',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '97',
          lookupValueName: '整车款转备件款',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '98',
          lookupValueName: '手工扣款-其它',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '99',
          lookupValueName: '现金信用额度累加',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '100',
          lookupValueName: '东风信用证累加',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '101',
          lookupValueName: '免息信用额度累加',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '102',
          lookupValueName: '车款退回',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '103',
          lookupValueName: '车款转保证金',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '104',
          lookupValueName: '保证金转车款',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '105',
          lookupValueName: '退保证金',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '106',
          lookupValueName: '车款转业绩保证金',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '107',
          lookupValueName: '车款转东风信用证保证金',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '108',
          lookupValueName: '车款转赊销保证金',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '109',
          lookupValueName: '车款转营业保证金',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '110',
          lookupValueName: '保证金退回',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0138',
          lookupValueCode: '111',
          lookupValueName: '收益公积金扣款',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0139',
          lookupValueCode: '112',
          lookupValueName: '工商银行',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0139',
          lookupValueCode: '113',
          lookupValueName: '招商银行',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0007',
          lookupValueCode: 'A',
          lookupValueName: '正常',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0007',
          lookupValueCode: 'B',
          lookupValueName: 'NG/待修',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0007',
          lookupValueCode: 'C',
          lookupValueName: '车损报废',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0207',
          lookupValueCode: '114',
          lookupValueName: '在库车',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0207',
          lookupValueCode: '115',
          lookupValueName: '在途车',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0041',
          lookupValueCode: '116',
          lookupValueName: '需求单据已制订',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0041',
          lookupValueCode: '117',
          lookupValueName: '已经转采购单',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0041',
          lookupValueCode: '118',
          lookupValueName: '采购单已经确认',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0041',
          lookupValueCode: '119',
          lookupValueName: '需求单已经作废',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0079',
          lookupValueCode: '120',
          lookupValueName: '送货',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0079',
          lookupValueCode: '121',
          lookupValueName: '自提',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0016',
          lookupValueCode: '122',
          lookupValueName: '系统分配',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0016',
          lookupValueCode: '123',
          lookupValueName: '实时分配',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0016',
          lookupValueCode: '124',
          lookupValueName: '批次分配',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0047',
          lookupValueCode: '125',
          lookupValueName: '已分配或在库',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0047',
          lookupValueCode: '126',
          lookupValueName: '物流执行计划',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0047',
          lookupValueCode: '127',
          lookupValueName: '送车通知',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0047',
          lookupValueCode: '128',
          lookupValueName: 'DFL出库',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0047',
          lookupValueCode: '129',
          lookupValueName: '出门实绩',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0047',
          lookupValueCode: '130',
          lookupValueName: '物流执行计划取消',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0074',
          lookupValueCode: '131',
          lookupValueName: '采购单待确认',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0074',
          lookupValueCode: '132',
          lookupValueName: '采购单已确认',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0074',
          lookupValueCode: '133',
          lookupValueName: '采购单已审核',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0074',
          lookupValueCode: '134',
          lookupValueName: '大宗采购单待审核',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0074',
          lookupValueCode: '135',
          lookupValueName: '进口车待审核',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0074',
          lookupValueCode: '136',
          lookupValueName: '等待分配',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0074',
          lookupValueCode: '137',
          lookupValueName: '分配模式切换中',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0074',
          lookupValueCode: '138',
          lookupValueName: '分配处理中',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0005',
          lookupValueCode: '139',
          lookupValueName: '在线库存',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0005',
          lookupValueCode: '140',
          lookupValueName: '在库库存',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0005',
          lookupValueCode: '141',
          lookupValueName: 'OCF库存',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0238',
          lookupValueCode: '142',
          lookupValueName: '非ETPT',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0238',
          lookupValueCode: '143',
          lookupValueName: 'ETPT',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0213',
          lookupValueCode: '144',
          lookupValueName: '正常',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0213',
          lookupValueCode: '145',
          lookupValueName: '限制车辆',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0213',
          lookupValueCode: '146',
          lookupValueName: '分配取消限制',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0213',
          lookupValueCode: '147',
          lookupValueName: '车辆退回限制车辆',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0213',
          lookupValueCode: '148',
          lookupValueName: '销货退货限制车辆',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0213',
          lookupValueCode: '149',
          lookupValueName: '物流限制车辆',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0079',
          lookupValueCode: '150',
          lookupValueName: '送货',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0621',
          lookupValueCode: '151',
          lookupValueName: '已设置优先车型',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0621',
          lookupValueCode: '152',
          lookupValueName: '未设置优先车型',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0204',
          lookupValueCode: '153',
          lookupValueName: '内部报废',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0205',
          lookupValueCode: '154',
          lookupValueName: '广告解剖',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0050',
          lookupValueCode: '155',
          lookupValueName: '销售出库',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0050',
          lookupValueCode: '156',
          lookupValueName: '代交车出库',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0050',
          lookupValueCode: '157',
          lookupValueName: '调拨出库',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0050',
          lookupValueCode: '158',
          lookupValueName: '虚拟出库',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0050',
          lookupValueCode: '159',
          lookupValueName: '车损退回出库',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0050',
          lookupValueCode: '160',
          lookupValueName: '专营店销退出库',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0050',
          lookupValueCode: '161',
          lookupValueName: '临时出库',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0050',
          lookupValueCode: '162',
          lookupValueName: '代交车销退退回',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0050',
          lookupValueCode: 'H9',
          lookupValueName: '订单出库',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0050',
          lookupValueCode: 'H10',
          lookupValueName: '大客户订单出库',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0050',
          lookupValueCode: 'H11',
          lookupValueName: '转出出库',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0050',
          lookupValueCode: 'H12',
          lookupValueName: '借出出库',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0050',
          lookupValueCode: 'H13',
          lookupValueName: '报销冲销',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0622',
          lookupValueCode: '163',
          lookupValueName: '已设置优先车型',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0622',
          lookupValueCode: '164',
          lookupValueName: '未设置优先车型',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0622',
          lookupValueCode: '165',
          lookupValueName: '下线入库',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0622',
          lookupValueCode: '166',
          lookupValueName: '转入入库',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0622',
          lookupValueCode: '167',
          lookupValueName: '借出入库',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0622',
          lookupValueCode: '168',
          lookupValueName: '转入入库',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0622',
          lookupValueCode: '169',
          lookupValueName: '借出入库',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0622',
          lookupValueCode: '170',
          lookupValueName: '销退入库',
          isEnable: '是'
        },
        {
          oemCode: '1',
          groupCode: '1',
          lookupTypeCode: 'VE0622',
          lookupValueCode: '171',
          lookupValueName: '报废冲销入库',
          isEnable: '是'
        }
      ]
    }
  }

})
// 具体值列表数据
// 值列表查询
const mdsLookupValueQueryByPage_SE0026 = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdsLookupValueQueryByPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 18,
      'rows|18': [{
        oemCode: '1',
        groupCode: '1',
        lookupTypeCode: 'SE0026',
        'lookupValueCode|+1': ['31001', '31002', '31003', '31004', '31005', '31006', '31007', '31008', '31009', '31010', '31011', '31012', '31014', '31015', '31016', '31017', '31018', '31019'],
        'lookupValueName|+1': ['接待完毕', '维修进行中', '维修待料', '追加', '维修待复', '维修暂停', '洗车完毕', '质检', '维修完毕', '结算进行中', '已交车', '报价', '作废', '已转估价', '质检完毕', '质检不通过', '等待维修', '已派工'],
        isEnable: '是'
      }]
    }
  }
})
const mdsLookupValueQueryByPage_SE0038 = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdsLookupValueQueryByPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 11,
      'rows|11': [{
        oemCode: '1',
        groupCode: '1',
        lookupTypeCode: 'SE0038',
        'lookupValueCode|+1': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
        'lookupValueName|+1': ['0', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
        isEnable: '是'
      }]
    }
  }
})
const mdsLookupValueQueryByPage_SE0010 = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdsLookupValueQueryByPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 11,
      'rows|6': [{
        oemCode: '1',
        groupCode: '1',
        lookupTypeCode: 'SE0010',
        'lookupValueCode|+1': ['30801', '30802', '30803', '30804', '30805', '30806'],
        'lookupValueName|+1': ['钣金', '机电', '喷漆', '选装', '外包', '其他'],
        isEnable: '是'
      }]
    }
  }
})
const mdsLookupValueQueryByPage_VE0055 = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdsLookupValueQueryByPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 11,
      'rows|6': [{
        oemCode: '1',
        groupCode: '1',
        lookupTypeCode: 'SE0010',
        'lookupValueCode|+1': ['30801', '30802', '30803', '30804', '30805', '30806'],
        'lookupValueName|+1': ['钣金', '机电', '喷漆', '选装', '外包', '其他'],
        'remark|+1': ['备注', '备注', '备注', '备注', '备注', '备注'],
        isEnable: '是'
      }]
    }
  }
})
const mdsLookupValueQueryByPage_VE0203 = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdsLookupValueQueryByPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 11,
      'rows|5': [{
        oemCode: '1',
        groupCode: '1',
        lookupTypeCode: 'VE0203',
        'lookupValueCode|+1': ['1', '2', '3', '4', '5'],
        'lookupValueName|+1': ['采购单1', '采购单2', '采购单3', '采购单4', '采购单5'],
        isEnable: '是'
      }]
    }
  }
})
// 值列表类型查询
const mdsLookupTypeQueryByPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdsLookupTypeQueryByPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        lookupTypeCode: 'VE0188',
        lookupValueCode: '1',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '冻结方式'
      },
      {
        lookupTypeCode: 'VE0189',
        lookupValueCode: '2',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '冻结节点'
      },
      {
        lookupTypeCode: 'BASE0003',
        lookupValueCode: '3',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '组织类型'
      },
      {
        lookupTypeCode: 'BASE0003',
        lookupValueCode: '4',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '科室'
      },
      {
        lookupTypeCode: 'VE0479',
        lookupValueCode: '5',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '融资'
      },
      {
        lookupTypeCode: 'VE0479',
        lookupValueCode: '6',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '冻结比例'
      },
      {
        lookupTypeCode: 'VE0479',
        lookupValueCode: '7',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '融资'
      },
      {
        lookupTypeCode: 'VE0479',
        lookupValueCode: '8',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '信用额度'
      },
      {
        lookupTypeCode: 'DXLX',
        lookupValueCode: '9',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '对象类型'
      },
      {
        lookupTypeCode: 'DB0001',
        lookupValueCode: '10',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '模块编码'
      },
      {
        lookupTypeCode: 'VE0014',
        lookupValueCode: '11',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '供应状态'
      },
      {
        lookupTypeCode: 'DB0052',
        lookupValueCode: '12',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '通用状态'
      },
      {
        lookupTypeCode: 'VE0185',
        lookupValueCode: '13',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '是否新车型'
      },
      {
        lookupTypeCode: 'VE0280',
        lookupValueCode: '14',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '排放标准-V'
      },
      {
        lookupTypeCode: 'VE0283',
        lookupValueCode: '15',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '动力类型-V'
      },
      {
        lookupTypeCode: 'VE0180',
        lookupValueCode: '16',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '适应气候'
      },
      {
        lookupTypeCode: 'VE0625',
        lookupValueCode: '17',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '电池类型'
      },
      {
        lookupTypeCode: 'VE0624',
        lookupValueCode: '18',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '电机类型'
      },
      {
        lookupTypeCode: 'VE0626',
        lookupValueCode: '19',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '电控类型'
      },
      {
        lookupTypeCode: 'VE0015',
        lookupValueCode: '20',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '仓库类型'
      },
      {
        lookupTypeCode: 'VE0079',
        lookupValueCode: '21',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '整车运送方式'
      },
      {
        lookupTypeCode: 'VE0074',
        lookupValueCode: '22',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '采购单状态'
      },
      {
        lookupTypeCode: 'VE0016',
        lookupValueCode: '23',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '分配方式'
      },
      {
        lookupTypeCode: 'VE0047',
        lookupValueCode: '24',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '物流状态'
      },
      {
        lookupTypeCode: 'VE0005',
        lookupValueCode: '25',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '库存类型'
      },
      {
        lookupTypeCode: 'VE0238',
        lookupValueCode: '26',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '查询车辆'
      },
      {
        lookupTypeCode: 'VE0213',
        lookupValueCode: '27',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '主机厂限制状态'
      },
      {
        lookupTypeCode: 'VE0627',
        lookupValueCode: '28',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '限制原因'
      },
      {
        lookupTypeCode: 'VE0041',
        lookupValueCode: '29',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '需求单状态'
      },
      {
        lookupTypeCode: 'AI0021',
        lookupValueCode: '30',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '审核状态'
      },
      {
        lookupTypeCode: 'VE0284',
        lookupValueCode: '31',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '整车到款类型(新)'
      },
      {
        lookupTypeCode: 'VE0138',
        lookupValueCode: '32',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '资金操作明细类别'
      },
      {
        lookupTypeCode: 'VE0139',
        lookupValueCode: '33',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '专营店到款银行'
      },
      {
        lookupTypeCode: 'VE0007',
        lookupValueCode: '34',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '车辆质量状态'
      },
      {
        lookupTypeCode: 'VE0207',
        lookupValueCode: '35',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '流转状态'
      },
      {
        lookupTypeCode: 'VE0042',
        lookupValueCode: '36',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '月需求计划状态'
      },
      {
        lookupTypeCode: 'LX063',
        lookupValueCode: '37',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '发送类型'
      },
      {
        lookupTypeCode: 'VE0621',
        lookupValueCode: '38',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '车型分类'
      },
      {
        lookupTypeCode: 'VE0204',
        lookupValueCode: '39',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '报废类型'
      },
      {
        lookupTypeCode: 'VE0205',
        lookupValueCode: '40',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '报废原因'
      },
      {
        lookupTypeCode: 'VE0050',
        lookupValueCode: '41',
        isSystem: '是',
        isEnable: '1',
        lookupTypeName: '出库类型'
      },
      {
        lookupTypeCode: 'VE0622',
        lookupValueCode: '42',
        lookupValueName: '入库类型'
      }
      ]
    }

  }

})
// 厂家小区查询
const mdmOrgSmallAreaQueryByPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmOrgSmallAreaQueryByPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        smallAreaName: '东北区',
        smallAreaId: '1',
        bigAreaName: '大区1',
        bigAreaId: '1'
      },
      {
        smallAreaName: '粤东区',
        smallAreaId: '2',
        bigAreaName: '大区2',
        bigAreaId: '2'
      },
      {
        smallAreaName: '西北区',
        smallAreaId: '3',
        bigAreaName: '大区1',
        bigAreaId: '3'
      },
      {
        smallAreaName: '西南',
        smallAreaId: '4',
        bigAreaName: '大区1',
        bigAreaId: '4'
      }
      ]
    }
  }
})
// 区县查询查询
const mdmOrgZoneQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmOrgZoneQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        provinceName: '上海市',
        cityId: '1',
        provinceId: '1',
        cityName: '上海',
        orderNo: '1',
        communityId: '1',
        communityName: '东北区'
      },
      {
        provinceName: '广东省',
        cityId: '1',
        provinceId: '2',
        cityName: '广州市',
        orderNo: '1',
        communityId: '2',
        communityName: '粤东'
      },
      {
        provinceName: '广东省',
        cityId: '1',
        provinceId: '2',
        cityName: '广州市',
        orderNo: '1',
        communityId: '3',
        communityName: '东北'
      },
      {
        provinceName: '广东省',
        cityId: '1',
        provinceId: '2',
        cityName: '广州市',
        orderNo: '1',
        communityId: '4',
        communityName: '粤北'
      },
      {
        provinceName: '广东省',
        cityId: '1',
        provinceId: '2',
        cityName: '广州市',
        orderNo: '1',
        communityId: '5',
        communityName: '粤南'
      }
      ]
    }

  }
})
// 厂家大区查询
const mdmOrgBigAreaQueryByPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmOrgBigAreaQueryByPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        bigAreaName: '华东',
        bigAreaId: '1'
      },
      {
        bigAreaName: '华南',
        bigAreaId: '2'
      },
      {
        bigAreaName: '西北',
        bigAreaId: '3'
      },
      {
        bigAreaName: '西南',
        bigAreaId: '4'
      }
      ]
    }
  }
})
// 城市查询
const mdmOrgCityQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmOrgCityQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        provinceName: '广东',
        provinceId: '1',
        cityName: '花都',
        cityId: '1',
        cityCode: '1',
        status: '1',
        statusName: '是',
        orderNo: '1',
        isEnable: '1'
      },
      {
        provinceName: '华南',
        provinceId: '2',
        cityName: '粤东',
        cityId: '2',
        cityCode: '1',
        status: '0',
        statusName: '否',
        orderNo: '1',
        isEnable: '1'
      },
      {
        provinceName: '华南',
        provinceId: '2',
        cityName: '琼粤',
        cityId: '3',
        cityCode: '1',
        status: '1',
        statusName: '是',
        orderNo: '1',
        isEnable: '1'
      },
      {
        provinceName: '华东',
        provinceId: '1',
        cityName: '浙北',
        cityId: '4',
        cityCode: '1',
        status: '1',
        statusName: '是',
        orderNo: '1',
        isEnable: '1'
      },
      {
        provinceName: '西北',
        provinceId: '3',
        cityName: '新疆',
        cityId: '5',
        cityCode: '1',
        status: '1',
        statusName: '是',
        orderNo: '1',
        isEnable: '1'
      },
      {
        provinceName: '华南',
        provinceId: '2',
        cityName: '广州',
        cityId: '6',
        cityCode: '1',
        status: '1',
        statusName: '是',
        orderNo: '1',
        isEnable: '1'
      },
      {
        provinceName: '西北',
        provinceId: '3',
        cityName: '甘肃',
        cityId: '7',
        cityCode: '1',
        status: '1',
        statusName: '是',
        orderNo: '1',
        isEnable: '1'
      },
      {
        provinceName: '西南',
        provinceId: '4',
        cityName: '云南',
        cityId: '8',
        cityCode: '1',
        status: '1',
        statusName: '是',
        orderNo: '1',
        isEnable: '1'
      }
      ]
    }
  }
})

// 经销商查询
const mdmOrgdlrQueryByPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmOrgdlrQueryByPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        dlrId: '1',
        dlrShortName: '上海松江',
        dlrCode: 'C944AOW01',
        dlrFullName: '文山重心服务中心',
        orgTypeName: '城市服务中心',
        onlineTime: '2017-08-26',
        isEnable: '启用',
        cityName: '广州',
        bigAreaName: '华东一区',
        bigAreaId: '1',
        smallAreaName: '东区',
        smallAreaId: '1',
        carBrandCode: '1',
        dlrStatus: '已上线',
        orgType: '直营店',
        provinceId: '232323',
        cityId: '1',
        linkAddr: '1',
        oemCode: '1',
        groupCode: '华东',
        oemId: '上海',
        groupId: '1'
      },
      {
        dlrId: '2',
        dlrShortName: '上海诚隆',
        dlrCode: 'C944AOW01',
        dlrFullName: '文山重心服务中心',
        orgTypeName: '城市服务中心',
        onlineTime: '2017-08-26',
        isEnable: '启用',
        cityName: '广州',
        bigAreaName: '华东一区',
        bigAreaId: '1',
        smallAreaName: '东区',
        smallAreaId: '1',
        carBrandCode: '2',
        dlrStatus: '已上线',
        orgType: '直营店',
        provinceId: '2',
        cityId: '1',
        linkAddr: '1',
        oemCode: '1',
        groupCode: '华东',
        oemId: '上海',
        groupId: '1'
      },
      {
        dlrId: '3',
        dlrShortName: '兰州良智',
        dlrCode: 'C944AOW01',
        dlrFullName: '文山重心服务中心',
        orgTypeName: '城市服务中心',
        onlineTime: '2017-08-26',
        isEnable: '启用',
        cityName: '广州',
        bigAreaName: '华东一区',
        bigAreaId: '1',
        smallAreaName: '西区',
        smallAreaId: '2',
        carBrandCode: '3',
        dlrStatus: '已上线',
        orgType: '直营店',
        provinceId: '3',
        cityId: '2',
        linkAddr: '1',
        oemCode: '1',
        groupCode: '华东',
        oemId: '上海',
        groupId: '1'
      },
      {
        dlrId: '4',
        dlrShortName: '西安佳益',
        dlrCode: 'C944AOW01',
        dlrFullName: '文山重心服务中心',
        orgTypeName: '城市服务中心',
        onlineTime: '2017-08-26',
        isEnable: '启用',
        cityName: '广州',
        bigAreaName: '华东一区',
        bigAreaId: '1',
        smallAreaName: '西区',
        smallAreaId: '2',
        carBrandCode: '4',
        dlrStatus: '已上线',
        orgType: '直营店',
        provinceId: '3',
        cityId: '1',
        linkAddr: '1',
        oemCode: '1',
        groupCode: '华东',
        oemId: '上海',
        groupId: '1'
      },
      {
        dlrId: '5',
        dlrShortName: '日产黄埔',
        dlrCode: 'C944AOW01',
        dlrFullName: '文山重心服务中心',
        orgTypeName: '城市服务中心',
        onlineTime: '2017-08-26',
        isEnable: '启用',
        cityName: '广州',
        bigAreaName: '华东二区',
        bigAreaId: '2',
        smallAreaName: '南区',
        smallAreaId: '3',
        carBrandCode: '5',
        dlrStatus: '已上线',
        orgType: '直营店',
        provinceId: '2',
        cityId: '1',
        linkAddr: '1',
        oemCode: '1',
        groupCode: '华东',
        oemId: '上海',
        groupId: '1'
      },
      {
        dlrId: '6',
        dlrShortName: '风日',
        dlrCode: 'C944AOW01',
        dlrFullName: '文山重心服务中心',
        orgTypeName: '城市服务中心',
        onlineTime: '2017-08-26',
        isEnable: '启用',
        cityName: '广州',
        bigAreaName: '华东二区',
        bigAreaId: '2',
        smallAreaName: '南区',
        smallAreaId: '3',
        carBrandCode: '6',
        dlrStatus: '已上线',
        orgType: '直营店',
        provinceId: '2',
        cityId: '1',
        linkAddr: '1',
        oemCode: '1',
        groupCode: '华东',
        oemId: '上海',
        groupId: '1'
      },
      {
        dlrId: '7',
        dlrShortName: '启辰阳谷迪',
        dlrCode: 'C944AOW01',
        dlrFullName: '文山重心服务中心',
        orgTypeName: '城市服务中心',
        onlineTime: '2017-08-26',
        isEnable: '启用',
        cityName: '广州',
        carBrandCode: '7',
        bigAreaName: '华东二区',
        bigAreaId: '2',
        smallAreaName: '北区',
        smallAreaId: '4',
        dlrStatus: '未上线',
        orgType: '直营店',
        provinceId: '2',
        cityId: '1',
        linkAddr: '1',
        oemCode: '1',
        groupCode: '华东',
        oemId: '上海',
        groupId: '1'
      },
      {
        dlrId: '8',
        dlrShortName: '泰林棣棣',
        dlrCode: 'C944AOW01',
        dlrFullName: '文山重心服务中心',
        orgTypeName: '城市服务中心',
        onlineTime: '2017-08-26',
        isEnable: '启用',
        cityName: '广州',
        bigAreaName: '华东二区',
        bigAreaId: '2',
        smallAreaName: '北区',
        smallAreaId: '4',
        carBrandCode: '8',
        dlrStatus: '未上线',
        orgType: '直营店',
        provinceId: '2',
        cityId: '1',
        linkAddr: '1',
        oemCode: '1',
        groupCode: '华东',
        oemId: '上海',
        groupId: '1'
      },
      {
        dlrId: '9',
        dlrShortName: '文山重心',
        dlrCode: 'C944AOW01',
        dlrFullName: '文山重心服务中心',
        orgTypeName: '城市服务中心',
        onlineTime: '2017-08-26',
        isEnable: '启用',
        cityName: '广州',
        bigAreaName: '华东二区',
        bigAreaId: '2',
        smallAreaName: '东区',
        smallAreaId: '5',
        carBrandCode: '9',
        dlrStatus: '已上线',
        orgType: '直营店',
        provinceId: '4',
        cityId: '1',
        linkAddr: '1',
        oemCode: '1',
        groupCode: '华东',
        oemId: '上海',
        groupId: '1'
      },
      {
        dlrId: '10',
        dlrShortName: '毕节润迪都',
        bigAreaName: '华东二区',
        bigAreaId: '2',
        smallAreaName: '东区',
        smallAreaId: '5',
        carBrandCode: '10',
        dlrStatus: '已上线',
        orgType: '直营店',
        provinceId: '4',
        cityId: '1',
        linkAddr: '1',
        oemCode: '1',
        groupCode: '华东',
        oemId: '上海',
        groupId: '1'
      },
      {
        dlrId: '11',
        dlrShortName: '惠州龙生都',
        bigAreaName: '华东二区',
        bigAreaId: '2',
        smallAreaName: '东区',
        smallAreaId: '5',
        carBrandCode: '11',
        dlrStatus: '已上线',
        orgType: '直营店',
        provinceId: '2',
        cityId: '1',
        linkAddr: '1',
        oemCode: '1',
        groupCode: '12',
        oemId: '上海',
        groupId: '1'
      }
      ]
    }
  }
})
// 全局角色查询
const sysRoleQueryGloableByPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    sysRoleQueryGloableByPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        roleName: '销售经理',
        roleCode: '1',
        roleDesc: '管理销售员和销售顾问',
        orgTypeName: '供应商',
        orgName: '服务科科长',
        isEnable: '启用',
        isEnableCode: '1'
      }, {
        roleName: '服务经理',
        roleCode: '2',
        roleDesc: '管理销售员和销售顾问',
        orgName: '销售科科长',
        orgTypeName: '供应商',
        isEnable: '启用',
        isEnableCode: '0'
      }]
    }
  }
})

const menuQueryByPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    menuQueryByPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        label: '一级',
        orgId: '33',
        orgCode: '123',
        orgName: '一级',
        isEnable: 1,
        children: [{
          label: '二级',
          orgId: '33',
          orgCode: '123',
          orgName: '二级',
          isEnable: 1,
          children: [{
            label: '三级',
            orgId: '33',
            orgCode: '123',
            orgName: '三级',
            isEnable: 1
          }]
        }]
      }]
    }
  }
})
// 角色保存
const roleSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    roleSave: {
      result: '1',
      msg: '保存成功'
    }
  }
})
// 角色删除
const sysRoleUserMutationDel = Mock.mock({
  result: '1',
  msg: '删除成功',
  data: {
    sysRoleUserMutationDel: {
      result: '1',
      msg: '删除成功'
    }
  }
})
// 角色成员查询
const sysRoleUserQueryByPage = Mock.mock({
  result: '1',
  msg: '删除成功',
  data: {
    sysRoleUserQueryByPage: {
      result: '1',
      msg: '删除成功',
      rows: [{
        userId: '6345',
        userName: '小王子',
        empName: '小狐狸',
        updateControlId: '56789'
      },
      {
        userId: '6345',
        userName: '小王子',
        empName: '小狐狸',
        updateControlId: '56789'
      }
      ]
    }
  }
})

export default [{
  url: orgApis.mdmOrgBigAreaQueryByPage.APIUrl + cH + 'v=' + orgApis.mdmOrgBigAreaQueryByPage.ServiceCode,
  type: 'post',
  response: config => {
    return mdmOrgBigAreaQueryByPage
  } // 厂家大区查询
},
{
  url: orgApis.mdmOrgZoneQueryFindAll.APIUrl + cH + 'v=' + orgApis.mdmOrgZoneQueryFindAll.ServiceCode,
  type: 'post',
  response: config => {
    return mdmOrgZoneQueryFindAll
  } // 区县查询
},
{
  url: orgApis.mdmOrgCityQueryFindAll.APIUrl + cH + 'v=' + orgApis.mdmOrgCityQueryFindAll.ServiceCode,
  type: 'post',
  response: config => {
    return mdmOrgCityQueryFindAll
  } // 城市查询
},
{
  url: orgApis.mdsLookupValueQueryByPage.APIUrl + cH + 'v=' + orgApis.mdsLookupValueQueryByPage.ServiceCode,
  type: 'post',
  response: config => {
    var params = config.body.variables
    const arrLookupTypeCode = []
    if (params.dataInfo) {
      if (params.dataInfo.lookupTypeCode === 'SE0026') {
        return mdsLookupValueQueryByPage_SE0026
      } else if (params.dataInfo.lookupTypeCode === 'SE0038') {
        return mdsLookupValueQueryByPage_SE0038
      } else if (params.dataInfo.lookupTypeCode === 'SE0010') {
        return mdsLookupValueQueryByPage_SE0010
      } else if (params.dataInfo.lookupTypeCode === 'VE0055' || params.dataInfo.lookupTypeCode === 'VE0053') {
        return mdsLookupValueQueryByPage_VE0055
      } else if (params.dataInfo.lookupTypeCode === 'VE0203') {
        return mdsLookupValueQueryByPage_VE0203
      }
      arrLookupTypeCode.push(params.dataInfo.lookupTypeCode)
    }
    if (arrLookupTypeCode.length === 0 && params.data0) {
      let i = 0
      while (params['data' + i]) {
        if (params['data' + i].lookupTypeCode) {
          arrLookupTypeCode.push(params['data' + i].lookupTypeCode)
        }
        i++
      }
    }
    const result = JSON.parse(JSON.stringify(mdsLookupValueQueryByPage))
    result.data.mdsLookupValueQueryByPage.rows = result.data.mdsLookupValueQueryByPage.rows.filter(o => arrLookupTypeCode.indexOf(o.lookupTypeCode) > -1)
    return result
  } // 值列表查询
},
// 值列表（restful）
{
  url: orgApis.mdsLookupValueQueryByPage.APIUrl,
  type: 'post',
  response: config => {
    var params = config.body
    // var params = config.body.queryCondition
    let rows = []
    if (params && params.lookupTypeCode) {
      switch (params.lookupTypeCode) {
        case 'DB0081':
          rows = [
            { oemCode: '1', groupCode: '1', lookupTypeCode: 'DB0081', lookupValueCode: '1', lookupValueName: '在职', isEnable: '1' },
            { oemCode: '1', groupCode: '1', lookupTypeCode: 'DB0081', lookupValueCode: '2', lookupValueName: '离职', isEnable: '1' }
          ]
          break
        case 'BBBBB1':
          rows = [
            { oemCode: '1', groupCode: '1', lookupTypeCode: 'BBBBB1', lookupValueCode: '1', lookupValueName: '武汉', isEnable: '1' },
            { oemCode: '1', groupCode: '1', lookupTypeCode: 'BBBBB1', lookupValueCode: '2', lookupValueName: '上海', isEnable: '1' }
          ]
          break
        case 'BASE0003':
          rows = [
            { oemCode: '1', groupCode: '1', lookupTypeCode: 'BASE0003', lookupValueCode: '0', lookupValueName: '总部', isEnable: '1' },
            { oemCode: '1', groupCode: '1', lookupTypeCode: 'BASE0003', lookupValueCode: '1', lookupValueName: '经销商', isEnable: '1' },
            { oemCode: '1', groupCode: '1', lookupTypeCode: 'BASE0003', lookupValueCode: '2', lookupValueName: '集团', isEnable: '1' },
            { oemCode: '1', groupCode: '1', lookupTypeCode: 'BASE0003', lookupValueCode: '3', lookupValueName: '供应商', isEnable: '1' },
            { oemCode: '1', groupCode: '1', lookupTypeCode: 'BASE0003', lookupValueCode: '4', lookupValueName: '地区', isEnable: '1' }
          ]
          break
      }
    }
    return { 'msg': '', 'result': '1', 'rowcount': rows.length, 'rows': rows, 'params': params }
  }
},
{
  url: orgApis.mdsLookupTypeQueryByPage.APIUrl + cH + 'v=' + orgApis.mdsLookupTypeQueryByPage.ServiceCode,
  type: 'post',
  response: config => {
    return mdsLookupTypeQueryByPage
  } // 值列表类型值列表查询
},
{
  url: orgApis.mdmOrgdlrQueryByPage.APIUrl + cH + 'v=' + orgApis.mdmOrgdlrQueryByPage.ServiceCode,
  type: 'post',
  response: config => {
    return mdmOrgdlrQueryByPage
  } // 经销商查询
},
{
  url: orgApis.mdmOrgSmallAreaQueryByPage.APIUrl + cH + 'v=' + orgApis.mdmOrgSmallAreaQueryByPage.ServiceCode,
  type: 'post',
  response: config => {
    return mdmOrgSmallAreaQueryByPage
  } // 小区查询
},
{
  url: orgApis.sysRoleQueryGloableByPage.APIUrl + cH + 'v=' + orgApis.sysRoleQueryGloableByPage.ServiceCode,
  type: 'post',
  response: config => {
    return sysRoleQueryGloableByPage
  } // 全局角色查询
},
{
  url: orgApis.menuQueryByPage.APIUrl + cH + 'v=' + orgApis.menuQueryByPage.ServiceCode,
  type: 'post',
  response: config => {
    return menuQueryByPage
  } // 菜单树查询
},
{
  url: orgApis.roleSave.APIUrl + cH + 'v=' + orgApis.roleSave.ServiceCode,
  type: 'post',
  response: config => {
    return roleSave
  } // 角色保存
},
{
  url: orgApis.sysRoleUserMutationDel.APIUrl + cH + 'v=' + orgApis.sysRoleUserMutationDel.ServiceCode,
  type: 'post',
  response: config => {
    return sysRoleUserMutationDel
  } // 角色保存
},
{
  url: orgApis.sysRoleUserQueryByPage.APIUrl + cH + 'v=' + orgApis.sysRoleUserQueryByPage.ServiceCode,
  type: 'post',
  response: config => {
    return sysRoleUserQueryByPage
  } // 角色成员查询
}
]
