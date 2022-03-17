//SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract Egg is ERC20, Ownable, Pausable {

    bool public _enabled = false; 
    address public stakingContract;
    mapping(address => bool) public whitelisted;   
    uint256 public tokenAmount = 0;

    constructor() ERC20("Egg", "EGG") {
        // _mint(msg.sender, 10076 * (10 ** 18));
    }

    function disable() public onlyOwner {
        _pause();
    }
    function enable() public onlyOwner {
        _unpause();
    }

    function setStakingContract(address _stakingContract) public onlyOwner {
       stakingContract = _stakingContract;
    }
    
    function burn(address account, uint256 amount) public virtual onlyOwner returns (bool){
        _burn(account,amount);
        return true;
    }

    function mint(address sender, uint256 amount) external {
        require(msg.sender == owner() || msg.sender == stakingContract, "Bad request");
        _mint(sender, amount * (10 ** 18));
        tokenAmount += amount;
    }

    function setWhitelistMember(address _address, bool _flag) external onlyOwner {
        whitelisted[_address] = _flag;
    }
}