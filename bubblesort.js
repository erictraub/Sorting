function bubbleSort(array) {

	var size = array.length - 1;
	for (var l = size; l > 0; l--){
		for (var i = 0; i < size; i++) {
				if (array[i] > array[i + 1]) {
					var char1 = array[i];
					array[i] = array[i+1];
					array[i+1] = char1;
				}
		}
	}
	return array;
	
};



