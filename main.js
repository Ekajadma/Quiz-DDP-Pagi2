const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let score = 0,
  correctAns = 0,
  wrongAns = 0
let q1 = `
Siapakah member jkt48 ?
A: Jokowi
B: Freya
C: Nadin Amizah
D: Igun Mama takut
Jawaban Anda: `,


q2 = `
Nama kakak Upin dan Ipin adalah...?
A: kak rose
B: kak jeane
C: kak seto
D: kak igun
Jawaban Anda: `, 


q3 = `
Nama Hokage ke 7 siapa ?
A: Naruto
B: Sumanto
C: Sugiono
D: Itachi
Jawaban Anda: `,


q4 = `
Nama Hokage ke 1 siapa ?
A: Naruto
B: Sumanto
C: Sugiono
D: Itachi
E: Hasirama
Jawaban Anda: `,


q5 = `
Nama Biju ke 9 siapa ?
A: Kyubi
B: Luki
C: Blacky
D: Roki
E: Sanju
Jawaban Anda: `




rl.question('Masukkan nama Anda: ', (input) => {
  rl.question(q1, (ans1) => {
    if (ans1 == 'B' || ans1 == 'b' ) {
      score++
      correctAns++
    } else {
      wrongAns++
    }
    rl.question(q2, (ans2) => {
      if (ans2 == 'A'|| ans2 == 'a') {
        score++
        correctAns++
      } else {
        wrongAns++
      }
      rl.question(q3, (ans3) => {
        if (ans3 == 'A'|| ans3 == 'a') {
          score++
          correctAns++
        } else {
          wrongAns++
        }
    rl.question(q4, (ans4) => {
        if (ans4 == 'E'|| ans4 == 'e') {
           score++
           correctAns++
        } else {
          wrongAns++
        }
    rl.question(q5, (ans5) => {
        if (ans5 == 'A'|| ans5 == 'b') {
            score++
            correctAns++
        } else {
          wrongAns++
            }
        
        console.log('Kuis Selesai')
        console.log('-----')
        console.log('Statistik Kuis')
        console.log(`Nama: ${input}`)
        console.log(`Nilai: ${score}`)
        console.log(`Jawaban Benar: ${correctAns}`)
        console.log(`Jawaban Salah: ${wrongAns}`)
        rl.close()
      })
    })
  })

})
  })
  })

