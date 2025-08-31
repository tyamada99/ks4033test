function サーボテスト () {
    pins.servoWritePin(AnalogPin.P2, 0)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P2, 90)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.pause(500)
}
function モーターＢテスト () {
    pins.analogWritePin(AnalogPin.P15, 500)
    pins.analogWritePin(AnalogPin.P16, 0)
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 500)
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
    basic.pause(500)
}
function モーターＡテスト () {
    pins.analogWritePin(AnalogPin.P12, 500)
    pins.analogWritePin(AnalogPin.P13, 0)
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P13, 500)
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P13, 0)
    basic.pause(500)
}
input.onButtonPressed(Button.A, function () {
    番号 += 1
    if (番号 == 5) {
        番号 = 0
    }
})
function 超音波センサテスト () {
    距離 = 0
    while (距離 == 0) {
        距離 = sonar.ping(
        DigitalPin.P0,
        DigitalPin.P1,
        PingUnit.Centimeters
        )
    }
    led.plotBarGraph(
    距離,
    300
    )
    basic.pause(200)
}
let 距離 = 0
let 番号 = 0
pins.servoWritePin(AnalogPin.P2, 90)
番号 = 0
basic.forever(function () {
    if (番号 == 1) {
        超音波センサテスト()
    } else if (番号 == 2) {
        basic.clearScreen()
        サーボテスト()
    } else if (番号 == 3) {
        basic.clearScreen()
        モーターＡテスト()
    } else if (番号 == 4) {
        basic.clearScreen()
        モーターＢテスト()
    } else {
        basic.clearScreen()
        basic.pause(200)
    }
})
