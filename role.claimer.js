var roleClaimer = {
    run: function(creep) {
        //creep.memory.target = 'E49N51';
        creep.memory.target = Memory.offensiveTarget;
        if(typeof creep.memory.target == 'undefined') {
            creep.say("hey");
            
        } else {
            var route = Game.map.findRoute(creep.room, creep.memory.target);
            if(route.length > 0) {
                console.log('Creep '+creep.name+' now heading to room '+route[0].room);
                var exit = creep.pos.findClosestByPath(route[0].exit, {
                    filter: function(object) {
                        return OBSTACLE_OBJECT_TYPES.indexOf(object.structureType) == -1;
                    }
                } );
                creep.moveTo(exit, {visualizePathStyle: {stroke: '#ff00ff'}}  );
            } else {
                if (creep.room.name == creep.memory.target && typeof creep.room.controller != 'undefined' && 
                     (typeof creep.room.controller.owner == 'undefined' ||
                      creep.room.controller.owner.username != 'pena')) {
                
                    if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.controller);
                    } else {
                        console.log(creep.claimController(creep.room.controller));
                    }
                } else if(creep.room.name == creep.memory.target && typeof creep.room.controller != 'undefined' && creep.room.controller.owner.username == 'pena'){
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
                    
                    var workParts = _.filter(creep.body, (part) => part["type"] == "work" );
                    var carryParts = _.filter(creep.body, (part) => part["type"] == "carry" );
                    var myConstructionSites = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
                    
                    if (workParts.length > 0 && carryParts.length > 0 && myConstructionSites.length > 0) {
                        creep.moveTo(myConstructionSites[0]);
                        creep.say("work work");
                        if (creep.pos.findPathTo(myConstructionSites[0]).length < 5) {
                            creep.memory.role = "builder";
                        }
                    }
                    
                } else {
                    creep.moveTo(new RoomPosition(1,27,creep.room.name));
                }
            }
        }
    }
};
module.exports = roleClaimer;