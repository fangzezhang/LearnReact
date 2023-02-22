import React, {createContext} from 'react';

const ZhanSanContext = createContext({
  name: '张三',
  age: 18,
});

export { ZhanSanContext };
