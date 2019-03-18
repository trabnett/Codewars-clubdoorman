function passTheDoorMan (word){
    let arr = word.split('')
    let key = ""
    arr.forEach((letter, index) => {
        if (letter === arr[index + 1]){
            key = letter
        }
    })
    return (key.charCodeAt(0) - 96) * 3
}

