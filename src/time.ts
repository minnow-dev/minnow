import "@nomiclabs/hardhat-ethers";
import { BigNumber, providers, Signer } from "ethers";
import hre from "hardhat";
export class Time {
  async increase(seconds: number) {
    const ethers = hre.ethers;
    const signers = await ethers.getSigners();
    const signer = signers[0];
    await (signer.provider as providers.JsonRpcProvider).send(
      "evm_increaseTime",
      [seconds]
    );
    await (signer.provider as providers.JsonRpcProvider).send("evm_mine", []);
  }

  async now(): Promise<BigNumber> {
    const ethers = hre.ethers;
    const signers = await ethers.getSigners();
    const signer = signers[0];
    const res = await (signer.provider as providers.JsonRpcProvider).send(
      "eth_getBlockByNumber",
      ["latest", false]
    );
    return BigNumber.from(res.timestamp);
  }
}
