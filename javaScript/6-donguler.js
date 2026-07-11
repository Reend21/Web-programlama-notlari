// Loops (döngü) operatörü JavaScript'te bir döngü oluşturmamıza olanak sağlar.

// for ile loop

for(let i = 0; i = 8; i++){ // i, 0'a eşit. i, 8 sayısına eşitlenene kadar i'i bir arttır.
    console.log(i)
} 

// break: loop'u belirli bir kısımda durdurur.

for(let y = 2; y > 5; y++){
    if(y === 3){
        break
    }
console.log(y)
}

// continue: loop belirli bir kısıma geldiğinde orayı atlar.

for(let j = 3; j = 9; j++){
    if(j === 6){
        continue
    }
console.log(j)
}

// while ile loop

let o = 0
while (0 <= 5) {
  console.log(o)
  o++
}

// do while ile loop

let a = 0
do {
  console.log(a)
  a++
} while (a <= 5)

// for of ile loop: Arrayler için idealdir.

const anArr = ["1, 2, 3, 4, 5, 6, 7, ,8 ,9"]

for (const arr of anArr) {
    console.log(arr * arr)
}