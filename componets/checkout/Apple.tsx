import React from 'react';
import Link from 'next/link';

const Apple = function () {
  return (
    <Link href="/thanks">
      <a>Pay with Apple</a>
    </Link>
  );
};

export default Apple;
