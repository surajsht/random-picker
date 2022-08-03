// let input = document.querySelector("textarea")
// let randomContainer = document.querySelector(".random-item-container")

// input.focus()

// input.addEventListener("keyup", function (e) {
//   if (e.key === "Enter") {
//     randomSelect()
//   }

//   let inVal = input.value
//   let splitVal = inVal
//     .split(",")
//     .filter(function (item) {
//       return item.trim() !== ""
//     })
//     .map(function (item) {
//       return item.trim()
//     })

//   randomContainer.innerHTML = ""

//   splitVal.forEach(function (item) {
//     let span = document.createElement("span")
//     span.classList.add("tag")
//     span.innerText = item
//     randomContainer.appendChild(span)
//   })
// })

// function randomSelect() {
//   let interval = setInterval(function () {
//     let randomTag = pickRandomTag()

//     highLightTag(randomTag)

//     setTimeout(function(){
//         unHighLightTag(randomTag)
//     },100)
//   }, 100)
// }

// function pickRandomTag() {
//   let tag = document.querySelectorAll(".tag")
//   return tag[Math.floor(Math.random() * tag.length)]
// }

// function highLightTag(tag) {
//   tag.classList.add("highlight")
// }

// function unHighLightTag(tag) {
//   tag.classList.remove("highlight")
// }

let input = document.querySelector("textarea")
let randomContainer = document.querySelector(".random-item-container")

input.focus()

input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    let setTime = setInterval(function () {
      let tag = document.querySelectorAll(".tag")
      let randomNumber = Math.floor(Math.random() * tag.length)
      tag[randomNumber].classList.add("highlight")

      setTimeout(function () {
        tag[randomNumber].classList.remove("highlight")
      }, 100)
    }, 100)

    setTimeout(function () {
      clearInterval(setTime)
      let tag = document.querySelectorAll(".tag")
      let randomNumber = Math.floor(Math.random() * tag.length)
      tag[randomNumber].classList.add("highlight")
    }, 3000)
  }

  let inVal = input.value
  let splitVal = inVal
    .split(",")
    .filter(function (item) {
      return item.trim() !== ""
    })
    .map(function (item) {
      return item.trim()
    })

  randomContainer.innerHTML = ""

  splitVal.forEach(function (item) {
    let span = document.createElement("span")
    span.classList.add("tag")
    span.innerText = item
    randomContainer.appendChild(span)
  })
})
