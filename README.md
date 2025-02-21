# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

npx hardhat node : used to run local blockchain, after running this command various accounts and its private key is generated, we'll be importing the same account in our metamask(use the private key to import the account)

npx hardhat run --network localhost scripts/deploy.js : used to deploy smart contract

Change the directory to client and in order to run the application use : npm start

Application opens on localhost:3000
