var config = require('config');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleUpgraderNew = require('role.upgraderNew');
var roleBuilder = require('role.builder');
var roleDef = require('role.def');
var roleClaimer = require('role.claimer');
var roleOffensive =require('role.offensive');
var roleWander = require('role.wander');
var roleAll = require('role.all');
var spawnFunction = require('spawnFunction');
var towerBehaviour =require('towerBehaviour');
var unitBasic = require('unit.basic');
var util = require('util');


// stats
// github.com/LispEngineer/screeps files
// var screepsplus = require('screepsplus');
// var resources = require('resources');
// var callback = require('callback');


module.exports.loop = function () {
  //  console.log(util.randomColor());
   // Memory.offenseTarget = 'E57N50';
    Memory.offenseTarget = 'E35N35';
    Memory.offensiveTarget = 'E35N35';
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
    if (Math.random() < 0.1) Memory.clr = util.randomColor();
    for(var spawn in Game.spawns) {
        spawnFunction.run(spawn);
    }
    
    for(var room in Game.rooms){
        for (var tower of Game.rooms[room].find(FIND_MY_STRUCTURES, { 
filter: {structureType: STRUCTURE_TOWER} })) {
           
            towerBehaviour.run(tower);
        }
    }
    
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
         roleAll.run(creep);
        ///*
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'harvester-tower') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
            // creep.memory.role = 'claimer';
            // creep.memory.target = '??????';
        }
        
        if(creep.memory.role == 'def') {
            roleDef.run(creep);
        }
        
        if(creep.memory.role == 'claimer') {
            roleClaimer.run(creep);
            //if (Math.Random() < 0.15) creep.memory.role='harvester';
        }
        if(creep.memory.role == 'upgraderNew') {
            roleUpgraderNew.run(creep);
        }
        //*/
        if(creep.memory.role == 'offensive') {
            roleOffensive.run(creep);
        }
        if(creep.memory.role == 'wander') {
            roleWander.run(creep);
        }
        
         
        
         /*
        if(creep.room.name == "?????" && Math.random() < 0.05) {
            creep.memory.role = 'upgrader';
        }
         */
        
        
         /*
        var attackParts = _.filter(creep.body, (part) => part["type"] == 
"attack" || part["type"] == "ranged_attack");
        if(attackParts.length > 0) {
            creep.memory.role="offensive";
        }
        */
        
        /*
        if(creep.room.name == "E58N52" && creep.memory.role == 
"offensive") {
            
creep.moveTo(creep.pos.findClosestByRange(FIND_EXIT_BOTTOM));
        }
        */
        
        roleAll.run(creep);
       
    }
    
    //Memory.test = 0;
    
    /*
    if (Memory.test === 0) {
        var profile = config["profiles"]["unit-basic"];
        var unit = new 
unitBasic.Unit("unit1","E57N48","E56N48",profile,["Spawn1","Spawn2","Spawn3"]);
        Memory.units = [unit];
        Memory.test = 1;
    } 
    
    
    for (var unit in Memory.units) {
        if (typeof unit != "undefined") unitBasic.run(unit);    
    }
    */
    // screepsplus.collect_stats();
    // screepsplus.takeOverConsole();
}

