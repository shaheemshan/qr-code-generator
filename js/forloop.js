let rows = 5; // Number of rows for the triangle

for (let i = 1; i <= rows; i++) {
    let spaces = ''; // To store spaces
    let stars = '';  // To store stars

    // Create spaces
    for (let j = 1; j <= rows - i; j++) {
        spaces += ' '; // Add one space for each iteration
    }

    // Create stars
    for (let k = 1; k <= i; k++) {
        stars += '*'; // Add one star for each iteration
    }

    // Print the combined line of spaces and stars
    console.log(spaces + stars);
}
