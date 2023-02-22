import React, {useContext} from 'react';
import { ZhanSanContext } from "@/context/ZhanSanContext";

export default function ParentHasProvider() {
  const lisi = useContext(ZhanSanContext);

  return (
    <>
      <p>组件所在树的父组件中匹配到 Provider</p>
      <p>name: {lisi.name}</p>
      <p>age: {lisi.age}</p>
    </>
  );
}
