import React from 'react';
import { Provider } from 'react-redux';
import store from './src/state/store';

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};

export const onClientEntry = () => {
  if (typeof window !== 'undefined') {
    const storedData = localStorage.getItem('interpolStart');
    if (!storedData) {
      const initialData = {
        tutorial: {
          currentTutorial: 'tutorialOne',
          currentStep: 1
        },
        serverList: {
          connection: false
        },
        illegalActivity: {
          isIllegal: false,
          hasVirus: false
        },
        fileState: {
          fileVisible: false,
          fileContent: 'virus'
        }
      }
      localStorage.setItem('interpolStart', JSON.stringify(initialData));
    }
  }
};
