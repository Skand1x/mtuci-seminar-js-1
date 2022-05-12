var arr = [50,60,20,15,10];
function arraySum(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum += array[i];
    }
    console.log(sum);
}
arraySum(arr);