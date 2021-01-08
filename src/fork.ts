import { providers } from "ethers";
import { getProvider } from "./provider";

export async function reset() {
  const network = hre.network.name;
  const config = hre.config.networks[network];
  const forkOptions = config.forkinng;
  
  const provider = await getProvider();
  const res = await (provider as providers.JsonRpcProvider).send(
    "hardhat_reset",
    [{
      forking:{
        jsonRpcUrl: forkOptions.url,
        blockNumber: forkOptions.blockNumber
      }
    }]
  );
}
