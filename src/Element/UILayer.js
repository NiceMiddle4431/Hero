var UILayer = cc.Layer.extend({
    lblDistanceScore: null,
    lblScoreScore: null,
    distanceScore:null,
    ctor: function () {

        this._super();
        var size = cc.winSize;
        //生命
        var lblLifeTxt = new cc.LabelBMFont("LIFE", res.font_fnt, 100, cc.TEXT_ALIGNMENT_CENTER);
        lblLifeTxt.x = 300;
        lblLifeTxt.y = size.height - 45;
        this.addChild(lblLifeTxt);
        var lblLifeScore = new cc.LabelBMFont("0", res.font_fnt, 100, cc.TEXT_ALIGNMENT_CENTER);
        lblLifeScore.x = 300;
        lblLifeScore.y = size.height - 75;
        this.addChild(lblLifeScore);
        //距离
        var lblDistanceTxt = new cc.LabelBMFont("Distance", res.font_fnt, 150, cc.TEXT_ALIGNMENT_CENTER);
        lblDistanceTxt.x = 450;
        lblDistanceTxt.y = size.height - 45;
        this.addChild(lblDistanceTxt);
        this.lblDistanceScore  = new cc.LabelBMFont("0", res.font_fnt, 100, cc.TEXT_ALIGNMENT_CENTER);
        this.lblDistanceScore.x = 450;
        this.lblDistanceScore.y = size.height - 75;
        this.addChild(this.lblDistanceScore);
        //得分
        var lblScoreTxt = new cc.LabelBMFont("Score", res.font_fnt, 100, cc.TEXT_ALIGNMENT_CENTER);
        lblScoreTxt.x = 600;
        lblScoreTxt.y = size.height - 45;
        this.addChild(lblScoreTxt);
        this.lblScoreScore = new cc.LabelBMFont("0", res.font_fnt, 100, cc.TEXT_ALIGNMENT_CENTER);
        this.lblScoreScore.x = 600;
        this.lblScoreScore.y = size.height - 75;
        this.addChild(this.lblScoreScore);

        // //声音
        var sound = new Sound();
        // //暂停
        var pauseMenuItem = new cc.MenuItemImage(
        "#pauseButton.png",
        "#pauseButton.png",
        this.pause, this);
        var menu = new cc.Menu(sound,pauseMenuItem);
        menu.alignItemsHorizontallyWithPadding(30);
        menu.x = 100;
        menu.y = size.height - 45;
        this.addChild(menu);
        this.scheduleUpdate();
    },
    pause: function () {
        if (cc.director.isPaused()) {
            cc.director.resume();
        } else {
            cc.director.pause();
        }
    },
    update: function () {
        this.lblScoreScore.setString(Game.user.score);
        this.distanceScore  += Game.user.speed * 0.02;
        this.lblDistanceScore.setString(this.distanceScore);
    }
})