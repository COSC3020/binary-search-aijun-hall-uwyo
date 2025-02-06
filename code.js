function binarySearch(list, element) {
    // Assuming list is already sorted because of >given a sorted list from README

    let starting_index = 0;
    let ending_index = list.length - 1;

    while (starting_index <= ending_index) {
        let middle_index = (starting_index + ending_index) / 2;
        middle_index = Math.floor(middle_index)

        if (list[middle_index] === element) {
            return middle_index;

    let starting_index = 1;
    let ending_index = list.length;

    while (starting_index <= ending_index) {
        let middle_index = (starting_index + ending_index) / 2;

        if (list[middle_index] == element) {
            return true;
        }

        if (list[middle_index] < element) {
            starting_index = middle_index + 1;  // Shift binary search to the right, since element is larger than middle
        } else {
            ending_index = middle_index - 1; // Shift binary search to the left, since element is less than the middle
        }
    }

    return -1;
}