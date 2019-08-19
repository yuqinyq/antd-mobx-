
// 编辑列表api

export const EditListApi = params => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        success: true,
        code: 200,
        result: {
          count:100,
          list: [
            {
              name: "商品自定义1",
              price: "20",
              fruitTypes: ["apple"],
              tenantCode: "001",
              evaluate: '0',
              id: 2905258602579968
            },
            {
              name: "商品自定义2",
              price: "40",
              fruitTypes: ["apple", "orange"],
              tenantCode: "001",
              evaluate: '1',
              id: 2904806276614144
            },
            {
              name: "商品自定义3",
              price: "34",
              fruitTypes: ["apple", "orange"],
              tenantCode: "001",
              evaluate: '1',
              id: 2904806276614124
            },
            {
              name: "商品自定义4",
              price: "430",
              fruitTypes: ["apple", "orange"],
              tenantCode: "001",
              evaluate:'2',
              id: 2904806276614147
            },
            {
              name: "商品自定义5",
              price: "1230",
              fruitTypes: ["apple", "orange"],
              tenantCode: "001",
              evaluate: '0',
              id: 2904806276614149
            },
            {
              name: "商品自定义6",
              price: "999",
              fruitTypes: ["apple", "orange"],
              tenantCode: "001",
              evaluate: '2',
              id: 29048062766141411
            }
          ]
        }

      })
    }, 500)
  })

}
