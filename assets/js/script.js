
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

// const apiUrl = 'https://api.currencyfreaks.com/v2.0/rates/latest';
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

// POPUP MESSAGE with AMount the conversion rates to the console
  const apiUrl = 'https://api.currencyfreaks.com/v2.0/rates/latest';
const apiKey = '01d3903e56654e9189a30b7fbb9d2a34';

// build the API URL with the API key
const url = `${apiUrl}?apikey=${apiKey}`;

// prompt the user to select a base currency
const baseCurrency = prompt('Enter the base currency:');

// prompt the user to enter an amount
const amount = parseFloat(prompt('Enter the amount to convert:'));

// fetch the exchange rates from the API
fetch(url)
  .then(response => response.json())
  .then(data => {
    // extract the list of available currencies and their rates
    const currencies = Object.keys(data.rates);
    const exchangeRates = {};
    currencies.forEach(currency => {
      exchangeRates[currency] = data.rates[currency];
    });

    // select the base currency and convert to other currencies
    const conversionRates = {};
    for (const currency in exchangeRates) {
      if (currency !== baseCurrency) {
        conversionRates[currency] = (exchangeRates[baseCurrency] / exchangeRates[currency]) * amount;
      }
    }

    // log the conversion rates to the console
    console.log(`Conversion rates from ${baseCurrency}:`, conversionRates);
  })
  .catch(error => {
    // log any errors that occur during the API request
    console.error(error);
  });
