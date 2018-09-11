var test = cc.Scene.extend({

    onEnter: function () {
        var size = cc.winSize;
        var item = new Item.create();
        item.x = size.width / 2;
        item.y = size.height / 2;
        this.addChild(item);
    }
})