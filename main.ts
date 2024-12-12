input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(playerScore)
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
let Enemy: game.LedSprite = null
let playerScore = 0
let player: game.LedSprite = null
player = game.createSprite(2, 4)
let playerLevens = 3
playerScore = 0
basic.forever(function () {
    Enemy = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        Enemy.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    basic.pause(10)
    if (Enemy.isTouching(player)) {
        playerLevens += -1
    } else {
        Enemy.delete()
        playerScore += 1
    }
    Enemy.delete()
    if (playerLevens < 0) {
        player.delete()
        game.gameOver()
    }
})
