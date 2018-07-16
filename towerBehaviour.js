var towerBehaviour = {
    run: function(tower) {
        if(tower.isActive()) {
            
            const enemyHealers = tower.room.find(FIND_HOSTILE_CREEPS, {
                filter: function(creep) {
                    var healParts = _.filter(creep.body, (part) => part["type"] == "heal" && part["hits"] > 0);
                    return healParts.length > 0;
                }
            });
            
            var targets = tower.room.find(FIND_HOSTILE_CREEPS);
            
            target = enemyHealers.length > 0 ? enemyHealers[0] : targets[0];
            
            if (targets.length > 0) {
                tower.attack(targets[0]);
                return;
            }
            
            if (tower.energy < 750 && Math.random() < 0.75) {
                return;
            }
            
            
            
            if (tower.energy < 500 && Math.random() < 0.9) {
                return;
            } 
            
            var ownCreeps = tower.room.find(FIND_MY_CREEPS, {
                filter: function(creep) {
                    return creep.hits < creep.hitsMax;
                }
            });
            if (ownCreeps.length > 0) {
                tower.heal(ownCreeps[0]);
                return;
            }
            
            if (tower.energy < 250) {
                return;
            }

            var ownStructs = tower.room.find(FIND_MY_STRUCTURES, {
                filter: function (str) {
                    return str.hits < str.hitsMax;
                }
            });
            if (ownStructs.length > 0) {
                tower.repair(ownStructs[ Math.floor(Math.random() * ownStructs.length)  ]);
                return;
            }
        }
    }
    
};
module.exports = towerBehaviour;