input.onButtonPressed(Button.A, function () {
	
})
let キャッチャー = game.createSprite(2, 4)
let りんご = game.createSprite(randint(0, 4), 0)
basic.pause(100)
game.setScore(0)
basic.forever(function () {
    if (りんご.get(LedSpriteProperty.Y) == 4) {
        りんご.set(LedSpriteProperty.Y, 0)
        りんご.set(LedSpriteProperty.Y, randint(0, 4))
    } else {
        りんご.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(1000)
})
