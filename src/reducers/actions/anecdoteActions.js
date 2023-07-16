export const voteAnecdote = (id) => ({
  type: 'VOTE_ANECDOTE',
  payload: {
    id
  }
})

export const newAnecdote = (anecdote) => ({
  type: 'NEW_ANECDOTE',
  payload: {
    anecdote
  }
})