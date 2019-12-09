export default ({ route, redirect, store, app }) => {
    // Use context
    const { name, fullPath } = route
    const nologin = ['login', 'register', 'repassword']
    // this.$log('auth.js 中间键');
    app.$log('【auth.js】 --- 当前路由： fullPath ===', fullPath)
    // if (store.state.user) {
    //     // 登录
    //     // if (name === 'login' || name === 'login-phone' || name === 'index') {
    //     //     redirect(`/`);
    //     // }
    //     // this.$log(store.state.user);
    // } else if (
    //     // 未登录
    //     !nologin.find((item) => item === name) &&
    //     !store.state.isIntegrated
    // ) {
    //     this.$log('【auth.js】 --- 用户未登录，回到登录页面')
    //     // redirect(`/login?ref=${fullPath}`);
    //     redirect('/login?next=auth')
    // }
}
