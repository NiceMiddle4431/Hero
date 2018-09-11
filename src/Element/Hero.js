var Hero = cc.Sprite.extend({

    _targetX: 400,
    _targetY: 400,
    _animation: null,
    _fast: false,
    ctor: function () {
        this._super("#fly_0001.png");
        this.x = 100;
        this.y = 100;
        this._animation = new cc.Animation();

        for (var i = 1; i < 20; i++) {
            this._animation.addSpriteFrame
            (cc.spriteFrameCache.getSpriteFrame
            ("fly_00" + (i < 10 ? ('0' + i) : i) + ".png"));
        }
        this._animation.setDelayPerUnit(1 / 20);
        var animate = new cc.Animate(this._animation).repeatForever();

        this.runAction(animate);
        this.scheduleUpdate();
    },
    fly: function () {
        this.x += (Game.user.targetX - this.x) * 0.1;
        this.y += (Game.user.targetY - this.y) * 0.1;
    },
    rotate: function () {
        var angle = -(this._targetY - this.y) * 0.1;
        this.attr({
            rotation: angle
        });
    },
    update: function () {
        this.fly();
        this.rotate();

        if (Game.user.coffeeValue > 0) {
            Game.user.coffeeValue -= 0.5;
            Game.user.speed = 100;
        } else {
            Game.user.coffeeValue = -10;
            Game.user.speed = 50;
        }

        if (Game.user.mushroomValue > 0) {
            Game.user.mushroomValue -= 0.5;
        }

    }
})