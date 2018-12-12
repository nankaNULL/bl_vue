<template>
    <div id="app_login">
        <div class="m-content">
            <div class="top">
                <img src="/static/images/rl_top.35edfde.png" alt="">
            </div>
            <div class="m-login">
                <div class="lg-title"><span>登录</span></div>
                <div class="lg-content clearfix">	
                    <div class="lg-l f-position">
                        <i class="icon-tv"></i> 
                        <div class="left-t">
                            <img src="/static/images/erwm.png" alt="">
                        </div>
                        <div class="left-b">
                            <p>扫描二维码登录</p>
                            <p>请使用<a href="#">哔哩哔哩客户端</a></p>
                            <p>扫码登录</p>
                            <p>或扫码下载APP</p>
                        </div>
                    </div>
                    <div class="lg-r">
                        <ul>
                            <li class="lg-list">
                                <input type="text" placeholder="你的手机号/邮箱" class="radius-4" id="uname">
                                <span class="icon-error"></span>
                                <div class="t-warn">请输入注册时用的邮箱或者手机号呀</div>
                            </li>
                            <li class="lg-list">
                                <input type="password" placeholder="密码" class="radius-4" id="upwd">
                                <span class="icon-error"></span>
                                <div class="t-warn">喵，你没输入密码么？</div>
                            </li>
                            <li class="lg-list"></li>
                            <li class="lg-list clearfix">
                                <input type="checkbox">记住我
                                <span>不是自己的电脑上不要勾选此项</span>
                                <a href="#">忘记密码？</a>
                                <a href="#">无法验证？</a>
                            </li>
                            <li class="lg-list">
                                <a class="lg-btn btn-login" href="javascript:;">登录</a>
                                <a class="lg-btn btn-register" href="register.html">注册</a>
                            </li>
                            <li class="lg-list">
                                <a href="#"><span id="icon-sina"></span>微博账号登录</a>
                                <a href="#"><span id="icon-qq"></span>QQ账号登录</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- <iframe src="footer.html" frameborder="0" width="100%" height="400px" scrolling="no"></iframe> -->
    </div>
</template>
<script>
    import "@/assets/css/base.css"
    import "@/assets/css/login.css"
    export default {
        name:"Login",
        data:function(){
            return {}
        }
    }
</script>
<style scoped></style>