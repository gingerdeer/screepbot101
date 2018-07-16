var roleAll = require('role.all');
var roleHeal = {
    run: function(creep) {
        const woundedsInSight = creep.pos.findInRange(FIND_MY_CREEPS,20, {
                filter: function(creep) {
                    var dmgParts = _.filter(creep.body, (part) => part["hits"] == 0);
                    return dmgParts.length > 0;
                }
        });
        if (woundedsInSight.length > 0) {
            var target = creep.pos.findClosestByPath(woundedsInSight);
            roleAll.healToward(creep,target);
        }
    }
};
module.exports = roleHeal;