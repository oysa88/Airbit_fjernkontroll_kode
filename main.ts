input.onButtonPressed(Button.A, function () {
    if (Throttle < 40) {
        Throttle += -5
    } else {
        Throttle += -1
    }
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
    if (Throttle < 40) {
        Throttle += 5
    } else {
        Throttle += 1
    }
})
let Yaw = 0
let Roll = 0
let Pitch = 0
let Arm = 0
let Throttle = 0
let Radiogruppe = 1
radio.setGroup(Radiogruppe)
basic.showNumber(Radiogruppe)
pins.analogWritePin(AnalogPin.P1, 1023)
basic.forever(function () {
    Pitch = input.rotation(Rotation.Pitch)
    Roll = input.rotation(Rotation.Roll)
    basic.clearScreen()
    if (Arm == 1) {
        led.plot(0, 0)
    }
    if (pins.analogReadPin(AnalogPin.P0) > 500) {
        Yaw = -30
    } else if (pins.analogReadPin(AnalogPin.P2) > 500) {
        Yaw = 30
    } else {
        Yaw = 0
    }
    radio.sendValue("P", Pitch)
    radio.sendValue("A", Arm)
    radio.sendValue("R", Roll)
    radio.sendValue("T", Throttle)
    radio.sendValue("Y", Yaw)
})
