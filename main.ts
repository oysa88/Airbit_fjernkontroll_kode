input.onButtonPressed(Button.A, function () {
    Throttle += -5
})
input.onGesture(Gesture.ScreenDown, function () {
    Throttle = 0
    Arm = 0
})
input.onGesture(Gesture.Shake, function () {
    Throttle = 0
    Arm = 0
})
input.onButtonPressed(Button.AB, function () {
    if (Arm == 0) {
        Arm = 1
    } else {
        Arm = 0
    }
    Throttle = 0
})
input.onButtonPressed(Button.B, function () {
    Throttle += 5
})
let Roll = 0
let Pitch = 0
let Arm = 0
let Throttle = 0
let radioGroup = 7
radio.setGroup(radioGroup)
basic.showNumber(radioGroup)
basic.forever(function () {
    Pitch = input.rotation(Rotation.Pitch)
    Roll = input.rotation(Rotation.Roll)
    basic.clearScreen()
    if (Arm == 1) {
        led.plot(0, 0)
    }
    led.plot(0, Math.map(Throttle, 0, 100, 4, 0))
    led.plot(Math.map(Roll, -45, 45, 0, 4), Math.map(Pitch, -45, 45, 0, 4))
    radio.sendValue("P", Pitch)
    radio.sendValue("A", Arm)
    radio.sendValue("R", Roll)
    radio.sendValue("T", Throttle)
})
