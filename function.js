//求n个数中最大的值
function fn(arr){
   var max =arr [0];
   for(var i = 0; i < arr.length; i++){
        if(max > arr[i]){
           max = arr[i]
        }
   }
   return max;
}
// console.log(fn([0,8,7]));



//求n-m区间的所有数的和
function Section(n,m){
    var sum = 0;
    for(var i = n; i <= m; i++){
       sum += i;
    }
    return sum ;
}

