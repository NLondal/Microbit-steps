let steps = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
    basic.showIcon(IconNames.Happy)
    control.waitMicros(10000)
    basic.showNumber((steps * 18) / 63360)
    basic.showString("Miles!")
    control.waitMicros(10000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    steps = 0
})
basic.forever(function () {
    input.acceleration(Dimension.X)
if (input.acceleration(Dimension.X) >= 1500) {
        steps = steps + 1
    }
})