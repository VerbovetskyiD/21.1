const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 500;
canvas.height = 350;
const ctx = canvas.getContext('2d');

class Figure {
  constructor(x1, y1, colour) {
    this.x1 = x1;
    this.y1 = y1;
    this.color = colour;
  }
}

class Line extends Figure {
  constructor(x1, y1, x2, y2, colour) {
    super(x1, y1, colour);
    this.x2 = x2;
    this.y2 = y2;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
    ctx.closePath();
  }
}

class Rectangle extends Figure {
  constructor(x1, y1, width, height, colour) {
    super(x1, y1, colour);
    this.width = width;
    this.height = height;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x1, this.y1, this.width, this.height);
  }
}

class Circle extends Figure {
  constructor(x1, y1, radius, colour) {
    super(x1, y1, colour);
    this.radius = radius;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x1, this.y1, this.radius, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.closePath();
  }
}

//фон
new Rectangle(0, 0, 500, 350, 'deepskyblue').draw(ctx);

//тело
new Circle(250, 280, 55, 'white').draw(ctx);
new Circle(250, 210, 45, 'white').draw(ctx);
new Circle(250, 150, 35, 'white').draw(ctx);

//шляпа
new Rectangle(210, 115, 80, 20, 'red').draw(ctx);
new Rectangle(220, 105, 60, 10, 'black').draw(ctx);
new Rectangle(220, 70, 60, 40, 'red').draw(ctx);

//пуговицы
const circle4 = new Circle(250, 200, 3, 'black').draw(ctx);
const circle5 = new Circle(250, 213, 3, 'black').draw(ctx);
const circle6 = new Circle(250, 225, 3, 'black').draw(ctx);

//глаза
new Circle(240, 149, 4, 'black').draw(ctx);
new Circle(260, 149, 4, 'black').draw(ctx);
new Circle(238, 148, 2, 'white').draw(ctx);
new Circle(258, 148, 2, 'white').draw(ctx);

//улыбка
new Circle(250, 170, 2, 'black').draw(ctx);
new Circle(244, 169, 2, 'black').draw(ctx);
new Circle(256, 169, 2, 'black').draw(ctx);
new Circle(262, 166, 2, 'black').draw(ctx);
new Circle(238, 166, 2, 'black').draw(ctx);

//нос
new Line(249, 155, 228, 160, 'orange').draw(ctx);
new Line(228, 160, 251, 163, 'orange').draw(ctx);
new Line(251, 163, 249, 155, 'orange').draw(ctx);
