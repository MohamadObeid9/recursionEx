const mergeSort = (arr: number[]) => {
  if (arr.length === 0 || arr.length === 1) return arr;
  else {
    let firstHalf = arr.slice(0, Math.floor(arr.length / 2));
    let secondHalf = arr.slice(Math.floor(arr.length / 2));

    firstHalf = mergeSort(firstHalf);
    secondHalf = mergeSort(secondHalf);
    let k = 0;
    let i = 0;
    let j = 0;

    while (i < firstHalf.length && j < secondHalf.length) {
      if (firstHalf[i] <= secondHalf[j]) {
        arr[k] = firstHalf[i];
        i++;
      } else {
        arr[k] = secondHalf[j];
        j++;
      }
      k++;
    }

    while (i < firstHalf.length) {
      arr[k] = firstHalf[i];
      i++;
      k++;
    }

    while (j < secondHalf.length) {
      arr[k] = secondHalf[j];
      j++;
      k++;
    }

    return arr;
  }
};

const arr = [3, 5, 1, 2, 4, 7, 6, 9, 8, 10];
console.log(mergeSort(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
