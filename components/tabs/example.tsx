import React from 'react';
import { FaCar, FaPlane, FaTrain } from 'react-icons/fa';
import Tab from './tab';

const Train = () => <div>Train</div>;
const Plane = () => <div>Plane</div>;
const Car = () => <div>Car</div>;

const tabs = [
  {
    name: 'train',
    label: 'Train',
    icon: <FaTrain />,
    component: <Train />,
  },
  {
    name: 'plane',
    label: 'Plane',
    icon: <FaPlane />,
    component: <Plane />,
  },
  {
    name: 'car',
    label: 'Car',
    icon: <FaCar />,
    component: <Car />,
  },
];

function Example() {
  return <Tab items={tabs} />;
}

export default Example;
