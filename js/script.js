const scene = document.getElementById("scene")
const startButton = document.getElementById("start")


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

  const startCar = setInterval(function () {

    cars.forEach(car => {
      car.currentPosition += car.increment


    }

    )

  }, 1000)


})

createScene()