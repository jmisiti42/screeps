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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFydmVzdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvY3JlZXBzL2hhcnZlc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtCQUFlO0lBQ2IsR0FBRyxFQUFFLENBQUMsS0FBWSxFQUFFLEVBQUU7UUFDcEIsSUFBRyxLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsRUFBRTtZQUNsQyxNQUFNLE9BQU8sR0FBYSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUN2RCxJQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksZ0JBQWdCLEVBQUU7Z0JBQzlDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsa0JBQWtCLEVBQUUsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFDLEVBQUMsQ0FBQyxDQUFBO2FBQ3RFO1NBQ0o7YUFDSTtZQUNELE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDN0MsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUU7b0JBQ2xCLE9BQU8sQ0FBQyxTQUFTLENBQUMsYUFBYSxJQUFJLG1CQUFtQjt3QkFDbEQsU0FBUyxDQUFDLGFBQWEsSUFBSSxlQUFlO3dCQUMxQyxTQUFTLENBQUMsYUFBYSxJQUFJLGVBQWUsQ0FBQzt3QkFDM0MsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3RCxDQUFDO2FBQ0osQ0FBQyxDQUFDO1lBQ0gsSUFBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDbkIsSUFBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsSUFBSSxnQkFBZ0IsRUFBRTtvQkFDaEUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQyxrQkFBa0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUMsRUFBQyxDQUFDLENBQUM7aUJBQ3ZFO2FBQ0o7U0FDSjtJQUNILENBQUM7Q0FDRixDQUFBIn0=