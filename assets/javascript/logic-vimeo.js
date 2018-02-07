function TestVimeo() {

    urlX = 'https://api.vimeo.com/videos?query=elvis&client_id=591c24b7bf17260e6c0dba4eb130b128614d2099';

    $.getJSON(urlX, function (data) { console.log(data); })
    .success(function (payload) {

        console.log("second success");
    })
    .error(function (jqXHR, textStatus, errorThrown) {

        console.log('******* ' + "error: " + textStatus + ' *******');

    });


    accessToken = f54cc8963e206b7972d91dd2d9c17cd8
}