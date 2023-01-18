input.onSound(DetectedSound.Loud, function () {
    ligaluz = !(ligaluz)
    if (true) {
        basic.showString("AMD RADEOM GRAPHICS")
    } else {
        basic.clearScreen()
    }
})
let ligaluz = false
input.setSoundThreshold(SoundThreshold.Loud, 128)
