
// Currencyfreaks.com api (MK)
// $ curl 'https://api.currencyfreaks.com/v2.0/rates/latest?apikey=01d3903e56654e9189a30b7fbb9d2a34'

// {
//   "date": "2023-03-21 12:43:00+00",
//   "base": "USD",
//   "rates": {
//     "AGLD": "2.3263929277654998",
//     "FJD": "2.21592",
//     "MXN": "18.670707655673546",
//     "LVL": "0.651918",
//     "SCR": "13.21713243157135",
//     "CDF": "2068.490771",
//     "BBD": "2.0",
//     "HNL": "24.57644632001569",
//     .
//     .
//     .
//   }
// }

// {
//     "currencySymbols": {
//         "AGLD": "Adventure Gold",
//         "FJD": "Fiji Dollar",
//         "MXN": "Mexican Peso",
//         "SCR": "Seychellois Rupee",
//         "CDF": "Congolese Franc",
//         "BBD": "Barbadian Dollar",
//         "HNL": "Honduran Lempira",
//         "UGX": "Uganda Shilling",
//         "PKR": "Pakistani Rupee",
//         "EUR": "Euro",
//         "GBP": "Pound Sterling",
//         "CAD": "Canadian Dollar",
//         "USD": "US Dollar"
//         "ETH": "Ethereum",
//         .
//         .
//         .
//     }
// }

// const apiUrl = 'https://api.currencyfreaks.com/v2.0/rates/latest';
// const apiKey = '01d3903e56654e9189a30b7fbb9d2a34';

// const requestUrl = `${apiUrl}?apikey=${apiKey}`;

// fetch(requestUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('Date:', data.date);
//     console.log('Base:', data.base);
//     console.log('Rates:', data.rates);
    
//     // Access individual rates as needed, for example:
//     console.log('AGLD rate:', data.rates.AGLD);
//     console.log('FJD rate:', data.rates.FJD);
//     // ... and so on
    
//     // Process the data as needed
//   })
//   .catch(error => {
//     console.error('Fetch error:', error);
//   });



// CODE BASED CURRENCY ENTRY
//   const apiUrl = 'https://api.currencyfreaks.com/v2.0/rates/latest';
// const apiKey = '01d3903e56654e9189a30b7fbb9d2a34';

// // build the API URL with the API key
// const url = `${apiUrl}?apikey=${apiKey}`;

// // prompt the user to select a base currency
// const baseCurrency = prompt('Enter the base currency:');

// // fetch the exchange rates from the API
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     // extract the list of available currencies and their rates
//     const currencies = Object.keys(data.rates);
//     const exchangeRates = {};
//     currencies.forEach(currency => {
//       exchangeRates[currency] = data.rates[currency];
//     });

//     // select the base currency and convert to other currencies
//     const conversionRates = {};
//     for (const currency in exchangeRates) {
//       if (currency !== baseCurrency) {
//         conversionRates[currency] = exchangeRates[baseCurrency] / exchangeRates[currency];
//       }
//     }

//     // log the conversion rates to the console
//     console.log(`Conversion rates from ${baseCurrency}:`, conversionRates);
//   })
//   .catch(error => {
//     // log any errors that occur during the API request
//     console.error(error);
//   });

// // POPUP MESSAGE with AMount the conversion rates to the console
//   const apiUrl = 'https://api.currencyfreaks.com/v2.0/rates/latest';
// const apiKey = '01d3903e56654e9189a30b7fbb9d2a34';

// // build the API URL with the API key
// const url = `${apiUrl}?apikey=${apiKey}`;

// // prompt the user to select a base currency
// const baseCurrency = prompt('Enter the base currency:');

// // prompt the user to enter an amount
// const amount = parseFloat(prompt('Enter the amount to convert:'));

// // fetch the exchange rates from the API
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     // extract the list of available currencies and their rates
//     const currencies = Object.keys(data.rates);
//     const exchangeRates = {};
//     currencies.forEach(currency => {
//       exchangeRates[currency] = data.rates[currency];
//     });

//     // select the base currency and convert to other currencies
//     const conversionRates = {};
//     for (const currency in exchangeRates) {
//       if (currency !== baseCurrency) {
//         conversionRates[currency] = ( exchangeRates[currency] / exchangeRates[baseCurrency] ) * amount;
//       }
//     }

//     // log the conversion rates to the console
//     console.log(`Conversion rates from ${baseCurrency}:`, conversionRates);
//   })
//   .catch(error => {
//     // log any errors that occur during the API request
//     console.error(error);
//   });

//   const apiUrl = 'https://api.currencyfreaks.com/v2.0/rates/latest';
// const apiKey = '01d3903e56654e9189a30b7fbb9d2a34';

// // build the API URL with the API key
// const url = `${apiUrl}?apikey=${apiKey}`;

// // fetch the exchange rates from the API
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     // extract the list of available currencies and their rates
//     const currencies = Object.keys(data.rates);
//     const exchangeRates = {};
//     currencies.forEach(currency => {
//       exchangeRates[currency] = data.rates[currency];
//     });

