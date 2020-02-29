import React from 'react';
import { action } from '@storybook/addon-actions';
import { NumberInput } from './';

export default {
  title: 'NumberInput',
  component: NumberInput,
};

export const Default = () => <NumberInput onClick={action('clicked')} />;
