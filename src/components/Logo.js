import React from 'react';
import { Image } from '@chakra-ui/react';
import logo from '../assets/brand/ppuunnkk.gif';

export const Logo = props => {
  return <Image src={logo} {...props} />;
};
