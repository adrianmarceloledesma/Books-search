import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import FormProvider from './context/FormContext';

function App() {
  return (
    <FormProvider >
      <Header/>
      <Section/>
    </FormProvider>
  );
}

export default App;
