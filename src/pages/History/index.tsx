import { HistoryContainer, HistoryList } from './styles.js'

export function History() {
  return (
    <HistoryContainer>
      <h1>My history</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Starts</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>last 20 days</td>
              <td>Finished</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>last 20 days</td>
              <td>Finished</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>last 20 days</td>
              <td>Finished</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>last 20 days</td>
              <td>Finished</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
