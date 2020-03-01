/**
 * Extract bitcoin address from xpub for BIP49 (P2WPKH-nested-in-P2SH/BTC 3-addresses)
 * and BIP84 (P2WPKH based/segwit/BTC bc1-addresses) schemes.
 *
 * @param {String} path BIP32 Derivation path like m/84'/coin_type'/account'/change/address.
 * @param {String} xpub xpub.
 *
 * Usage:
 *
 * const xpub2Address = require('xpub2Address')
 * const res = xpub2Address(xpub, path)
 *
 * License: MIT
 *
 * Author: Andréi Riaskóv @ https://github.com/ARyaskov
 */

const bjs = require('bitcoinjs-lib')

module.exports = (xpub, path) => {
  let result = ''
  const ppa = path.split('/')
  let _network = bjs.networks.bitcoin
  if (xpub.charAt(0) === 't') {
    _network = bjs.networks.testnet
  }
  const restored = bjs.bip32.fromBase58(xpub, _network)
  const purpose = ppa[1].slice(0, -1)
  const node = restored.derive(parseInt(ppa[4])).derive(parseInt(ppa[5]))
  if (purpose === '49') {
    result = bjs.payments.p2sh({
      redeem: bjs.payments.p2wpkh({ pubkey: node.publicKey, network:  _network }),
      network:  _network
    }).address
  } else if (purpose === '84') {
    result = bjs.payments.p2wpkh({ pubkey: node.publicKey }).address
  } else {
    throw new Error(`BIP${purpose} is not implemented yet. Use 49 or 84.`)
  }

  return result
}
