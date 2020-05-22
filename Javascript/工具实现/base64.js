//base64 string 转 Blob
function string2Blob(value){
    value = atob(value);
    let n = value.length;
    u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = value.charCodeAt(n);
    }
    return new Blob([u8arr]);
}