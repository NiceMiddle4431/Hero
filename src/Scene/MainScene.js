var MainScene = cc.Scene.extend({

    FoodManage: null,
    _hero: null,
    _coffee: null,
    _mushroom: null,

    onEnter: function () {
        this._super();
        var size = cc.winSize;
        var bg = new BGLayer();
        this.addChild(bg);
        var ui = new UILayer();
        this.addChild(ui);

        this.FoodManage = new FoodManage(this);

        this._hero = new Hero();
        this.addChild(this._hero);

        var listener = this.addListener();
        cc.eventManager.addListener(listener, this);
        LogicSound.playMusic();
        this.scheduleUpdate();

    },
    addListener: function () {
        var listener = cc.EventListener.create({
            event: cc.EventListener.MOUSE,
            onMouseMove: function (event) {
                var pos = event.getLocation();
                Game.user.targetX = pos.x;
                Game.user.targetY = pos.y;
            }.bind(this)
        });
        return listener;
    },
    update: function (time) {
        //console.log("time:"+time);
        this.FoodManage.update(this._hero, time);

        if (Game.user.coffeeValue > 0) {
            this.showCoffee();
        } else {
            this.stopCoffee();
        }
        if (Game.user.mushroomValue > 0) {
            this.showMushroom();
        } else {
            this.stopMushroom();
        }
        console.log("this._coffee;"+this._coffee);
        console.log("this._mushroom;"+this._mushroom);
        console.log("Game.user.coffeeValue;"+Game.user.coffeeValue);
        console.log("Game.user.mushroomValue;"+Game.user.mushroomValue);
    },

    showCoffee: function () {
        if (this._coffee == null) {
            this._coffee = new cc.ParticleSystem(res.coffee);
            this.addChild(this._coffee);
        } else {
            this._coffee.x = this._hero.x - this._hero.widget / 2;
            this._coffee.y = this._hero.y;
        }
    },
    stopCoffee: function () {
        if (this._coffee) {
            this.removeChild(this._coffee);
            this._coffee.stopSystem();
            this._coffee = null;
        }
    },
    showMushroom: function () {
        if (this._mushroom == null) {
            this._mushroom = new cc.ParticleSystem(res.mushroom);
            this.addChild(this._mushroom);
        } else {
            this._mushroom.x = this._hero.x - this._hero.width / 2;
            this._mushroom.y = this._hero.y;
        }
    },
    stopMushroom: function () {
        if (this._mushroom) {
            this.removeChild(this._mushroom);
            this._mushroom.stopSystem();
            this._mushroom = null;
        }
    }
})