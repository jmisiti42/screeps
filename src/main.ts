import roleHarvester from './mod.creep.harvester'
import { memoryClean, getCreeps } from './mod.helper'

export default {
    loop: () => {
        memoryClean()
        const harvesters = getCreeps('harvester')
        console.log('Harvesters: ' + harvesters.length);

        if(harvesters.length < 2) {
            const newName = 'Harvester' + Game.time;
            console.log('Spawning new harvester: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
                {memory: {role: 'harvester'}});
        }
        
        if(Game.spawns['Spawn1'].spawning) { 
            const spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name] as Creep &  { memory: { role: string; } };
            Game.spawns['Spawn1'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Spawn1'].pos.x + 1, 
                Game.spawns['Spawn1'].pos.y, 
                {align: 'left', opacity: 0.8});
        }

        for (const name in Game.creeps) {
            const creep = Game.creeps[name] as Creep & { memory: { role: string; } };
            if(creep.memory.role == 'harvester') {
                roleHarvester.run(creep);
            }
        }
    }
}