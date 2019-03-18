function passTheDoorMan (word){
    let arr = word.split('')
    let key = ""
    arr.forEach((letter, index) => {
        if (letter === arr[index + 1]){
            key = letter
        }
        console.log(key, letter, arr[index + 1])
    })
    console.log((key.charCodeAt(0) - 97) * 3)
}

passTheDoorMan("avesxitww")