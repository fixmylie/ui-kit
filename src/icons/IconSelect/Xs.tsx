import * as React from 'react';

function Xs(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12 12" {...props}>
      <path d="M6 8.5L10 4H2l4 4.5z" />
    </svg>
  );
}

export default Xs;