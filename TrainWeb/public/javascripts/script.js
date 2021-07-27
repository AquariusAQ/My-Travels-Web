var tickets = []
var tickets_text = []
var exhibitions = []
var exhibitions_text = []

var newTicketDom = function(ticket) {
    return $(`                    
<div class="col-12 col-md-6 col-xl-4 my-2">
<div class="card ticket m-1">
    <div class="card-body">
        <div class="row text-center">
            <div class="col-4">
                <div class="row">
                    <h4 class="card-text ml-auto my-auto">` + ticket.dep + `</h4>
                    <p class="card-text mr-auto my-auto" style="vertical-align: middle;">&thinsp;站</p>
                </div>
            </div>
            <div class="col-4">
                <div class="row">
                    <h4 class="card-text m-auto my-auto"><u>` + ticket.train + `</u></h4>
                </div>
            </div>
            <div class="col-4">
                <div class="row">
                    <h4 class="card-text ml-auto my-auto">` + ticket.des + `</h4>
                    <p class="card-text mr-auto my-auto">&thinsp;站</p>
                </div>
            </div>
        </div>
        <div class="row text-center">
            <p class="card-text col-4 my-0 p-0"><small>` + ticket.dep_py + `</small></p>
            <p class="card-text col-4 my-0 p-0"><small></small></p>
            <p class="card-text col-4 my-0 p-0"><small>` + ticket.des_py + `</small></p>
        </div>
        <div class="row text-center">
            <p class="card-text card-text col-4 my-0 p-0">` + ticket.year + `<small>年</small>` + (ticket.month < 10 ? "0"+ticket.month : ticket.month) + `<small>月</small>` + (ticket.day < 10 ? "0"+ticket.day : ticket.day) + `<small>日</small></p>
            <p class="card-text card-text col-4 my-0 p-0">` + ticket.time + `<small>开</small></p>
            <p class="card-text card-text col-4 my-0 p-0">` + ticket.seat + `</p>
        </div>
        <div class="row text-center">
            <p class="card-text col-4 my-0">` + ticket.price + `</p>
            <p class="card-text col-4 my-0">` + ticket.label + `</p>
            <p class="card-text col-4 my-0">` + ticket.type + `</p>
        </div>` 
        + ((ticket.up_text != undefined) ? `<p class="card-text mt-0">` + ticket.up_text + `</p>` : ``)
        + ((ticket.down_text != undefined) ? `<p class="card-text mb-0">` + ticket.down_text + `</p>` : ``)
        + `<p class="card-text mb-0">* * * * * * * * * * * * * * * * * * 小祈</p>
        <P class="card-text mt-0">` + ticket.sell + `</P>
    </div>
</div>
</div>`)
}

var newExhibition = function(exhibition) {
    var dom = $(`
<div class="col-12 col-lg-6 my-2">
<div class="card exhibition m-1">
    <div class="card-body">
        <h4 class="card-title">` + exhibition.exhibition + `<small>&nbsp;&nbsp;&nbsp;` + exhibition.name + `</small></h4>
        <table class="table">
            <tbody>
              <tr class="table-info">
                <td>` + exhibition.city + `</td>
                <td>` + exhibition.time + `</td>
                <td>` + exhibition.label + `</td>
              </tr>

            </tbody>
          </table>
    </div>
</div>
</div>
    `);
    exhibition.activity.forEach(element => {
        new_dom = $(`
            <tr class="table-success">
                <td>` + element.day + `</td>
                <td>` + element.type + `</td>
                <td>` + element.cos + `</td>
            </tr>
        `)
        dom.find("tbody").append(new_dom);
    });
    return dom;
}

$(document).ready(function() {
    $('#nav-main').click(function() {
        $('html,body').animate({ scrollTop: $("#main").offset().top}, 200);
    });
    $('#nav-exhibitions').click(function() {
        $('html,body').animate({ scrollTop: $("#exhibitions").offset().top}, 200);
    });
    $('#nav-tickets').click(function() {
        $('html,body').animate({ scrollTop: $("#tickets").offset().top}, 200);
    });
});

$(document).ready(function () {
    $.get("/process_exhibitions", function(data, status) {
        exhibitions = JSON.parse(data);
        fix_exhibitions_text();
        for (let index = exhibitions_text.length - 1; index >= 0; index--) {
            const element = exhibitions_text[index];
            $('#exhibition-row').append(newExhibition(element));
        }
    });
});

$(document).ready(function() {
    $.get("/process_tickets", function(data, status) {
        tickets = JSON.parse(data);
        fix_tickets_text();
        for (let index = tickets_text.length - 1; index >= 0; index--) {
            const element = tickets_text[index];
            $('#ticket-row').append(newTicketDom(element));
        }
    });

    /*const app = {
        data() {
          return {
          }
        }
      }
      
    Vue.createApp(app).mount('#ticker-list');*/
});

function fix_exhibitions_text() {
    exhibitions.forEach(element => {
        new_text = {};
        new_text.exhibition = element.exhibition;
        new_text.name = element.name;
        new_text.city = element.city;
        new_text.time = element.time;
        new_text.label = element.label;
        new_text.activity = element.activity;
        exhibitions_text.push(new_text);
    });
}

function fix_tickets_text() {
    tickets.forEach(element => {
        new_text = {};
        if (element.dep.length == 2) {
            new_text.dep = element.dep[0] + '  ' + element.dep[1];
        } else if (element.dep.length == 3) {
            new_text.dep = element.dep[0] + ' ' + element.dep[1] + ' ' + element.dep[2];
        } else {
            new_text.dep = element.dep;
        }
        new_text.train = element.train;
        if (element.des.length == 2) {
            new_text.des = element.des[0] + '  ' + element.des[1];
        } else if (element.des.length == 3) {
            new_text.des = element.des[0] + ' ' + element.des[1] + ' ' + element.des[2];
        } else {
            new_text.des = element.des;
        }
        new_text.dep_py = element.dep_py;
        new_text.des_py = element.des_py;
        new_text.year = element.year;
        new_text.month = element.month;
        new_text.day = element.day;
        new_text.time = element.time;
        new_text.seat = element.seat;
        new_text.price = '￥' + element.price + '元';
        new_text.label = element.label;
        new_text.type = element.type;
        new_text.up_text = element.up_text;
        new_text.down_text = element.down_text;
        new_text.sell = element.sell + '售';
        tickets_text.push(new_text);
    });
}