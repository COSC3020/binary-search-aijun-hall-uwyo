function binarySearch(list, element) {
    // Assuming list is already sorted because of >given a sorted list from
    // README
    let starting_index = 0;
    let ending_index = list.length - 1;
    let result = -1;

    while (starting_index <= ending_index) {
        let middle_index = Math.floor((starting_index + ending_index) / 2);

        if (list[middle_index] === element) {
            result = middle_index;
            // Found element, but keep searching on
            // left to look for duplicates. This ensures that the first instance
            // of the element is the returned index, even if there are
            // duplicates - in a situation like [6, 6, 6] where landing in the
            // middle just returns that middle index
            ending_index = middle_index - 1;
        }

        if (list[middle_index] < element) {
            // Shift binary search to the right, since element is larger than
            // middle
            starting_index = middle_index + 1;
        } else {
            // Shift binary search to the left, since element is less than the
            // middle
            ending_index = middle_index - 1;
        }
    }

    return result;
}