import React from 'react';

import Back from './Back';
import Information from './Information';

const Product = function () {
  return (
    <aside>
      <Back />
      <hgroup>
        <h2>Macbook Pro</h2>
        <h2>$ 777.OO</h2>
        <h2>Image</h2>
      </hgroup>
      <Information />
    </aside>
  );
};

export default Product;
