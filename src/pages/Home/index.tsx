import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles.js'

export function Home() {
  const { register, handleSubmit, watch } = useForm()

  function handleCreateNewCycle() {}

  const task = watch('task')

  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">{"I'm going to work in"}</label>
          <TaskInput
            id="task"
            list="task-suggestion"
            placeholder="Give a name to the project"
            {...register('task')}
          />
          <datalist id="task-suggestion">
            <option value="adas" />
            <option value="asdasd" />
            <option value="adac" />
          </datalist>
          <label htmlFor="minutesAmount">{'for'}</label>
          <MinutesAmountInput
            placeholder="00"
            step={5}
            min={5}
            max={60}
            type="number"
            id="minutesAmount"
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>{'minutes.'}</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
