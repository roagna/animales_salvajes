//const registrar = document.querySelector("#btnRegistrar");

$("#btnRegistrar").on("click", function () {
  const nombreanimal = $("#animal").val();
  const edadanimal = $("#edad").val();
  const comentarioanimal = $("#comentarios").val().trim();

  if (nombreanimal == null) {
    alert("Debe elegir un animal");
  }

  if (edadanimal == null) {
    alert("Debe elegir la edad del animal");
  }

  if (comentarioanimal == "") {
    alert("Debe hacer un comentario");
  }

  const id_nombre = document.querySelector("#animal");
  id_nombre.selectedIndex = 0;

  const id_edad = document.querySelector("#edad");
  id_edad.selectedIndex = 0;

  const id_comentarios = document.querySelector("#comentarios");
  id_comentarios.value = "";

  $("#preview").css("background-image", ``);

  /*$("#comentarios").val("");
  $("#animal").prop("selectedIndex", 0);
  $("#edad").prop("selectedIndex", 0);
  $("#preview").css("background-image", ``);*/
});
