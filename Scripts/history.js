var app = new Vue({
	el: '#history',
	data: function () {
		//TODO: Call to API here to get input list and output list
		$.ajax({
			url: "https://jsonplaceholder.typicode.com/posts",
			type: 'GET',
			success: function (result) {
				return JSON.stringify(result)
			},
			error: function (err) {
				console.log(err)
			}
		});
    }
});