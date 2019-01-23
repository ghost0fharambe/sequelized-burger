$(document).ready(function () {

    $("#burger").on('click', function () {
        event.preventDefault();
        var burgerObject = {
            burger_name: $("#burgerName").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: burgerObject
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".eat-btn").on('click', function () {
        event.preventDefault();
        var id = $(this).data('value');
        var burgerObject = {
            id: id
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerObject
        }).then(
            function () {
                console.log('success');
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-btn").on('click', function () {
        event.preventDefault();

        var id = $(this).data('value');
        var burgerObject = {
            id: id
        };
        $.ajax("/api/delete/" + id, {
            type: "DELETE",
            data: burgerObject
        }).then(
            function () {
                console.log('success');
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    //END CODE
});