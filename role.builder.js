var util = require('util');
var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
             if (Math.random() < 0.5) creep.say('🔄 harvest');
            creep.memory.index = Math.floor(Math.random()*creep.room.find(FIND_SOURCES).length);
        }
        if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
            if (Math.random() < 0.5) creep.say('🚧 build');
        }

        if(creep.memory.building) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            
            // var rooms = util.neighbors(creep.room.name);
           // console.log(rooms.length);
           /*
            for(var room in rooms){
                //console.log(rooms[room]);
                if (typeof Game.rooms[rooms[room]] != 'undefined'){
                    //console.log(Game.rooms[rooms[room]].find(FIND_CONSTRUCTION_SITES).length);
                    targets.push(Game.rooms[rooms[room]].find(FIND_CONSTRUCTION_SITES)[0]);
                }
            }
            */
            if(targets.length) {
                //console.log(targets[0][0]);
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: Memory.clr}});
                    console.log("Creep "+creep.name+" moving to build: "+targets[0].structureType);
                    return;
                }
            } else {
                //console.log("creep:"+creep.name+" nothing to build");
                targets = creep.room.find(FIND_STRUCTURES, {
                    filter: function (structure) {
                        //console.log(typeof structure)
                        return structure.hits < structure.hitsMax;
                    }
                });
                /*
                for(var room in rooms){
                    //console.log(rooms[room]);
                    if (typeof Game.rooms[rooms[room]] != 'undefined'){
                        //console.log(Game.rooms[rooms[room]].find(FIND_CONSTRUCTION_SITES).length);
                        targets.push(Game.rooms[rooms[room]].find(FIND_STRUCTURES, {
                        filter: function (structure) {
                            //console.log(typeof structure)
                            return structure.hits < structure.hitsMax;
                        }
                    } ));
                        
                    }
                }
                */
                targets = targets.sort(function (s1,s2) {return s1.hits-s2.hits});
                if(targets.length) {
                    
                    if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0], {visualizePathStyle: {stroke: Memory.clr}});
                        if (Math.random() < 0.5) creep.say("repair");
                        console.log("Creep "+creep.name+" moving to repair: "+targets[0].structureType);
                    }
                } else {
                    creep.say('all done');
                    var dirs = [TOP, TOP_RIGHT, RIGHT, BOTTOM_RIGHT, BOTTOM, BOTTOM_LEFT, LEFT, TOP_LEFT];
                    var dir  = dirs[Math.floor(Math.random()*dirs.length)];
                    creep.move(dir);
                    if(Math.random() < 0.3)  {
                        creep.say('!');
                    }
                    if(Math.random() < 0.3) {
                        creep.say('party!');   
                    }
                    if(Math.random() < 0.3) {
                        creep.say('woop woop!');   
                    }
                }
                
            }
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if (typeof creep.memory.index == 'undefined' || creep.memory.index >= sources.length) {
                creep.memory.index = Math.floor(Math.random() * sources.length);
            }
            if(creep.harvest(sources[creep.memory.index]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[creep.memory.index], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
};

module.exports = roleBuilder;