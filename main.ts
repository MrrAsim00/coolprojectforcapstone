let dice = 0
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    for (let index = 0; index < 9; index++) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . # .
            # # . # .
            . . # . .
            . # . # #
            . # . . .
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . # . . .
            . # . # #
            . . # . .
            # # . # .
            . . . # .
            `)
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    dice = randint(1, 6)
    if (dice == 1) {
        basic.showString("1")
    } else if (dice == 2) {
        basic.showString("2")
    } else if (dice == 3) {
        basic.showString("3")
    } else if (dice == 4) {
        basic.showString("4")
    } else if (dice == 5) {
        basic.showString("5")
    } else if (dice == 6) {
        basic.showString("6")
    }
    
    basic.pause(2000)
    basic.clearScreen()
})
