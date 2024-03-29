require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      saveDeployments: false,
    },
    cube: {
      url: process.env.CUBE_URL,
      accounts: [process.env.PK_MAIN],
    },
    bsc: {
      url: process.env.BSC_URL,
      accounts: [process.env.PK_MAIN],
    },
    polygon: {
      url: process.env.POLY_URL,
      accounts: [process.env.PK_MAIN],
    },
  },

  etherscan: {
    //{
    apiKey:
      //polygonMumbai:
      process.env.POLYGONSCAN_API_KEY,
    //bsc: process.env.BSC_KEY,
    //},
  },

  solidity: {
    compilers: [
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 800,
          },
        },
      },
    ],
  },
};
