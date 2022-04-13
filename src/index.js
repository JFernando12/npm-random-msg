const messages = [
    "oscar",
    "ana",
    "nicolay",
    "yesica",
    "laura",
    "diego",
    "fernando",
    "carolina",
    "paulina"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = {
    randomMsg: randomMsg
}