
interface SelfCreepMemory extends CreepMemory {
  role: string
}

export interface SelfCreeps extends Creep {
  memory: SelfCreepMemory
}
