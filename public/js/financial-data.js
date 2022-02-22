const apiUrl = 'http://api.coindesk.com/v1/bpi/historical/close.json'

axios.get(apiUrl)

    .then(response => {
        const { data } = response
        const bpi = data['bpi'];
        const dates = Object.keys(bpi);
        const bitcoinValue = Object.values(bpi);
        console.log(dates, bitcoinValue)
    }).catch(error => console.log(error));

