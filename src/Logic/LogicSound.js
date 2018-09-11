var LogicSound = {
    playEffect:function () {
        cc.audioEngine.playEffect(res.eatSound);
    },
    playMusic:function () {
        cc.audioEngine.playMusic(res.bgSound,true);
    },
    stopMusic:function () {
        cc.audioEngine.stopMusic(res.bgSound);
    }
}