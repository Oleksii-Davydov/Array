let length = prompt('Please, enter the length of the array');
length = parseInt(length);
if (!isNaN(length)) {
    let array = [];
    let item = '';
    for (let i = 0; i < length; i++) {
        item = prompt('Please, enter array item');

        if (item === null) {
            console.log("Sorry, you didn't enter a value.");
            break;
        }
        array.push(item);
    }
    if (array.length === length) {
        console.log('Array: ', array);
        console.log('The array in ascending order: ', array.sort());
        if (array.length > 3) {
            array.splice(1, 3)
            console.log('Array in which items from 2 to 4 were cut.: ', array.sort());
        }
    }
}