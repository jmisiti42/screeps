"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mod_creep_harvester_1 = __importDefault(require("./mod.creep.harvester"));
const mod_helper_1 = require("./mod.helper");
exports.default = {
    loop: () => {
        mod_helper_1.memoryClean();
        const harvesters = mod_helper_1.getCreeps('harvester');
        console.log('Harvesters: ' + harvesters.length);
        if (harvesters.length < 2) {
            const newName = 'Harvester' + Game.time;
            console.log('Spawning new harvester: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName, { memory: { role: 'harvester' } });
        }
        if (Game.spawns['Spawn1'].spawning) {
            const spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
            Game.spawns['Spawn1'].room.visual.text('🛠️' + spawningCreep.memory.role, Game.spawns['Spawn1'].pos.x + 1, Game.spawns['Spawn1'].pos.y, { align: 'left', opacity: 0.8 });
        }
        for (const name in Game.creeps) {
            const creep = Game.creeps[name];
            if (creep.memory.role == 'harvester') {
                mod_creep_harvester_1.default.run(creep);
            }
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0ZBQWlEO0FBQ2pELDZDQUFxRDtBQUVyRCxrQkFBZTtJQUNYLElBQUksRUFBRSxHQUFHLEVBQUU7UUFDUCx3QkFBVyxFQUFFLENBQUE7UUFDYixNQUFNLFVBQVUsR0FBRyxzQkFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVoRCxJQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLE1BQU0sT0FBTyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEdBQUcsT0FBTyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFDdkQsRUFBQyxNQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUMvQixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBMkMsQ0FBQztZQUNqSCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNsQyxLQUFLLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDM0IsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzVCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUEwQyxDQUFDO1lBQ3pFLElBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksV0FBVyxFQUFFO2dCQUNqQyw2QkFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM1QjtTQUNKO0lBQ0wsQ0FBQztDQUNKLENBQUEifQ==