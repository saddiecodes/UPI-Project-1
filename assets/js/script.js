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

  
// Store the used currencies in localStorage
const usedCurrencies = JSON.parse(localStorage.getItem('usedCurrencies')) || [];
if (!usedCurrencies.includes(targetCurrency)) {
  usedCurrencies.push(targetCurrency);
  localStorage.setItem('usedCurrencies', JSON.stringify(usedCurrencies));
}

// Display previously used currencies
const currencyList = document.getElementById('currencyList');
if (currencyList) {
  currencyList.innerHTML = '';
  usedCurrencies.forEach(currency => {
    const li = document.createElement('li');
    li.textContent = currency;
    currencyList.appendChild(li);
  });
}
}
  
    

// async function displayMap() {
//   const countryName = document.getElementById('countryResult').textContent;
//   const mapKey = '7kDXGajoCA7GkLUIYeht2GziGKbBtRJx'; // Replace with your MapQuest API key
//   const mapUrl = `https://www.mapquestapi.com/staticmap/v5/map?key=${mapKey}&center=${countryName}&size=@2x`;
//   try {
//       const response = await fetch(mapUrl);
//       const blob = await response.blob(); // Get the image data as a Blob
//       const imageUrl = URL.createObjectURL(blob); // Create a URL for the Blob
//       // Display the map image
//       const imgMap = document.getElementById('img-map');
//       imgMap.src = imageUrl;
//   } catch (error) {
//       console.error('Error fetching map:', error);
//   }
// }
  
// document.addEventListener('DOMContentLoaded', function() {
//   // Add event listener to listen for changes in the countryResult element
//   document.getElementById('countryResult').addEventListener('DOMSubtreeModified', function() {
//       displayMap(); // Call the displayMap function whenever countryResult changes
//   });
// });

// function displayMap() {
//   var imgMap = document.getElementById("img-map");
//   var countryEl = document.getElementById('countryResult').innerText; // Get the text content
//   var mapKey = '7kDXGajoCA7GkLUIYeht2GziGKbBtRJx'; // Replace with your MapQuest API key
//   var mapURL = `https://www.mapquestapi.com/staticmap/v5/map?key=${mapKey}&center=${countryEl}&size=@2x`;

//   // Set the src attribute of the img element to the map URL
//   imgMap.src = mapURL;
// }

// document.addEventListener('DOMContentLoaded', function() {
//   // Select the target node
//   var countryResult = document.getElementById('countryResult');

//   // Create a new instance of MutationObserver
//   var observer = new MutationObserver(function(mutations) {
//       mutations.forEach(function(mutation) {
//           if (mutation.type === 'childList' || mutation.type === 'characterData') {
//               displayMap(); // Call the displayMap function whenever countryResult changes
//           }
//       });
//   });

//   // Configuration of the observer:
//   var config = { childList: true, subtree: true, characterData: true };

//   // Start observing the target node for configured mutations
//   observer.observe(countryResult, config);
// });

// function displayMap() {
//   var imgMap = document.getElementById("img-map");
//   var countryEl = document.getElementById('countryResult').innerText; // Get the text content
//   var mapKey = '7kDXGajoCA7GkLUIYeht2GziGKbBtRJx'; // Replace with your MapQuest API key
//   var mapURL = `https://www.mapquestapi.com/staticmap/v5/map?key=${mapKey}&center=${countryEl}&size=@2x`;

//   // Set the src attribute of the img element to the map URL
//   imgMap.src = mapURL;
// }

document.addEventListener('DOMContentLoaded', function() {
  // Add event listener to the button
  document.getElementById('mapButton').addEventListener('click', function() {
      displayMap(); // Call the displayMap function when the button is clicked
  });


  }

  
});



function displayMap() {
  var imgMap = document.getElementById("img-map");
  var countryEl = document.getElementById('countryResult').innerText; // Get the text content
  var mapKey = '7kDXGajoCA7GkLUIYeht2GziGKbBtRJx'; // Replace with your MapQuest API key
  var mapURL = `https://www.mapquestapi.com/staticmap/v5/map?key=${mapKey}&center=${countryName}&size=@2x`;


  // Set the src attribute of the img element to the map URL
  imgMap.src = mapURL;

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

// Function to display a map based on country result
// function displayMap() {

//     // Map display logic

// //     So I would have on the html a container (div) that has an enpty img element. Apply an id to it, and then directly target it. Just do a directly pull, not a fetch.  If of the img id="img-map".
// // something like this:
// // in js

//   var imgMap = document.getElementById("img-map")

//   var countryEl = document.getElementById('countryResult')
//   console.log(countryEl);
//   var mapKey = '7kDXGajoCA7GkLUIYeht2GziGKbBtRJx';
//   var mapURL = `https://www.mapquestapi.com/staticmap/v5/map?key=${mapKey}&center=${countryEl}&size=@2x`;
//   var mapEl = document.getElementById('img-map');

//   fetch(mapURL)
// .then(function (res) { 
// return res.json();
// })
// .then(function (data) {
// console.log(data);
// mapEl.innerHTML=data
// })
// map.addControl(L.mapquest.control());
// }

// function displayMap() {
//   var imgMap = document.getElementById("img-map");
//   var countryEl = document.getElementById('countryResult').innerText; // Get the text content
//   var mapKey = '7kDXGajoCA7GkLUIYeht2GziGKbBtRJx';
//   var mapURL = `https://www.mapquestapi.com/staticmap/v5/map?key=${mapKey}&center=${countryEl}&size=@2x`;

//   // Set the src attribute of the img element to the map URL
//   imgMap.src = mapURL;
// }

 

// fetch(mapURL, {cache: 'reload', mode: 'no-cors'})
// //The following function will update the cache and reload your image everywhere in your page:

// async function reloadImg(imgMap) {
//   await fetch(mapURL, { cache: 'reload', mode: 'no-cors' })
//   document.body.querySelectorAll(`img[src='${mapURL}']`)
//     .forEach(imgMap => imgMap.src = mapURL)
// }


// export async function searchAndConvert() {

// Function to search and convert using geocoding and currency converter APIs

  async function searchAndConvert() {
   // Input handling 
  const countryInput = document.getElementById('from-country').value;
  const currencySelect = document.getElementById('to-currency').value;

  // Geocoding API to get country location
  const mapsApiKey = '7kDXGajoCA7GkLUIYeht2GziGKbBtRJx';
  const mapsApiUrl = `https://open.mapquestapi.com/geocoding/v1/address?key=${mapsApiKey}&location=${countryInput}`;
try {

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

      } else {
        console.error('Error in MapQuest API:', mapsData.info.statuscode);
      }
  } catch (mapsError) {
    console.error('Error fetching from MapQuest API:', mapsError);
  }
}
