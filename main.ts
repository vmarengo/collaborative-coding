scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    statusbar.value += -50
    tiles.replaceAllTiles(assets.tile`myTile0`, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    info.changeScoreBy(50)
    statusbar.value += 50
    tiles.replaceAllTiles(assets.tile`myTile1`, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    info.changeScoreBy(50)
    statusbar.value += 150
    tiles.replaceAllTiles(assets.tile`myTile`, assets.tile`transparency16`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (player_1.vy == 0) {
        player_1.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    statusbar.value += -100
    tiles.replaceAllTiles(assets.tile`myTile4`, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    statusbar.value += -50
    tiles.replaceAllTiles(assets.tile`myTile3`, assets.tile`transparency16`)
})
function characterSelect () {
    game.splash("choose your character!")
    pause(500)
    characterSelection = game.ask("press a for player1,", "press b for player2")
    if (controller.A.isPressed()) {
        player_1 = sprites.create(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . . b d d 5 5 5 5 5 5 5 5 b . . 
            . b d d d d 5 5 5 5 5 5 5 5 b . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            . b 5 5 b c d d 5 5 5 5 5 d b . 
            b b c c c d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `, SpriteKind.Player)
    } else {
        player_1 = sprites.create(img`
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef............
            .ffffee2222ef...........
            .fe222ffffe2f...........
            fffffffeeefff...........
            ffe44ebf44eef...........
            fee4d41fddef............
            .feee4ddddf.............
            ..fdde444ef.............
            ..fdde22ccc.............
            ...eef22cdc.............
            ...f4444cddc............
            ....fffffcddc...........
            .....fff..cddc..........
            ...........cdc..........
            ............cc..........
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Player)
    }
}
function statusBar (HP: string) {
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.positionDirection(CollisionDirection.Top)
    statusbar.value = 200
    statusbar.setColor(7, 2)
    statusbar.setLabel("HP")
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false)
})
function player1 () {
    controller.moveSprite(player_1, 100, 0)
    player_1.ay = 350
    scene.cameraFollowSprite(player_1)
    tiles.setTilemap(tilemap`level1`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    statusbar.value += -50
    tiles.replaceAllTiles(assets.tile`myTile2`, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true)
})
let characterSelection = false
let player_1: Sprite = null
let statusbar: StatusBarSprite = null
characterSelect()
player1()
statusBar("HP")
info.setScore(0)
while (info.score() == 100) {
    statusbar.value = 200
}
