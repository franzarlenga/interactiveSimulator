/*let name = prompt('Enter your name:'),
let parcial1 = parseInt(prompt('Enter the first note:'))
let parcial2 = parseInt(prompt('Enter the second note:')) 
let parcial3 = parseInt(prompt('Enter the third note:')) */

const user = {
    name:prompt('Enter your name:'),
    parcial1: parseInt(prompt('Enter the first note:')),
    parcial2: parseInt(prompt('Enter the second note:')),
    parcial3: parseInt(prompt('Enter the third note:'))
}

let noteList = [user.parcial1, user.parcial2, user.parcial3]

function noteCounter(noteList){
    let noteCounter = 0
    for (let i = 0; i < 3; i++){
        noteCounter += noteList[i];
    }
    return noteCounter
}

let counter = noteCounter(noteList)

function averageC(counter){
    let average = Math.round(counter/3)
    return average
}

let averageFinal = averageC(counter);

if(averageFinal >= 6) {
    alert ('Congratulations ' + user.name + '!' + ' you passed the Math exam with an average of ' + averageFinal)
    }else if(averageFinal < 6){
    alert (user.name + ', ' + 'see you in summer clases, your average is ' + averageFinal + ' :(')
    }

/* 



*/