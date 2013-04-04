// a32 format convertions

function a32_to_byteArray(a) {
    var b = Array();
    for (var i = 0; i < a.length * 4; i++) b.push((a[i >> 2] >>> (24 - (i & 3) * 8)) & 255);
    return b;
}

function byteArray_to_a32(byteArray) {
    var a = Array((byteArray.length + 3) >> 2);
    for (var i = 0; i < byteArray.length; i++) a[i >> 2] |= (byteArray[i] << (24 - (i & 3) * 8));
    return a;
}

function a32_to_byteStringArray(a) {
    var b = Array();
    for (var i = 0; i < a.length * 4; i++) {
        var byteValue = (a[i >> 2] >>> (24 - (i & 3) * 8)) & 255;
        b.push(("00" + byteValue.toString(16)).substr(-2));
    }
    return b.join(':');
}

function byteStringArray_to_a32(stringArray) {
    var bytes = stringArray.split(':');
    var byteArray = Array(bytes.length);
    for (var i = 0; i < bytes.length; i++) {
        byteArray[i] = parseInt(bytes[i], 16);
    }
    var a = Array((byteArray.length + 3) >> 2);
    for (var i = 0; i < byteArray.length; i++) a[i >> 2] |= (byteArray[i] << (24 - (i & 3) * 8));
    return a;
}

// some helper methods

function arraysEqual(ar1, ar2) {
    if (ar1.length != ar2.length) return false;
    for (var i = 0; i < ar1.length; i++) if (ar1[i] != ar2[i]) return false;
    return true;
}

function getValidFileCount(array) {
    var count = 0;
    for (var fileIndex = 0; fileIndex < array.length; fileIndex++) {
        var keyString = array[fileIndex].k;
        var p = keyString.indexOf(u_handle + ':');
        var pp = keyString.indexOf('/', p);
        if (pp < 0) pp = keyString.length;
        p += u_handle.length + 1;
        var encryptedKey = keyString.substr(p, pp - p);
        // we have found a suitable key: decrypt!
        if (encryptedKey.length < 46) {
            // short keys: AES
            var k = base64_to_a32(encryptedKey);
            // check for permitted key lengths (4 == folder, 8 == file)
            if (k.length == 4 || k.length == 8) {
                count++;
            }
        }
    };
    return count;
}