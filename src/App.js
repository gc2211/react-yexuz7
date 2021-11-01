import React from 'react';
import './style.css';
import axios from 'axios';
import QuoteCard from './QuoteCard';

export default function App() {
  const [quote, setQuote] = React.useState([
    {
      quote:
        'By chilling my loins I increase the chances of impregnating my wife.',
      character: 'Apu Nahasapeemapetilon',
      image:
        'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629',
      characterDirection: 'Left',
    },
  ]);

  const getQuote = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=1')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setQuote(data);
      });
  };

  return (
    <div>
      <button type="button" onClick={getQuote}>
        Get Quote
      </button>
      <QuoteCard {...quote[0]} />
    </div>
  );
}
