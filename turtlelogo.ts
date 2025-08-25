//% blockNamespace=turtle
class Turtle2 extends Turtle {
    //% blockId="turtle_point_in_direction" block="point in direction %degrees" blockHidden=true
    //% degrees.min=1
    //% degrees.max=360
    pointInDirection(degrees: number) {
        this.direction = degrees % 360;
        transformSprites.rotateSprite(this.sprite, -degrees);
    }
    
    //% blockId="turtle_draw_to" block="draw to %x %y" blockHidden=true
    drawTo(x: number, y: number) {
        this.bkg.drawLine(this.x, this.y, x, y, this.color);
        this.setPosition(x, y);
    }

    constructor (sprite: Sprite, bkg: Image) {
        super(sprite, bkg)
    }
}

namespace turtle {
    let _turtle: Turtle2;

    function init(): void {
        if (!_turtle) {
            const sprite = sprites.create(turtle.turtleImage.clone());
            const bkg = scene.backgroundImage();
            _turtle = new Turtle2(sprite, bkg);
        }
    }

    //% blockId=turtlePointInDirection block="point turtle in direction %degrees°"
    export function pointInDirection(degrees: number) {
        init();
        _turtle.pointInDirection(degrees);
    }

    //% blockId=turtleDrawTo block="draw turtle to x %x y %y"
    export function drawTo(x: number, y: number) {
        init();
        _turtle.drawTo(x, y);
    }
}