//     // select a base currency and convert to other currencies
//     const baseCurrency = 'GBP';
//     const conversionRates = {};
//     for (const currency in exchangeRates) {
//       if (currency !== baseCurrency) {
//         conversionRates[currency] = exchangeRates[currency] / exchangeRates[baseCurrency];
//       }
//     }

//     // log the conversion rates to the console
//     console.log(`Conversion rates from ${baseCurrency}:`, conversionRates);
//   })
//   .catch(error => {
//     // log any errors that occur during the API request
//     console.error(error);
//   });


// CODE BASED CURRENCY ENTRY
// get elements by their ID
const searchInput = document.getElementById('amount');
const searchButton = document.getElementById('convertButton');

// add event listener to the button
searchButton.addEventListener('click', function() {
  // get the search input value
  const searchTerm = searchInput.value;
  // do something with the search term (e.g. redirect to a search results page)
  console.log(`Searching for "${searchTerm}"...`);
});

// add event listener to the input (if you want to trigger the search on Enter keypress)
searchInput.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    // simulate a button click to trigger the search
    searchButton.click();
  }
});

//  trigger
  // same code as above but amount to be inserted into
  const apiUrl = 'https://api.currencyfreaks.com/v2.0/rates/latest';
const apiKey = '01d3903e56654e9189a30b7fbb9d2a34';

// build the API URL with the API key
const url = `${apiUrl}?apikey=${apiKey}`;

// Function to convert an amount to other currencies
const convertAmount = (amount, baseCurrency, exchangeRates) => {
  const convertedAmounts = {};
  for (const currency in exchangeRates) {
    if (currency !== baseCurrency) {
      convertedAmounts[currency] = amount * exchangeRates[currency];
    }
  }
  return convertedAmounts;
};

// Fetch the exchange rates from the API
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Extract the list of available currencies and their rates
    const currencies = Object.keys(data.rates);
    const exchangeRates = {};
    currencies.forEach(currency => {
      exchangeRates[currency] = data.rates[currency];
    });

    // Select a base currency
    const baseCurrency = 'GBP';

    // Ask user for input amount
    const searchTerm = searchInput.value;
const inputAmount = parseFloat(searchTerm);
    if (isNaN(inputAmount)) {
      console.error('Invalid input. Please enter a valid number.');
      return;
    }

    // Convert input amount to other currencies
    const convertedAmounts = convertAmount(inputAmount, baseCurrency, exchangeRates);

    // Log the converted amounts to the console
    console.log(`Converted amounts from ${baseCurrency} (${inputAmount}):`, convertedAmounts);
  })
  .catch(error => {
    // Log any errors that occur during the API request
    console.error(error);
  });
``


async function getCurrencyByCity(city) {
    try {
      let response = await fetch(`https://openexchangerates.org/api/latest.json?app_id=cc985995f89f47518e07780d7f2250c2`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      let data = await response.json();
  
      let currency = data.base;
      let cities = Object.keys(data.rates);
  
      cities.forEach(function (cityName) {
        if (cityName.toLowerCase().includes(city.toLowerCase())) {
          currency = cityName;
        }
      });
  
      return currency === data.base ? "Unknown" : currency;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      return "Unknown";
    }
  }
  
  // Usage:
  (async () => {
    let city = "London";
    let currency = await getCurrencyByCity(city);
    console.log(`The currency in ${city} is ${currency}.`);
  })();
  












window.onload = function() {
  L.mapquest.key = '7kDXGajoCA7GkLUIYeht2GziGKbBtRJx';

  var map = L.mapquest.map('map', {
    center: [37.7749, -122.4194],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
  });

  map.addControl(L.mapquest.control());
}
 

export async function searchAndConvert() {
  const countryInput = document.getElementById('from-country').value;
  const currencySelect = document.getElementById('to-currency').value;

  const mapsApiKey = '7kDXGajoCA7GkLUIYeht2GziGKbBtRJx';
  const mapsApiUrl = `https://open.mapquestapi.com/geocoding/v1/address?key=${mapsApiKey}&location=${countryInput}`;
  try {
      const mapsResponse = await fetch(mapsApiUrl);
      const mapsData = await mapsResponse.json();

      if (mapsData.status === 'OK') {
          const countryLocation = mapsData.results[0].geometry.location;

          const currencyConverterApiKey = '01d3903e56654e9189a30b7fbb9d2a34';
          const currencyConverterApiURL = `https://api.currencyfreaks.com/v2.0/rates/latest?from=${countryLocation.lat},${countryLocation.lng}&to=${currencySelect}&apikey=${currencyConverterApiKey}`;

          try {
              const currencyConverterResponse = await fetch(currencyConverterApiURL);
              const currencyConverterData = await currencyConverterResponse.json();

              if (currencyConverterData.status === 200) {
                  const convertedAmount = currencyConverterData.rates[currencySelect];
                  console.log(`Converted amount for ${countryInput} to ${currencySelect}: ${convertedAmount}`);
              } else {
                  console.error('Error in currency converter API:', currencyConverterData.error.info);
              }
          } catch (currencyConverterError) {
              console.error('Error fetching from currency converter API:', currencyConverterError);
          }

      } else {
        console.error('Error in MapQuest API:', mapsData.info.statuscode);
      }
  } catch (mapsError) {
    console.error('Error fetching from MapQuest API:', mapsError);
  }
}
