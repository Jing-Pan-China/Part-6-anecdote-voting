import { useDispatch, useSelector } from "react-redux"
import { newAnecdote, voteAnecdote } from "./reducers/actions/anecdoteActions"

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const voteAnecdoteHandler = (id) => {
    dispatch(voteAnecdote(id))
  }

  const newAnecdoteHandler = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    if (!!anecdote) {
      dispatch(newAnecdote(anecdote))
    }
    document.getElementById('new-anecdote-form').reset();
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteAnecdoteHandler(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new anecdote</h2>
      <form id='new-anecdote-form' onSubmit={newAnecdoteHandler}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App