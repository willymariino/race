const scene = document.getElementById("scene")
const startButton = document.getElementById("start")
const result = document.getElementById("results")

let isGameOver = false

//DATASET
const cars = [
  {
    name: "Luigi",
    trackColor: "red",
    id: "car-1",
    increment: 0,
    currentPosition: 0,
    time: 0,
  },
  {
    name: "Marco",
    trackColor: "brown",
    id: "car-2",
    increment: 0,
    currentPosition: 0,
    time: 0,
  },
  {
    name: "Alfredo",
    trackColor: "olive",
    id: "car-3",
    increment: 0,
    currentPosition: 0,
    time: 0,
  },
  {
    name: "Alessandro",
    trackColor: "navy",
    id: "car-4",
    increment: 0,
    currentPosition: 0,
    time: 0,
  },
];

function createScene() {

  cars.forEach(car => {


    car.currentPosition = 0
    car.time = 0
    car.increment = getRandom(10, 60)


    const track = document.createElement("div")
    track.classList.add("track")
    track.style.background = car.trackColor

    const carImage = document.createElement("img")
    carImage.src = `./img/${car.id}.png` // "./img/" + car.id + ".png"
    carImage.classList.add("car")
    carImage.id = car.id
    track.append(carImage)

    const name = document.createElement("p")
    name.innerText = car.name
    name.classList.add("name")
    track.append(name)


    scene.append(track)

  })

}

function getRandom(min, max) {

  const number = Math.floor(Math.random() * (max - min + 1)) + min

  return number
}

startButton.addEventListener("click", () => {

  const refresh = 123

  if (isGameOver === false) {

    const startCar = setInterval(function () {

      cars.forEach(car => {
        car.currentPosition += car.increment
        car.time += refresh

        if (car.currentPosition >= 800) {
          clearInterval(startCar)
          document.getElementById(car.id).style.left = "805px"
          gameOver()
        }
        else {
          document.getElementById(car.id).style.left = car.currentPosition + "px"
        }
      })

    }, refresh)
  }

})

function gameOver() {
  isGameOver = true

  const sortedResult = cars.sort((a, b) => a.time - b.time)

  result.innerHTML = ""
  sortedResult.forEach((element, index) => {
    result.innerHTML += `<div class="${index === 0 ? 'winner' : ''}">${element.name} ${(element.time / 1000).toFixed(3)} </div>`
  });

}

createScene()