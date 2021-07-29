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
               }]
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
    option.graphic.elements[0].style.width = $('#main').width() * 0.95;
    option.graphic.elements[0].style.height = $('#main').width() * 0.95;
    
    echarts.init(document.getElementById('main')).setOption(option);
});

$(document).ready(() => {
    echarts.init(document.getElementById('main2')).setOption(option2);
    //$("#bga1").css('height', $("#bga1").width());
    //$("#bga2").css('height', $("#bga2").width());
    //$("#main").css('height', $("#main").width());
    //$("#main2").css('height', $("#main2").width());
    //myChart.resize();

});