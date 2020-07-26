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
            name: '註冊繳費',
            address: 'registration.html'
        },
        {
            name: '線上投稿',
            address: 'submission.html'
        },
        {
            name: '輔助申請',
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

    let header = new Vue({
        el: "#header"
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

    // var news = new Vue({
    //     el: '#news',
    //     data: {
    //         items: [],
    //     },
    //     // created() {
    //     //     axios.get('http://127.0.0.1:5500/json/news.json')
    //     //         .then(res => {
    //     //             this.items = res.data;
    //     //             console.log(this.items);
    //     //         })
    //     //         .catch(error => {
    //     //             alert("異常");
    //     //         })
    //     // }
    //     created() {
    //         axios.get('https://script.google.com/macros/s/AKfycbxbi1JxeJfT5SsSHoxOzpfnBFz2CrcLoRicC01x/exec')
    //             .then(res => {
    //                 this.items = res.data;
    //                 console.log(this.items);
    //             })
    //             .catch(error => {
    //                 alert("異常");
    //             })
    //     },
    //     methods: {
    //         dateFormat: function(time){
    //             var date = new Date(time)
    //             var year = date.getFullYear();
    //             var month = date.getMonth() < 10 ? '0'+ (date.getMonth() + 1) : (date.getMonth() + 1);
    //             var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    //             return year + '/' + month + '/' + day
    //         }
    //     }
    // })

    // var info = new Vue({
    //     el: '#info',
    //     data: {
    //         name: '',
    //         phone: '',
    //         email: '',
    //         items: []
    //     },
    //     methods: {
    //         postData: function(){
    //             // axios.post('https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycby0GI2hpa0yftUFjXutmHi-KlXBTL1l6rqUv5wB/exec',{
    //             //     "name": this.name,
    //             //     "phone": this.phone,
    //             //     "email": this.email
    //             // })
    //             axios({
    //                 method: 'POST',
    //                 url: 'https://script.google.com/macros/s/AKfycby0GI2hpa0yftUFjXutmHi-KlXBTL1l6rqUv5wB/exec',
    //                 data: {
    //                     name: this.name,
    //                     phone: this.phone,
    //                     email: this.email
    //                 },
    //                 headers: {
    //                     'Content-Type': 'text/plain;charset=utf-8',
    //                 }
    //             })
    //             .then(res => {
    //                 this.items = res.data;
    //                 console.log(this.items);
    //             })
    //             .catch(error => {
    //                 alert("異常");
    //             }) 
    //         }
    //     }
    // })


});