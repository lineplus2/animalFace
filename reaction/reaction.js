const btn = document.querySelector('.game');

var cl = document.getElementsByClassName('game');
var text = document.getElementById('text');
var p1 = document.getElementById('p1');


var randomTimer = function() {
    var number = Math.floor(Math.random()*3000+500);
    return number;
} //랜덤시간

var timer = randomTimer();
var count = 0;
var sttime;
var edtime;
var time;
var str
var timeid;
var resultstr = function(str) {
    var st;
    if(str <= 235) {
        st = "상위 1% 입니다.";
    } else if ( 236 < str && str <= 260) {
        st = "상위 5% 입니다.";
    } else if ( 261 < str && str <= 269) {
        st = "상위 10% 입니다.";
    } else if ( 270 < str && str <= 280) {
        st = "상위 25% 입니다.";
    } else if ( 281 < str && str <= 300) {
        st = "상위 30% 입니다.";
    } else if ( 300 < str && str <= 350) {
        st = "상위 40% 입니다.";
    } else if ( 351 < str && str <= 400) {
        st = "하위 40% 입니다.";
    } else if ( 400 < str && str <= 600) {
        st = "하위 15% 입니다.";
    } else if ( 601 < str && str <= 800) {
        st = "하위 10% 입니다.";
    } else if ( 801 < str && str <= 1000 ) {
        st = "하위 3% 입니다.";
    } else if ( 1000 < str ) {
        st = "하위 1% 입니다.";
    }
    return st;
}
btn.addEventListener('click', function() {
    switch(count) {
        case 0 :
            text.innerText = "준비";
            p1.innerText = "초록화면이 되면 클릭하세요!"
            btn.style.backgroundColor='#6464CD';
            count = 1;
            
                timeid = setTimeout(function() {
                text.innerText = "클릭";
                p1.innerText = "클릭하세요!";
                btn.style.backgroundColor='greenyellow';
                sttime =+ new Date();
                count = 2;
        }, timer);
            break;
        case 1 :
            clearTimeout(timeid);
            text.innerText = "실패";
            p1.innerText = "초록화면이 되면 클릭해주세요, 처음부터 시작하려면 클릭해주세요";
            btn.style.backgroundColor='#E6749D';
            count = 0;
            break;
        case 2 :
            edtime =+ new Date();
            time = (edtime - sttime);
            var stt = resultstr(time);
            str = Number(time).toLocaleString('en');
            text.innerText = "결과";
            p1.innerText = str+ "Ms   " + stt +" 다시 하려면 클릭해주세요";
            btn.style.backgroundColor='#b4b4b4'
            count = 0;
            break;
    }  
});