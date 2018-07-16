
var util = require('util');
var config = require('config');
var spawnFunction = {
    
    
    profileLevel: function(spawn) {
        
    },
    
    spawnCreeps: function(spawn,profile) {
        
    },
    
    notify: function(spawn) {
        
    },
    
    excessHandler: function(spawn) {
        
    },
    
    
    run: function(spawn) {
        console.log("\n");
        controlLevel = Game.spawns[spawn].room.controller.level;
        console.log("Spawn: "+Game.spawns[spawn].name+", control level: "+controlLevel)
        
        
        /*
        var profile = config["profile-RC2"]
        for (var creep_profile in profile) {
            //console.log("Available config: "+creep_profile+" defining role: "+profile[creep_profile]["role"]);
            var creeps = _.filter(Game.creeps, (creep) => creep.memory.role == profile[creep_profile]["role"] &&
                                                          creep.room == Game.spawns[spawn].room);
            cost = profile[creep_profile]["costs"]
            role = profile[creep_profile]["role"]
            parts = profile[creep_profile]["parts"]
            quota = profile[creep_profile]["quota"]
            console.log("Creeps in "+creep_profile+", role "+role+": "+creeps.length+", quota: "+quota)
            if (creeps.length < quota) {
                var newName = creep_profile +"-"+ Game.spawns[spawn].room +"-"+ Game.time;
                if (Game.spawns[spawn].spawnCreep(parts,newName, {dryRun: true}) == OK) {
                    console.log('Room ' + Game.spawns[spawn].room + ' spawning new ' + newName)
                    Game.spawns[spawn].spawnCreep(parts,newName, {memory: {role: role, profile: creep_profile}})
                }
            }
        }
        */
        // /*
        var creepCatalog = config["creeps"];
        // var profileLevel = "rc" + controlLevel;
         var profileLevel = "rc" + Game.spawns[spawn].room.controller.level;
        /*
        if (Game.spawns[spawn].room.controller.level == 5) {
            profileLevel = "rc5";
        }
        */
        if (Game.spawns[spawn].room.controller.level >= 7) {
            profileLevel = "rc7";
        }
        var profile = config["profiles"][profileLevel];
        console.log(profileLevel);
        var quotas = profile["quota"];
        for (var creep_type in quotas) {
            //console.log("Available config: "+creep_profile+" defining role: "+profile[creep_profile]["role"]);
            var creeps = _.filter(Game.creeps, (creep) => creep.memory.role == creepCatalog[creep_type]["role"] &&
                                                        creep.room == Game.spawns[spawn].room);
                                                        /*
                                                       ( creep.room == Game.spawns[spawn].room ||
                                                        util.neighbors(Game.spawns[spawn].room.name).includes(creep.room.name) ) );
                                                        */
            var cost = creepCatalog[creep_type]["costs"]
            var role = creepCatalog[creep_type]["role"]
            var parts = creepCatalog[creep_type]["parts"]
            var quota = quotas[creep_type];
            var mem = creepCatalog[creep_type]["memory"]
            var currentTarget = "E58N51";
            if(creep_type == "upgraderNew-lv3") {
                mem["target"] = currentTarget;
            }
            // console.log(JSON.stringify(mem));
            mem = Object.assign(mem,{role:role,profile:creep_type});
            // console.log(JSON.stringify(mem));
            console.log("Creeps in "+creep_type+", role "+role+": "+creeps.length+", quota: "+quota)
            if (creeps.length < quota) {
                var newName = creep_type +"-"+ Game.spawns[spawn].room +"-"+ Game.time;
                if (Game.spawns[spawn].spawnCreep(parts,newName, {dryRun: true}) == OK) {
                    console.log('Room ' + Game.spawns[spawn].room + ' spawning new ' + newName)
                    Game.spawns[spawn].spawnCreep(parts,newName, {memory: mem})
                }
            }
            
        }
        console.log("\n");
        // */
        
        if(Game.spawns[spawn].spawning) {
            var spawningCreep = Game.creeps[Game.spawns[spawn].spawning.name];
            Game.spawns[spawn].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns[spawn].pos.x + 1,
                Game.spawns[spawn].pos.y,
                {align: 'left', opacity: 0.8});
        }
        }
};
module.exports = spawnFunction;