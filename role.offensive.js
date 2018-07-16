var util = require('util');
var roleAll = require('role.all');
var roleOffensive = {
    run: function(creep) {
        
        // console.log(Memory.offenseTarget);
        if (creep.room.name != Memory.offenseTarget){
     //       if(creep.pos.x == 0 || creep.pos.x == 49 || creep.pos.y == 0 || creep.pos.y == 49) {
    //            creep.moveTo(creep.room.controller);
    //        } else {
                var route = Game.map.findRoute(creep.room.name, Memory.offenseTarget, {
                    routeCallback(roomName, fromRoomName) {
                            if (typeof Game.rooms[roomName] != "undefined"                  &&
                                roomName != Memory.offenseTarget                            &&
                                typeof Game.rooms[roomName].controller != "undefined"       &&
                                typeof Game.rooms[roomName].controller.owner != "undefined" &&
                                Game.rooms[roomName].controller.owner != "pena") {
                                    console.log("!");
                                    return Infinity;
                                }
                    }
                });
                if(route.length > 0) {
                    creep.say('');
                    console.log('Creep '+creep.name+' now heading to room '+route[0].room);
                    var exit = creep.pos.findClosestByPath(route[0].exit);
                    if (typeof exit != "undefined") {
                        var clr = util.randomColor();
                        creep.moveTo(exit,{visualizePathStyle: {stroke: clr}});
                    }
                }
//            }
        } else {
            const enemyHealers = creep.pos.findInRange(FIND_HOSTILE_CREEPS,10, {
                filter: function(creep) {
                    var healParts = _.filter(creep.body, (part) => part["type"] == "heal" && part["hits"] > 0);
                    return healParts.length > 0;
                }
            });
            
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
            if ( enemies.length != 0 ) {
                var target = creep.pos.findClosestByPath(enemies);
                ///*
                /*
                if ( hostiles.length != 0 ) {
                    target = creep.pos.findClosestByPath(hostiles);
                } else if ( hostileCreeps.length != 0 ) {
                    target = creep.pos.findClosestByPath(hostileCreeps);
                }
                */
                if (enemyHealers.length > 0) target = enemyHealers[0];
                //*/
                var attackParts = _.filter(creep.body, (part) => part["type"] == "attack" && part["hits"] > 0);
                if (Math.random() <= 0.7) attackParts.length > 1 ? creep.say("attack") : creep.say("");
                if(creep.attack(target) == ERR_NOT_IN_RANGE) {
                    // console.log(target);
                    creep.moveTo(target,{visualizePathStyle: {stroke: '#ff0000'}});
                } else {
                    // console.log(creep.attack(target));
                    target = creep.pos.findClosestByPath(enemies);
                    creep.attack(target);
                }
            } else {
                creep.say('patrol')
                roleAll.randomStep(creep,"#ffaabb");
                
                //var signText = "λ|> was()";
               // var signText = "☯☯ "
                var signText =" ";
                if(creep.room.controller && (!creep.room.controller.sign || creep.room.controller.sign.text != signText)) {
                    
                    if(creep.signController(creep.room.controller, signText) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.controller,{visualizePathStyle: {stroke: '#ffaabb'}});
                    }
                }
               //  creep.memory.role = "def";
            }
        }
    }
};
module.exports = roleOffensive;