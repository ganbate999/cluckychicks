import React, { useState } from 'react';

export default function AddStake ({totalremoveStake, setTotalRemoveStake}) {
  const [isActive, setIsActive] = useState(false);

  const handleClickView = () => {
    setIsActive(!isActive)
    if(isActive) {
        setTotalRemoveStake(totalremoveStake - 1)
    }else {
        setTotalRemoveStake(totalremoveStake + 1)
    }
  }

  return (
    <button onClick={() => handleClickView() }>{isActive ? 'ADD TO STAKE' : 'REMOVE TO STAKE'}</button>
  );
}