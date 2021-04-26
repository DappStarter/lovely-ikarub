require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name regret pulse comic install bag army gather'; 
let testAccounts = [
"0x649e7c75be3476db3edb7be1d354cbaa491201c9028d1151ba6d21a457ad9a96",
"0xff2dcc8bb415d5ef4f8274fcdc92161acdd2329650f4156d1ef4a5c9ea0c633c",
"0xc02f0af520d9c3d6f3a13704872bd529630b13369c18b70f3f580f3f3e9540d0",
"0xad143d411be75a371b211fb4eb19e6795313d8117570f0f0c3395629468dec1d",
"0x054b8b8d8732d2790b4f164aec8772ed5de629aafa0f829c7081c4fc22c979e7",
"0x1c8236d2907be56b7295b64eb1f372a46df283bdadf5ab8b72feba462ff2c97f",
"0x7acd7f188647295beaa3b52f4bf528dcccd696554c7d134c5d634a83dbb27b52",
"0xb11e4e197a230c5c450e10cc395ed1c732730d6d9acbd4c109ff781219a2f0f7",
"0xaabf637d7eefad1b73e4f3e817861aa314c00eb2e2b97f7063d999847fcb0ecd",
"0x9ea8852d1e54c5f607f94c733c8b5b49be04970153ea97ff938b278012c8be75"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
