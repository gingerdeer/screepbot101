var roleAll = require('role.all');
var roleBuilder = require('role.builder');
var roleHealer = require('role.healer');
var roleDef = {
    run: function(creep) {
        //
        var woundedsInSight = creep.pos.findInRange(FIND_MY_CREEPS,30, {
                filter: function(creep) {
                    var dmgParts = _.filter(creep.body, (part) => part["hits"] == 0);
                    return dmgParts.length > 2;
                }
        });
        if (woundedsInSight.length > 0) {
            creep.say('heal');
            var target = creep.pos.findClosestByPath(woundedsInSight);
            roleAll.healToward(creep,target);
            return;
        }
        //
        var hostilesInSight = creep.pos.findInRange(FIND_HOSTILE_CREEPS,35,{
                filter: function(_) {return true;}
                
                //function(creep) {
                //    var attackParts = _.filter(creep.body, (part) => part["type"] == "attack" || part["type"] == "ranged_attack");
               //     return attackParts.length > 0;
               // }
            })
        if (hostilesInSight.length > 0) {
            var target = creep.pos.findClosestByPath(hostilesInSight);
            //Math.random() < 0.1 ? roleAll.changeRoom(creep) : 
            roleAll.attackToward(creep,target);
            return;
        }
        //
        
        if (creep.hits < creep.hitsMax) {
            creep.say('ok');
            return roleAll.changeRoom(creep);
        }
        
        const jobs = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
        if (jobs.length > 0) {
            return roleBuilder.run(creep);
        }
        /*
        var repairs = creep.pos.findInRange(FIND_STRUCTURES,3, {
                    filter: function (structure) {
                        //console.log(typeof structure)
                        return (1.0*structure.hits / structure.hitsMax) < 0.5;
                    }
                });
        if (jobs.length > 0 || repairs.length > 2) {
            roleBuilder.run(creep);
            return;
        }
        */
        
        // if (Math.random() < 0.2) roleAll.changeRoom(creep,"#11ff11");
        
        var wanders = creep.room.find(FIND_CREEPS,{
                filter: function(creep) {
                    return creep.name.includes("wander");
                }
            })
            
        if (wanders.length > 1) {
            creep.say(Math.random() < 0.5 ? 'done' : 'here');
            creep.room.visual.circle(new RoomPosition(Math.floor(Math.random()*49),Math.floor(Math.random()*49),creep.room.name),
                {fill: 'transparent', radius: 5 * Math.random(), stroke: '#aa9999', opacity: 0.1, lineStyle: 'dotted'});
            roleAll.changeRoom(creep,"#11ff11");
            return;
        }
        
        if (Math.random() < 0.5) creep.say('wander');
        Math.random() < 0.1 ? roleAll.changeRoom(creep) : roleAll.randomStep(creep);
    }
};
module.exports = roleDef;