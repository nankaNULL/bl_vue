<template>
    <div class="m-content" id="app">
        <div class="top">
            <img src="/static/images/rl_top.35edfde.png" alt="">
        </div>
        <div class="m-register">
            <div class="rg-title"><span>注册</span></div>
            <div class="rg-content">
                <div class="rg-list">
                    <input type="text" placeholder="昵称" id="uname" v-model="uname">
                    <span class="g-warn">{{msg1}}</span>
                    <div style="visibility: hidden;">安全系数</div>
                </div>
                <div class="rg-list">
                    <input type="password" placeholder="密码（6-16个字符组成，区分大小写）" id="upwd" v-model="upwd">
                    <span class="g-warn">{{msg2}}</span>
                    <div></div>
                </div>
                <div class="rg-list rg-select">
                    <select name="" id="" >
                        <option value="please">请选择国家</option>
                        <option value="china">中国</option>
                    </select>
                    <input type="text" placeholder="填写常用手机号" v-model="phone">
                    <div class="align-right"><a href="#">用邮箱注册&gt;</a></div>
                </div>
                <div class="rg-list f-position">
                    <input type="text" placeholder="请输入短信验证码">
                    <button class="btn-get">点击获取</button>
                    <span id="g-name"></span>
                </div>
                <div class="rg-list rg-check">
                    <input type="checkbox" id="ck"> 
                    <label for="ck">
                        我已同意<a href="#">《哔哩哔哩弹幕网用户使用协议》</a>和<a href="#">《哔哩哔哩弹幕网账号中心规范》</a>
                    </label>
                </div>
                <div class="rg-list">
                    <input type="submit" value="注册" @click="register()">
                    <div class="align-right"><a href="login.html">已有账号，直接登录&gt;</a></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import "@/assets/css/base.css"
    import "@/assets/css/register.css"
    export default{
        name:"Register",
        data:function(){
            return {}
        }
    }
</script>
<style scoped>
</style>
