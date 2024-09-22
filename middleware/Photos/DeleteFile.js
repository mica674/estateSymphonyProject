const fs = require('fs');
const path = require('path');

const deleteFile = (filePath, callback) => {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error while deleting file:', err);
            callback(err);
        } else {
            console.log('File deleted successfully');
            callback(null);
        }
    });
};

module.exports = deleteFile;
