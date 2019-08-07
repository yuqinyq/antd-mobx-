export const TableListApi = params => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        success: true,
        code: 200,
        result: {
          count: 200,
          list: Array(10)
              .fill(0)
              .map((item,idx)=> ({
                key:Math.random(),
                index:idx+1,
                name: `药材-${idx+1}`,
                count: 24+idx,
                type:'中成药',
                price:234+idx,
                date:`2019-08-01`

              }))
        }
      });
    }, 500);
  });
};

