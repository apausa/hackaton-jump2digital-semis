/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import { EventInterface, CountriesInterface } from '../../types';

export default function Card({ countries }: CountriesInterface) {
  const router = useRouter();
  const PRICE = 899.00;
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [cardDate, setCardDate] = useState('');
  const [cardName, setCardName] = useState('');
  const [country, setCountry] = useState('');
  const [zip, setZip] = useState('');

  const handleEmail = (event: EventInterface) => setEmail(event.target.value);
  const handleCardNumber = (event: any) => {
    if (cardNumber.length === 16
      && event.nativeEvent.inputType !== 'deleteContentBackward') return;
    if (Number.isNaN(+event.target.value)) return;
    setCardNumber(event.target.value);
  };
  const handleCardDate = (event: any) => {
    if (cardDate.length === 5
      && event.nativeEvent.inputType !== 'deleteContentBackward') return;
    if (cardDate.length === 1) {
      event.target.value += '/';
    }
    setCardDate(event.target.value);
  };
  const handleCardCvc = (event: any) => {
    if (cardCvc.length === 3
      && event.nativeEvent.inputType !== 'deleteContentBackward') return;
    if (Number.isNaN(+event.target.value)) return;
    setCardCvc(event.target.value);
  };
  const handleCardName = (event: EventInterface) => setCardName(event.target.value);
  const handleCountry = (event: EventInterface) => setCountry(event.target.value);
  const handleZip = (event: any) => {
    if (zip.length === 5
      && event.nativeEvent.inputType !== 'deleteContentBackward') return;
    if (Number.isNaN(+event.target.value)) return;
    setZip(event.target.value);
  };
  const onSubmit = async () => {
    await axios.post('', {
      email, cardNumber, cardCvc, cardDate, cardName, country, zip,
    });
    router.push('/thanks');
  };
  return (
    <fieldset>
      <legend>Or pay with card</legend>
      <div>
        <label>Email</label>
        <input
          value={email}
          onChange={handleEmail}
          type="email"
          name="email"
          required
        />
      </div>
      <div>
        <label>Card</label>
        <input
          value={cardNumber}
          onChange={handleCardNumber}
          type="text"
          name="number"
          placeholder="1234123412341234"
          required
        />
        <input
          value={cardDate}
          onChange={handleCardDate}
          type="text"
          placeholder="MM/YY"
          name="date"
          required
        />
        <input
          value={cardCvc}
          onChange={handleCardCvc}
          placeholder="CVC"
          type="text"
          name="cvc"
          required
        />
      </div>
      <div>
        <label>Name on card</label>
        <input
          value={cardName}
          onChange={handleCardName}
          type="text"
          name="name"
          required
        />
      </div>
      <div>
        <label htmlFor="country">Country or region</label>
        <input
          value={country}
          onChange={handleCountry}
          type="text"
          list="country"
          name="country"
          id="country"
          placeholder="Country"
          required
        />
        <datalist id="country">
          {countries?.map((item: any) => (
            <option value={item.name}>{item.name}</option>
          ))}
        </datalist>

        <input
          value={zip}
          onChange={handleZip}
          type="text"
          placeholder="ZIP"
          name="zip"
          required
        />
      </div>
      <button
        onClick={onSubmit}
        type="button"
      >
        Pay $
        {PRICE}
      </button>
    </fieldset>
  );
}

export async function getStaticProps() {
  const { data: { data } } = await axios.get(
    'https://countriesnow.space/api/v0.1/countries/flag/unicode',
  );
  return { props: { countries: data } };
}
