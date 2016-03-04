function split(wholeArray) {
	var size = wholeArray.length;
	//if lenth = 1, return that array
	var firstHalf = wholeArray.slice(0,size / 2);
	var secondHalf = wholeArray.slice(size/2);	
    return [firstHalf, secondHalf];
}


function merge(firstHalf, secondHalf){
	var wholeArray = [];
	var x = 0;
	var y = 0;
	while (y < secondHalf.length || x < firstHalf.length){
		if ( firstHalf[x]<secondHalf[y] || !secondHalf[y] ){
			wholeArray.push(firstHalf[x]);
			x++;
		} else {
			wholeArray.push(secondHalf[y] );
			y++;
		}
	}
	return wholeArray;
}


function mergeSort(array){
	//basecase: length of each array is 1
	if (array.length === 1){
		return array;
	}
	var arr1 = split(array)[0];
	var arr2 = split(array)[1];

	return merge(mergeSort(arr1), mergeSort(arr2));
}