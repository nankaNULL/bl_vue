<template>
    <div id="app">
        <div class="container">
            <div class="slider">
                <ul class="slider-con">
                    <li class="slider-item active" data-slider="0">
                        <a href="javascript:void(0)">
                            <img src="/static/images/slider1.webp">
                            <div>查收这份双十一礼物！</div>
                        </a>
                    </li>
                    <li class="slider-item">
                        <a href="javascript:void(0)">
                            <img src="/static/images/slider2.webp">
                            <div>用粤语翻唱日语歌竟然这么好听！</div>
                        </a>
                    </li>
                    <li class="slider-item" data-slider="1">
                        <a href="javascript:void(0)">
                            <img src="/static/images/slider3.webp">
                            <div>糟糕！是心动的声音</div>
                        </a>
                    </li>
                </ul>
                <ul class="slider-dot">
                    <li class="dot-item active"><button class="btn-dot"></button></li>
                    <li class="dot-item"><button class="btn-dot"></button></li>
                    <li class="dot-item"><button class="btn-dot"></button></li>
                </ul>
            </div>
            <div class="m-recommend m-model">
                <div class="mod-title">歌单推荐</div>  
                <ul>
                    <li class="music-list" v-for="rclist in recommendLists" :key="rclist.lid">
                        <div class="list-img">
                            <img :src="rclist.pic" alt="">
                            <div>
                                <i class="iconfont play-icon"></i>
                            </div>
                        </div>
                        <div class="list-con">
                            <p>
                                <a href="javascript:void(0)">{{rclist.title}}</a>
                            </p>
                            <p>
                                <i class="iconfont"></i>
                                <span>{{rclist.num}}</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="m-rank m-model">
                <div class="mod-title">热门榜单</div>
                <div class="rank-content">
                    <div class="rank-list">
                        <div class="rlist-title">
                            <img src="/static/images/recommend_new.jpg" alt="">
                            <div>
                                <a href="javascript:void(0);">每日新曲推荐（每日11:00更新）</a>
                                <div class="play">
                                    <i></i>
                                    <span>播放全部</span>
                                </div>
                            </div>
                        </div>
                        <ul>
                            <li v-for="song in hotSonglists" :key="song.id" class="rlist-item" :data-music="song.src">
                                <span>{{song.id}}</span>
                                <div class="item-title">
                                    <a href="javascript:;" class="title">{{song.title}}</a>
                                    <i class=""></i>
                                    <span>{{song.time}}</span>
                                </div>
                            </li>
                        </ul>
                        <div class="item-more">
                            <a href="#">
                                <span>查看更多</span>
                                <i> > </i>
                            </a>
                        </div>
                    </div>
                    <div class="rank-list">
                        <div class="rlist-title">
                            <img src="/static/images/recommend_hot.jpg" alt="">
                            <div>
                                <a href="javascript:void(0);">热歌榜（每日11:00更新）</a>
                                <div class="play">
                                    <i></i>
                                    <span>播放全部</span>
                                </div>
                            </div>
                        </div>
                        <ul>
                            <li v-for="song in hotSonglists" :key="song.id" class="rlist-item">
                                <span>{{song.id}}</span>
                                <div class="item-title">
                                    <a href="#" class="title">{{song.title}}</a>
                                    <i class=""></i>
                                    <span>{{song.time}}</span>
                                </div>
                            </li>
                        </ul>
                        <div class="item-more">
                            <a href="#">
                                <span>查看更多</span>
                                <i> > </i>
                            </a>
                        </div>
                    </div>
                    <div class="rank-list">
                        <div class="rlist-title">
                            <img src="/static/images/recommend_yc.jpg" alt="">
                            <div>
                                <a href="javascript:void(0);">原创榜（每日11:00更新）</a>
                                <div class="play">
                                    <i></i>
                                    <span>播放全部</span>
                                </div>
                            </div>
                        </div>
                        <ul>
                            <li v-for="song in hotSonglists" :key="song.id" class="rlist-item">
                                <span>{{song.id}}</span>
                                <div class="item-title">
                                    <a href="#" class="title">{{song.title}}</a>
                                    <i class=""></i>
                                    <span>{{song.time}}</span>
                                </div>
                            </li>
                        </ul>
                        <div class="item-more">
                            <a href="#">
                                <span>查看更多</span>
                                <i> > </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-allrank m-model">
                <div class="mod-title">
                    <span>全部榜单</span>
                    <div class="pagination">
                        <a href="#" class="prev">&lt;</a>
                        <a href="#" class="pagination-item active">1</a>
                        <a href="#" class="pagination-item">2</a>
                        <a href="#" class="next">&gt;</a>
                    </div>
                </div>
                <div class="ar-content">
                    <ul>
                        <li class="arank-list" v-for="(arlist,i) in arlists" :key="arlist.id" v-if="i>=start*5 && i<(start+1)*5">
                            <img :src="arlist.pic" alt="">
                            <a href="javascript:void(0)">{{arlist.title}}</a>
                            <div class="cover">
                                <i class="iconfont play-icon"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="m-mymusic m-model">
                <div class="mod-title">
                    <span>我的音乐</span>
                    <ul class="tab">
                        <li class="tab-list active">
                            我的创建
                            <em></em>
                        </li>
                        <li class="tab-list">
                            我的收藏
                            <em></em>   
                        </li>
                    </ul>
                </div>
                <div class="per-content">
                    <div class="per-create">
                        <ul class="clearfix" >
                            <li class="music-list">
                                <div class="list-img">
                                    <img src="/static/images/empty.png" alt="">
                                    <div>
                                        <i class="iconfont play-icon"></i>
                                    </div>
                                </div>
                                <div class="list-con">
                                    <p>
                                        <a href="javascript:void(0)">默认歌单</a>
                                    </p>
                                    <p>
                                        <span>0首歌曲 · 公开</span>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="per-collect">
                        <div class="empty">
                            <div><img src="/static/images/no-data.940dc0f.png" alt=""></div>
                            <p>TAT 什么都没收藏，快去歌单推荐发现新世界吧！</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-musician m-model">
                <div class="mod-title">
                    <span>音乐人推荐</span>
                    <div class="update">
                        <i></i>
                        <span>换一换</span>
                    </div>
                </div>
                <div class="musician-con">
                    <ul class="musician-card">
                        <li class="card-list">
                            <a href="#"><img src="/static/images/musician1.webp" alt=""></a> 
                            <div>
                                <p>被治愈了的小琦</p>
                                <span>治愈系唱见</span>
                                <div class="btn-listen">试听</div>
                            </div>
                        </li>
                        <li class="card-list">
                            <a href="#"><img src="/static/images/musician1.webp" alt=""></a> 
                            <div>
                                <p>被治愈了的小琦</p>
                                <span>治愈系唱见</span>
                                <div class="btn-listen">试听</div>
                            </div>
                        </li>
                        <li class="card-list">
                            <a href="#"><img src="/static/images/musician1.webp" alt=""></a> 
                            <div>
                                <p>被治愈了的小琦</p>
                                <span>治愈系唱见</span>
                                <div class="btn-listen">试听</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="music-play">
            <div class="mp-margin">
                <div class="mp-con">
                    <div class="mplay">
                        <img src="/static/images/music/flamingo.jpg" alt="">
                        <div class="mp-prev">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M20.229 24.343l-10.286-6.171c-0.914-0.571-1.486-1.371-1.486-2.171s0.571-1.714 1.486-2.171l10.286-6.171c0.914-0.571 1.829-0.686 2.629-0.229 0.686 0.457 1.143 1.257 1.143 2.286v12.571c0 1.029-0.457 1.943-1.143 2.286-0.343 0.229-0.686 0.229-1.029 0.229-0.457 0.114-1.029-0.114-1.6-0.457zM21.143 9.143l-10.286 6.171c-0.343 0.229-0.571 0.457-0.571 0.686s0.229 0.571 0.571 0.686l10.286 6.171c0.457 0.229 0.686 0.229 0.914 0.229 0.229-0.114 0.229-0.457 0.229-0.8v-12.571c0-0.457-0.114-0.686-0.229-0.8 0 0-0.114 0-0.229 0-0.229-0.114-0.457 0-0.686 0.229z"></path><path d="M8.229 7.771v16.571c0 0.457 0.343 0.914 0.914 0.914v0c0.457 0 0.914-0.343 0.914-0.914v-16.571c0-0.457-0.343-0.914-0.914-0.914v0c-0.457 0-0.914 0.343-0.914 0.914z"></path></svg>
                        </div>
                        <div class="mp-start">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="mp-start-s"><path d="M22.756 16.711l-8.8 5.422c-0.444 0.267-0.978 0.089-1.244-0.267-0.089-0.178-0.089-0.267-0.089-0.444v-10.844c0-0.533 0.356-0.889 0.889-0.889 0.178 0 0.356 0.089 0.444 0.089l8.8 5.422c0.444 0.267 0.533 0.8 0.267 1.244-0.089 0.089-0.178 0.178-0.267 0.267z"></path></svg>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="mp-start-p" style="display: none;"><path d="M11.556 8.889v0c0.711 0 1.333 0.622 1.333 1.333v11.556c0 0.711-0.622 1.333-1.333 1.333v0c-0.711 0-1.333-0.622-1.333-1.333v-11.556c0-0.711 0.622-1.333 1.333-1.333z"></path><path d="M21.333 8.889v0c0.711 0 1.333 0.622 1.333 1.333v11.556c0 0.711-0.622 1.333-1.333 1.333v0c-0.711 0-1.333-0.622-1.333-1.333v-11.556c0-0.711 0.622-1.333 1.333-1.333z"></path></svg>
                        </div>
                        <div class="mp-next">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M10.514 24.914c-0.343 0-0.686-0.114-1.029-0.229-0.686-0.457-1.143-1.257-1.143-2.286v-12.571c0-1.029 0.457-1.943 1.143-2.286 0.686-0.457 1.714-0.343 2.629 0.229l10.286 6.171c0.914 0.571 1.486 1.371 1.486 2.171s-0.571 1.714-1.486 2.171l-10.286 6.171c-0.571 0.229-1.143 0.457-1.6 0.457zM10.514 8.8c-0.114 0-0.114 0-0.229 0-0.229 0.114-0.229 0.457-0.229 0.8v12.571c0 0.457 0.114 0.686 0.229 0.8s0.457 0.114 0.914-0.229l10.286-6.171c0.343-0.229 0.571-0.457 0.571-0.686s-0.229-0.457-0.571-0.686l-10.286-6.171c-0.343-0.114-0.571-0.229-0.686-0.229z"></path><path d="M23.086 6.857v0c-0.457 0-0.914 0.343-0.914 0.914v16.571c0 0.457 0.343 0.914 0.914 0.914v0c0.457 0 0.914-0.343 0.914-0.914v-16.571c0-0.571-0.343-0.914-0.914-0.914z"></path></svg>
                        </div>
                    </div>
                    <div class="progress">
                        <div class="info">
                            <!-- <div class="mp-title">{{musicInfo.title}}<span>- {{musicInfo.musician}}</span></div>
                            <div class="mp-time"><span>00:00</span> <span> / {{musicInfo.time}}</span></div> -->
                        </div>
                        <div class="mp-progress">
                            <div class="track">
                                <div class="track-top"></div>
                                <div class="slider-box" id="pop">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 32" class="ap-svg-exclude"><path fill="#32b0da" opacity="0.28" d="M11.789 1.207h11.789c3.72 0 6.737 3.016 6.737 6.737v8.421c0 3.72-3.016 6.737-6.737 6.737h-11.789c-3.72 0-6.737-3.016-6.737-6.737v-8.421c0-3.72 3.016-6.737 6.737-6.737z"></path><path fill="#32b0da" opacity="0.14" d="M12.211 2.050h10.947c3.488 0 6.316 2.828 6.316 6.316v7.579c0 3.488-2.828 6.316-6.316 6.316h-10.947c-3.488 0-6.316-2.828-6.316-6.316v-7.579c0-3.488 2.828-6.316 6.316-6.316z"></path><path fill="#000" d="M22.737 2.969c3.256 0 5.895 2.627 5.895 5.866v6.705c0 3.24-2.639 5.866-5.895 5.866h-10.105c-3.256 0-5.895-2.626-5.895-5.866v-6.705c0-3.239 2.639-5.866 5.895-5.866h10.105z"></path><path fill="#fff" d="M22.737 2.969c3.256 0 5.895 2.627 5.895 5.866v6.705c0 3.24-2.639 5.866-5.895 5.866h-10.105c-3.256 0-5.895-2.626-5.895-5.866v-6.705c0-3.239 2.639-5.866 5.895-5.866h10.105z"></path><path fill="#333" d="M13.053 9.706c0.697 0 1.263 0.566 1.263 1.263v2.526c0 0.697-0.566 1.263-1.263 1.263s-1.263-0.566-1.263-1.263v-2.526c0-0.697 0.566-1.263 1.263-1.263z"></path><path fill="#333" d="M22.316 9.706c0.697 0 1.263 0.566 1.263 1.263v2.526c0 0.697-0.566 1.263-1.263 1.263s-1.263-0.566-1.263-1.263v-2.526c0-0.697 0.566-1.263 1.263-1.263z"></path><path fill="#333" d="M26.947 15.538c0 2.321-1.89 4.211-4.211 4.211h-10.105c-2.321 0-4.211-1.89-4.211-4.211v-6.737c0-2.323 1.89-4.211 4.211-4.211h10.105c2.321 0 4.211 1.888 4.211 4.211v6.737zM23.020 2.935l0.6-1.041c0.349-0.603 0.143-1.376-0.461-1.725s-1.376-0.141-1.725 0.461l-1.314 2.275h-4.871l-1.314-2.275c-0.349-0.603-1.122-0.81-1.725-0.461-0.605 0.349-0.812 1.122-0.463 1.725l0.601 1.041c-3.121 0.15-5.612 2.708-5.612 5.866v6.737c0 3.256 2.639 5.895 5.895 5.895h10.105c3.256 0 5.895-2.639 5.895-5.895v-6.737c0-3.16-2.491-5.716-5.612-5.866z"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tool">
                        <div class="collect">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M25.143 11.543c1.943 0.229 2.629 2.629 1.371 4l-2.857 2.971c-0.457 0.457-0.686 1.143-0.571 1.829l0.686 4.229c0.229 1.943-1.714 3.314-3.429 2.4l-3.2-1.829c-0.571-0.343-1.371-0.343-2.057 0l-3.2 1.714c-1.714 0.914-3.771-0.457-3.429-2.4l0.686-4.114c0.114-0.686-0.114-1.371-0.571-1.829l-2.857-2.971c-1.371-1.371-0.571-3.771 1.257-4l3.771-0.571c0.686-0.114 1.257-0.571 1.6-1.257l1.6-3.543c0.914-1.829 3.429-1.829 4.229 0l1.714 3.543c0.229 0.571 0.914 1.029 1.486 1.143l3.771 0.686zM18.286 10.514l-1.714-3.543c-0.229-0.457-0.914-0.457-1.143 0l-1.6 3.543c-0.571 1.143-1.6 1.943-2.857 2.171l-3.886 0.571c-0.457 0.114-0.686 0.686-0.343 1.029l2.857 2.971c0.8 0.8 1.257 2.057 1.029 3.314l-0.686 4.114c-0.114 0.571 0.457 0.914 0.914 0.686l3.2-1.714c1.143-0.686 2.629-0.686 3.657 0l3.2 1.714c0.457 0.229 1.029-0.114 0.914-0.686l-0.686-4.114c-0.229-1.257 0.229-2.4 1.029-3.314l2.857-2.971c0.343-0.343 0.114-1.029-0.343-1.029l-3.771-0.571c-1.029-0.229-2.171-1.029-2.629-2.171z"></path></svg>
                        </div>
                        <div class="line">
                            <div></div>
                        </div>
                        <div class="volume">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16.571 27.429c-0.457 0-0.8-0.114-1.143-0.457l-5.943-5.257h-2.743c-1.257 0-2.286-1.029-2.286-2.286v-5.829c0-1.257 1.029-2.286 2.286-2.286h2.743l5.943-5.257c0.686-0.571 1.829-0.571 2.4 0.114 0.229 0.343 0.457 0.686 0.457 1.143v18.286c0 1.029-0.8 1.829-1.714 1.829zM6.857 13.143c-0.343 0-0.571 0.229-0.571 0.571v5.829c0 0.343 0.229 0.571 0.571 0.571h3.429l6.4 5.714v-18.171l-6.4 5.6h-3.429z"></path><path d="M22.154 21.797c1.714-1.45 2.703-3.532 2.703-5.797 0-2.247-0.864-4.207-2.449-5.66-0.349-0.32-0.891-0.296-1.211 0.053s-0.296 0.891 0.053 1.211c1.232 1.129 1.893 2.631 1.893 4.397 0 1.755-0.763 3.361-2.097 4.489-0.361 0.306-0.406 0.847-0.101 1.208s0.847 0.406 1.208 0.101z"></path><path d="M25.355 24.539c2.517-2.139 3.959-5.253 3.959-8.653 0-3.22-1.389-6.329-3.697-8.509-0.344-0.325-0.887-0.31-1.212 0.035s-0.31 0.887 0.035 1.212c1.971 1.861 3.16 4.523 3.16 7.263 0 2.896-1.221 5.533-3.355 7.347-0.361 0.307-0.405 0.848-0.098 1.208s0.848 0.405 1.208 0.098z"></path></svg>
                        </div>
                        <div class="volume-track">
                            <div class="track-top"></div>
                            <div class="volume-track-dot"></div>
                        </div>
                        <div class="order">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="loop"><path d="M25.6 15.657c-0.343 0-0.686 0.343-0.686 0.686 0 0.114 0 0.229 0 0.229v1.829c0 2.4-1.829 4.229-4.229 4.229h-10.286l0.914-0.8c0.114-0.114 0.229-0.343 0.229-0.457 0-0.343-0.343-0.686-0.686-0.686-0.229 0-0.457 0.114-0.571 0.229l-2.057 1.829-0.8 0.686 2.857 2.514c0.114 0.229 0.343 0.343 0.571 0.343 0.457 0 0.8-0.229 0.8-0.686 0-0.229-0.114-0.457-0.343-0.571l-1.029-0.914v-0.114h10.4c3.086 0 5.6-2.514 5.6-5.6v-1.829c0-0.114 0-0.114 0-0.229 0-0.343-0.343-0.686-0.686-0.686zM8.229 16.571v-1.829c0-2.4 1.829-4.229 4.229-4.229h10.971l-0.914 0.914c-0.229 0.114-0.343 0.343-0.343 0.571 0 0.343 0.343 0.686 0.8 0.686 0.229 0 0.457-0.114 0.571-0.343l1.486-1.371 1.257-1.257-2.743-2.629c-0.229-0.114-0.457-0.229-0.686-0.229-0.457 0-0.686 0.343-0.686 0.8 0 0.229 0.114 0.343 0.229 0.571l0.914 0.8v0.114h-10.971c-2.971 0-5.486 2.514-5.486 5.6v1.829c0 0.114 0 0.114 0 0.229 0 0.343 0.343 0.686 0.686 0.686s0.686-0.343 0.686-0.686c0-0.114 0-0.229 0-0.229z"></path></svg>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="display: none"><path d="M25.6 15.657c-0.343 0-0.686 0.343-0.686 0.686 0 0.114 0 0.229 0 0.229v1.829c0 2.4-1.829 4.229-4.229 4.229h-10.286l0.914-0.8c0.114-0.114 0.229-0.343 0.229-0.457 0-0.343-0.343-0.686-0.686-0.686-0.229 0-0.457 0.114-0.571 0.229l-2.057 1.829-0.8 0.686 2.857 2.514c0.114 0.229 0.343 0.343 0.571 0.343 0.457 0 0.8-0.229 0.8-0.686 0-0.229-0.114-0.457-0.343-0.571l-1.029-0.914v-0.114h10.4c3.086 0 5.6-2.514 5.6-5.6v-1.829c0-0.114 0-0.114 0-0.229 0-0.343-0.343-0.686-0.686-0.686zM8.229 16.571v-1.829c0-2.4 1.829-4.229 4.229-4.229h10.971l-0.914 0.914c-0.229 0.114-0.343 0.343-0.343 0.571 0 0.343 0.343 0.686 0.8 0.686 0.229 0 0.457-0.114 0.571-0.343l1.486-1.371 1.257-1.257-2.743-2.629c-0.229-0.114-0.457-0.229-0.686-0.229-0.457 0-0.686 0.343-0.686 0.8 0 0.229 0.114 0.343 0.229 0.571l0.914 0.8v0.114h-10.971c-2.971 0-5.486 2.514-5.486 5.6v1.829c0 0.114 0 0.114 0 0.229 0 0.343 0.343 0.686 0.686 0.686s0.686-0.343 0.686-0.686c0-0.114 0-0.229 0-0.229z"></path><path d="M18.286 20v-6.857h-1.257l-2.171 1.714 0.457 1.257 1.486-0.914v4.8z"></path></svg>
                        </div>
                        <div class="s-list">
                            <div class="s-list-bg">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M5.371 6.857h9.943c0.457 0 0.8 0.343 0.8 0.8v0c0 0.457-0.343 0.8-0.8 0.8h-9.943c-0.457 0-0.8-0.343-0.8-0.8v0c0-0.457 0.343-0.8 0.8-0.8z"></path><path d="M5.371 11.086h7.429c0.457 0 0.914 0.343 0.914 0.8v0c0 0.457-0.343 0.8-0.8 0.8h-7.543c-0.457 0-0.8-0.343-0.8-0.8v0c0-0.457 0.343-0.8 0.8-0.8z"></path><path d="M5.371 15.2h5.829c0.457 0 0.8 0.343 0.8 0.8v0c0 0.457-0.343 0.8-0.8 0.8h-5.829c-0.457 0.114-0.8-0.343-0.8-0.8v0c0-0.343 0.343-0.8 0.8-0.8z"></path><path d="M20.571 6.857v0c0.457 0 0.8 0.343 0.8 0.8v14.057c0 0.457-0.343 0.8-0.8 0.8v0c-0.457 0-0.8-0.343-0.8-0.8v-14.057c0-0.457 0.457-0.8 0.8-0.8z"></path><path d="M20.914 8.457c0 0 0.114 0 0.229 0.114 0.229 0.114 0.571 0.229 0.914 0.343 0.914 0.457 1.943 1.257 2.743 2.286 0.343 0.343 0.686 0.8 0.914 1.257 0.229 0.343 0.8 0.457 1.143 0.229s0.457-0.8 0.229-1.143c-0.343-0.571-0.686-1.029-1.029-1.486-0.914-1.143-2.057-2.057-3.2-2.514-0.686-0.343-1.257-0.571-1.6-0.571-0.457-0.114-0.914 0.229-0.914 0.686-0.114 0.343 0.114 0.8 0.571 0.8z"></path><path d="M17.371 24.686c1.371 0 2.4-1.143 2.4-2.4s-1.143-2.4-2.4-2.4-2.514 1.029-2.514 2.4 1.143 2.4 2.514 2.4zM17.371 26.286c-2.286 0-4.114-1.829-4.114-4s1.829-4 4.114-4 4.114 1.829 4.114 4-1.829 4-4.114 4z"></path></svg>
                                <span style="width:18px;text-align: center">{{listNum}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mp-list">
                    <div class="title">
                        <div>
                            <span>播放列表</span>
                            <span>(共{{listNum}}首)</span>
                        </div>
                        <div class="trash">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon-trash"><path d="M19.2 9.6c0.914 0 1.6 0.686 1.6 1.6v12.8c0 0.914-0.686 1.6-1.6 1.6s-1.6-0.686-1.6-1.6v-12.8c0-0.914 0.686-1.6 1.6-1.6zM12.8 9.6c0.914 0 1.6 0.686 1.6 1.6v12.8c0 0.914-0.686 1.6-1.6 1.6s-1.6-0.686-1.6-1.6v-12.8c0-0.914 0.686-1.6 1.6-1.6zM8 6.4c-0.914 0-1.6 0.686-1.6 1.6v19.2c0 0.914 0.686 1.6 1.6 1.6h16c0.914 0 1.6-0.686 1.6-1.6v-19.2c0-0.914-0.686-1.6-1.6-1.6h-16zM28.8 6.4v22.4c0 1.829-1.371 3.2-3.2 3.2h-19.2c-1.829 0-3.2-1.371-3.2-3.2v-22.4h-1.6c-0.914 0-1.6-0.686-1.6-1.6s0.686-1.6 1.6-1.6h4.8c0-1.829 1.371-3.2 3.2-3.2h12.8c1.829 0 3.2 1.371 3.2 3.2h4.8c0.914 0 1.6 0.686 1.6 1.6s-0.686 1.6-1.6 1.6h-1.6z"></path></svg>
                            清空列表
                        </div>
                        <div class="close">×</div>
                    </div>
                    <div>
                        <ul :data-active="activeId" class="play-list">
                            <li class="play-item" v-for="(list,i) in playerlists" :data-music="list.src" :data-id="list.id">
                                <div class="title"><span>{{list.title}}</span></div>
                                <div>{{list.musician}}</div>
                                <div class="trash" @click.stop="deleteItem(i)">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon-trash"><path d="M19.2 9.6c0.914 0 1.6 0.686 1.6 1.6v12.8c0 0.914-0.686 1.6-1.6 1.6s-1.6-0.686-1.6-1.6v-12.8c0-0.914 0.686-1.6 1.6-1.6zM12.8 9.6c0.914 0 1.6 0.686 1.6 1.6v12.8c0 0.914-0.686 1.6-1.6 1.6s-1.6-0.686-1.6-1.6v-12.8c0-0.914 0.686-1.6 1.6-1.6zM8 6.4c-0.914 0-1.6 0.686-1.6 1.6v19.2c0 0.914 0.686 1.6 1.6 1.6h16c0.914 0 1.6-0.686 1.6-1.6v-19.2c0-0.914-0.686-1.6-1.6-1.6h-16zM28.8 6.4v22.4c0 1.829-1.371 3.2-3.2 3.2h-19.2c-1.829 0-3.2-1.371-3.2-3.2v-22.4h-1.6c-0.914 0-1.6-0.686-1.6-1.6s0.686-1.6 1.6-1.6h4.8c0-1.829 1.371-3.2 3.2-3.2h12.8c1.829 0 3.2 1.371 3.2 3.2h4.8c0.914 0 1.6 0.686 1.6 1.6s-0.686 1.6-1.6 1.6h-1.6z"></path></svg>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import "@/assets/css/base.css"
    import "@/assets/css/iconfont.css"
    import "@/assets/css/music.css"
    export default{
        name:"music",
        data:function(){
            return {}
        }
    }
</script>
<style scoped>
</style>