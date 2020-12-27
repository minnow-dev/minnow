import "@nomiclabs/hardhat-ethers";
export default {
  networks: {
    hardhat: {
      gas: 10000000,
      accounts: {
        accountsBalance: "1000000000000000000000000",
      },
      allowUnlimitedContractSize: true,
      timeout: 1000000,
    },
    coverage: {
      url: "http://localhost:8555",
    },
  },
};
