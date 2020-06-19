$('#test-apicall').click(function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        type: 'GET',
        success: function (result) {
            console.log(JSON.stringify(result))
        },
        error: function (err) {
            console.log(err)
        }
    });
    console.log('pre-post')
    $.post("http://localhost:3000/posts", {
            title: 'ha cho',
            author: 'mau giao'
        },
        function callback(data, status) {
            alert(data + '\n status' + status)
        })
    console.log('post-post')
})