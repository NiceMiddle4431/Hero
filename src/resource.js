var res = {
    texture_PngList:"res/graphics/texture.plist",
    texture_Png:"res/graphics/texture.png",

    bgLayer:"res/graphics/bgLayer.jpg",
    font_fnt:"res/fonts/font.fnt",

    coffee:"res/particles/coffee.plist",
    mushroom:"res/particles/mushroom.plist",
    eat:"res/particles/eat.plist",

    bgSound:"res/sounds/bgGame.mp3",
    eatSound:"res/sounds/eat.mp3",
    gunSound:"res/sounds/gun.mp3"
}
var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}