import React from 'react'
import CustomBreadcrumb from 'components/CustomBreadcrumb'
import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';
import 'handsontable/languages/zh-CN';
import './index.less'



class DetailsTable extends React.Component {
  constructor(props) {
    super(props);
    this.handsontableData = Handsontable.helper.createSpreadsheetData(80, 10);
  }

  render() {
    const { query } = this.props.location
    const settings = {
      data: this.handsontableData,
      rowHeaders: true,
      colHeaders: true,
      manualColumnResize: true,
      manualRowResize: true,
      manualColumnFreeze: true,
      manualColumnMove: true,
      manualRowMove: true,
      currentRowClassName: 'qf-handson-row',
      currentColClassName: 'qf-handson-col',
      className: "htCenter htMiddle",
      columnSorting: {
        sortEmptyCells: true,
        initialConfig: {
          column: 5,
          sortOrder: 'asc'
        }
      },  //排序
      contextMenu: true,
      autoColumnSize: true,
      colWidths: 100,
      rowHeights: 30,
      width: '100%',
      height: 580,
      // fixedColumnsLeft: 2,
      // fixedRowsTop: 2,
      fixedRowsBottom: 1,
      mergeCells: [{ row: 0, col: 1, rowspan: 2, colspan: 1 }],
      language: "zh-CN",
      afterChange: (change, source) => {
        console.log(change, source)
      },
      headerTooltips: {
        rows: false,
        columns: true,
        onlyTrimmed: true
      }, //超出宽度显示tips
      stretchH: 'last', // 'last' 'all' 'none'
      // hiddenRows: {
      //   rows: [3, 5, 9],
      //   indicators: true
      // },  // 隐藏行
      hiddenColumns: true, // 隐藏列
      // trimRows:[1,2,5], //隐藏行
      bindRowsWithHeaders: true,  // 移动时行头也随之移动
      nestedHeaders: [
        ['A', { label: 'B', colspan: 8 }, 'C'],
        ['D', { label: 'E', colspan: 4 }, { label: 'F', colspan: 4 }, 'G'],
        ['H', { label: 'I', colspan: 2 }, { label: 'J', colspan: 2 }, { label: 'K', colspan: 2 }, { label: 'L', colspan: 2 }, 'M'],
        ['复选框', 'O', '最小值', '最大值', '求和', '价格', '时间', 'v', '下拉框', '日期']
      ],
      collapsibleColumns: [
        { row: -4, col: 1, collapsible: true },
        { row: -3, col: 1, collapsible: true },
        { row: -2, col: 1, collapsible: true },
        { row: -2, col: 7, collapsible: true },
      ],
      columns: [{
        data: 'brand', // 1st column is simple text, no special options here
        type: 'checkbox',
        label: {
          position: 'after',
          value: '选中'   //复选框label
        }
      }, {
        data: 'model'// 2nd column is simple text, no special options here
      }, {
        data: 'maxSpeed',
        type: 'numeric'
      }, {
        data: 'range',
        type: 'numeric'
      }, {
        data: 'seats',
        type: 'numeric'
      }, {
        data: 'price',
        type: 'numeric',
        numericFormat: {
          pattern: '$ 0,0.00',
          culture: 'en-US'
        }
      }, {
        data: 'range1',
        type: 'time',
        timeFormat: 'h:mm:ss a',
        correctFormat: true
      }, {
        data: 'range2',
      }, {
        data: 'range3',
        type: 'dropdown',
        source: ['Kia', 'Nissan', 'Toyota', 'Honda']
      }, {
        data: 'productionDate',
        type: 'date',
        dateFormat: 'MM/DD/YYYY',
        correctFormat: true,
        defaultDate: '01/01/2019'
      }],
      dropdownMenu: true,
      filters: true,
      columnSummary: [
        {
          destinationRow: 79,
          destinationColumn: 2,
          type: 'min',
        }, {
          destinationRow: 79,
          destinationColumn: 3,
          type: 'max',
        },
        {
          destinationRow: 79,
          destinationColumn: 4,
          type: 'sum',
          forceNumeric: true
        }
      ],
      fillHandle: {
        direction: 'horizontal',
        autoInsertRow: true
      },
      afterSetCellMeta: function (row, col, key, val) {
        console.log("cell meta changed", row, col, key, val);
      },
      comments: true, //评论文档
      cell: [
        { row: 4, col: 4, comment: { value: 'Some comment' } },
        { row: 2, col: 2, comment: { value: 'More comments' } }
      ]
    }
    return (
      <div className="qf-main-box">
        <CustomBreadcrumb arr={[{ title: '表单路由', to: '/home/table/router' }, query ? query.name : '药材-1']} />
        <div className="qf-details-box">
          <HotTable settings={settings} licenseKey="00000-00000-00000-00000-00000" />
        </div>
      </div>
    )
  }

}


export default DetailsTable
