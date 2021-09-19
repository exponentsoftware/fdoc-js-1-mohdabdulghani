2c. Reversing an array: Arrays have a reverse method which changes the array by inverting the order in which its elements appear. For this exercise, write a function, reverseArray. The reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. Without reverse method.





function reverse(array){
    var output = [];
    for (var i = 0; i<= array.length; i++){
        output.push(array.pop());
    }

    return output;
}

console.log(reverse(["A", "B", "C"]));


