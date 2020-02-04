var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("modules/creeps/harvester", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        run: (creep) => {
            if (creep.store.getFreeCapacity() > 0) {
                const sources = creep.room.find(FIND_SOURCES);
                if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0], { visualizePathStyle: { stroke: '#ffaa00' } });
                }
            }
            else {
                const targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                            structure.structureType == STRUCTURE_SPAWN ||
                            structure.structureType == STRUCTURE_TOWER) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
                });
                if (targets.length > 0) {
                    if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0], { visualizePathStyle: { stroke: '#ffffff' } });
                    }
                }
            }
        }
    };
});
define("main", ["require", "exports", "modules/creeps/harvester"], function (require, exports, harvester_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    harvester_1 = __importDefault(harvester_1);
    const _ = {
        filter: (c, cb) => {
            return;
        }
    };
    exports.default = {
        loop: () => {
            for (var name in Memory.creeps) {
                if (!Game.creeps[name]) {
                    delete Memory.creeps[name];
                    console.log('Clearing non-existing creep memory:', name);
                }
            }
            const harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
            console.log('Harvesters: ' + harvesters.length);
            if (harvesters.length < 2) {
                var newName = 'Harvester' + Game.time;
                console.log('Spawning new harvester: ' + newName);
                Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName, { memory: { role: 'harvester' } });
            }
            if (Game.spawns['Spawn1'].spawning) {
                const spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
                Game.spawns['Spawn1'].room.visual.text('🛠️' + spawningCreep.memory.role, Game.spawns['Spawn1'].pos.x + 1, Game.spawns['Spawn1'].pos.y, { align: 'left', opacity: 0.8 });
            }
            for (var name in Game.creeps) {
                var creep = Game.creeps[name];
                if (creep.memory.role == 'harvester') {
                    harvester_1.default.run(creep);
                }
            }
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2R1bGVzL2NyZWVwcy9oYXJ2ZXN0ZXIudHMiLCIuLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQSxrQkFBZTtRQUNiLEdBQUcsRUFBRSxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQ3BCLElBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLEVBQUU7Z0JBQ2xDLE1BQU0sT0FBTyxHQUFhLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO2dCQUN2RCxJQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksZ0JBQWdCLEVBQUU7b0JBQzlDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsa0JBQWtCLEVBQUUsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFDLEVBQUMsQ0FBQyxDQUFBO2lCQUN0RTthQUNKO2lCQUNJO2dCQUNELE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtvQkFDN0MsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUU7d0JBQ2xCLE9BQU8sQ0FBQyxTQUFTLENBQUMsYUFBYSxJQUFJLG1CQUFtQjs0QkFDbEQsU0FBUyxDQUFDLGFBQWEsSUFBSSxlQUFlOzRCQUMxQyxTQUFTLENBQUMsYUFBYSxJQUFJLGVBQWUsQ0FBQzs0QkFDM0MsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM3RCxDQUFDO2lCQUNKLENBQUMsQ0FBQztnQkFDSCxJQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNuQixJQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxJQUFJLGdCQUFnQixFQUFFO3dCQUNoRSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLGtCQUFrQixFQUFFLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBQyxFQUFDLENBQUMsQ0FBQztxQkFDdkU7aUJBQ0o7YUFDSjtRQUNILENBQUM7S0FDRixDQUFBOzs7Ozs7SUN2QkQsTUFBTSxDQUFDLEdBQUc7UUFDTixNQUFNLEVBQUUsQ0FBQyxDQUFNLEVBQUUsRUFBWSxFQUFPLEVBQUU7WUFDbEMsT0FBTTtRQUNWLENBQUM7S0FDSixDQUFBO0lBQ0Qsa0JBQWU7UUFDWCxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQ1AsS0FBSSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUMzQixJQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDbkIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUM1RDthQUNKO1lBRUQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBMkMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDLENBQUM7WUFDNUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWhELElBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksT0FBTyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixHQUFHLE9BQU8sQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUN2RCxFQUFDLE1BQU0sRUFBRSxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUMsRUFBQyxDQUFDLENBQUM7YUFDdEM7WUFFRCxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUMvQixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBMkMsQ0FBQztnQkFDakgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDbEMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQzNCLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQzthQUN0QztZQUVELEtBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDekIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQTBDLENBQUM7Z0JBQ3ZFLElBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksV0FBVyxFQUFFO29CQUNqQyxtQkFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDNUI7YUFDSjtRQUNMLENBQUM7S0FDSixDQUFBIn0=