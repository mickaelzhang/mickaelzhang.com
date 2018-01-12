import * as React from 'react';

const logo = require('./logo.svg') as string;
import './Logo.scss';

const Logo = () => (
    <img className="Logo" src={logo} alt="Mickael Zhang" />
);

export default Logo;