// 数据列表api
export const DataListApi = params => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        success: true,
        code: 200,
        result: {
          count: 200,
          list: [
            {
              key: 1,
              num: '001',
              name: '商品1',
              price: '高',
              varieties: 200,
              varietiesPercent: '10%',
              varietiesNow: 180,
              inventoryNum: 2000,
              inventoryMoney: '26001.00',
              timeNum: 1000,
              timeMoney: '1000.00',
              days: 72,
              times: 5
            }, {
              key: 2,
              num: '001',
              name: '商品1',
              price: '中',
              varieties: 200,
              varietiesPercent: '10%',
              varietiesNow: 180,
              inventoryNum: 2000,
              inventoryMoney: '26001.00',
              timeNum: 1000,
              timeMoney: '1000.00',
              days: 72,
              times: 5
            }, {
              key: 3,
              num: '001',
              name: '商品1',
              price: '低',
              varieties: 200,
              varietiesPercent: '10%',
              varietiesNow: 180,
              inventoryNum: 2000,
              inventoryMoney: '26001.00',
              timeNum: 1000,
              timeMoney: '1000.00',
              days: 72,
              times: 5
            },
            {
              key: 4,
              num: '001',
              name: '商品1',
              price: '小计',
              varieties: 200,
              varietiesPercent: '10%',
              varietiesNow: 180,
              inventoryNum: 2000,
              inventoryMoney: '26001.00',
              timeNum: 1000,
              timeMoney: '1000.00',
              days: 72,
              times: 5
            }, {
              key: 5,
              num: "002",
              name: '商品2',
              price: '高',
              varieties: 200,
              varietiesPercent: '10%',
              varietiesNow: 180,
              inventoryNum: 2000,
              inventoryMoney: '26001.00',
              timeNum: 1000,
              timeMoney: '1000.00',
              days: 72,
              times: 5
            }, {
              key: 6,
              num: "002",
              name: '商品2',
              price: '中',
              varieties: 200,
              varietiesPercent: '10%',
              varietiesNow: 180,
              inventoryNum: 2000,
              inventoryMoney: '26001.00',
              timeNum: 1000,
              timeMoney: '1000.00',
              days: 72,
              times: 5
            }, {
              key: 7,
              num: "002",
              name: '商品2',
              price: '低',
              varieties: 200,
              varietiesPercent: '10%',
              varietiesNow: 180,
              inventoryNum: 2000,
              inventoryMoney: '26001.00',
              timeNum: 1000,
              timeMoney: '1000.00',
              days: 72,
              times: 5
            },
            {
              key: 8,
              num: "002",
              name: '商品2',
              price: '小计',
              varieties: 200,
              varietiesPercent: '10%',
              varietiesNow: 180,
              inventoryNum: 2000,
              inventoryMoney: '26001.00',
              timeNum: 1000,
              timeMoney: '1000.00',
              days: 72,
              times: 5
            }
          ]
        }
      });
    }, 500);
  });
};
