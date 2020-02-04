const _ = {
  filter: (c: any, cb: Function): any => {
      return
  }
}

export const memoryClean = () => {
  for(const name in Memory.creeps) {
    if(!Game.creeps[name]) {
        delete Memory.creeps[name];
        console.log('Clearing non-existing creep memory:', name);
    }
  }
}

export const getCreeps = (creepRole: String) => {
  return _.filter(Game.creeps, (creep: Creep & { memory: { role: string; }}) => creep.memory.role == creepRole);
}