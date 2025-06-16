// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Migrations {
    address public owner;
    uint    public lastCompletedMigration;

    constructor() {
        owner = msg.sender;
    }

    function setCompleted(uint _completed) external {
        require(msg.sender == owner, "Migrations: only owner");
        lastCompletedMigration = _completed;
    }
}
