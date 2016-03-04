describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
  	expect(split([5,4,3,2,1])).toEqual([[5,4],[3,2,1]]);
  });
});


describe('Merge', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
    	expect(merge([1,2],[3,4,5])).toEqual([1,2,3,4,5]);
    });
});


describe('Merge Sort', function(){
    it('is able to merge sort', function(){
    	expect(mergeSort([1,8,7,4,8,4,2,3,4,5])).toEqual([ 1, 2, 3, 4, 4, 4, 5, 7, 8, 8 ]);
    });
});