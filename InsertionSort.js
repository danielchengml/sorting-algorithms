//Insertion Sort splits the unsorted array into 2 segments: a sorted and unsorted segment.
//Elements from the unsorted segment are picked and inserted into the sorted segment.

let unsortedArray = [3, 4, 1, 6, 23, 5, 7];

function InsertionSort(array) {
  //The beginning of the function assumes the 1st element ie. 3 as the sorted segment with the rest being unsorted.
  for (var i=1; i<array.length; i++) { //i starts at index 1 because index 0 is regarded as the "sorted" part.
    let value = array[i]; //starting with the 2nd index of the array, the value is stored in a temp variable
    let gap = i; // a gap is set beginning at the current index
    //The while loop will essentially pick the appropriate index location for the insertion to take place.
    //This loop will shift the gap forward until the gap is at the right location.
    while (gap > 0 && array[gap-1] > value) {
      array[gap] = array[gap-1]; // the value is shifted backwards
      gap = gap-1; // the gap is shifted forward
    }
    array[gap] = value; //the value is inserted into the gap and the loop continues
  }
  return array;
}

InsertionSort(unsortedArray);
