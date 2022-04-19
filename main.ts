input.onButtonPressed(Button.A, function () {
    Guess += 1
    basic.showNumber(Guess)
})
input.onButtonPressed(Button.AB, function () {
    if (Guess == Secret_number) {
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (Guess == Secret_number) {
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . #
            # . . # .
            . # # . .
            . . . . .
            `)
    } else {
        basic.clearScreen()
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . . . .
            `)
    }
    basic.clearScreen()
    counter += 1
    basic.showNumber(counter)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Guess += -1
    basic.showNumber(Guess)
})
let Guess = 0
let Secret_number = 0
let counter = 0
counter = 0
Secret_number = randint(0, 20)
basic.showNumber(Guess)
basic.forever(function () {
	
})
