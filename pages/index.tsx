import React from 'react';
import type { NextPage } from 'next';

import Checkout from '../componets/checkout';
import Product from '../componets/product';

const Home: NextPage = function () {
  return (
    <main>
      <Product />
      <Checkout />
    </main>
  );
};

export default Home;
