input.onButtonPressed(Button.A, function () {
    スロットオン = 0
})
let スロットオン = 0
スロットオン = 1
let 順番 = 0
let アイコンズ = [
images.iconImage(IconNames.Sad),
images.iconImage(IconNames.Confused),
images.iconImage(IconNames.Angry),
images.iconImage(IconNames.Happy)
]
basic.forever(function () {
    if (スロットオン == 1) {
        アイコンズ[順番].showImage(0, 0)
        順番 += 1
        if (順番 >= アイコンズ.length) {
            順番 = 0
        }
        basic.pause(500)
    }
})
