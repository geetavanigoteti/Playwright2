//problem 1 : Find last element in an list
let x = ['a', 'b', 'c', 'd'];
for (let i = 0; i < x.length; i++) {
    if (i === x.length - 1) {
        let res = x[i];
        console.log(`${res} is the last element`);
    }
}

//problem 2: Find last but one element in an list
let y = ['a', 'b', 'c', 'd'];
for (let i = 0; i < y.length; i++) {
    if (i === y.length - 2) {
        let res = y[i];
        console.log(`${res} is the last but one element`);
    }
}

//problem 3: Find the kth  element in an list
let z = ['a', 'b', 'c', 'd'];
let k = x.length / 2;
for (let i = 0; i < z.length; i++) {
    if (i === x.length - k) {
        let res = z[i];
        console.log(`${res} is the kth element`);
    }
}

// problem 4: Find the number of elements in an list
let a = ['a', 'b', 'c', 'd'];
let count = 0;
for (let i = 0; i < a.length; i++) {
    count++;
}
console.log(`${count} elements in the list`);

// problem 5: Reverse a list

let b = ['a', 'b', 'c', 'd'];
let reversed = [];
for (let i = b.length - 1; i >= 0; i--) {
    reversed.push(b[i]);
}
console.log(`Reversed list: ${reversed}`);

//preoblem 6 : Find palindrome in a list
let n = ['a', 'b', 'b', 'a'];
let ReverseList = [];
for (let i = n.length - 1; i >= 0; i--) {
    ReverseList.push(n[i]);
}
if (n.toString() === ReverseList.toString()) {
    console.log(`${n} is a palindrome`);
} else {
    console.log(`${n} is not a palindrome`);
}


// Flatten a list
function myFlatten(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) {
            // If element is an array → flatten it again
            result = result.concat(myFlatten(arr[i]));
        } else {
            // If normal value → add directly
            result.push(arr[i]);
        }

    }

    return result;
}

let input = ['a', ['b', ['c', 'd'], 'e']];
console.log(myFlatten(input));