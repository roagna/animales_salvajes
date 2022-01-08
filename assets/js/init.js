(async function () {
  // voy a buscar los datos del json
  let data = await fetch("data/animales.json");
  // los desempaqueto
  const data2 = await data.json();
  const animales = data2.animales;

  $("#animal").on("change", function () {
    // obtengo el valor del "option" seleccionado
    const nombre_animal = $("#animal").val();

    const animal = animales.find((an) => an.name == nombre_animal);

    const audioPlayer = document.querySelector("#player");

    console.log(audioPlayer);

    $("#preview").css(
      "background-image",
      `url("assets/imgs/${animal.imagen}")`
    );
  });
})(); // IIFE (Funciones Inmediatamente Ejecutadas)
