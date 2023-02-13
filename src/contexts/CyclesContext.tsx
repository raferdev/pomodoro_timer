import { createContext, ReactNode, useReducer, useState } from 'react'
import { ActionTypes, Cycle, CyclesReducer } from '../reducers/cycles.js'

interface NewCycleFormData {
  task: string
  minutesAmount: number
}

interface CyclesContextProps {
  children: ReactNode
}
interface CycleContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  createNewCycle: (data: NewCycleFormData) => void
  setSecondsPassed: (seconds: number) => void
  InterruptCurrentCycle: () => void
  markCurrentCycleAsFinished: () => void
}

export const CyclesContext = createContext({} as CycleContextType)

export function CyclesContextProvider({ children }: CyclesContextProps) {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const [cyclesState, dispatch] = useReducer(CyclesReducer, {
    cycles: [],
    activeCycleId: null,
  })
  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function createNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }
    setAmountSecondsPassed(0)
    dispatch({
      type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
      payload: {
        newCycle,
      },
    })
  }

  function InterruptCurrentCycle() {
    dispatch({
      type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
      payload: {
        activeCycleId,
      },
    })
  }

  function markCurrentCycleAsFinished() {
    dispatch({
      type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
      payload: {
        activeCycleId,
      },
    })
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }
  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        InterruptCurrentCycle,
        markCurrentCycleAsFinished,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
