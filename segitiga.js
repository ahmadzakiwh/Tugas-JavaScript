function segitiga(n) {
    let col = ""
    for(let i = 0; i < n; i++){
        for (let j = n; j > i; j--) {
            col += "*"
        }
        col += "\n"
    }
    return col;
}

console.log(segitiga(5));