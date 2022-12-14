$("#boton").click(() => {
  let lista = $("#lista");
  lista.empty();
  $.get(`http://localhost:5000/amigos`, (response) => {
    for (let i = 0; i < response.length; i++) {
      let li = `<li>${response[i].name}</li>`;
      lista.append(li);
    }
  });
  $("img").hide();
});

$("#search").click(() => {
  let inputValue = $("#input").val();
  $.get(`http://localhost:5000/amigos/${inputValue}`, (response) => {
    $("#amigo").text(response.name);
  });
});

$("#delete").click(() => {
  let inputValue = $("#inputDelete").val();
  $.ajax({
    url: `http://localhost:5000/amigos/${inputValue}`,
    type: "DELETE",
    success: () => {
      $("#success").text(`El amigo ${inputValue} fue borrado exitosamente`);
    },
  });
});
