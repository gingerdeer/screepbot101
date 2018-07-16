var roleUpgraderNew = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.target == "home") {
            creep.memory.target = creep.room.controller;
        }

        //if(creep.room.name != creep.memory.target) {
        //    creep.say('off to work');
        //    creep.moveTo(creep.room.findExitTo(creep.memory.target));
        //}

        if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
            creep.say('🔄 harvest');
            creep.memory.index = Math.floor(Math.random()*creep.room.find(FIND_SOURCES).length);
        }
        if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
            creep.say('⚡ upgrade');
        }

        if(creep.memory.upgrading) {
            if(creep.upgradeController(Game.rooms[creep.memory.target].controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.rooms[creep.memory.target].controller, {visualizePathStyle: {stroke: '#ffffff'}});
                creep.index = Math.floor(Math.random()*creep.room.find(FIND_SOURCES).length)
            }
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if (typeof creep.memory.index == 'undefined') {
                creep.memory.index = Math.floor(Math.random()*creep.room.find(FIND_SOURCES).length);
            }
            if(creep.harvest(sources[creep.memory.index]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[creep.memory.index], {visualizePathStyle: {stroke: '#ffaa00'}});
                
            }
        }
    }
};

module.exports = roleUpgraderNew;