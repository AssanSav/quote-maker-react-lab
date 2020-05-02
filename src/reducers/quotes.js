export default (state = [], action) => {
  
  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote)
    
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)
    
    case "UPVOTE_QUOTE":
      var quote = state.find(q => q.id === action.quoteId)
      return [Object.assign({}, quote, { votes: quote.votes += 1 })]
    
    case "DOWNVOTE_QUOTE":
      var quote = state.find(q => q.id === action.quoteId)
      if (quote.votes > 0) {
        return [Object.assign({}, quote, { votes: quote.votes -= 1 })]
      } 

    default:
    return state;
  }
}
