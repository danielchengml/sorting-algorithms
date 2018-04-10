// Selection Sort Algorithm
// This method moves systematically through the array, selecting the
//minimum unsorted value and placing it in the sorted basket.

let unsortedArray = [3, 4, 1, 6, 23, 5, 7];

// for the 1st pass, I will select the minimum value from index 0 to index 6 and replace index 0 with it;
// for the 2nd pass, I will select the minimum value from index 1 to index 6 and replace index 1 with it;

function SelectionSort(array) {
  for (var i=0; i<array.length-1; i++) {
    let swap = false;
    let iMin = i; // Setting the initial minimum value as the 1st unsorted item
    // This for loop compares each subsequent item with the previous minimum value and replaces it if the value is smaller.
    for (var j=i; j<array.length; j++) {
      if (array[j]< array[iMin]){
        iMin = j;
        swap = true;
      }
    }
    if (swap == true) {
      let temp = array[i];
      array[i] = array[iMin];
      array[iMin] = temp;
    }
  }
  return array;
}

SelectionSort(unsortedArray);
