"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = {
    filter: (c, cb) => {
        return;
    }
};
exports.memoryClean = () => {
    for (const name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
};
exports.getCreeps = (creepRole) => {
    return _.filter(Game.creeps, (creep) => creep.memory.role == creepRole);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2QuaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxDQUFDLEdBQUc7SUFDUixNQUFNLEVBQUUsQ0FBQyxDQUFNLEVBQUUsRUFBWSxFQUFPLEVBQUU7UUFDbEMsT0FBTTtJQUNWLENBQUM7Q0FDRixDQUFBO0FBRVksUUFBQSxXQUFXLEdBQUcsR0FBRyxFQUFFO0lBQzlCLEtBQUksTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUMvQixJQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM1RDtLQUNGO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSxTQUFTLEdBQUcsQ0FBQyxTQUFpQixFQUFFLEVBQUU7SUFDN0MsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUEyQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQztBQUNoSCxDQUFDLENBQUEifQ==