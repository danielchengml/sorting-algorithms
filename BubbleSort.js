//Bubble Sort Algorithm

var unsortedArray = [2, 4, 5, 1, 6, 3, 2];

function BubbleSort(array) {
  for (var j = 0; j <array.length-1; j++){
    let swap = false;
    for (var i = 1; i < array.length-1-j; i++){
      console.log("hello"+ array[i-1]);
      if (array[i] < array[i-1]){
        var temp = array[i]; //stores the smaller value
        array[i] = array[i-1]; //puts the larger value at the back
        array[i-1] = temp; //relocates the smaller value at the front
        swap = true;
      }
    }
    if (swap === false){break;} //breaks the loop if no swaps happen. This means that the entire array is sorted.
  }
  return array;
}

BubbleSort(unsortedArray.slice());