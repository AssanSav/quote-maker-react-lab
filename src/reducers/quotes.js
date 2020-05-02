export default (state = [], action) => {
  let quote = state.find(q => q.id === action.quoteId)
  let index = state.findIndex(quote => quote.id === action.quoteId);
  
  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote)
    
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)
    
    case "UPVOTE_QUOTE":
      return [
        ...state.slice(0, index),
        Object.assign({}, quote,{ votes: quote.votes += 1 }),
        ...state.slice(index + 1)
      ];
    
    case "DOWNVOTE_QUOTE":
      if (quote.votes > 0) {
        return [
          ...state.slice(0, index),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(index + 1)
        ]
      } else {
        quote
      }

    default:
    return state;
  }
}
