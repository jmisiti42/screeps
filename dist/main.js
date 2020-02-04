"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mod_creep_harvester_1 = __importDefault(require("./mod.creep.harvester"));
const mod_helper_1 = require("./mod.helper");
exports.loop = () => {
    mod_helper_1.memoryClean();
    const harvesters = mod_helper_1.getCreeps('harvester') || [];
    console.log('Harvesters: ' + harvesters.length);
    if (harvesters.length < 2 && !Game.spawns['Spawn1'].spawning) {
        const newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName, { memory: { role: 'harvester' } });
    }
    if (Game.spawns['Spawn1'].spawning) {
        const spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text('🛠️' + spawningCreep.role, Game.spawns['Spawn1'].pos.x + 1, Game.spawns['Spawn1'].pos.y, { align: 'left', opacity: 0.8 });
    }
    for (const name in Game.creeps) {
        const creep = Game.creeps[name];
        if (creep.role == 'harvester') {
            mod_creep_harvester_1.default.run(creep);
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0ZBQWlEO0FBQ2pELDZDQUFxRDtBQUd4QyxRQUFBLElBQUksR0FBRyxHQUFHLEVBQUU7SUFDdkIsd0JBQVcsRUFBRSxDQUFBO0lBQ2IsTUFBTSxVQUFVLEdBQUcsc0JBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRWhELElBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRTtRQUMzRCxNQUFNLE9BQU8sR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUM5QixDQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEVBQ2pCLE9BQU8sRUFDUCxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUNsQyxDQUFDO0tBQ0g7SUFFRCxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFO1FBQ2pDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFlLENBQUE7UUFDcEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDcEMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxJQUFJLEVBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDM0IsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUMsQ0FDOUIsQ0FBQztLQUNIO0lBRUQsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQzlCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFlLENBQUE7UUFDN0MsSUFBRyxLQUFLLENBQUMsSUFBSSxJQUFJLFdBQVcsRUFBRTtZQUM1Qiw2QkFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtLQUNGO0FBQ0gsQ0FBQyxDQUFBIn0=