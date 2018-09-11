var Sound = cc.MenuItemToggle.extend({

    onOff:false,

    ctor: function () {
        //声音动画
        var sprite = this.createSpreite();

        this._super(
            new cc.MenuItemSprite(sprite,null,null),
            new cc.MenuItemImage("#soundOff.png","#soundOff.png",null)
        )
        this.setCallback(this.sountOnOff,this);
    },

    createSpreite: function () {
        //建立帧动画
        var sprite = new cc.Sprite("#soundOn0000.png");
        var animation = new cc.Animation();
        animation.addSpriteFrame(cc.spriteFrameCache.getSpriteFrame("soundOn0000.png"));
        animation.addSpriteFrame(cc.spriteFrameCache.getSpriteFrame("soundOn0001.png"));
        animation.addSpriteFrame(cc.spriteFrameCache.getSpriteFrame("soundOn0002.png"));
        animation.setDelayPerUnit(1 / 3);
        //帧动画
        var animate = cc.animate(animation);
        sprite.runAction(animate).repeatForever();
        return sprite;
    },
    //声音开关
    sountOnOff:function () {
        if(this.onOff == false){
            LogicSound.stopMusic();
            this.onOff = true;
        }else{
            LogicSound.playMusic();
            this.onOff = false;
        }

    }
})