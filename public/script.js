
var toDo = [];


var fetch = function () {
    $.ajax({
        url: "/tasks",
        method: "GET",
        success: function (data) {
            toDo = data;
            _renderList();
            console.log(data);

        },
        error: function (data) {
            console.log('Error: ' + data);
        }
    });
    

};

fetch();
function _renderList() {

    $('.list').empty();
    for (var i = 0; i < toDo.length; i++) {
        $('.list').append('<div>' + toDo[i].text + '</div');
    }

}



function addToDo(newTask) {
    $.ajax(
        {
            method: "POST",
            url: "/tasks",
            data: { 'text': newTask },
            success: function (newTask) {
                toDo.push(newTask);
                _renderList(newTask);
                console.log(newTask);

            },
            error: function (err) {
                console.log('Error: ' + newTask);
            }
        });
}


$('.my-btn').on('click', function () {
    var newTask = $('.my-input').val();
    alert(newTask);
    addToDo(newTask);
});