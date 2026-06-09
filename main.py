dice = 0

def on_button_pressed_ab():
    for index in range(9):
        basic.show_leds("""
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            """)
        basic.show_leds("""
            . . . # .
            # # . # .
            . . # . .
            . # . # #
            . # . . .
            """)
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
        basic.show_leds("""
            . # . . .
            . # . # #
            . . # . .
            # # . # .
            . . . # .
            """)
        basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_gesture_shake():
    global dice
    dice = randint(1, 6)
    if dice == 1:
        basic.show_string("1")
    elif dice == 2:
        basic.show_string("2")
    elif dice == 3:
        basic.show_string("3")
    elif dice == 4:
        basic.show_string("4")
    elif dice == 5:
        basic.show_string("5")
    elif dice == 6:
        basic.show_string("6")
    basic.pause(2000)
    basic.clear_screen()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
