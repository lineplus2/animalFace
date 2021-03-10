const bt1 = document.querySelector('.btn1');
const bt2 = document.querySelector('.btn2');
const bt3 = document.querySelector('.btn3');
const bt4 = document.querySelector('.btn4');
const bt5 = document.querySelector('.btn5');
const bt6 = document.querySelector('.btn6');
const bt7 = document.querySelector('.btn7');
const bt8 = document.querySelector('.btn8');
const bt9 = document.querySelector('.btn9');
const bt10 = document.querySelector('.btn10');
const bt11 = document.querySelector('.btn11');
const bt12 = document.querySelector('.btn12');
const bt13 = document.querySelector('.btn13');
const bt14 = document.querySelector('.btn14');
const bt15 = document.querySelector('.btn15');
const bt16 = document.querySelector('.btn16');
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

for (var i = 0; i < 12; i++) {
    var num = randomNum();
    arr.push(num);
}

function btnDisabled() {
    bt1.disabled = true;
    bt2.disabled = true;
    bt3.disabled = true;
    bt4.disabled = true;
    bt5.disabled = true;
    bt6.disabled = true;
    bt7.disabled = true;
    bt8.disabled = true;
    bt9.disabled = true;
    bt10.disabled = true;
    bt11.disabled = true;
    bt12.disabled = true;
    bt13.disabled = true;
    bt14.disabled = true;
    bt15.disabled = true;
    bt16.disabled = true;
    stbtn.disabled = true;
}

function btnActive() {
    bt1.disabled = false;
    bt2.disabled = false;
    bt3.disabled = false;
    bt4.disabled = false;
    bt5.disabled = false;
    bt6.disabled = false;
    bt7.disabled = false;
    bt8.disabled = false;
    bt9.disabled = false;
    bt10.disabled = false;
    bt11.disabled = false;
    bt12.disabled = false;
    bt13.disabled = false;
    bt14.disabled = false;
    bt15.disabled = false;
    bt16.disabled = false;
    stbtn.disabled = false;
}

var i = 0;
var j = 0;

arrcon = function (arr1 = [i], arr2 = [i], i) {
    if (arr1.findIndex === arr2.findIndex) {
    }
};

btncolor = function (chois) {
    switch (chois) {
        case 0:
            bt1.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt1.style.backgroundColor = '#b4fbff';
            }, 750);
            break;
        case 1:
            bt2.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt2.style.backgroundColor = '#b4fbff';
            }, 750);
            break;
        case 2:
            bt3.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt3.style.backgroundColor = '#b4fbff';
            }, 750);
            break;
        case 3:
            bt4.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt4.style.backgroundColor = '#b4fbff';
            }, 750);
            break;
        case 4:
            bt5.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt5.style.backgroundColor = '#b4fbff';
            }, 750);
            break;
        case 5:
            bt6.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt6.style.backgroundColor = '#b4fbff';
            }, 750);
            break;
        case 6:
            bt7.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt7.style.backgroundColor = '#b4fbff';
            }, 750);
            break;
        case 7:
            bt8.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt8.style.backgroundColor = '#b4fbff';
            }, 750);
            break;
        case 8:
            bt9.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt9.style.backgroundColor = '#b4fbff';
            }, 750);
            break;
        case 9:
            bt9.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt9.style.backgroundColor = '#b4fbff';
            }, 750);
            break;
        case 10:
            bt9.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt9.style.backgroundColor = '#b4fbff';
            }, 750);
            break;
        case 11:
            bt9.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt9.style.backgroundColor = '#b4fbff';
            }, 750);
            break;
        case 12:
            bt9.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt9.style.backgroundColor = '#b4fbff';
            }, 750);
            break;
        case 13:
            bt9.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt9.style.backgroundColor = '#b4fbff';
            }, 750);
            break;
        case 14:
            bt9.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt9.style.backgroundColor = '#b4fbff';
            }, 750);
            break;
        case 15:
            bt9.style.backgroundColor = 'red';
            timeid = setTimeout(function () {
                bt9.style.backgroundColor = '#b4fbff';
            }, 750);
            break;
    }
};

bt1.addEventListener('click', function () {
    var a = arr[j];
    if (a === 0) {
        j++;

        point = Number(j).toLocaleString('en');
        score.innerText = '현재점수 : ' + point + ' / 12';
    } else {
        score.innerText = '최종점수 : ' + point + ' / 12';
        j = 0;
    }
});
bt2.addEventListener('click', function () {
    var a = arr[j];
    if (a === 1) {
        j++;

        point = Number(j).toLocaleString('en');
        score.innerText = '현재점수 : ' + point + ' / 12';
    } else {
        score.innerText = '최종점수 : ' + point + ' / 12';
        j = 0;
    }
});
bt3.addEventListener('click', function () {
    var a = arr[j];
    if (a === 2) {
        j++;

        point = Number(j).toLocaleString('en');
        score.innerText = '현재점수 : ' + point + ' / 12';
    } else {
        score.innerText = '최종점수 : ' + point + ' / 12';
        j = 0;
    }
});
bt4.addEventListener('click', function () {
    var a = arr[j];
    if (a === 3) {
        j++;

        point = Number(j).toLocaleString('en');
        score.innerText = '현재점수 : ' + point + ' / 12';
    } else {
        score.innerText = '최종점수 : ' + point + ' / 12';
        j = 0;
    }
});
bt5.addEventListener('click', function () {
    var a = arr[j];
    if (a === 4) {
        j++;

        point = Number(j).toLocaleString('en');
        score.innerText = '현재점수 : ' + point + ' / 12';
    } else {
        score.innerText = '최종점수 : ' + point + ' / 12';
        j = 0;
    }
});
bt6.addEventListener('click', function () {
    var a = arr[j];
    if (a === 5) {
        j++;

        point = Number(j).toLocaleString('en');
        score.innerText = '현재점수 : ' + point + ' / 12';
    } else {
        score.innerText = '최종점수 : ' + point + ' / 12';
        j = 0;
    }
});
bt7.addEventListener('click', function () {
    var a = arr[j];
    if (a === 6) {
        j++;
        point = Number(j).toLocaleString('en');
        score.innerText = '현재점수 : ' + point + ' / 12';
    } else {
        score.innerText = '최종점수 : ' + point + ' / 12';
        j = 0;
    }
});
bt8.addEventListener('click', function () {
    var a = arr[j];
    if (a === 7) {
        j++;
        point = Number(j).toLocaleString('en');
        score.innerText = '현재점수 : ' + point + ' / 12';
    } else {
        score.innerText = '최종점수 : ' + point + ' / 12';
        j = 0;
    }
});
bt9.addEventListener('click', function () {
    var a = arr[j];
    if (a === 8) {
        j++;
        point = Number(j).toLocaleString('en');
        score.innerText = '현재점수 : ' + point + ' / 12';
    } else {
        score.innerText = '최종점수 : ' + point + ' / 12';
        j = 0;
    }
});

stbtn.addEventListener('click', function () {
    i = 0;
    btnDisabled();
    timeid2 = setInterval(function () {
        score.innerText = '현재점수 : 0 / 12';
        var c = arr[i];
        if (i === 11) {
            clearInterval(timeid2);
            btnActive();
            i = 0;
        }
        btncolor(c);
        i++;
    }, 850);
});
