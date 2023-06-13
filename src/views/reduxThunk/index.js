import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchUser, thunkFunction, reducerFetchUser} from "@/store/postSlice";
import api from '@/api';

export default function Index() {
  const dispatch = useDispatch();

  // const userInfo = useSelector((state) => state.post.userInfo);
  const loading = useSelector((state) => state.post.loading);
  const count = useSelector((state) => state.post.count);

  // 异步请求的方法三: 组件内进行异步请求
  const [localLoading, setLocalLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  async function handleFetchUser() {
    // dispatch(reducerFetchUser({id: '666'}));

    setLocalLoading(true);
    const response = await api.get('/auth');

    setUserInfo(response.data);
    setLocalLoading(false);
  }

  let content;

  // if (loading) {
  if (localLoading) {
    content = <div>loading</div>
  } else {
    content = <div>
      <p>name: {userInfo.name}</p>
      <p>age: {userInfo.age}</p>
      <p>job: {userInfo.job}</p>
      <p>salary: {userInfo.salary}</p>
    </div>
  }

  function handleIncrement() {
    dispatch(thunkFunction(8));
  }

  return (
    <div>
      <h4>This page to test Redux Thunk</h4>
      <button onClick={handleFetchUser}>fetch user</button>
      <button onClick={handleIncrement}>increment count</button>
      <p>count: {count}</p>
      {content}
    </div>
  );
}
