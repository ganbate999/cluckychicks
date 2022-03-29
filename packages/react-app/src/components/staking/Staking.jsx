import React, { useState ,useEffect  } from "react";
import { AddStake, RemoveStake } from '.';
import { NFT_IMAGE_URL, NFT_IMAGE_EXTENSION } from "../../constants";
import "./staking-style.css";

export default function Staking({
  address,
  userSigner,
  localProvider,
  mainnetProvider,
  price,
  minimized,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  blockExplorer,
  contract,
  signer,
  remainTokenCount,
}) {

  const [stakedTokens, stakedTokensState] = useState([]);
  const [mintedTokens, mintedTokensState] = useState([]);
  const [dailyEggs, dailyEggState] = useState(0);
  const [totalEggs, totalEggState] = useState(0);
  const [nftData,   setNFTState] = useState([{}]);
  const [claiming, setClaming] = useState(false);

  const [totalStake, setTotalStake] = useState(0);
  const [totalremoveStake, setTotalRemoveStake] = useState(0);
  const [stakedata, setStakeData] = useState([]);
  const [staking,  setStaking] = useState(false);

  const setNFTData = () => {
    var data = [];
    
    for(var j = 0; j< stakedTokens.length; j++){
      var _subdata = {"tokenId" : "", "imageUrl" : "", isStaked: false};
      _subdata.tokenId = stakedTokens[j];
      _subdata.imageUrl = NFT_IMAGE_URL + stakedTokens[j] + NFT_IMAGE_EXTENSION;
      _subdata.isStaked = true;
      data.push(_subdata);
    }
    for(var i = 0; i< mintedTokens.length; i++){
      var _subdata = {"tokenId" : "", "imageUrl" : "", isStaked: false};
      _subdata.tokenId = mintedTokens[i];
      _subdata.imageUrl = NFT_IMAGE_URL + mintedTokens[i] + NFT_IMAGE_EXTENSION;
      _subdata.isStaked = false;
      data.push(_subdata);
    }
    
    console.log(data);
    return data;
  }

  const bigNumArrToArr = (bigArr) =>{
    var arr = [];
    for(var i =0; i < bigArr.length; i++){
      arr.push(parseInt(bigArr[i]["_hex"]));
    }
    return arr;
  }

  useEffect(() => {
    async function getUserMintState(){
      if(address){
        try {
          //Get user minted tokens
          const mintedTokenFunc = contract["Chicks"].connect(signer)["walletOfOwner"];
          const mintedTokenIds = await mintedTokenFunc(address);
          mintedTokensState(bigNumArrToArr(mintedTokenIds))

          //Get user staked tokens
          const stakedTokenFunc = contract["ChicksStaking"].connect(signer)["getStakedTokens"];
          const stakedTokenIds = await stakedTokenFunc(address);
          stakedTokensState(bigNumArrToArr(stakedTokenIds))

          //Get user daily reward tokens
          const dailyEggFunc = contract["ChicksStaking"].connect(signer)["calcRewardPerDay"];
          const dailyEggToken = await dailyEggFunc(address);
          dailyEggState(parseInt(dailyEggToken["_hex"]))
          console.log("Daily Egg Tokens = " + dailyEggs);

          //Get user total reward tokens
          const totalEggFunc = contract["ChicksStaking"].connect(signer)["getAllRewardedToken"];
          const totalEggTokens = await totalEggFunc(address);
          totalEggState(parseInt(totalEggTokens["_hex"]))
          console.log("Total Egg Tokens = " + totalEggs);

        } catch (e) {
          console.log(e);
        }
        
      }
    }
    getUserMintState();
  }, [address, contract]);

  useEffect(() => {
    async function setNFTslideData(){
      setNFTState(setNFTData());
    }
    setNFTslideData();
  }, [mintedTokens, stakedTokens]);

  const claimAllHandler = async () => {
    setClaming(true);
    try {
      const stakeFunction = contract["ChicksStaking"].connect(signer)["claimAll"];
      const hash = await stakeFunction(address);
      totalEggState(0);
      setClaming(false);
    } catch (e) {
      setClaming(false);
      console.log(e);
    }
  };

  // const _nftData = [
  //   {
  //     tokenId: 1,
  //     imageUrl: './assets/image/1.png',
  //     isStaked: true
  //   },
  //   {
  //     tokenId:2,
  //     imageUrl: './assets/image/2.png',
  //     isStaked: true
  //   },
  //   {
  //     tokenId:3,
  //     imageUrl: './assets/image/3.png',
  //     isStaked: false
  //   },
  //   {
  //     tokenId:4,
  //     imageUrl: './assets/image/2.png',
  //     isStaked: false
  //   },
  //   {
  //     tokenId:5,
  //     imageUrl: './assets/image/3.png',
  //     isStaked: false
  //   },
  //   {
  //     tokenId:6,
  //     imageUrl: './assets/image/2.png',
  //     isStaked: false
  //   },
  //   {
  //     tokenId:7,
  //     imageUrl: './assets/image/3.png',
  //     isStaked: false
  //   },
  //   {
  //     tokenId:8,
  //     imageUrl: './assets/image/3.png',
  //     isStaked: false
  //   },
  //   {
  //     tokenId:9,
  //     imageUrl: './assets/image/2.png',
  //     isStaked: false
  //   },
  //   {
  //     tokenId:10,
  //     imageUrl: './assets/image/3.png',
  //     isStaked: false
  //   },
  //   {
  //     tokenId:11,
  //     imageUrl: './assets/image/3.png',
  //     isStaked: false
  //   },
  //   {
  //     tokenId:12,
  //     imageUrl: './assets/image/2.png',
  //     isStaked: false
  //   },
  //   {
  //     tokenId:13,
  //     imageUrl: './assets/image/3.png',
  //     isStaked: false
  //   },
  //   {
  //     tokenId:14,
  //     imageUrl: './assets/image/3.png',
  //     isStaked: false
  //   },
  //   {
  //     tokenId:15,
  //     imageUrl: './assets/image/2.png',
  //     isStaked: false
  //   },
  //   {
  //     tokenId:16,
  //     imageUrl: './assets/image/3.png',
  //     isStaked: false
  //   }
  // ];

  const approveHandler = async () => {
    try {
        const approveFunction = contract["Chicks"].connect(signer)["setApprovalForAll"];
        const hash = await approveFunction(contract["ChicksStaking"].address, true);
    } catch (e) {
        console.log(e);
    }
    };
    
  const stakeHandler = async (tokenId) => {
    setStaking(true);
    try {
      await approveHandler();
      const stakeFunction = contract["ChicksStaking"].connect(signer)["stake"];
      const hash = await stakeFunction(tokenId);
        setStaking(false);
    } catch (e) {
        setStaking(false);
      console.log(e);
    }
  };
  
  const stakeSomeHandler = (e) => {
    if(stakedata.length > 0) {
      for(var j = 0; j< stakedata.length; j++){
        stakeHandler(stakedata[j]);
      }
      setTotalStake(0);
    } else {
      console.log(e);
    }
  };

  const stakeAllHandler = () => {
    setStakeData([]);
    nftData.map((data) => {
      if(!data.isStaked){
        setStakeData(stakedata => [...stakedata, data.tokenId]);
      }
    });
    stakeSomeHandler();
  };

  return (
    <div className="" id="">
        <div className="staking-title">
            <p>STAKE YOUR CHICKS</p>
        </div>
        <div className="group-btn">
            <div className="top-btns">
                <a href="#">
                  <img src="./assets/image/waterdrop1.png" />
                  BALANCE: 0
                </a>
                <a href="#">
                  <img src="./assets/image/waterdrop1.png" />
                  DAILY&nbsp;RATE: {dailyEggs}
                </a>
                <a href="#" onClick={claimAllHandler}>CLAIM ({totalEggs}&nbsp;$EGG)</a>
            </div>
            <div className="bottom-btns">
                <a href="#" onClick={stakeSomeHandler}>STAKE ({totalStake})</a>
                <a href="#" onClick={stakeAllHandler}>STAKE ALL</a>
                <a href="#">UNSTAKE ({totalremoveStake})</a>
            </div>
            <div className="group-arrow">
              <div className="arrow-stake"></div>
              <img src="./assets/image/waterdrop.png" />
              <div className="arrow-stake"></div>
            </div>
        </div>
        <div className="group-NFT">
            {nftData.map((data, index) => (
              <div className="staking-nft-list" key={index}>
                <p>#{data.tokenId}</p>
                <img src={data.imageUrl} width="200px" height="200px" />
                <p>3 $EGG / Day</p>
                {data.isStaked && 
                  <RemoveStake 
                  totalremoveStake={totalremoveStake}
                  setTotalRemoveStake={setTotalRemoveStake}
                  />
                }
                {!data.isStaked && 
                  <AddStake
                    stakedata={stakedata}
                    setStakeData={setStakeData}
                    tokenId={data.tokenId}
                    totalStake={totalStake}
                    setTotalStake={setTotalStake}
                  />
                }
              </div>
            ))}
        </div>
    </div>
  );
}
