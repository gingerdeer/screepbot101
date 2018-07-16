var util = require('util');
var unitBasic = {
    // basic multi bot military unit
    //
    
    
    Unit: function(name,room,targetRoom,profile, spawns=["Spawn1"]){
        this.profile=profile;
        this.name=name;
        //this.source=source;
        this.target=targetRoom;
        this.creeps=[];
        this.spawns = [];
        this.room=room;
        this.mode="patrol";
        this.creepUnit = [];
        this.requestTroops = function() {
            var quotas = profile["quota"];
            var enough = 1;
            for (var creep_type in quotas) {
                //console.log("Available config: "+creep_profile+" defining role: "+profile[creep_profile]["role"]);
                enough = 1;
                var creeps_list = _.filter(Game.creeps, (creep) => creep.memory.role == creepCatalog[creep_type]["role"] &&
                                                            creep.room == this.room);
                if (creeps_list.length < quotas[creep_type]) {
                    var success = this.requestTroop(creep_type);
                    if (success) enough = 0;
                }
            }
            return enough;
        };
        
        this.requestTroop = function(creep_type) {
              var scs = 0;
              for (var spn in this.spawns) {
                  if (scs) return;
                  if (Game.spawns[spn].energy >= creepCatalog[creep_type]["cost"] && !Game.spawns[spn].spawning) {
                    var cost = creepCatalog[creep_type]["costs"]
                    var role = creepCatalog[creep_type]["role"]
                    var parts = creepCatalog[creep_type]["parts"]
                    var quota = quotas[creep_type];
                    var mem = creepCatalog[creep_type]["memory"]
                    // console.log(JSON.stringify(mem));
                    mem = Object.assign(mem,{role:role,profile:creep_type});
                    // console.log(JSON.stringify(mem));
                    console.log("Creeps in "+creep_type+", role "+role+": "+creeps.length+", quota: "+quota)
                    if (creeps.length < quota) {
                        var newName = creep_type +"-"+ Game.spawns[spn].room +"-"+ Game.time;
                        if (Game.spawns[spn].spawnCreep(parts,newName, {dryRun: true}) == OK) {
                            console.log('Room ' + Game.spawns[spn].room + ' spawning new ' + newName)
                            Game.spawns[spn].spawnCreep(parts,newName, {memory: mem})
                            scs = 1;
                        }
                    }
                  }
              }
              return scs;
        }
        
    },
    /*
    
    
    requestTroop: function(creep_type) {
      var scs = 0;
      for (var spn in this.spawns) {
          if (scs) return;
          if (Game.spawns[spn].energy >= creepCatalog[creep_type]["cost"] && !Game.spawns[spn].spawning) {
            var cost = creepCatalog[creep_type]["costs"]
            var role = creepCatalog[creep_type]["role"]
            var parts = creepCatalog[creep_type]["parts"]
            var quota = quotas[creep_type];
            var mem = creepCatalog[creep_type]["memory"]
            // console.log(JSON.stringify(mem));
            mem = Object.assign(mem,{role:role,profile:creep_type});
            // console.log(JSON.stringify(mem));
            console.log("Creeps in "+creep_type+", role "+role+": "+creeps.length+", quota: "+quota)
            if (creeps.length < quota) {
                var newName = creep_type +"-"+ Game.spawns[spn].room +"-"+ Game.time;
                if (Game.spawns[spn].spawnCreep(parts,newName, {dryRun: true}) == OK) {
                    console.log('Room ' + Game.spawns[spn].room + ' spawning new ' + newName)
                    Game.spawns[spn].spawnCreep(parts,newName, {memory: mem})
                    scs = 1;
                }
            }
          }
      }
      return scs;
    },
    
    requestTroops: function(unit) {
        var quotas = this.profile["quota"];
        var enough = 1;
        for (var creep_type in quotas) {
            //console.log("Available config: "+creep_profile+" defining role: "+profile[creep_profile]["role"]);
            enough = 1;
            var creeps_list = _.filter(Game.creeps, (creep) => creep.memory.role == creepCatalog[creep_type]["role"] &&
                                                        creep.room == this.room);
            if (creeps_list.length < quotas[creep_type]) {
                var success = this.requestTroop(creep_type);
                if (success) enough = 0;
            }
        }
        return enough;
    },
    */
    
    patrol: function(unit) {
        
    },
    
    attack: function(unit, target) {
        
    },
    
    escape: function(unit) {
        
    },
    
    moveTo: function(unit, target, opts) {
        for(var crp in unit.creepUnit) {
             crp.moveTo(target);
        }
    },
    
    chooseTarget: function(unit) {
        
    },
    
    run: function(unit) {
        
    },
    
    regroup: function(unit) {
        
    },
    
    assembleUnit: function(assembleRoom,targetRoom,spawns,profile) {
        var unit = new Unit(room,targetRoom,profile);
        var creepCatalog = config["creeps"];
        for (var creep_type in profile) {
            
            var cost = creepCatalog[creep_type]["costs"]
            var role = creepCatalog[creep_type]["role"]
            var parts = creepCatalog[creep_type]["parts"]
            var quota = profile[creep_type];
            var mem = creepCatalog[creep_type]["memory"]
            
            for(var i = 0; i < quota; i++) {
                util.orderCreep(creep_type,assembleRoom);
            }
        }
    },
    
    run: function(unit) {
        if (unit.requestTroops() === 0) {
            //
        } else {
            //
        }
    }
    
}
       
    
module.exports = unitBasic;
