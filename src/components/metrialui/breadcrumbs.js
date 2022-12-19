import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.log('You clicked a breadcrumb.');
}

export default function breadcrumbs(props) {

    const subchild = props.subchild;
    console.log(subchild);
    if(subchild == "undefined") {
        subchild = "";
    }

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          {props.parent}
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          {props.child}
        </Link>
        
        <Link
          underline="hover"
          color="text.primary"
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
        >
          {subchild}
        </Link>
      </Breadcrumbs>
    </div>
  );
}
