const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")
let init = 0

const botSay = (data) => {
    return [
        "Hai saya botka bolehkah kita kenalan, siapa nama kamu?",
        `Halo ${data?.nama}, usia kamu berapa?`,
        `Ohh ${data?.usia}, hobi kamu apa kalo boleh tau?`,
        `wahh kamu suka ${data?.hobi}, btw rumah kamu mana nih?`,
        `Ohhh ${data?.pacar},ya udah ya gitu aja, Thank u`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []


function botStart () {  
    if (jawaban.value.length < 1) return alert("silahkan isi dulu ya!")
    init++
    if(init ===1) {
       botDelay({ nama : jawaban.value})
    } else if(init === 2) {
       botDelay({ usia : jawaban.value})
    } else if (init === 3) {
       botDelay({ hobi : jawaban.value})
    }else if (init === 4) {
       botDelay({ pacar : jawaban.value})
    }else if (init === 5) {
        finishing()
    }   else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser) [init] 
        loaders.style.display = "none"
            container[0].style.filter = "none"
    }, [1000])
    usersData.push(jawaban.value)
    jawaban.value=""
}

function finishing () {
    pertanyaan.innerHTML=`Thank u ya ${usersData[0]} udah meluangkan waktunya, semoga sehat selalu😊`
    jawaban.value = "Thanks juga!"
}

function botEnd () {
    alert
    (`Terimakasih ${usersData[0]} sudah berkunjung, anda akan diarahkan ke halaman utama`)
     window.location.reload()
}