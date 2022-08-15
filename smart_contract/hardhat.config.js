// https://eth-goerli.g.alchemy.com/v2/J2JkxZVb-vOkjpG3YQSZ7djnWUDEEQSw

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/J2JkxZVb-vOkjpG3YQSZ7djnWUDEEQSw',
      accounts: ['aae74a000c91266ef9cfc37ab153e3e566a91845c188c8c9fdcfc25cdfff3deb']
    }
  }
}