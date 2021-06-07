game.startCountdown(40000)
let Coin = game.createSprite(randint(0, 4), randint(0, 4))
Coin.set(LedSpriteProperty.Brightness, 180)
let CHAR = game.createSprite(2, 2)
while (true) {
    if (true) {
        game.addScore(1)
        Coin.set(LedSpriteProperty.X, randint(0, 4))
        Coin.set(LedSpriteProperty.Y, randint(0, 4))
    }
    if (input.acceleration(Dimension.X) > 0) {
        CHAR.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.X) < 0) {
        CHAR.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.Y) > 0) {
        CHAR.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.X) < 0) {
        CHAR.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
}
