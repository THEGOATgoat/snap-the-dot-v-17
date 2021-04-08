gamerbit.onEvent(GamerBitPin.P12, GamerBitEvent.Down, function () {
    radio.setGroup(12)
    radio.setTransmitPower(7)
    radio.sendNumber(25)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > high_score) {
        high_score = receivedNumber
    }
})
input.onButtonPressed(Button.A, function () {
    control.reset()
})
gamerbit.onEvent(GamerBitPin.P16, GamerBitEvent.Down, function () {
    radio.setGroup(74)
    radio.setTransmitPower(1)
    radio.sendNumber(84)
})
gamerbit.onEvent(GamerBitPin.P1, GamerBitEvent.Down, function () {
    game.pause()
})
gamerbit.onEvent(GamerBitPin.P8, GamerBitEvent.Down, function () {
    radio.setGroup(42)
    radio.setTransmitPower(4)
    radio.sendNumber(22)
})
gamerbit.onEvent(GamerBitPin.P2, GamerBitEvent.Down, function () {
    game.resume()
})
gamerbit.onEvent(GamerBitPin.P0, GamerBitEvent.Down, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        score += 1
        game.addScore(1)
    } else {
        if (score > high_score) {
            basic.showString("YOUBEATTHEHIGHSCORE!")
            basic.showNumber(high_score)
            radio.sendNumber(score)
            score = high_score
        } else {
            basic.showString("SCORE")
            basic.showNumber(score)
            basic.showString("HIGHSCORE")
            basic.showNumber(high_score)
            score = 0
        }
    }
})
let score = 0
let sprite: game.LedSprite = null
let high_score = 0
let value = 0
high_score = 0
let speed = 500
sprite = game.createSprite(2, 2)
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(500)
    if (game.score() > 15) {
        speed = 400
    } else if (game.score() > 30) {
        speed = 300
    } else if (game.score() > 45) {
        speed = 200
    } else if (game.score() > 45) {
        speed = 100
    } else if (game.score() > 60) {
        basic.showString("GETASMANYPOINTSINTHENEXT50SECONDS.")
        game.startCountdown(50000)
    }
})
