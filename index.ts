import hre from "hardhat";
import "@nomiclabs/hardhat-ethers";
import { providers, Contract, Signer, BigNumber } from "ethers";

export async function increase(seconds: number) {
  const ethers = hre.ethers;
  const signers = await ethers.getSigners();
  const signer = signers[0];
  await (signer.provider as providers.JsonRpcProvider).send("evm_increaseTime", [seconds]);
  await (signer.provider as providers.JsonRpcProvider).send("evm_mine", []);
}

export async function getTimestamp() : Promise<BigNumber> {
  const ethers = hre.ethers;
  const signers = await ethers.getSigners();
  const signer = signers[0];
  const res = await (signer.provider as providers.JsonRpcProvider).send("eth_getBlockByNumber", ["latest", false]);
  return BigNumber.from(res.timestamp);
}
