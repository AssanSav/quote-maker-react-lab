import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from "../actions/quotes"
import { downvoteQuote } from "../actions/quotes"
import { upvoteQuote } from "../actions/quotes"


class Quotes extends Component {

  render() {
    const { quotes, removeQuote, upvoteQuote, downvoteQuote} = this.props
    // debugger
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {quotes.map((quote, index) => <QuoteCard key={index} quote={quote} removeQuote={removeQuote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ( {
    quotes: state.quotes
  })
}

export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
