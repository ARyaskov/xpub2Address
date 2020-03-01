# xpub2Address

> Convert xpub to BTC address using derivation path. 
> BIP49 (P2SH (Pay 2 Script Hash), 3-addresses) and BIP84 (bech32) are supported.


### Install

    $ yarn add xpub2Address

### Usage

Available for JavaScript (ES6) and TypeScript.
Enable `esModuleInterop` in `tsconfig.json` in case of using TS.

Why? For using `import x from 'x'` instead of `import * as xNS from 'x'`. 

```js

const xpub2Address = require('xpub2Address')

const xpub = 'xpub69zoMzNAXE3cuayttWQcdamG8SoWacvbMYrTVNg2eTM325bWJMKo9Uvhp22ajraN7X2D7cnt674ejAJtkYb8Nop5fFrf3MWUN8QmqZdUcua'
const path = `m/49'/0'/0'/0/0`

console.log(xpub2Address(xpub, path))

// 32Cb5T65aRv96t2HNCviymeMy38xc6Btsc
```


```js

import xpub2Address from 'xpub2Address'

const xpub = 'xpub69zoMzNAXE3cuayttWQcdamG8SoWacvbMYrTVNg2eTM325bWJMKo9Uvhp22ajraN7X2D7cnt674ejAJtkYb8Nop5fFrf3MWUN8QmqZdUcua'
const path = `m/84'/0'/0'/0/0`

console.log(xpub2Address(xpub, path))

// bc1qkedqp6weywmvs84du9dc77xwytrmjmvlldfmed


import xpub2Address from 'xpub2Address'

const xpub = 'tpubDANRtEBrEW15BPAkLhPhqW6dTZuAa1ReuBSkqvjAzN6vmNGDNaAtHvbY447NGMXbuRZ7jCJkdCthRLoW9QSNGFGNirbxitAhx61BbYUeyD9'
const path = `m/49'/0'/0'/0/0`

console.log(xpub2Address(xpub, path))
// 2Msko9C27BtRVJfeq3LYbbiddBPM8S61ASt


```

### API

#### xpub2Address(xpub: string, path: string)

Returns a string with derived BTC address.

##### xpub

Type: `string`

xpub.

##### path

Type: `string`

BIP32 Derivation path like `m/84'/coin_type'/account'/change/address`


###Known issues

- Only Account #0 in derivation path is supported now.

### Dependencies:

- [bitcoinjs-lib](https://www.npmjs.com/package/bitcoinjs-lib) Footprint ~ 300kb

#### PR's are welcome!


### License

- MIT © 2020 [Andrei Riaskov](https://github.com/ARyaskov)
