var roleAll = require('role.all');
var roleDef = {
    run: function(creep) {
        // var enemies = typeof creep.room.find(FIND_HOSTILE_CREEPS) == 'undefined' ? creep.room.find(FIND_HOSTILE_CREEPS).push(creep.room.find(FIND_HOSTILE_STRUCTURES)) : creep.room.find(FIND_HOSTILE_STRUCTURES);
        /*var enemies = creep.room.find(FIND_HOSTILE_CREEPS).concat(creep.room.find(FIND_HOSTILE_STRUCTURES), {
                filter: function(object) {
                   return object.structureType != STRUCTURE_CONTROLLER; // && object.structureType != STRUCTURE_RAMPART;
                 }
            }   );
            */
        var enemies = creep.room.find(FIND_HOSTILE_CREEPS).concat(creep.room.find(FIND_HOSTILE_STRUCTURES, {
                filter: function(object) {
                   return object.structureType != STRUCTURE_CONTROLLER; // && object.structureType != STRUCTURE_RAMPART;
                 }
            }   ));
        if (enemies.length == 0) {
            creep.memory.patrol = true;
        } else {
            creep.memory.patrol = false;
        }
        if (creep.memory.patrol) {
            if (Math.random() < 0.4) creep.say('patrol')
            /*
            dirs = [-1, 0, 1];
            randX = dirs[Math.floor(Math.random()*3)]
            randY = dirs[Math.floor(Math.random()*3)]
            creep.moveTo(creep.pos.x+randX,creep.pos.y+randY)
            */
            //
            /*
            var dirs = [TOP, TOP_RIGHT, RIGHT, BOTTOM_RIGHT, BOTTOM, BOTTOM_LEFT, LEFT, TOP_LEFT];
            var dir  = dirs[Math.floor(Math.random()*dirs.length)];
            creep.move(dir);
            */
            return roleAll.randomStep(creep,"#ffaabb");
        } else {
            /*
            enemies.sort(function (a,b) {
                var len1 = creep.pos.findPathTo(a.pos).length;
                var len2 = creep.pos.findPathTo(b.pos).length;
                return a-b;
            });
            */
            
            var target = creep.pos.findClosestByPath(enemies);
            
            var enemyHealers = creep.pos.findInRange(FIND_HOSTILE_CREEPS,10, {
                filter: function(creep) {
                    var healParts = _.filter(creep.body, (part) => part["type"] == "heal" && part["hits"] > 0);
                    return healParts.length > 0;
                }
            });
            
            if (enemyHealers.length > 0) target = enemyHealers[0];
            
            if(target) {
                var attackParts = _.filter(creep.body, (part) => part["type"] == "attack" && part["hits"] > 0);
                if (Math.random() <= 0.25) attackParts.length > 1 ? creep.say("attack") : creep.say("ow");
                if(creep.attack(target) == ERR_NOT_IN_RANGE) {
                    // console.log(target);
                    creep.moveTo(target,{visualizePathStyle: {stroke: '#ffffff'}});
                } else {
                    // console.log(creep.attack(target));
                }
            }
        }
        
    }
};
module.exports = roleDef;