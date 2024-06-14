import { xpub2Address } from "./dist/index.js"

const xpub =
  "xpub69zoMzNAXE3cuayttWQcdamG8SoWacvbMYrTVNg2eTM325bWJMKo9Uvhp22ajraN7X2D7cnt674ejAJtkYb8Nop5fFrf3MWUN8QmqZdUcua"
const path = `m/49'/0'/0'/0/0`

console.log(xpub2Address(xpub, path))
