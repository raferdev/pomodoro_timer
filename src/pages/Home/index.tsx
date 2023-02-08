import { Play } from 'phosphor-react'
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
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">{"I'm going to work in"}</label>
          <TaskInput
            list="task-suggestion"
            placeholder="Give a name to the project"
            id="task"
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
        <StartCountdownButton type="submit">
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
