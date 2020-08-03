$(function(){

    var navbarData = [
        {
            name: '最新消息',
            address: 'news.html'
        },
        {
            name: '委員會',
            address: 'committee.html'
        },
        {
            name: '議程表',
            address: 'program.html'
        },
        {
            name: '邀請演講',
            address: 'speakers.html'
        },
        {
            name: '線上註冊',
            address: 'registration.html'
        },
        {
            name: '線上投稿',
            address: 'submission.html'
        },
        {
            name: '補助申請',
            address: 'subsidy.html'
        },
        {
            name: '年會花絮',
            address: 'album.html'
        },
        {
            name: '晚宴資訊',
            address: 'banquet.html'
        },
        {
            name: '交通資訊',
            address: 'traffic.html'
        },
        {
            name: '住宿資訊',
            address: 'hotelinfo.html'
        }
    ]

    //----------Vue.js----------//
    
    // axios.get 本機修改要記得改成 localhost
    // 'http://localhost:5500/static/json/navbar.json'
    // axios.get 上傳時要記得改成相對路徑
    // './static/json/navbar.json'

    Vue.component('my-nav', { 
        template:
        `
            <ul>
                <a v-for="item in text" v-bind:href="item.address">
                    <li v-if="item.address == url" style="color: #EFBB24; border-bottom: 2px solid #EFBB24">{{item.name}}</li>
                    <li v-else>{{item.name}}</li>
                </a>
            </ul>
        `,
        data(){
            return{
                text: navbarData,
                url: location.href.split('/')[location.href.split('/').length - 1]
            }
        }
    })

    Vue.component('my-footer', { 
        template:
        `
            <div class="footer-content">                
                <a href="tel:0229052452" class="contact">
                    <img src="https://img.icons8.com/ultraviolet/40/000000/phone.png" width="25" height="25"/>
                    <p>&ensp;TEL:&ensp;</p>
                    <p>(02)29052452</p>
                </a>
                <a href="fax:0229044509" class="contact">
                    <img src="https://img.icons8.com/ultraviolet/40/000000/phone-office.png" width="25" height="25"/>
                    <p>&ensp;FAX:&ensp;</p>
                    <p>(02)29044509</p>
                </a>
                <a href="mailto:tms2020@math.fju.edu.tw" class="contact">
                    <img src="https://img.icons8.com/ultraviolet/40/000000/email-open.png" width="25" height="25"/>
                    <p>&ensp;E-mail:&ensp;</p>
                    <p>tms2020@math.fju.edu.tw</p>
                </a>
                <p class="copyright">© 2020 中華民國數學年會 Taiwan Mathematical Society Annual Meeting</p>
            </div>   
        `
    })

    var header = new Vue({
        el: "#header"
    });

    var footer = new Vue({
        el: "#footer"
    });

    var news = new Vue({
        el: "#news",
        data: {
            items: []     
        },
        computed: {
            reverseItems() {
                return this.items.reverse();
            }
        },
        created() {
            axios.get('./json/news.json')
                .then(res => {
                    this.items = res.data;
                })
                .catch(error => {
                    alert("異常");
            })
        }
    });

    var committee = new Vue({
        el: "#committee",
        data: {
            items: []     
        },
        created() {
            axios.get('./json/committee.json')
                .then(res => {
                    this.items = res.data;
                })
                .catch(error => {
                    alert("異常");
            })
        }
    });

    var program = new Vue({
        el: "#program",
        data: {
            items: []     
        },
        created() {
            axios.get('./json/program.json')
                .then(res => {
                    this.items = res.data;
                })
                .catch(error => {
                    alert("異常");
            })
        }
    });

    var speakers = new Vue({
        el: "#speakers",
        data: {
            items: []     
        },
        created() {
            axios.get('./json/speakers.json')
                .then(res => {
                    this.items = res.data;
                })
                .catch(error => {
                    alert("異常");
            })
        }
    });

    //----------Navbar樣式----------//

    // Navbar漢堡
    $(".navbar-toggle-close").click(function() {
        $(".navbar-mobile").css("display","none");
        $(".navbar-toggle-open").css("display","flex");
        $(".navbar-toggle-close").css("display","none");
        $("header").css("background-color","transparent");
        $("header").css("box-shadow","0px 0px 0px rgba(0,0,0,0.3)");
        $(".logo").css("display","none");
    });
    $(".navbar-toggle-open").click(function() {
        $(".navbar-mobile").css("display","flex");
        $(".navbar-toggle-open").css("display","none");
        $(".navbar-toggle-close").css("display","flex");
        $("header").css("background-color","#3D74B9");
        $("header").css("box-shadow","0px 2px 10px rgba(0,0,0,0.3)");
        $(".logo").css("display","flex");
    });
    $(".navbar-mobile").click(function() {
        $(".navbar-mobile").css("display","none");
        $(".navbar-toggle-open").css("display","flex");
        $(".navbar-toggle-close").css("display","none");
        $("header").css("background-color","transparent");
        $("header").css("box-shadow","0px 0px 0px rgba(0,0,0,0.3)");
        $(".logo").css("display","none");
    });

});