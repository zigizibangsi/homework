class Car {
  model;
  power;
  color;

  constructor(m, p, c) {
    this.model = m;
    this.power = p;
    this.color = c;
  }

  start = () => {
    console.log("출발하자!");
    console.log("출발 속력은 " + this.power + "야!");
  };

  stop = () => {
    console.log("정지하자!");
  };

  description = () => {
    console.log(
      "내 차의 모델은 " +
        this.model +
        "이고, 내 차의 색은 " +
        this.color +
        "야!"
    );
  };
}

const car1 = new Car("bmw", 50, "black");
car1.start();
car1.stop();
car1.description();
