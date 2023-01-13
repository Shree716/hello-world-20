input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Ghost)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    music.playMelody("E F G A B C5 D C ", 120)
    music.playMelody("C5 B A G F E F G ", 120)
    music.playMelody("F E F G A G F E ", 355)
    music.playMelody("C5 B C5 A G F G A ", 207)
})
