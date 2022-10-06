let puntua = game.createSprite(2, 2)
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        puntua.move(0.25)
    }
    if (input.buttonIsPressed(Button.A)) {
        puntua.move(-0.25)
    }
    if (input.buttonIsPressed(Button.AB)) {
        puntua.change(LedSpriteProperty.Y, 0.25)
    }
    if (input.logoIsPressed()) {
        puntua.change(LedSpriteProperty.Y, -0.25)
    }
})
