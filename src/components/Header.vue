<template>
    <div class="nav border-bottom-gray" id="bl_header">
		<div class="nav-content">
			<ul>
				<li class="nav-index" title="主站" onclick="location.href='index.html'">
					<i class="bili-icon"></i>
					<a href="#">主站</a>
				</li>
				<li title="画友"><a href="#">画友</a></li>
				<li title="音频"><a href="music.html">音频</a></li>
				<li title="游戏中心"><a href="#">游戏中心</a></li>
				<li title="直播"><a href="#">直播</a></li>
				<li title="会员购"><a href="#">会员购</a></li>
				<li title="BML"><a href="#">BML</a><sup><img src="/static/images/beijing.png" alt=""></sup></li>
				<li title="下载APP"><a href="#">下载APP</a></li>
			</ul>
			<ul>
				<li class="p-img">
					<a href="#" target="_blank" class=" btn-login" >
						<img src="/static/images/akari.jpg">
					</a>
					<div class="p_login">
						<p>登陆后你可以：</p>
						<div class="log-slider-img">
							<img src="/static/images/danmu.png">
							<img src="/static/images/danmu.png">
						</div>
						<a href="login.html">登录</a>
						<p>首次使用? <a href="register.html">点我去注册</a></p>
					</div>
				</li>
				<li>
					<a href="#">历史</a>
					<div class="history">
						<div>
							<p>登录后有更多功能哦~</p>
							<a href="login.html">登录</a>
						</div>
						<ul class="history-list">
							<div class="no-data">
								<li>没有数据哦，多看点视频吧</li>
							</div>
						</ul>
						<a href="more">查看更多 <i></i> </a>
					</div>
				</li>
				<li class="tg">
					<a href="#" class="bg-pink">投 稿</a>
					<ul class="tg-list">
						<li>
							<i class="bl-icon tg-zhuanlan"></i>
							<span>专栏投稿</span>
						</li>
						<li>
							<i class="bl-icon tg-audio"></i>
							<span>音频投稿</span>
						</li>
						<li>
							<i class="bl-icon tg-video"></i>
							<span>视频投稿</span>
						</li>
						<li>
							<i class="bl-icon tg-manage"></i>
							<span>投稿管理</span>
						</li>
						<li>
							<i class="bl-icon tg-center"></i>
							<span>创作中心</span>
						</li>
					</ul>
				</li>
			</ul>
			<ul class="isLogin">
				<li class="p-img">
					<a href="personal.html" target="_blank" >
						<img src="/static/images/no-data.940dc0f.png">
					</a>
					<div class="p_login">
						<div class="msg">
							<p class="bl_user">木有鱼丸嘤???</p>
							<div class="msg-list">
								<div class="msg-item">
									<i class="bl-icon msg-coin"></i>
									<span>322</span>
								</div>
								<div class="msg-item">
									<i class="bl-icon msg-coinb"></i>
									<span>0</span>
								</div>
								<div class="msg-item-right">
									<i class="bl-icon msg-phone"></i>
								</div>
								<div class="msg-item-right">
									<i class="bl-icon msg-mail"></i>
								</div>
							</div>
						</div>
						<div class="fun">
							<ul>
								<li>
									<i class="bl-icon fun-person"></i>
									<span>个人中心</span>
								</li>
								<li>
									<i class="bl-icon fun-tg"></i>
									<span>投稿管理</span>
								</li>
								<li>
									<i class="bl-icon fun-coin"></i>
									<span>B币钱包</span>
								</li>
								<li>
									<i class="bl-icon fun-live"></i>
									<span>直播中心</span>
								</li>
							</ul>
						</div>
						<div class="signout">
							<a href="javascript:;" class="btn-signout">退出</a>
						</div>
					</div>
				</li>
				<li><a href="#">大会员</a></li>
				<li><a href="#">消息</a></li>
				<li><a href="#">动态</a></li>
				<li><a href="#">稍后再看</a></li>
				<li><a href="#">收藏夹</a></li>
				<li><a href="#">历史</a></li>
				<li class="tg">
					<a href="#" class="bg-pink">投 稿</a>
					<ul class="tg-list">
						<li>
							<i class="bl-icon tg-zhuanlan"></i>
							<span>专栏投稿</span>
						</li>
						<li>
							<i class="bl-icon tg-audio"></i>
							<span>音频投稿</span>
						</li>
						<li>
							<i class="bl-icon tg-video"></i>
							<span>视频投稿</span>
						</li>
						<li>
							<i class="bl-icon tg-manage"></i>
							<span>投稿管理</span>
						</li>
						<li>
							<i class="bl-icon tg-center"></i>
							<span>创作中心</span>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
    import "@/assets/css/base.css"
    import "@/assets/css/header.css"
    export default{
        name:"Header",
        data:function(){
            return {}
        }
    }
</script>
<style scoped>
</style>
