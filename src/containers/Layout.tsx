import React from 'react';

type Props = {
  children: React.ReactElement;
};

const Layout = (props: Props) => {
  return (
    <div className="Layout">
      {props.children}
    </div>
  );
}

export default Layout;