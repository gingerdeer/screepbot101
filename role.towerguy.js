var util = require('util');
var roleTowerGuy = {

    run: function(creep) {
        if(creep.carry.energy == 0) {
            if(creep.memory.transferring) {
                delete creep.memory.index;
            }
            creep.memory.harvesting = true;
            creep.memory.transferring = false;
        }
        if(creep.carry.energy == creep.carryCapacity) {
            if(creep.memory.harvesting) {
                delete creep.memory.index;
            }
            creep.memory.transferring = true;
            creep.memory.harvesting = false;
        }
        if(creep.memory.harvesting) {
            
            const sources = creep.room.find(FIND_SOURCES);
            
            if (typeof creep.memory.index == 'undefined' || creep.memory.index >= sources.length) {
                creep.memory.index = Math.floor(Math.random()*sources.length);
                
            }
            // creep.memory.sources = sources;
            if(creep.harvest(sources[creep.memory.index]) == ERR_NOT_IN_RANGE) {
                if (Math.random() < 0.1) creep.say('harvest');
                var clr = util.randomColor();
                creep.moveTo(sources[creep.memory.index], {visualizePathStyle: {stroke: Memory.clr}});
                 console.log("Creep "+creep.name+" moving to source:"+creep.memory.index)
            } else {
               // console.log(creep.harvest(sources[creep.memory.index]) );
                delete creep.memory.sources;
               // delete creep.memory.index;
            }
        }
        if(creep.memory.transferring) {
            var rooms = util.neighbors(creep.room.name);
            /*
            rooms.push(creep.room.name);
            console.log("*");
            console.log(rooms);
            console.log(creep.name + " " + rooms.length);
            rooms.forEach(function (element) {console.log(element);});
            
            var testTargets = [];
            for (var room of rooms) {
                testTargets.push(Game.rooms[room].find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_SPAWN ||
                            structure.structureType == STRUCTURE_EXTENSION ||
                            structure.structureType == STRUCTURE_CONTAINER ||
                            structure.structureType == STRUCTURE_STORAGE ||
                            structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                }}));
                //testTargets.push(Game.rooms[room]);
            }
            console.log(testTargets);
            //console.log(creep.pos.findClosestByPath(testTargets));
            */
            // TODO if hostiles transfer to turret
            var targets = creep.room.find(FIND_MY_STRUCTURES, {
                    filter: (structure) => {
                        return (//Math.random() < 0.25 ? 
                       // structure.structureType == STRUCTURE_SPAWN  || structure.structureType == STRUCTURE_TOWER
                        structure.structureType == STRUCTURE_TOWER ) && structure.energy < structure.energyCapacity;
            }});

            if(targets.length == 0) {
                targets = creep.room.find(FIND_MY_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                            structure.structureType == STRUCTURE_CONTAINER ||
                            structure.structureType == STRUCTURE_STORAGE) && structure.energy < structure.energyCapacity;
                }});
                
            }
            
            
            if(targets.length > 2) {
            targets = targets.sort(function (s1,s2) {
                if(s1.room.name == s2.room.name  && creep.room.name == s1.room.name) {
                    
                   return creep.pos.findPathTo(s1).length - creep.pos.findPathTo(s2).length;
                } else {
                    //console.log(50);
                    return 50;
                }
                
            });
            }

            
            if(typeof creep.memory.index == 'undefined' || creep.memory.index >= targets.length) {
                creep.memory.index = Math.floor(Math.random()*targets.length);
            }
            if(targets.length > 0) {
                // console.log("Creep "+creep.name+" moving to transfer energy at "+targets[0])
                //var target = creep.pos.findClosestByRange(targets);
                var target = targets[0];
                // console.log(target);
                console.log(creep.name + "-" + target)
                if (Math.random() < 0.05) creep.say(' ⚡ )');
                if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target, {visualizePathStyle: {stroke: Memory.clr}});
                    
                } else if (creep.transfer(target, RESOURCE_ENERGY) != OK) {
                   // console.log(creep.transfer(target, RESOURCE_ENERGY));
                }
            }
        }
    }
    
    
    
    
    
};

module.exports = roleTowerGuy;