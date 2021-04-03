app.component('sidebar-component', {
    template:
    /*html*/
    `<div id="sidebar" class="sidebar">
        <div data-scrollbar="true" data-height="100%">
            <ul class="nav">
                <li class="nav-profile">
                    <a href="javascript:;" data-toggle="nav-profile">
                        <div class="cover with-shadow"></div>
                        <div class="image">
                            <img src="./assets/img/user/user-13.jpg" alt="" />
                        </div>
                        <div class="info">
                            <b class="caret pull-right"></b>
                            Andy Junior Samanez Rivera
                            <small>Auxiliar Informático</small>
                        </div>
                    </a>
                </li>
                <li>
                    <ul class="nav nav-profile">
                        <li><a href="javascript:;"><i class="fa fa-cog"></i> Settings</a></li>
                        <li><a href="javascript:;"><i class="fa fa-pencil-alt"></i> Send Feedback</a></li>
                        <li><a href="javascript:;"><i class="fa fa-question-circle"></i> Helps</a></li>
                    </ul>
                </li>
            </ul>
            <ul class="nav">
                <li class="nav-header">Navigation</li>
                <li class="has-sub active">
                    <a href="javascript:;">
                        <b class="caret"></b>
                        <i class="fa fa-th-large"></i>
                        <span>Mantenimientos</span>
                    </a>
                    <ul class="sub-menu">
                        <li class="active"><a href="#" v-on:click="updateContent">Usuarios</a></li>
                        <li><a href="index_v2.html">Cementerios</a></li>
                    </ul>
                </li>
                <li class="has-sub">
                    <a href="javascript:;">
                        <span class="badge pull-right">10</span>
                        <i class="fa fa-hdd"></i> 
                        <span>Email</span>
                    </a>
                    <ul class="sub-menu">
                        <li><a href="email_inbox.html">Inbox</a></li>
                        <li><a href="email_compose.html">Compose</a></li>
                        <li><a href="email_detail.html">Detail</a></li>
                    </ul>
                </li>
                <li>
                    <a href="widget.html">
                        <i class="fab fa-simplybuilt"></i> 
                        <span>Widgets <span class="label label-theme m-l-5">NEW</span></span> 
                    </a>
                </li>
                
                <li>
                    <a href="bootstrap_4.html">
                        <div class="icon-img">
                            <img src="./assets/img/logo/logo-bs4.png" alt="" />
                        </div>
                        <span>Bootstrap 4 <span class="label label-theme m-l-5">NEW</span></span> 
                    </a>
                </li>
                
                <li><a href="javascript:;" class="sidebar-minify-btn" data-click="sidebar-minify"><i class="fa fa-angle-double-left"></i></a></li>
            </ul>
        </div>
    </div>
    <div class="sidebar-bg"></div>`,
    data: function(){
        return {
            
        }
    },
    methods: {
        updateContent(){
            console.log("Update content");
        },
    }
})