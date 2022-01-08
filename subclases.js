import { Animal } from "./clases.js";

export class Leon extends Animal {
  constructor(nombre, edad, comentarios) {
    super(
      nombre,
      edad,
      "assets/imgs/Leon.png",
      comentarios,
      "assets/sounds/Rugido.mp3"
    );
  }
  rugir() {
    const audioPlayer = document.querySelector("#player");
    audioPlayer.src = "assets/sounds/Rugido.mp3";
    audioPlayer.play();
  }
}

export class Lobo extends Animal {
  constructor(nombre, edad, comentarios) {
    super(
      nombre,
      edad,
      "assets/imgs/Lobo.jpg",
      comentarios,
      "assets/sounds/Aullido.mp3"
    );
  }
  aullar() {
    const audioPlayer = document.querySelector("#player");
    audioPlayer.src = "assets/sounds/Aullido.mp3";
    audioPlayer.play();
  }
}

export class Oso extends Animal {
  constructor(nombre, edad, comentarios) {
    super(
      nombre,
      edad,
      "assets/imgs/Oso.jpg",
      comentarios,
      "assets/sounds/Gruñido.mp3"
    );
  }
  Gruñir() {
    const audioPlayer = document.querySelector("#player");
    audioPlayer.src = "assets/sounds/Gruñido.mp3";
    audioPlayer.play();
  }
}

export class Serpiente extends Animal {
  constructor(nombre, edad, comentarios) {
    super(
      nombre,
      edad,
      "assets/imgs/Serpiente.jpg",
      comentarios,
      "assets/sounds/Siseo.mp3"
    );
  }
  Sisear() {
    const audioPlayer = document.querySelector("#player");
    audioPlayer.src = "assets/sounds/Siseo.mp3";
    audioPlayer.play();
  }
}

export class Aguila extends Animal {
  constructor(nombre, edad, comentarios) {
    super(
      nombre,
      edad,
      "assets/imgs/Aguila.png",
      comentarios,
      "assets/sounds/Chillido.mp3"
    );
  }
  chillar() {
    const audioPlayer = document.querySelector("#player");
    audioPlayer.src = "assets/sounds/Chillido.mp3";
    audioPlayer.play();
  }
}
