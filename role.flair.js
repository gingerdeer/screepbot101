var roleAll = require('role.all');
var util = require('util');
var roleFlair = {
    run: function(creep) {
        /*
        if (typeof Game.rooms[roomName] != "undefined"                  &&
                                roomName != Memory.offenseTarget                            &&
                                typeof Game.rooms[roomName].controller != "undefined"       &&
                                typeof Game.rooms[roomName].controller.owner != "undefined" &&
                                Game.rooms[roomName].controller.owner != "pena") {
                                    console.log("!");
                                    return Infinity;
        }
        */
        var room = creep.room;
        var enemies = creep.pos.findInRange(FIND_HOSTILE_CREEPS,10);
        var clr = util.randomColor();
        var status = typeof Game.rooms[roomName].controller != "undefined"       &&
                                typeof Game.rooms[roomName].controller.owner != "undefined" &&
                                Game.rooms[roomName].controller.owner != "pena" &&
                                enemies.length == 0;
        
        var signText =" ";
        if(creep.room.controller && (!creep.room.controller.sign || creep.room.controller.sign.text != signText)) {
                if(creep.signController(creep.room.controller, signText) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller,{visualizePathStyle: {stroke: clr}});
                }
        } else {
            if (status) {
                var target = creep.room.controller;
                var res = creep.reserveController(target);
                
                if (res == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target,{visualizePathStyle: {stroke: clr}});
                }
            } else {
                roleAll.changeRoom(creep);
            }
        }
        /*
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
        */
        
        
    }
};
module.exports = roleFlair;