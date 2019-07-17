
//判断用户登录状态
export const LoginStatusApi =  async params => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        success: true,
        code: 200,
        msg:'已登录'
      });
    }, 500);
  });
}


// 获取登录用户信息

export const UserInfoApi = async params =>{
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        success: true,
        code: 200,
        result:{
          name:'admin',
          image:'https://image-cdn.fishsaying.com/00be8466d4d14642ba709135d7233660.png'
        }
      });
    }, 500);
  });
}
