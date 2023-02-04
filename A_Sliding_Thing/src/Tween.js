function Tween(damping, stiffness) {
    this.delta = 0;
    this.speed = 0;
    this.damping = damping || 0.9;
    this.stiffness = stiffness || 10;
}

Tween.prototype = {
    get: function () {
        this.speed = this.damping * this.speed - this.delta / this.stiffness;
        this.delta += this.speed;
        return this.delta;
    },
    
    set: function (value) {
        this.delta = value;
        this.speed = 0;
    }
};
