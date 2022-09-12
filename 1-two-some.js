// Method 1: Brute Force
num = [1,2,3,5,3]; target=4;
const twoSum = function(nums, target){
  for(i=0; i<num.length; i++){
    var item1 = num[i];
    for(j=0;j<num.length; j++){
      var item2 = num[j];
      var sum = item1+item2;

      if(sum == target){
        return [i, j]
      }
    }
  }
}
console.log(twoSum(num, target));