// Quick Sort Algorithm
// This method is a recursive algorithm using a "divide and conquer" strategy.
// It is a quick and efficient way of sorting large datasets.


// This function receives the array with the lower and upper boundary (start & end) to sort for
function QuickSort(array, start, end) {
  if(start < end) {
    console.log("start: "+start+" end: "+end);
    // This method partitions the segment into 2 parts separated by the pivot.
    // This method also sorts the values. Values < = pivot are sent to the left and  values > pivot are sent to the right.
    partitionIndex = Partition(array, start, end);
    console.log("partitionIndex: "+ partitionIndex);
    QuickSort(array, start, partitionIndex -1);
    QuickSort(array, partitionIndex + 1, end);
  }
}

// This function uses the last item in the scoped array as a pivot.
// The function then finds all the items which values are less than the pivot value and rearranges it to be before the pivot.
// The function returns the index value of the rearranged pivot.
function Partition(array, start, end) {
  let pivot = array[end]; // Setting the pivot as the last item of the array
  let partitionIndex = start; // Setting initial partition index as the starting of the array segment
  for (var i = start ; i < end; i++) {
    // if the item's value is less than the pivot value, the item is sent to the front of the set.
    if (array[i] <= pivot) {
      let swap = array[partitionIndex]; // stores the value of the partitionIndex in temporarily
      array[partitionIndex] = array[i]; // replaces the value of partitionIndex with a new value which is smaller than pivot
      array[i] = swap; // Saves the temporarily stored value in the index i location.
      partitionIndex++; // Partition moves to the next item
    }
  }

  let temp = array[end];
  array[end] = array[partitionIndex];
  array[partitionIndex] = temp;

  console.log("array: ["+partitionIndex+"]"+array)
  return partitionIndex;
}

function main() {
  let unsortedArray = [3, 4, 1, 5, 23, 12, 7, 16, 9, 10, 8];
  QuickSort(unsortedArray, 0, 10);
  console.log(unsortedArray);
}

main();
