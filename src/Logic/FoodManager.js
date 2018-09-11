var FoodManage = cc.Class.extend({
    _scene: null,
    //1代表水平,2代表垂直
    _pattern: 1,
    _items: null,
    _distance: 100,
    _positionY: null,
    ctor: function (scene) {
        this._scene = scene;
        this._items = [];
    },
    update: function (hero, time) {
        // console.log("time*100:"+time);
        //console.log("FoodManager.update成功启动");
        this.createPatten(time);
        //console.log("FoodManager.createPatten成功启动");
        this.createItem(time);
        //console.log("FoodManager.createItem成功启动");
        this.animateItem(hero, time);
        //console.log("FoodManager.animateItem成功启动");
    },
    createPatten: function () {
        //console.log("_distance:"+this._distance);
        if (this._distance > 0) {
            return;
        }
        this._pattern = Math.floor(Math.random() * 2) + 1;
        // console.log("_pattern:"+this._pattern);
        switch (this._pattern) {
            case 1:
                this._distance = 100;
                break;
            case 2:
                this._distance = 120;
                this._positionY = Math.random() * (cc.winSize.height - 100);
                break;
            case 3:
                this._distance = 110;
                break;
            case 4:
                this._distance = 100 + Math.random() * 10;
                break;
        }
    },
    createItem: function (time) {
        //console.log("_pattern:"+this._pattern);
        switch (this._pattern) {
            case 1:
                this._distance -= Game.user.speed * time;
                if (Math.random() > 0.9) {
                    var item = Item.create();
                    //console.log("item.type:" + item.type);
                    var size = cc.winSize;
                    item.x = size.width + 20;
                    item.y = Math.floor(Math.random() * (size.height - 100));

                    this._scene.removeChild(item);
                    this._scene.addChild(item);
                    this._items.push(item);
                }
                break;
            case 2:
                this._distance -= Game.user.speed * time;
                if (Math.random() > 0.9) {
                    var item = Item.create();
                    //console.log("item.type:" + item.type);
                    var size = cc.winSize;
                    item.x = size.width + 20;
                    item.y = this._positionY;
                    this._scene.removeChild(item);
                    this._scene.addChild(item);
                    this._items.push(item);
                }
                break;
        }
    },
    animateItem: function (hero, time) {
        //console.log(this._items.length);
        for (var i = 0; i < this._items.length; i++) {
            if (Game.user.mushroomValue > 0) {
                this._items[i].x += (hero.x - this._items[i].x) / 10;
                this._items[i].y += (hero.y - this._items[i].y) / 10;
            } else {
                this._items[i].x -= 50 * time;
            }
            //通过坐标检测碰撞
            var item = this._items[i];
            var heroItem_xDist = item.x - hero.x;
            var heroItem_yDist = item.y - hero.y;
            var heroItem_sqDist = heroItem_xDist * heroItem_xDist + heroItem_yDist * heroItem_yDist;
            //坐标距离绝对值小于一定值时消失，计算得分
            if (heroItem_sqDist < 5000) {
                var eat = new cc.ParticleSystem(res.eat);
                eat.x = hero.x - hero.width / 2;
                eat.y = hero.y;
                this._scene.addChild(eat);
                if (item.type == 6) {
                    Game.user.coffeeValue += 100;
                }
                if (item.type == 7) {
                    Game.user.mushroomValue += 100;
                }
                this._scene.removeChild(item);
                //cc.pool.putInPool(item);
                this._items.splice(i, 1);
                //积分
                Game.user.score++;
                LogicSound.playEffect();
                return;
            }
            if (this._items[i].x < -10) {
                this._scene.removeChild(this._items[i]);
                //cc.pool.putInPool(this._items[i]);
                this._items.splice(i, 1);
            }
        }
    }
})