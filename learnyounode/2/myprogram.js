function add(nums){
	// start at index 2 as process.argv first 2 elements are path and script
	sum = 0;
	for(var i = 2; i < nums.length; i++){
		sum += +nums[i];
		//console.log("Current sum is: " + sum);
	}
	console.log(sum);
}

//console.log(process.argv)
add(process.argv);
