const ApplicationReducer = (state: any, action: any) => {
  console.log(state)
  console.log(action)

  switch (action.type) {
    case 'ToggleLoading':
      return { ...state, loading: true }
    default:
      return state
  }
}

export default ApplicationReducer
