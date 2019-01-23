import axios from 'axios'
import Vue from 'vue'
import Router from 'vue-router'
import Utils from '../utils/index'


// router.addRoutes(route);
Vue.use(Router)

// axios response 拦截器
axios.interceptors.response.use(
  // let router = router
  response => {
    if(response) {
      switch (response.data.status) {
        case 400:
          Utils.alertNotice("error", "参数错误", response.data.desc);
          break;
        case 401://	缺失鉴权信息(不满足 OAuth2 或 Session)
          break;
        case 500:
          Utils.alertNotice("error", response.data.status, response.data.desc);
          break;
        case 404:
          // router.replace({
          //   path: '/Error404',
          //   // query: {redirect: router.currentRoute.fullPath}
          // });
          break;
        // case 403://操作不允许(比如用户没有权限删除指定信息)
        //   Notice.error( {
        //     title: '错误',
        //     desc: '操作不允许',
        //     duration: 3
        //   });
        //   break;

      }
    }
    return response;
  },
  error => {
      if (error.response) {
        switch (error.response.status) {
          case 500:
            // 401 清除token信息并跳转到登录页面
            // store.commit(types.LOGOUT);
            router.replace({
              path: '/Error500',
              // query: {redirect: router.currentRoute.fullPath}
            });
            break;
          case 404:{
            router.replace({
              path: '/Error404',
              // query: {redirect: router.currentRoute.fullPath}
            });
            break;
          }
        }
      }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  });

export default axios;
