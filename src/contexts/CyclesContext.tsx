import { createContext, ReactNode, useReducer, useState } from 'react'

interface NewCycleFormData {
  task: string
  minutesAmount: number
}

interface CyclesContextProps {
  children: ReactNode
}
interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
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

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: number | null
}

export const CyclesContext = createContext({} as CycleContextType)

export function CyclesContextProvider({ children }: CyclesContextProps) {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  const [cyclesState, dispatch] = useReducer(
    (state: CyclesState, action: any) => {
      if (action.type === 'CREATE_NEW_CYCLE') {
        return {
          activeCycleId: action.newCycle.id,
          cycles: [...state.cycles, action.payload.newCycle],
        }
      }

      if (action.type === 'INTERRUPT_CURRENT_CYCLE') {
        return {
          cycles: cycles.map((cycle) => {
            if (cycle.id === action.payload.activeCycleId) {
              return { ...cycle, interruptedDate: new Date() }
            } else {
              return cycle
            }
          }),
          activeCycleId: null,
        }
      }

      if (action.type === 'MARK_CURRENT_CYCLE_AS_FINISHED') {
        return {
          activeCycleId: null,
          cycles: cycles.map((cycle) => {
            if (cycle.id === action.payload.activeCycleId) {
              return { ...cycle, finishedDate: new Date() }
            } else {
              return cycle
            }
          }),
        }
      }

      return state
    },
    {
      cycles: [],
      activeCycleId: null,
    },
  )
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
      type: 'CREATE_NEW_CYCLE',
      payload: {
        newCycle,
      },
    })
  }

  function InterruptCurrentCycle() {
    dispatch({
      type: 'INTERRUPT_CURRENT_CYCLE',
      payload: {
        activeCycleId,
      },
    })
  }

  function markCurrentCycleAsFinished() {
    dispatch({
      type: 'MARK_CURRENT_CYCLE_AS_FINISHED',
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
