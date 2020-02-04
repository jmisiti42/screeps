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
exports.getCreeps = (creepRole) => {
    let creeps = [];
    for (const name in Memory.creeps) {
        const creep = Memory.creeps[name];
        if (creep.role === creepRole) {
            creeps.push(Memory.creeps[name]);
        }
    }
    return creeps;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2QuaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR2EsUUFBQSxXQUFXLEdBQUcsR0FBRyxFQUFFO0lBQzlCLEtBQUksTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUMvQixJQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM1RDtLQUNGO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSxTQUFTLEdBQUcsQ0FBQyxTQUFpQixFQUFFLEVBQUU7SUFDN0MsSUFBSSxNQUFNLEdBQWlCLEVBQUUsQ0FBQTtJQUM3QixLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDaEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQWUsQ0FBQTtRQUMvQyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQWUsQ0FBQyxDQUFBO1NBQy9DO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQTtBQUNmLENBQUMsQ0FBQSJ9