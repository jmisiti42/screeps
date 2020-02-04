export const memoryClean = () => {
  for(const name in Memory.creeps) {
    if(!Game.creeps[name]) {
        delete Memory.creeps[name];
        console.log('Clearing non-existing creep memory:', name);
    }
  }
}

export const getCreeps = (creepRole) => {
  let creeps = []
  for (const name in Memory.creeps) {
    const creep = Memory.creeps[name]
    if (creep.role === creepRole) {
      creeps.push(Memory.creeps[name])
    }
  }
  return creeps
}
