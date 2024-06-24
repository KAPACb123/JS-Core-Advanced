async function fetchGeocodingData(address, apiKey) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Ошибка: ${response.statusText}`);
        }

        let data = await response.json();

        if (data.status !== 'OK') {
            throw new Error(`Ошибка: ${data.status}`);
        }

        return data;
    } catch (error) {
        return { error: error.message };
    }
}

const apiKey = 'AIzaSyDtPwhgu3_KQas7DTT2CuRqCqTu3a3PfFU';
const address = 'Брест';

fetchGeocodingData(address, apiKey)
    .then(result => {
        if (result.error) {
            console.error('Произошла ошибка:', result.error);
        } else {
            console.log('Полученные данные:', result);
        }
    });
