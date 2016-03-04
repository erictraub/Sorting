describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
});

describe('Bubble Sort', function(){
    it('handle an array of one', function(){
        expect( bubbleSort([1]) ).toEqual( [1] );
    });
});

describe('Bubble Sort', function(){
    it('handles an array with multiple items', function(){
        expect( bubbleSort([3,5,1,2,4]) ).toEqual( [1,2,3,4,5] );
    });
});