/**
 * Created by Hoipo Cheung on 2017/6/20.
 */
/**
 * @author  : Hoipo Cheung
 * @version : 0.0.1
 * @date    : 2017-06-20
 * @repository: https://github.com/hoipo/audioplayer
 */
;
(function(w) {
    function As(config) {
        if (config.path) {
            this.path = config.path
        } else {
            console.warn("No sound path!!!")
        }
        this.loop = config.loop || false
        this.autoplay = config.autoplay || false
        this.audio = document.createElement("audio")
        this.audio.src = this.path;
        if (this.loop) {
            this.audio.loop = "true"
        }
        if (this.autoplay) {
            this.audio.autoplay = "true"
        }
        this.audio.addEventListener("canplay", function() {
            if (this.autoplay) {
                this.audio.play()
            }
        }.bind(this))
    }

    As.prototype.play = function() {
        console.log(this)
        this.audio.play()
    }

    As.prototype.pause = function() {
        console.log("pause")
        this.audio.pause()
    }
    if (!w.AudioPlayer) {
        w.AudioPlayer = As
    }
})(window)