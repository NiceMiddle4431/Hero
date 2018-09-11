var Item = cc.Sprite.extend({
    type: null,
    ctor: function (type) {
        //cc.spriteFrameCache.addSpriteFrames(res.texture_PngList);
        this.type = type;
        this._super("#item" + type + ".png");
    },
    reuse: function (type) {
        this.setSpriteFrame("item" + type + ".png");
        this.type = type;
    },
    unuse:function () {
        
    }
});
Item.create = function () {
    var type = Math.floor(Math.random() * 7) + 1;
    // if(cc.pool.hasObject(Item)){
    //     return cc.pool.getFromPool(Item,type);
    // }else {
    //
    // }
    return new Item(type);

}
