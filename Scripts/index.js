var app = new Vue({
	el: '#app',
	data: function () {
		//TODO: Call to API here to get input list and output list
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