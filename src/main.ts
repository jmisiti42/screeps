import roleHarvester from './modules/creeps/harvester'
const _ = {
    filter: (c: any, cb: Function): any => {
        return
    }
}
export default {
    loop: () => {
        for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:', name);
            }
        }

        const harvesters = _.filter(Game.creeps, (creep: Creep & { memory: { role: string; }}) => creep.memory.role == 'harvester');
        console.log('Harvesters: ' + harvesters.length);

        if(harvesters.length < 2) {
            var newName = 'Harvester' + Game.time;
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

        for(var name in Game.creeps) {
            var creep = Game.creeps[name] as Creep & { memory: { role: string; } };
            if(creep.memory.role == 'harvester') {
                roleHarvester.run(creep);
            }
        }
    }
}