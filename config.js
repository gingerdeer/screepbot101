var config = {
    "profile-initial": {
        "upgrader-basic": {
            "costs": 300,
            "parts": [WORK,CARRY,CARRY,MOVE,MOVE],
            "role": 'upgrader',
            "quota": 3
        },
        "builder-basic": {
            "costs": 300,
            "parts": [WORK,CARRY,CARRY,MOVE,MOVE],
            "role": 'builder',
            "quota": 3
        },
        "harvester-basic": {
            "costs": 300,
            "parts": [WORK,CARRY,CARRY,MOVE,MOVE],
            "role": 'harvester',
            "quota": 4
        }
    },
    "profile-RC2": {
        "upgrader-medium": {
            "costs": 550,
            "parts": [WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE],
            "role": 'upgrader',
            "quota": 7
        },
        "def-basic": {
            "costs": 400,
            "parts": [ATTACK,ATTACK,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE],
            "role": 'def',
            "quota": 1
            
        },"builder-medium": {
            "costs": 550,
            "parts": [WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE],
            "role": 'builder',
            "quota": 4
        },
        "harvester-medium": {
            "costs": 550,
            "parts": [WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE],
            "role": 'harvester',
            "quota": 4
        },
        "harvester_basic": {
            "costs": 300,
            "parts": [WORK,CARRY,CARRY,MOVE,MOVE],
            "role": 'harvester',
            "quota": 1
        }
    },
    "creeps": {
        "upgrader-basic": {
            "costs": 300,
            "parts": [WORK,CARRY,CARRY,MOVE,MOVE],
            "role": 'upgrader',
            "memory": {
                "creep_type": "upgrader-basic",
                "role": "upgrader"
            }
        },
        "builder-basic": {
            "costs": 300,
            "parts": [WORK,CARRY,CARRY,MOVE,MOVE],
            "role": 'builder',
            "memory": {
                "creep_type": "builder-basic",
                "role": "builder"
            }
        },
        "harvester-basic": {
            "costs": 300,
            "parts": [WORK,CARRY,CARRY,MOVE,MOVE],
            "role": 'harvester',
            "memory": {
                "creep_type": "harvester-basic",
                "role": "harvester"
            }
        },
        "upgrader-medium": {
            "costs": 550,
            "parts": [WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE],
            "role": 'upgrader',
            "memory": {
                "creep_type": "upgrader-medium",
                "role": "upgrader"
            }
        },
        "builder-medium": {
            "costs": 550,
            "parts": [WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE],
            "role": 'builder',
            "memory": {
                "creep_type": "builder-medium",
                "role": "builder"
            }
        },
        "harvester-medium": {
            "costs": 450,
            "parts": [WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],
            "role": 'harvester',
            "memory": {
                "creep_type": "harvester-medium",
                "role": "harvester"
            }
        },
        "harvester-tower": {
            "costs": 450,
            "parts": [WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],
            "role": 'harvester-tower',
            "memory": {
                "creep_type": "harvester-tower",
                "role": "harvester-tower"
            }
        },
        "def-basic": {
            "costs": 400,
            "parts": [TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK],
            "role": 'def',
            "memory": {
                "creep_type": "def-basic",
                "role": "def"
            }
        },
        "upgrader-lv3": {
            "costs": 800,
            "parts": [WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],
            "role": 'upgrader',
            "memory": {
                "creep_type": "upgrader-lv3",
                "role": "upgrader"
            }
        },
        "builder-lv3": {
            "costs": 800,
            "parts": [WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],
            "role": 'builder',
            "memory": {
                "creep_type": "builder-lv3",
                "role": "builder"
            }
        },
        "harvester-lv3": {
            "costs": 800,
            "parts": [WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],
            "role": 'harvester',
            "memory": {
                "creep_type": "harvester-lv3",
                "role": "harvester"
                
            }
        },
        "patrol-medium": {
            "costs": 800,
            "parts": [TOUGH,TOUGH,TOUGH,RANGED_ATTACK,
                      TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE],
            "role": 'def',
            "memory": {
                "creep_type": "patrol-medium",
                "role": "def"
            }
        },
        "claimer-basic": {
            "costs": 800,
            "parts": [CLAIM,MOVE,MOVE,MOVE,MOVE],
            "role": "claimer",
            "memory": {
                "creep_type": "claimer-basic",
                "role": "claimer",
                "target": "E59N51"
            }
        },
        "claimer-medium": {
            "costs": 1100,
            "parts": [CLAIM,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],
            "role": "claimer",
            "memory": {
                "creep_type": "claimer-medium",
                "role": "claimer"
                //"target": "E49N51"
            }
        },
        "upgraderNew-lv3": {
            "costs": 800,
            "parts": [WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],
            "role": 'upgraderNew',
            "memory": {
                "creep_type": "upgraderNew-lv3",
                "role": "upgraderNew",
                "target": "home"
            }
        },
        "harvester-lv4": {
            "costs": 1000,
            "parts": [WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],
            "role": 'harvester',
            "memory": {
                "creep_type": "harvester-lv4",
                "role": "harvester"
                
            }
        },
        "offensive-minimum": {
            "costs": 800,
            "parts": [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,
                      TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK, ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE],
            "role": 'offensive',
            "memory": {
                "creep_type": "offensive-basic",
                "role": "offensive"
            }
        },
        "offensive-basic": {
            "costs": 1200,
            "parts": [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,RANGED_ATTACK,ATTACK,
                      TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,TOUGH,TOUGH,MOVE],
            "role": "offensive",
            "memory": {
                "creep_type": "offensive-basic",
                "role": "offensive"
            }
        },
        "upgrader-lv4": {
            "costs": 1300,
            "parts": [WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],
            "role": 'upgrader',
            "memory": {
                "creep_type": "upgrader-lv3",
                "role": "upgrader"
            }
        },
        "upgrader-lv5": {
            "costs": 2300,
            "parts": [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,
                      CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
                      MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],
            "role": 'upgrader',
            "memory": {
                "creep_type": "upgrader-lv3",
                "role": "upgrader"
            }
        },
        "offensive-ranged": {
            "costs": 1400,
            "parts": [RANGED_ATTACK,HEAL,HEAL,MOVE,MOVE,MOVE,MOVE,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE],
            "role": "offensive-ranged",
            "memory": {
                "creep_type": "offensive-ranged",
                "role": "offensive-ranged"
            }
        },
        "wander": {
            "costs": 2000,
            "parts": [WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
                      HEAL,HEAL,HEAL,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK],
            "role": "wander",
            "memory": {
                "creep_type": "wander",
                "role": "wander"
            }
        },
    },
    "profiles": {
        "rc0": {
          "quota": {}  
        },
        "rc2": {
            "quota" :{
                "upgrader-basic": 4,
                "builder-basic": 3,
                "harvester-basic": 3
            },
            
            "buildings" : {
                "spawn" : 1
            }
        },
        "rc1" : {
            "quota" :{
                "upgrader-basic": 3,
                "builder-basic": 3,
                "harvester-basic": 3
            }
        },
        "rc99": {
            "quota" :{
                "upgrader-medium": 7,
                "def-basic": 1,
                "builder-medium": 4,
                "harvester-medium": 4,
                "harvester-basic": 1
            }
        },
        "rc99": {
            "quota" :{
                /*
                "upgrader-lv3": 7,
                "patrol-medium": 2,
                "builder-lv3": 3,
                "harvester-lv3": 4,
                "harvester-basic": 1
                */
                "upgrader-basic": 3,
                "builder-basic": 3,
                "harvester-basic": 3
            }
        },
        "rc3": {
            "quota" :{
                /*
                "upgrader-medium": 7,
                "def-basic": 1,
                "builder-medium": 3,
                "harvester-medium":3,
                "harvester-basic": 1
                */
                "upgrader-basic": 3,
                "builder-basic": 3,
                "harvester-basic": 3
            }
        },
        "rc4": {
            "quota" :{
                /*
                "claimer-basic": 0,
                "upgraderNew-lv3": 0,
                "upgrader-lv3": 4,
                "patrol-medium": 2,
                "builder-lv3": 3,
                "harvester-lv3": 4,
                "harvester-basic": 1
                */
                "offensive-minimum": 0,
                "upgrader-medium": 6,
                "def-basic": 1,
                "builder-medium": 3,
                "harvester-medium":4,
                "harvester-basic": 2
            }
        },
        "rc5": {
            "quota" :{
               //  "wander":2,
                "claimer-medium": 0,
                "upgraderNew-lv3": 0,
             //   "offensive-minimum": 1,
                "upgrader-lv3": 5,
                "harvester-tower": 1,
                "patrol-medium": 1,
                "builder-lv3": 2,
                "harvester-lv3": 5,
                "harvester-basic": 1
            }
        },
        // todo profile for 1 source, 2 source
        "rc6": {
            "quota" :{
                "wander":2,
                //"offensive-basic": 1,
                "claimer-medium": 0,
                "upgraderNew-lv3": 0,
                "upgrader-lv4": 5,
                "harvester-tower": 1,
                "patrol-medium": 1,
                "builder-lv3": 2,
                "harvester-lv3": 4,
                "harvester-basic": 1
            }
        },
        "rc7": {
            "quota" :{
                //"patrol-medium": 3,
                "wander":2,
              //  "offensive-basic": 1,
                //"upgrader-lv5": 6,
                "claimer-medium": 2,
                "upgraderNew-lv3": 0,
                /*,
                "upgrader-lv4": 3,
                "patrol-medium": 2,
                "builder-lv3": 3,
                "harvester-lv3": 0,
                "harvester-basic": 4
                */
                "harvester-tower": 1,
                "patrol-medium": 2,
                "upgrader-lv4": 4,
                "builder-basic": 3,
                "harvester-lv3": 4,
                "harvester-basic": 1
            }
        },
        "defensive1": {
            "patrol-medium":2,
            "def-basic":2,
            "quota": {
                "patrol-medium":1,
                "def-basic": 2
            }
        },
        "unit-basic": {
            "quota" : {
                "offensive-basic": 5
            }
        },
        "unit-patrol": {
            "offensive-ranged": 2,
            "offensive-basic":4
        }
        
    }
};
module.exports = config;