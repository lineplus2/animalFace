const bt1 = document.querySelector('.btn1');
const bt2 = document.querySelector('.btn2');
const bt3 = document.querySelector('.btn3');
const bt4 = document.querySelector('.btn4');
const bt5 = document.querySelector('.btn5');
const bt6 = document.querySelector('.btn6');
const bt7 = document.querySelector('.btn7');
const bt8 = document.querySelector('.btn8');
const bt9 = document.querySelector('.btn9');
const score = document.getElementById('score');
const stbtn = document.querySelector('.startbtn');

var timeid;
var checkNum;

var randomNum = function () {
    var num = Math.floor(Math.random() * 9);
    return num;
};
var arr = [];
var arrcheak = [];
var point;

for (var i = 0; i < 9; i++) {
    var num = randomNum();
    arr.push(num);
}

var i = 0;
var j = 0;

arrcon = function (arr1 = [i], arr2 = [i], i) {
    if (arr1.findIndex === arr2.findIndex) {
    }
};

function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}

btncolor = function (chois) {
    switch (chois) {
        case 0:
            bt1.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt1.style.backgroundColor = '#b4fbff';
            }, 900);
            break;
        case 1:
            bt2.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt2.style.backgroundColor = '#b4fbff';
            }, 900);
            break;
        case 2:
            bt3.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt3.style.backgroundColor = '#b4fbff';
            }, 900);
            break;
        case 3:
            bt4.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt4.style.backgroundColor = '#b4fbff';
            }, 900);
            break;
        case 4:
            bt5.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt5.style.backgroundColor = '#b4fbff';
            }, 900);
            break;
        case 5:
            bt6.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt6.style.backgroundColor = '#b4fbff';
            }, 900);
            break;
        case 6:
            bt7.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt7.style.backgroundColor = '#b4fbff';
            }, 900);
            break;
        case 7:
            bt8.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt8.style.backgroundColor = '#b4fbff';
            }, 900);
            break;
        case 8:
            bt9.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt9.style.backgroundColor = '#b4fbff';
            }, 900);
            break;
    }
};

bt1.addEventListener('click', function () {
    var a = arr[i];
    if (a === 0) {
        j++;
        i++;
        point = Number(j).toLocaleString('en');
        score.innerText = '현재점수 : ' + point;
    } else {
        score.innerText = '최종점수 : ' + point;
    }
});
bt2.addEventListener('click', function () {
    var a = arr[i];
    if (a === 1) {
        j++;
        i++;
        point = Number(j).toLocaleString('en');
        score.innerText = '현재점수 : ' + point;
    } else {
        score.innerText = '최종점수 : ' + point;
    }
});
bt3.addEventListener('click', function () {
    var a = arr[i];
    if (a === 2) {
        j++;
        i++;
        point = Number(j).toLocaleString('en');
        score.innerText = '현재점수 : ' + point;
    } else {
        score.innerText = '최종점수 : ' + point;
    }
});
bt4.addEventListener('click', function () {
    var a = arr[i];
    if (a === 3) {
        j++;
        i++;
        point = Number(j).toLocaleString('en');
        score.innerText = '현재점수 : ' + point;
    } else {
        score.innerText = '최종점수 : ' + point;
    }
});
bt5.addEventListener('click', function () {
    var a = arr[i];
    if (a === 4) {
        j++;
        i++;
        point = Number(j).toLocaleString('en');
        score.innerText = '현재점수 : ' + point;
    } else {
        score.innerText = '최종점수 : ' + point;
    }
});
bt6.addEventListener('click', function () {
    var a = arr[i];
    if (a === 5) {
        j++;
        i++;
        point = Number(j).toLocaleString('en');
        score.innerText = '현재점수 : ' + point;
    } else {
        score.innerText = '최종점수 : ' + point;
    }
});
bt7.addEventListener('click', function () {
    var a = arr[i];
    if (a === 6) {
        j++;
        i++;
        point = Number(j).toLocaleString('en');
        score.innerText = '현재점수 : ' + point;
    } else {
        score.innerText = '최종점수 : ' + point;
    }
});
bt8.addEventListener('click', function () {
    var a = arr[i];
    if (a === 7) {
        j++;
        i++;
        point = Number(j).toLocaleString('en');
        score.innerText = '현재점수 : ' + point;
    } else {
        score.innerText = '최종점수 : ' + point;
    }
});
bt9.addEventListener('click', function () {
    var a = arr[i];
    if (a === 8) {
        j++;
        i++;
        point = Number(j).toLocaleString('en');
        score.innerText = '현재점수 : ' + point;
    } else {
        score.innerText = '최종점수 : ' + point;
        j = 0;
    }
});

stbtn.addEventListener('click', function () {
    timeid2 = setInterval(function () {
        score.innerText = '현재점수 : 0';
        var c = arr[i];
        if (i === 8) {
            clearInterval(timeid2);
            i = 0;
        }
        console.log(c);
        btncolor(c);
        i++;
    }, 1000);
});
