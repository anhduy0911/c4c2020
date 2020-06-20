var app = new Vue({
	el: '#app',
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
		return {
			input_list: [{
				field: 'A'
			}, {
				field: 'B'
			}, {
				field: 'C'
			}, {
				field: 'D'
			}, {
				field: 'E'
			}, {
				field: 'F'
			}, {
				field: 'G'
			}, {
				field: 'H'
			}],
			output_list: [{
				field: 'A'
			}, {
				field: 'B'
			}, {
				field: 'C'
			}, {
				field: 'D'
			}, {
				field: 'E'
			}, {
				field: 'F'
			}, {
				field: 'G'
			}, {
				field: 'H'
			}],
			time_frame: ['Day', 'Month', 'Year']
		}
	},
});