var arr = [20,10,25,35,7];
function arraySum(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum += array[i];
    }
    console.log(sum);
}
arraySum(arr); //97