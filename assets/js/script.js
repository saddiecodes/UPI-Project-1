// Function to fetch exchange rate between base and target currency using ExchangeRate-API
async function getExchangeRate(baseCurrency, targetCurrency) {
    const apiKey = '5a8c68f98dcea76125466d08';
    const apiUrl = `https://open.er-api.com/v6/latest/${baseCurrency}?symbols=${targetCurrency}`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const rate = data.rates[targetCurrency];
      if (!rate) {
        throw new Error(`Exchange rate not available for ${targetCurrency}`);
      }

      return rate;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  // Function to fetch country name based on currency code using restcountries.com API
  async function fetchCurrencyData(currencyCode) {
    const apiUrl = `https://restcountries.com/v3.1/currency/${currencyCode}`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.length > 0) {
        return data[0].name.common;
      } else {
        throw new Error(`Country not found for currency code ${currencyCode}`);
      }
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

    // Function to convert currency based on user input
 
  async function convertCurrency() {
    
    // Retrieving user input
    const baseCurrency = document.getElementById('baseCurrency').value.toUpperCase();
    const targetCurrency = document.getElementById('targetCurrency').value.toUpperCase();
    const amount = parseFloat(document.getElementById('amount').value);

    // Validating input
    if (!baseCurrency || !targetCurrency || isNaN(amount)) {
      alert('Please enter valid input.');
      return;
    }

    const countryName = await fetchCurrencyData(targetCurrency);

    // Displaying country name and performing currency conversion
    if (countryName !== null) {
      document.getElementById('countryResult').innerText = `Country: ${countryName}`;
      
      const exchangeRate = await getExchangeRate(baseCurrency, targetCurrency);
      
      if (exchangeRate !== null) {
        const convertedAmount = (amount * exchangeRate).toFixed(2);
        document.getElementById('result').innerText = `${amount} ${baseCurrency} is equal to ${convertedAmount} ${targetCurrency}`;
      } else {
        alert('Failed to fetch exchange rate. Please check your input and try again.');
      }
    } else {
      alert('Failed to fetch country name. Please check the target currency code and try again.');
    }
  }
  

  // Function to display a map based on country result
function displayMap() {

    // Map display logic
  var countryEl = document.getElementById('countryResult')
  var mapKey = '7kDXGajoCA7GkLUIYeht2GziGKbBtRJx';
  var mapURL = `https://www.mapquestapi.com/staticmap/v5/map?key=${mapKey}&center=${countryEl}&size=@2x`;
  var mapEl = document.getElementById('map');

fetch(mapURL)
  .then(function (res) { 
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    mapEl.innerHTML=data
})
  map.addControl(L.mapquest.control());
}
 
// Function to search and convert using geocoding and currency converter APIs
  async function searchAndConvert() {
   // Input handling 
  const countryInput = document.getElementById('from-country').value;
  const currencySelect = document.getElementById('to-currency').value;

  // Geocoding API to get country location
  const mapsApiKey = '7kDXGajoCA7GkLUIYeht2GziGKbBtRJx';
  const mapsApiUrl = `https://open.mapquestapi.com/geocoding/v1/address?key=${mapsApiKey}&location=${countryInput}`;

      const mapsResponse = await fetch(mapsApiUrl);
      const mapsData = await mapsResponse.json();

        // Checking geocoding API response status
      if (mapsData.status === 'OK') {
          const countryLocation = mapsData.results[0].geometry.location;

          // Currency converter API to get conversion rates
          const currencyConverterApiKey = '01d3903e56654e9189a30b7fbb9d2a34';
          const currencyConverterApiURL = `https://api.currencyfreaks.com/v2.0/rates/latest?from=${countryLocation.lat},${countryLocation.lng}&to=${currencySelect}&apikey=${currencyConverterApiKey}`;

          try {
              const currencyConverterResponse = await fetch(currencyConverterApiURL);
              const currencyConverterData = await currencyConverterResponse.json();

                // Checking currency converter API response status
              if (currencyConverterData.status === 200) {
                  const convertedAmount = currencyConverterData.rates[currencySelect];
                  console.log(`Converted amount for ${countryInput} to ${currencySelect}: ${convertedAmount}`);
              } else {
                  console.error('Error in currency converter API:', currencyConverterData.error.info);
              }
          } catch (currencyConverterError) {
              console.error('Error fetching from currency converter API:', currencyConverterError);
          }

     
}

  }

