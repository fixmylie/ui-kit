import * as React from 'react';

function Xs(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12 12" {...props}>
      <path d="M11 3v1H1V3h10zM9 6v1H3V6h6zM8 10V9H4v1h4z" />
    </svg>
  );
}

export default Xs;