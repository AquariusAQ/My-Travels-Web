var option = {

    grid: {
        top: 0,
        left: 0,
        right: 0,
        width:'auto',
        height:'auto'
    },
    
    color: ['#75ff93','#eaebe6'],

    graphic: {
        elements: [
            {
               type: 'image',
               style: {
                    image: "http://127.0.0.1:3000/maimai/img/default.png",
                    width: 100,
                    height: 100
                },
                left: 'center',
                top: 'middle'    
            },
            {
                type:"text",
                left:"center",
                top:"35%",
                style:{
                    text:"舞萌",
                    textAlign:"center",
                    fill:"#000",
                    fontSize:20,
                    fontWeight:800,
                    // stroke:"#000",
                    // lineWidth:2,
                }
            },
            {
                type:"text",
                left:"center",
                top:"55%",
                style:{
                    text:"2021",
                    textAlign:"center",
                    fill:"#000",
                    fontSize:20,
                    fontWeight:800,
                    // stroke:"#000",
                    // lineWidth:2,
                }
            }
        ]
    },

    series: [{
        startAngle: 346.2,
        label: {
            normal: {
               position: 'inner',
               show : false
            }
        },
        animation: false,
        cursor: 'pointer',
        type: 'pie',
        /*itemStyle: {
            normal: { color: function(params) {
                var colorList = [
                    '#eaebe6', '#75ff93', '#eaebe6', '#75ff93', '#eaebe6', '#75ff93', '#eaebe6', '#75ff93', '#eaebe6', '#75ff93', '#eaebe6', '#75ff93', '#eaebe6', '#75ff93', '#eaebe6', '#75ff93', 
                ];
            return colorList[params.dataIndex];
            }},
            emphasis: { color: function(params) {
                var colorList2 = [
                    '#eaebe6', '#75ff93', '#eaebe6', '#75ff93', '#eaebe6', '#75ff93', '#eaebe6', '#75ff93', '#eaebe6', '#75ff93', '#eaebe6', '#75ff93', '#eaebe6', '#75ff93', '#eaebe6', '#75ff93', 
                ];
                return colorList2[params.dataIndex];
            }}
        },*/

        itemStyle: {
            borderWidth:.5,
            borderColor:'rgb(0,0,0)',
        },

        //hover状态
        /*emphasis:{
            itemStyle: {
                color:function(params) {
                    alert(params.dataIndex);
                    var colorList = ['#75ff93','#eaebe6'];
                    return colorList[params.dataIndex];
                },
            },
          },*/
            
        // silent: true, // 会完全禁止交互
        radius: ['80%', '100%'], // 半径
        center: ['50%', '50%'], // 位置
        data: [{
                value: 17.4,
            },
            {
                value: 27.6,
            },
            {
                value: 17.4,
            },
            {
                value: 27.6,
            },
            {
                value: 17.4,
            },
            {
                value: 27.6,
            },
            {
                value: 17.4,
            },
            {
                value: 27.6,
            },
            {
                value: 17.4,
            },
            {
                value: 27.6,
            },
            {
                value: 17.4,
            },
            {
                value: 27.6,
            },
            {
                value: 17.4,
            },
            {
                value: 27.6,
            },
            {
                value: 17.4,
            },
            {
                value: 27.6,
            }
        ],
    }]
};

var option2 = option;

$(document).ready(() =>{
    //option['series'][0]['center'][1] = (150-($("#down1").height())/$("#down1").width()*100).toString() + '%';
    var playSize = Math.min($('#main').width(), $('#main').height()); 
    option.graphic.elements[0].style.width = playSize * 0.95;
    option.graphic.elements[0].style.height = playSize * 0.95;
    option.graphic.elements[0].style.image = "http://" + window.location.host + "/maimai/img/default.png";
    option.graphic.elements[1].style.fontSize = playSize * 0.15;
    option.graphic.elements[2].style.fontSize = playSize * 0.10;
    
    echarts.init(document.getElementById('main')).setOption(option);
    echarts.init(document.getElementById('main2')).setOption(option2);
    
    /*var selectN = $("p.main-text")
    for (var i = 0; i < selectN.length; i++) {
        selectN.eq(i).css("font-size", $('#main').width() * 0.15);
    }*/
});

$(document).ready(() => {
    $(window).resize(function() {
        option.graphic.elements[0].style.width = $('#main').width() * 0.95;
        option.graphic.elements[0].style.height = $('#main').width() * 0.95;
        myChart.resize();
      });
});

$(document).ready(() => {
    $('#inqueue').click(() => {
        let username = $('#username').val();
        var patt = /^[a-zA-Z0-9]+$/
        if (patt.test(username) && username.length <= 8) {
            $.get("send_user?username="+username, (result) => {
                if (result.code == 200) {
                    return;
                } else {
                    alert(result.text);
                }
            });
        } else {
            alert("昵称必须为1~8位数字或字母！");
        }
    })
});

var card = [];
$(document).ready(() => {
    $.get("process_user", (result) => {
        new_card = JSON.parse(result);
        if (card != new_card) {
            card = new_card;
            refresh_card();
        }
    });
    setInterval(() => {
        $.get("process_user", (result) => {
            new_card = JSON.parse(result);
            if (card != new_card) {
                card = new_card;
                refresh_card();
            }
        });
    }, 1000)
});

function refresh_card() {
    $('#queue-list').empty();
    card.forEach(element => {
        let dom = $('<div class="card queue-card m-1"><div class="card-title text-center my-2 py-2">'+element+'</div></div>');
        $('#queue-list').append(dom);
    });
}