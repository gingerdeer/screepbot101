var util = require('util');
var roleUpgrader = {
    /** @param {Creep} creep **/
    run: function(creep) {
        var clr = util.randomColor();
        if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
            if (Math.random() < 0.5) creep.say('🔄 harvest');
            creep.memory.index = Math.floor(Math.random()*creep.room.find(FIND_SOURCES).length);
        }
        if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
            if (Math.random() < 0.5) creep.say('⚡ upgrade');
        }

        if(creep.memory.upgrading) {
            if (Math.random() < 0.1) creep.say('⚡ upgrade');
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: clr}});
                creep.index = Math.floor(Math.random()*creep.room.find(FIND_SOURCES).length)
            }
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if (typeof creep.memory.index == 'undefined') {
                creep.memory.index = Math.floor(Math.random()*creep.room.find(FIND_SOURCES).length);
            }
            if(creep.harvest(sources[creep.memory.index]) != OK) {
                creep.moveTo(sources[creep.memory.index], {visualizePathStyle: {stroke: Memory.clr}});
                
            }
        }
    }
};

module.exports = roleUpgrader;