"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoryClean = () => {
    for (const name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
};
exports.getCreeps = (creeps, creepRole) => {
    return creeps.filter(creep => creep.memory.role == creepRole);
};
exports.fetchCreeps = () => {
    let creeps = [];
    for (const name in Memory.creeps) {
        creeps.push(Memory.creeps[name]);
    }
    return creeps;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2QuaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRWEsUUFBQSxXQUFXLEdBQUcsR0FBRyxFQUFFO0lBQzlCLEtBQUksTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUMvQixJQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM1RDtLQUNGO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSxTQUFTLEdBQUcsQ0FBQyxNQUFvQixFQUFFLFNBQWlCLEVBQUUsRUFBRTtJQUNuRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQTtBQUMvRCxDQUFDLENBQUE7QUFFWSxRQUFBLFdBQVcsR0FBRyxHQUFHLEVBQUU7SUFDOUIsSUFBSSxNQUFNLEdBQWlCLEVBQUUsQ0FBQTtJQUM3QixLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBZSxDQUFDLENBQUE7S0FDL0M7SUFDRCxPQUFPLE1BQU0sQ0FBQTtBQUNmLENBQUMsQ0FBQSJ9