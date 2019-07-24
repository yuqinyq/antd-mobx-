// main数据
export const MainDataApi = params => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        success: true,
        code: 200,
        result: {
            data1:[
              { month: '1月', value: 378 },
              { month: '2月', value: 699 },
              { month: '3月', value: 757 },
              { month: '4月', value: 678},
              { month: '5月', value: 1100 },
              { month: '6月', value: 445 },
              { month: '7月', value: 1000 },
              { month: '8月', value: 900 },
              { month: '9月', value: 666 },
              { month: '10月', value: 555 },
              { month: '11月', value: 444 },
              { month: '12月', value: 399 },
            ],
          data2: Array(7)
                    .fill(0)
                    .map((item,idx)=>({
                        key:idx,
                        name: `工专路 ${idx} 号店`,
                        price: '323,234'
                    }))
        }
      }), 500
    })
  })
}

export const  TopListApi = (params)=> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        success: true,
        code: 200,
        result: {
          count: 200,
          list: Array(5)
            .fill(0)
            .map((item,idx)=> ({
              index:idx+1,
              keyword: `搜索关键词-${idx}`,
              count: 234+idx,
              range: 89 - idx,
            }))
        }
      })
    }, 500)
  })
}
