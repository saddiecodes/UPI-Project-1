
// Currencyfreaks.com api (MK)
$ curl 'https://api.currencyfreaks.com/v2.0/rates/latest?apikey=01d3903e56654e9189a30b7fbb9d2a34'

{
  "date": "2023-03-21 12:43:00+00",
  "base": "USD",
  "rates": {
    "AGLD": "2.3263929277654998",
    "FJD": "2.21592",
    "MXN": "18.670707655673546",
    "LVL": "0.651918",
    "SCR": "13.21713243157135",
    "CDF": "2068.490771",
    "BBD": "2.0",
    "HNL": "24.57644632001569",
    .
    .
    .
  }
}

{
    "currencySymbols": {
        "AGLD": "Adventure Gold",
        "FJD": "Fiji Dollar",
        "MXN": "Mexican Peso",
        "SCR": "Seychellois Rupee",
        "CDF": "Congolese Franc",
        "BBD": "Barbadian Dollar",
        "HNL": "Honduran Lempira",
        "UGX": "Uganda Shilling",
        "PKR": "Pakistani Rupee",
        "EUR": "Euro",
        "GBP": "Pound Sterling",
        "CAD": "Canadian Dollar",
        "USD": "US Dollar"
        "ETH": "Ethereum",
        .
        .
        .
    }
}
























































placeSearch({
  key: '7kDXGajoCA7GkLUIYeht2GziGKbBtRJx',
  container: document.querySelector('#place-search-input')
});