var util = require('util');
var roleOffensiveRanged = {
    run: function(creep) {
            const enemies = creep.room.find(FIND_HOSTILE_CREEPS).concat(creep.room.find(FIND_HOSTILE_STRUCTURES, {
                filter: function(object) {
                   return object.structureType != STRUCTURE_CONTROLLER; // && object.structureType != STRUCTURE_RAMPART;
                 }
            }   ));
            const hostiles = creep.room.find(FIND_HOSTILE_CREEPS,{
                filter: function(creep) {
                    var attackParts = _.filter(creep.body, (part) => part["type"] == "attack" || part["type"] == "ranged_attack");
                    return attackParts.length > 0;
                }
            }).concat(creep.room.find(FIND_HOSTILE_STRUCTURES, {
                filter: function(object) {
                   return object.structureType == STRUCTURE_TOWER;
                 }
            }   ));
            const hostileCreeps = creep.room.find(FIND_HOSTILE_CREEPS);
            const healableCreeps = creep.room.find(FIND_MY_CREEPS,{
                filter: function(creep) {
                    return creep.hits < creep.hitsMax;
                }
            });
            var target;
            if(healableCreeps.length > 0){
                target = creep.pos.findClosestByPath(healableCreeps);
                this.healCreep(creep,target);
                return;
            } else if (creep.room.name != Memory.offenseTarget)  {
                this.march(creep);
                return;
            }
            
            //
            
            if( hostiles.length > 0) {
                target = creep.pos.findClosestByPath(hostiles);
            } else if(hostileCreeps.length > 0) {
                target = creep.pos.findClosestByPath(hostileCreeps)
            } else {
                target = creep.pos.findClosestByPath(enemies);
            }
            this.attackCreep(target);
            this.keepDistance(creep);
    },
    
    march: function(creep,target) {
                var route = Game.map.findRoute(creep.room.name, target);
                if(route.length > 0) {
                    creep.say('λ|>march()');
                    console.log('Creep '+creep.name+' now heading to room '+route[0].room);
                    var exit = creep.pos.findClosestByPath(route[0].exit);
                    if (typeof exit != "undefined") {
                        creep.moveTo(exit,{visualizePathStyle: {stroke: '#000000'}});
                    }
                }
    },
    
    healCreep: function(creep,targetCreep) {
            if(creep.heal(target) == ERR_NOT_IN_RANGE) {
                // console.log(target);
                creep.moveTo(target,{visualizePathStyle: {stroke: '#00ff00'}});
                } else {
            }
    },
    
    attackCreep: function(creep,targetCreep) {
                    
            if(creep.rangedAttack(target) == ERR_NOT_IN_RANGE) {
            // console.log(target);
            creep.moveTo(target,{visualizePathStyle: {stroke: '#ff0000'}});
            } else {
            }
    },
    
    keepDistance: function(creep) {
            const enemies = creep.room.find(FIND_HOSTILE_CREEPS).concat(creep.room.find(FIND_HOSTILE_STRUCTURES, {
                filter: function(object) {
                   return object.structureType != STRUCTURE_CONTROLLER; // && object.structureType != STRUCTURE_RAMPART;
                 }
            }   ));
            var closest = creep.pos.findClosestByPath(enemies);
            var path = creep.pos.findPathTo(closest);
            var pathLength = path.length;
            if(pathLength < 2) {
                var dir = 'TOP_LEFT';
                if(path[0].direction == 'BOTTOM') {
                    dir = 'TOP';
                } else if (path[0].direction == 'LEFT') {
                    dir = 'RIGHT';
                } else if (path[0].direction == 'RIGHT') {
                    dir = 'LEFT';
                } else if (path[0].direction == 'TOP') {
                    dir = 'BOTTOM';
                } else if (path[0].direction == 'TOP_RIGHT') {
                    dir = 'BOTTOM_LEFT';
                } else if (path[0].direction == 'TOP_LEFT') {
                    dir = 'BOTTOM_RIGHT';
                } else if (path[0].direction == 'BOTTOM_LEFT') {
                    dir = 'TOP_RIGHT';
                }
                creep.move(dir);
            }
    }
};
module.exports = roleOffensiveRanged;