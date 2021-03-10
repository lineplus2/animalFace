var arr1 = [1, 3];
var arr2 = [1, 2];

arrcon = function (arr1, arr2, i) {
    if (arr1.findOfValue === arr2[i].findOfValue) {
        console.log('yes');
    } else {
        console.log('no');
    }
};
arr1.push(4);
arr2.push(4);

var a = arr1[2];
var b = arr2[2];

if (a === b) {
    console.log('yes');
    console.log(arr1[2]);
    console.log(arr2[2]);
} else {
    console.log('no');
}
