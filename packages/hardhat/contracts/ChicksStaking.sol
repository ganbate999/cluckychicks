// SPDX-License-Identifier: GPL-3.0
///@consensys SWC-103

pragma solidity ^0.8.0;

import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./Chicks.sol";
import "./Egg.sol";

contract ChicksStaking is Ownable {
  using SafeMath for uint256;

  // ERC20 Reward Token
  address     public _eggContract;
  address     public _chicksAddress;
  Egg         _eggContract;
  Chicks      _chicksContract;
  mapping(address => mapping(uint256 => uint256)) stakerToken;
  mapping(address => uint256[]) stakers;

  // Turn staking on/off
  bool public allowStaking;

  // Turn claim reward on/off
  bool public allowClaiming;

  // @notice event emitted when a user has staked a token
  event Staked(address owner, uint256 amount);

  // @notice event emitted when a user has unstaked a token
  event Unstaked(address owner, uint256 amount);

  // @notice event emitted when a user claims reward
  event RewardPaid(address indexed user, uint256 reward);

  modifier isAllowedClaiming() {
    require(allowClaiming, 'Claiming is currently disabled');
    _;
  }
  modifier isAllowedStaking() {
    require(allowStaking, 'Staking is currently disabled');
    _;
  }

  constructor(address _chicksAddress, address _eggAddress) {
    setEggContract(_eggAddress);
    setChichsContract(_chicksAddress);    
  }


  function toggleAllowStaking() external onlyOwner {
    allowStaking = !allowStaking;
  }

  function toggleAllowClaiming() external onlyOwner {
    allowClaiming = !allowClaiming;
  }


  function setEggContract(address eggAddress) external onlyOwner{
    _eggAddress = eggAddress; 
    _eggContract =  Egg(_eggAddress);
  }

  function setChichsContract(address chicksAddress) external onlyOwner{
    _chicksAddress = chicksAddress;
    _chicksContract = Chicks(chicksAddress);
  }

  /// @notice Stake NFTs and earn reward tokens.
  function stake(
    uint256 _tokenId
  ) external isAllowedStaking {
    
    require(_chicksContract.getNFTUser(_tokenId) == msg.sender || msg.sender == owner(), "Sender is not owner of current NFT token");
    _stake(msg.sender, _tokenId);
  }

  /**
   * @dev All the staking goes through this function
   */
  function _stake(
    address user,
    uint256 _tokenId
  ) internal {
    require (user == msg.sender ||  msg.sender == owner(), "Wrong Sender");
    _chicksContract.transferFrom(user, address(this), _tokenId);
    stakerToken[user][_tokenId] = block.timestamp;
    stakers[user].push(_tokenId);
    emit Staked(user, _tokenId);
  }

  function unstake(address user, uint256 _tokenId) external {
    require (user == msg.sender ||  msg.sender == owner(), "Wrong Sender");
    require(stakerToken[user][_tokenId] > block.timestamp, 'Sender must have staked tokenID');
    _claimReward(user, _tokenId);
    _unstake(user, _tokenId);
  }

  /**
   * @dev All the unstaking goes through this function
   * @dev Rewards to be given out is calculated
   */
  function _unstake(
    address user,
    uint256 _tokenId
  ) internal {

    delete stakerToken[user][_tokenId];
    bool isStaked = false;
    uint index = 0;
    for (uint i = 0; i < stakers[user].length; i++) {
      if(stakers[user][i] == _tokenId) {
        index = i;
        isStaked = true;
      }
    }
    require (isStaked, "Please stake nft at first ");
    for (uint i = index; i<stakers[user].length-1; i++){
            stakers[user][i] = stakers[user][i+1];
    }
    stakers[user].pop();

    _chicksContract.transferFrom(address(this), user, _tokenId);
    emit Unstaked(user, _tokenId);
  }


  function claimReward(address user, uint256 _tokenId) external {
    require (user == msg.sender ||  msg.sender == owner(), "Wrong Sender");
    _claimReward(user, _tokenId);
  }

  /// @notice Lets a user with rewards owing to claim tokens
  function _claimReward(
    address user,
    uint256 tokenId
  ) internal isAllowedClaiming {
    uint amount = getRewardedToken(user, tokenId);
    stakerToken[user][tokenId] = block.timestamp;
    _eggContract.mint(user, amount);
    emit RewardPaid(user, amount);
  }

  /// @dev Getter functions for NFTStaking contract
  /// @dev Get the tokens staked by a user
  function getStakedTokens(address user) external view returns (uint256[] memory tokenIds) {
    return stakers[user];
  }

  function getRewardedToken(address user, uint256 tokenId) public view returns (uint256){
    require(stakerToken[user][tokenId] != 0,  'Sender must have staked NFT');
    uint256 amount = 0;
    if(stakerToken[user][tokenId] != 0){
      uint256 stakedTime = stakerToken[user][tokenId];
      uint _days = (block.timestamp - stakedTime)/60;  // /60/60/24
      if(tokenId < 7){
        amount = 3 * _days;
      }else if(tokenId < 51){
        amount = 2 * _days;
      }else if(tokenId < 10001){
        amount = 1 * _days;
      }
    }
    return amount;
  }

  function getAllRewardedToken(address user) public view returns (uint256){
    require(stakers[user].length != 0,  'Sender must have staked NFT');
    uint256 amount = 0; 
    for(uint i = 0; i < stakers[user].length; i++){
      amount += getRewardedToken(user, stakers[user][i]);
    }
    return amount;
  }

  function calcRewardPerDay(address user) public view returns (uint256){
    require(stakers[user].length != 0,  'Sender must have staked NFT');
    uint256 amount = 0;
    for(uint i = 0; i < stakers[user].length; i++){
      if(stakers[user][i] < 7){
        amount += 3;
      }else if(stakers[user][i] < 51){
        amount += 2;
      }else if(stakers[user][i] < 10001){
        amount += 1;
      }
    }
    return amount;
  }

  // Claim all the staked tokens from registered NFT contracts
  function claimAll(address user) public {
    require (user == msg.sender ||  msg.sender == owner(), "Wrong Sender");
    require(stakers[user].length != 0,  'Sender must have staked NFT');
    
    for (uint256 index = 0; index < stakers[user].length; index++) {
      _claimReward(user, stakers[user][index]);
    }
  }
}
