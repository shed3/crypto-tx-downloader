<div id="top"></div>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![MIT License][license-shield]][license-url]
![top-languages-shield]
![languages-count-shield]
![package-version-shield]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/Shed-Enterprises/crypto-tx-downloader">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->
  <h2 align="center">Crypto Transaction Downloader</h2>
  <p align="center">
    <i>Simple script for downloading transactions from multiple crypto sources & exporting to json.</i>
    <br />
    <br />
    <!-- <a href="https://github.com/Shed-Enterprises/crypto-tx-downloader">View Demo</a>
    · -->
    <a href="https://github.com/Shed-Enterprises/crypto-tx-downloader/issues">Report Bug</a>
    ·
    <a href="https://github.com/Shed-Enterprises/crypto-tx-downloader/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement">Request Feature</a>
  </p>
</div>

### Table of Contents
- [About Crypto Transaction Downloader](#about-crypto-transaction-downloader)
  - [Features](#features)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Implemented Sources](#implemented-sources)
  - [Transactions Format](#transactions-format)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

<br />

<!-- ABOUT THE PROJECT -->
## About Crypto Transaction Downloader

Crypto Transaction Downloader provides a simple node.js script for aggregating transactions (with attached USD values) from multiple sources. Few exchanges provide the USD value of your transactions at the time they occured. Crypto Transaction Downloader solves this issue, while providing a unified transaction format.
### Features
- Get transactions from
  - Bittrex, Coinbase, Coinbase Pro, and Kucoin via API keys
  - Ethereum Blockchain via address
- Provide unified format for all transactions
### Built With
- [crypto-janitor][crypto-janitor] - Used to fetch transactions
- [fs][fs] - Used to write transactions to json file

<!-- GETTING STARTED -->
## Getting Started

Getting started with Crypto Transaction Downloader is very simple! Just clone this repo, then do some dependency installing and you are off to the races!

### Prerequisites

* Crypto Transaction Downloader requires [Node.js][nodejs] v12+ to run.

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/Shed-Enterprises/crypto-tx-downloader.git
    ```
2. Head over to your fresh repo
   ```sh
   cd crypto-tx-downloader
   ```
2. Install dependecies
   ```sh
   npm install
   ```

## Usage

1. Add your API credentials to the `accountsConfig.json` file
2. Run the downloader
   ```sh
   npm start
   ```
3. Check out all the nice transactions in the newly created `transactions.json`

### Implemented Sources

| Name         | Type    | Params                         |
| ------------ | ------- | ------------------------------ |
| Bittrex      | API     | { apiKey, secret }             |
| Coinbase     | API     | { apiKey, secret }             |
| Coinbase Pro | API     | { apiKey, secret, password }   |
| Kucoin       | API     | { apiKey, secret, password }   |
| Etherscan    | Address | { address, apiKey }            |

### Transactions Format


Format

Transactions will be represented in JSON as an array of Sources, each containing an array of transactions
```
[
    [tx1,...txN],   // All transactions from source A
    [tx1,...txN],   // All transactions from source B
    ...
    [tx1,...txN],   // All transactions from source N
]
```

Example
```json
[
    [
        {
            "id": "cb5469f9-5722-59c2-8b81-5f971af4ad19",
            "timestamp": "2020-05-28T18:26:46.000Z",
            "type": "buy",
            "baseCurrency": "BTC",
            "baseQuantity": 0.25929526,
            "baseUsdPrice": 9499.980832661577,
            "quoteCurrency": "USD",
            "quoteQuantity": 2463.3,
            "quotePrice": 9499.980832661577,
            "quoteUsdPrice": 1,
            "feeCurrency": "USD",
            "feeQuantity": 36.7,
            "feeUsdPrice": 1,
            "feeTotal": 36.7,
            "subTotal": 2463.3,
            "total": 2500
        },
        {
            "id": "c161c5d6-cf9c-4cd9-aae1-1f4e68e052e6",
            "timestamp": "2021-01-29T15:49:19.148Z",
            "type": "swap",
            "baseCurrency": "ATOM",
            "baseQuantity": 38,
            "baseUsdPrice": 7.971561449999999,
            "quoteCurrency": "BTC",
            "quoteQuantity": 0.00817,
            "quotePrice": 0.000215,
            "quoteUsdPrice": 37077.03,
            "feeCurrency": "BTC",
            "feeQuantity": 0.00004085,
            "feeUsdPrice": 37077.03,
            "feeTotal": 1.5145966754999998,
            "subTotal": 302.91933509999996,
            "total": 304.43393177549996
        },
        {
            "id": "134839f4-a4c0-4638-a3d1-2e164d1357d8",
            "timestamp": "2021-05-09T19:14:45.500Z",
            "type": "sell",
            "baseCurrency": "GRT",
            "baseQuantity": 135,
            "baseUsdPrice": 1.5253,
            "quoteCurrency": "USD",
            "quoteQuantity": 205.983,
            "quotePrice": 1.5253,
            "quoteUsdPrice": 1,
            "feeCurrency": "USD",
            "feeQuantity": 1.029915,
            "feeUsdPrice": 1,
            "feeTotal": 1.029915,
            "subTotal": 205.9155,
            "total": 204.88558500000002
        },
        {
            "id": "d595c958-cdd6-59e0-a9d9-f01752402d76",
            "timestamp": "2021-06-01T18:50:57.000Z",
            "type": "interest-in-account",
            "baseCurrency": "USDC",
            "baseQuantity": 0.54969,
            "baseUsdPrice": 1.0005639542287472,
            "feeCurrency": "USD",
            "feeQuantity": 0,
            "feeUsdPrice": 1,
            "feeTotal": 0,
            "subTotal": 0.55,
            "total": 0.55
        },
        {
            "id": "f3b21458-0402-5b4d-9ae4-e582a1bc31d4",
            "timestamp": "2021-06-04T01:30:41.000Z",
            "type": "send",
            "baseCurrency": "USDC",
            "baseQuantity": 5000,
            "baseUsdPrice": 0.9999995196098387,
            "feeCurrency": "USDC",
            "feeQuantity": 0.102402,
            "feeUsdPrice": 0.9999995196098386,
            "feeTotal": 0.1024019508070867,
            "subTotal": 4999.997598049194,
            "total": 5000.1
        },
    ]
    ...
]        
```


<!-- ROADMAP -->
## Roadmap

- [x] Add Usage Examples
- [ ] Add Object Reference Tables
- [ ] Add Transaction Types Table
- [ ] Add Export to CSV

See the [open issues][github-issues] for a full list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing
Crypto Transaction Downloader is written in TypeScript and tested using jest.

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch
   ```sh
   git checkout -b feature/AmazingFeature
   ```
3. Commit your Changes 
    ```sh
    git commit -m 'Add some AmazingFeature'
    ```
4. Push to the Branch 
   ```sh
    git push origin feature/AmazingFeature
    ```
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the GPL-3.0 License. See `LICENSE.txt` for more information.


<!-- CONTACT -->
## Contact

Riley Stephens - rileystephens@escalatorllc.com

<p align="right"><a href="#top">back to top</a></p>


<!-- Project URLS-->
[github-url]: https://github.com/Shed-Enterprises/crypto-tx-downloader
[github-issues]: https://github.com/Shed-Enterprises/crypto-tx-downloader/issues
[repo-path]: Shed-Enterprises/crypto-tx-downloader
[logo-path]: assets/img/logo
[git-repo-url]: https://github.com/rileystephens28/crypto-tx-downloader/blob/main/README.md
[crypto-janitor]: https://github.com/Shed-Enterprises/crypto-janitor
[fs]: https://node.readthedocs.io/en/latest/api/fs/

<!-- Built With -->
[nodejs]: https://nodejs.org/
[react]: https://www.npmjs.com/package/react
[react-dom]: https://www.npmjs.com/package/react-dom
[cryptocurrency-icons]: https://github.com/spothq/cryptocurrency-icons

<!-- License Badge -->
[license-shield]: https://img.shields.io/github/license/Shed-Enterprises/crypto-tx-downloader.svg?style=for-the-badge
[license-url]: https://github.com/Shed-Enterprises/crypto-tx-downloader/blob/main/LICENSE.txt

<!-- Version Badge -->
[package-version-shield]: https://img.shields.io/github/package-json/v/Shed-Enterprises/crypto-tx-downloader.svg?style=for-the-badge

<!-- Build Status Badge -->
[build-status-shield]: https://img.shields.io/travis/com/Shed-Enterprises/crypto-tx-downloader.svg?style=for-the-badge

<!-- Contributors Badge -->
[contributors-shield]: https://img.shields.io/github/contributors/Shed-Enterprises/crypto-tx-downloader.svg?style=for-the-badge
[contributors-url]: https://github.com/Shed-Enterprises/crypto-tx-downloader/graphs/contributors

<!-- Downloads Badge -->
[npm-monthly-downloads-shield]: https://img.shields.io/npm/dt/crypto-tx-downloader?style=for-the-badge
[npm-monthly-downloads-url]: https://www.npmjs.com/package/crypto-tx-downloader

<!-- Languages Badge-->
[top-languages-shield]: https://img.shields.io/github/languages/top/Shed-Enterprises/crypto-tx-downloader.svg?style=for-the-badge

[languages-count-shield]: https://img.shields.io/github/languages/count/Shed-Enterprises/crypto-tx-downloader.svg?style=for-the-badge