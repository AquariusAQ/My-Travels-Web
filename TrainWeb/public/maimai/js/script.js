var option = {
    
    color: ['#75ff93','#eaebe6'],
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
        radius: ['70%', '90%'], // 半径
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

$(document).ready(() =>{
    echarts.init(document.getElementById('main')).setOption(option);
    echarts.init(document.getElementById('main2')).setOption(option);
});

$(document).ready(() => {
    $("#bga1").css('height', $("#bga1").width);
    $("#bga2").css('height', $("#bga2").width);
});