//Produces an array that corresponds to the numbers in a row
function decode_row(num){
    let nums = [];
    while(num>0){
        nums.push(num%10);
        num = Math.floor(num/10)
    }
    let r = []
    for(var i = nums.length-1; i > -1; i--){
        r.push(nums[i])
    }
    return r
}
//Produces a number from the array for updating the database
function encode_row(a){
    var num = 0;
    for(var i = 0; i < a.length-1; i++){
        num+=a[i]
        num*=10
    }
    num+=a[a.length-1]
    return num
}