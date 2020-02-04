import roleHarvester from './mod.creep.harvester'
import { memoryClean, getCreeps } from './mod.helper'
import { SelfCreeps } from './types/selfCreeps'

export const loop = () => {
  memoryClean()
  const harvesters = getCreeps('harvester') || []
  console.log('Harvesters: ' + harvesters.length);

  if(harvesters.length < 2 && !Game.spawns['Spawn1'].spawning) {
    const newName = 'Harvester' + Game.time;
    console.log('Spawning new harvester: ' + newName);
    Game.spawns['Spawn1'].spawnCreep(
      [WORK,CARRY,MOVE],
      newName, 
      { memory: { role: 'harvester' } }
    );
  }
  
  if(Game.spawns['Spawn1'].spawning) { 
    const spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name] as SelfCreeps
    Game.spawns['Spawn1'].room.visual.text(
      '🛠️' + spawningCreep.role,
      Game.spawns['Spawn1'].pos.x + 1, 
      Game.spawns['Spawn1'].pos.y, 
      {align: 'left', opacity: 0.8}
    );
  }

  for (const name in Game.creeps) {
    const creep = Game.creeps[name] as SelfCreeps
    if(creep.role == 'harvester') {
      roleHarvester.run(creep);
    }
  }
}