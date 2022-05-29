class   Ball
{
  constructor(x, y, h, w) {
    var ball = {
      isStatic: true
    }

    this.h = h;
    this.w = w;
    this.body = Bodies.circle(x, y, this.w, this.h, ball);
    World.add(world, this.body)
  }
}