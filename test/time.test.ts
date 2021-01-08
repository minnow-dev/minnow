import { expect } from "chai";
import hre from "hardhat";
import { time } from "..";

describe("Time", function(){
  it("increase", async function(){
    await time.increase(1000000000000);
    expect(await time.now()).to.be.above(1000000000000);
  });

  it('', async function(){
    console.log(hre.network.name);
    //console.log(hre.config);
  });
});
