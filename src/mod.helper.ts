import { SelfCreeps } from "./types/selfCreeps";

export const memoryClean = () => {
  for(const name in Memory.creeps) {
    if(!Game.creeps[name]) {
        delete Memory.creeps[name];
        console.log('Clearing non-existing creep memory:', name);
    }
  }
}

export const getCreeps = (creeps: SelfCreeps[], creepRole: String) => {
  return creeps.filter(creep => creep.memory.role == creepRole)
}

export const fetchCreeps = () => {
  let creeps: SelfCreeps[] = []
  for (const name in Memory.creeps) {
    creeps.push(Memory.creeps[name] as SelfCreeps)
  }
  return creeps
}