require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note rifle cluster install inhale equal gasp'; 
let testAccounts = [
"0x0f6457b11bd71ee4261ef878c7e8d724cf186f6c8e18199b4b770f9891d20af0",
"0x1934f3ebd666d2aef8da8fa3826b861425d260097f3f421da9059c27f1cbc1dd",
"0x1efcf1f3c9c78eb3d9b75fadcf518de256ebca8b4d6254316ebfb4c532eba6ff",
"0x5c557da99d93ec1794655de001198c84ad64eee8635f72616842a96e6f2e2237",
"0x63b2fab258913ac6ef171bb3da1e4064d42ee81d6bc7aabc96206555521cb690",
"0x19bba00a9d8d1c0bd0b1fa01f6997f9372833cd493211bf89e33838a3c7233af",
"0x86c577635565f65a193c04d8b94f951c8ef50c6927a565646470bc538f457c2e",
"0x447cc9ac48fcd9f8f05cad6d5e9acfbd25e71282724ade123e4b3636be18e772",
"0xe6ff6a709413361819344a4cab358c6b473b1b3698869bf76339560aa5bc351d",
"0xc93651503fbef8305a66c0b1cb180244494b30f5da72cd0744663d800074ff89"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
