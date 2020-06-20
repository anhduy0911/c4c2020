var dashboard = new Vue({
    el: '#dashboard',
    data: function () {
        //TODO: Call to API here to get input list and output list

        return {
            models: [{
                    id: 'A01',
                    last_update: '1/1/2020',
                    accuracy: '88%'
                },
                {
                    id: 'A02',
                    last_update: '1/1/2020',
                    accuracy: '88%'
                },
                {
                    id: 'A03',
                    last_update: '1/1/2020',
                    accuracy: '88%'
                },
                {
                    id: 'A04',
                    last_update: '1/1/2020',
                    accuracy: '88%'
                },
                {
                    id: 'A05',
                    last_update: '1/1/2020',
                    accuracy: '88%'
                },
                {
                    id: 'A06',
                    last_update: '1/1/2020',
                    accuracy: '88%'
                },
            ],
            style_obj: {
                width: 80
            }

        }
    },
});