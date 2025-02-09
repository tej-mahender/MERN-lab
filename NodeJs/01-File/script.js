const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

// Function to write to a file
function writeFile() {
    fs.writeFile(filePath, 'Hello, this is a sample text file.\n', 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File written successfully.');
        }
    });
}

// Function to read from a file
function readFile() {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
        } else {
            console.log('File content:');
            console.log(data);
        }
    });
}

// Function to append data to a file
function appendFile() {
    fs.appendFile(filePath, 'This is an appended text.\n', (err) => {
        if (err) {
            console.error('Error appending file:', err);
        } else {
            console.log('File append operation completed.');
        }
    });
}

// Function to delete a file
function deleteFile() {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error deleting file:', err);
        } else {
            console.log('File deleted successfully.');
        }
    });
}

// Call the functions one by one for demonstration
writeFile();   // Step 1: Write file

setTimeout(() => {
    readFile(); // Step 2: Read file

    setTimeout(() => {
        appendFile(); // Step 3: Append file

        setTimeout(() => {
            readFile(); // Step 4: Read after appending

            setTimeout(() => {
                deleteFile(); // Step 5: Delete file
            }, 2000);

        }, 2000);

    }, 2000);

}, 2000);
