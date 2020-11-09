function change_box() {
    var input = document.getElementById("box");
    var url = "/change_complete";
    $.ajax({
        type: "POST",
        url: url,
        data: "{{ post['id']}}",
    }).done(function (result) {
        change_flag(result);
    });
}

function change_flag(value) {
    var input = document.getElementById("box");
    input.checked = value;
}

var input = document.getElementById("box");
input.onclick = change_box;
