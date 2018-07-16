/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('util');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    
    // stackoverflow pasta
    messageQueue: function() {
        var data = [];
    
        this.isEmpty = function() {
            return (data.length == 0);
        };
    
        this.enqueue = function(obj) {
            data.push(obj);
        };
    
        this.dequeue = function() {
            return data.shift();
        };
    
        this.peek = function() {
            return data[0];
        };
    
        this.clear = function() {
            data = [];
        };
    },
    
    randomColor: function() {
        var symbols = "0123456789abcdef";
        var ans = "#";
        for (var i=0;i<6;i++) {
            ans += symbols[Math.floor(Math.random()*symbols.length)];
        }
        return ans;
    },
    
    distance: function(fromPos, toPos) {
        var path = fromPos.findPathTo(toPos);
        return path.length;
    },
    
    neighbors: function(room) {
        var exits = Game.map.describeExits(room);
        // console.log(exits);
        var neighbors = [];
        for(var exit in exits) {
            var roomName = exits[exit];
            // console.log(roomName);
            neighbors.push(roomName);
        }
        return neighbors;
    },
    
    createConstructionSites: function(room,profile) {
        
    },
    
    
    convexHull: function(room,owner){
        
    },
    
    checkWalls: function(room) {
        
    },
    
    checkRoads: function(room) {
        
    },
    
    buildRoads: function(room) {
        
    },
    
    checkTowers: function(room) {
        
    },
    
    findOptimalTowerPos: function(room) {
        
    },
    
    findOptimalExtensionPos: function(room) {
        
    },
    
    checkExtensions: function(room) {
        
    },
    
    buildExtensions: function(room) {
        
    },
    
    checkRamparts: function(room) {
        
    },
    
    bubbleWrap: function(room) {
        
    },
    
    checkEntrances: function(room) {
        
    },
    
    mostUsedPaths: function(room) {
        
    },
    
    gridPoints: function(room) {
        
    },
    
    build: function(roomPos,structureType) {
        
    }
    
    // room / spawn specific util functions
    // ensureProtected
    // build walls, ramparts
    // determine most often used paths / tiles in room
    // determine optimal locations for spawn extensions
    // things to do for each spawn per controller level

};