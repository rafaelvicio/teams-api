export default function authReduce(state = false, action) {
  switch (action.type) {
    case "FETCH_USER":
      return action.payload || null;
    default:
      return state;
  }
}
