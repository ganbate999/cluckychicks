import React, { useState } from 'react';

export default function AddStake ({stakedata, setStakeData, tokenId, totalStake, setTotalStake}) {
  const [isActive, setIsActive] = useState(false);

  const handleClickView = () => {
    setIsActive(!isActive)
    if(isActive) {
        setTotalStake(totalStake - 1)
        setStakeData(stakedata.filter((value) =>  value != tokenId ))
    }else {
        setTotalStake(totalStake + 1)
        setStakeData([...stakedata, tokenId]);
    }
  }

  return (
    <button onClick={() => handleClickView() }>{isActive ? 'UNSTAKE' : 'ADD TO STAKE'}</button>
  );
}