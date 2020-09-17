var findMaximumXOR = function(nums) {
    var sum = 0;
    var minValue = 0;
    for (var i = 1; i < nums.length; i++) {
        if ((nums[minValue] ^ nums[i]) > sum ) {
            sum = nums[minValue] ^ nums[i];
            if (i === nums.length-1) {
                minValue++;
                i = minValue;
            }
        }else if (i === nums.length-1) {
            minValue++;
            i = minValue;
        }
    }
    return sum;
};
