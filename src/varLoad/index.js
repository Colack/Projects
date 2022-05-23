// Language: javascript
// Path: index.js

function writeFalse(id) {
    fs.readFile('./bin/data.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            var obj = JSON.parse(data);
            obj.id = id;
            obj.value = false;
            fs.writeFile('./data.json', JSON.stringify(obj), 'utf8', function writeFileCallback(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Successfully Written to File.');
                }
            });
        }
    });
}


function writeTrue(id) {
    fs.readFile('./bin/data.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            var obj = JSON.parse(data);
            obj.id = id;
            obj.value = true;
            fs.writeFile('./data.json', JSON.stringify(obj), 'utf8', function writeFileCallback(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Successfully Written to File.');
                }
            });
        }
    });
}

function readAll() {
    fs.readFile('./bin/data.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            var obj = JSON.parse(data);
            for (var i = 0; i < obj.length; i++) {
                if (obj[i].unlocked == true) {
                    console.log(obj[i].description);
                }
            }
        }
    });
}

function reset() {
    fs.readFile('./bin/data.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            var obj = JSON.parse(data);
            for (var i = 0; i < obj.length; i++) {
                obj[i].unlocked = false;
            }
            fs.writeFile('./bin/data.json', JSON.stringify(obj), 'utf8', function writeFileCallback(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Successfully Written to File.');
                }
            });
        }
    });
}

function unlockAll() {
    fs.readFile('./bin/data.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            var obj = JSON.parse(data);
            for (var i = 0; i < obj.length; i++) {
                obj[i].unlocked = true;
            }
            fs.writeFile('./bin/data.json', JSON.stringify(obj), 'utf8', function writeFileCallback(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Successfully Written to File.');
                }
            });
        }
    });
}
