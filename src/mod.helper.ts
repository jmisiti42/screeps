import { SelfCreeps } from "./types/selfCreeps";


export const memoryClean = () => {
  for(const name in Memory.creeps) {
    if(!Game.creeps[name]) {
        delete Memory.creeps[name];
        console.log('Clearing non-existing creep memory:', name);
    }
  }
}

export const getCreeps = (creepRole: String) => {
  let creeps: SelfCreeps[] = []
  for (const name in Memory.creeps) {
    const creep = Memory.creeps[name] as SelfCreeps
    if (creep.role === creepRole) {
      creeps.push(Memory.creeps[name] as SelfCreeps)
    }
  }
  return creeps
}
