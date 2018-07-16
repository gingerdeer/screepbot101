var util = require('util');
var roleAll = {
        // functionality for every creep
        dismantleClosest: function(creep) {
            var buildings = creep.pos.findInRange(FIND_STRUCTURES,3);
            var target = creep.pos.findClosestByRange(buildings);
            var attackParts = _.filter(creep.body, (part) => part["type"] == "attack" || part["type"] == "ranged_attack");
            if (attackParts.length > 0) {
                this.attackToward(creep,target);
            } else {
                var workParts = _.filter(creep.body, (part) => part["type"] == "work");
                if (workParts.length > 0) {
                    if (creep.dismantle(target) == ERR_NOT_IN_RANGE) creep.moveTo(target);
                }
            }
        },
        parts: function(creep) {
            var attackParts = _.filter(creep.body, (part) => part["type"] == "attack" || part["type"] == "ranged_attack");
            return attackParts.length;
        },
        scanRoom: function(creep){
            
        },
        hostiles: function(creep){
            
        },
        freakOut: function(creep){
            
        },
        takeBreak: function(creep) {
            
        },
        
        randomStep: function(creep) {
            // if (Math.random() < 0.2) creep.say('');
            var dirs = [TOP, TOP_RIGHT, RIGHT, BOTTOM_RIGHT, BOTTOM, BOTTOM_LEFT, LEFT, TOP_LEFT];
            var dir  = dirs[Math.floor(Math.random()*dirs.length)];
            //this.changeRoom(creep);
            return creep.move(dir);  
        },
        
        attackToward: function(creep,target,color='#000000') {
            // var attackParts = _.filter(creep.body, (part) => part["type"] == "attack");
            // var rangedParts = _.filter(creep.body, (part) => part["type"] == "RANGED_ATTACK");
            //var dist = creep.pos.findClosestByPath(target.pos).length;
            var ranged = creep.rangedAttack(target);
            if( (creep.pos.findInRange(FIND_CREEPS, 3).length == 0            &&
                 ranged                == ERR_NO_BODYPART                     ||
                 ranged                == ERR_NOT_IN_RANGE)                   ||
                 creep.attack(target)  == ERR_NOT_IN_RANGE ) {
                    creep.moveTo(target,{visualizePathStyle: {stroke: color}});
                    if (Math.random() < 0.5) this.randomStep(creep);
                    return;
                } else {
                    // console.log(creep.attack(target));
                }
                if (Math.random() < 0.3) this.randomStep(creep);
        },
        
        healToward: function(creep,target,color=Memory.clr) {
            // var attackParts = _.filter(creep.body, (part) => part["type"] == "attack");
            // var rangedParts = _.filter(creep.body, (part) => part["type"] == "RANGED_ATTACK");
            //var dist = creep.pos.findClosestByPath(target.pos).length;
            var ranged = creep.rangedHeal(target);
            if( (creep.pos.findInRange(FIND_CREEPS, 3).length == 0            &&
                 ranged                == ERR_NO_BODYPART                     ||
                 ranged                == ERR_NOT_IN_RANGE)                   ||
                 creep.heal(target)  == ERR_NOT_IN_RANGE ) {
                    creep.moveTo(target,{visualizePathStyle: {stroke: color}});
                    if (Math.random() < 0.3) this.randomStep(creep);
                } else {
                    // console.log(creep.attack(target));
                }
                if (Math.random() < 0.3) this.randomStep(creep);
        },
        
    
        changeRoom: function(creep,color="#ffffff")  {
        var rooms = util.neighbors(creep.room.name);
        if (typeof creep.memory.targetRoom == 'undefined') {
            var room = Math.floor(Math.random()*rooms.length);
            creep.memory.targetRoom = rooms[room];
        } else if (creep.memory.targetRoom == creep.room.name) {
            /*
            var room = Math.floor(Math.random()*rooms.length);
            creep.memory.targetRoom = rooms[room];
            console.log(Game.rooms[rooms[room]]);
            console.log(rooms.length);
            */
            creep.moveTo(new RoomPosition(25,25,creep.memory.targetRoom), {visualizePathStyle: {stroke: color}});
            if(typeof creep.memory.counter == undefined) {
                creep.memory.counter = 0;
            }
            if(creep.memory.counter < 10) {
                creep.moveTo(new RoomPosition(25,25,creep.memory.targetRoom), {visualizePathStyle: {stroke: color}});
                creep.memory.counter += 1;
            } else {
                delete creep.memory.targetRoom;
                delete creep.memory.counter
            }
        } else {
            if (Math.random() < 0.9) creep.say(creep.memory.targetRoom);
        //    console.log(creep.room.name + " " + creep.memory.targetRoom);
           // console.log(new RoomPosition(25,25,creep.memory.targetRoom));
            creep.moveTo(new RoomPosition(25,25,creep.memory.targetRoom), {visualizePathStyle: {stroke: color}});
        }
        
        //console.log(Game.rooms[creep.memory.targetRoom]);
        
    },
    
    
    // run function for all creeps
    run: function(creep) {
       // console.log(creep.body[0]["type"]);
       var attackPartsInTheory = _.filter(creep.body, (part) => (part["type"] == "attack"|| part["type"] == "ranged_attack"));
       var attackParts         = _.filter(creep.body, (part) => (part["type"] == "attack"|| part["type"] == "ranged_attack") && part["hits"] > 0);
       const hostiles = creep.room.find(FIND_HOSTILE_CREEPS,{
                filter: function(creep) {
                    var attackParts = _.filter(creep.body, (part) => (part["type"] == "attack" || part["type"] == "ranged_attack") &&
                                                                      part["hits"] > 0);
                    return attackParts.length > 0;
                }
            }).concat(creep.room.find(FIND_HOSTILE_STRUCTURES, {
                filter: function(object) {
                   return object.structureType == STRUCTURE_TOWER;
                 }
            }   ));
            
       if (hostiles.length == 0 && this.parts(creep) > 0) {
           var atks = creep.room.find(FIND_MY_CREEPS, {filter:function(creep){
               var attackParts = _.filter(creep.body, (part) => (part["type"] == "attack"|| part["type"] == "ranged_attack") && part["hits"] > 0);
               return attackParts.length > 0;
           }});
           //
           var extRoom = (str) => str.match(".*room ([EW][0-9][0-9][NS][0-9][0-9])].*$")[1];
           var targets = _.filter(atks, (tgt) =>  extRoom(tgt.name) != extRoom(creep.name) );
           
           if(attackParts.length > 0 && targets.length > 0) {
               /*
                var extRoom = (str) => str.match(".*room ([EW][0-9][0-9][NS][0-9][0-9])].*$")[1];
                var index = Math.floor(Math.random()*targets.length);
                //var target = creep.name == atks[index].name ? atks[index] : atks[0];
                var target = targets[0];
                if (Math.random() < 0.25) creep.say('drill');
                if (creep.name == atks[0].name) console.log('drill at'+creep.room.name);
                this.attackToward(creep,target,'#aaff99');
                */
           }
           if(attackParts.length == 0 && attackPartsInTheory.length > 0) {
               creep.say('ow');
               if (Math.random() < 0.4) {
                   this.changeRoom(creep,"#ff1100"); 
                   
               }
           }
        }
        
        if(attackPartsInTheory.length > 0 && attackParts.length == 0) {
            if (Math.random() < 0.9) this.changeRoom(creep);
            if (Math.random() < 0.1) Math.random() < 0.5 ? creep.say('wounded') : creep.say('😨');
        }
        
        if(attackParts.length == 0) {
                const hostiles = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 4);
                if(hostiles.length > 0) {
                    creep.say('OMG!😨');
                    var dirs = [TOP, TOP_RIGHT, RIGHT, BOTTOM_RIGHT, BOTTOM, BOTTOM_LEFT, LEFT, TOP_LEFT];
                    var dir  = dirs[Math.floor(Math.random()*dirs.length)];
                    //this.changeRoom(creep);
                    creep.move(dir);
                }
                else {
                     
                }
                
        }
        if (creep.room.controller) {
            var profileLevel = "rc" + creep.room.controller.level;
            if (profileLevel === "rc0") {
                creep.say('teardown');
                this.dismantleClosest(creep);
            }
        }
        
    }
    
    
    

};
module.exports = roleAll;

/*
const hostiles = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 10);
if(hostiles.length > 0) {
    creep.say('OMG!😨');
    creep.moveTo(Game.spawns['Spawn1']);
}
else {
    doWork(creep);
}
*/