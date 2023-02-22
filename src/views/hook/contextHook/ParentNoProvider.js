import React, {useContext} from 'react';
import { ZhanSanContext } from "@/context/ZhanSanContext";

export default function ParentNoProvider() {
  const zhangSan = useContext(ZhanSanContext);

  return (
    <>
      <p>组件所在树的父组件中没有匹配到 Provider, defaultValue 生效</p>
      <p>name: {zhangSan.name}</p>
      <p>age: {zhangSan.age}</p>
    </>
  );
}
