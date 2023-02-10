import { FormContainer, MinutesAmountInput, TaskInput } from './styles.js'

export function NewCycleForm(register: any, activeCycle: any) {
  return (
    <FormContainer>
      <label htmlFor="task">Im going to work in</label>
      <TaskInput
        id="task"
        list="task-suggestion"
        placeholder="Give a name to the project"
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id="task-suggestion">
        <option value="Project 1" />
        <option value="Project 2" />
        <option value="Project 3" />
      </datalist>
      <label htmlFor="minutesAmount">for</label>
      <MinutesAmountInput
        placeholder="00"
        step={5}
        min={1}
        max={60}
        type="number"
        id="minutesAmount"
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutes.</span>
    </FormContainer>
  )
}
