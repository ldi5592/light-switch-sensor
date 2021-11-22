input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Yes)
    send = 1
    radio.sendNumber(send)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
let send = 0
radio.setGroup(69)
