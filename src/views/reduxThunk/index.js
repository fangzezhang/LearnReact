import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchUser, thunkFunction} from "@/store/postSlice";

export default function Index() {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.post.userInfo);
  const loading = useSelector((state) => state.post.loading);

  function handleFetchUser() {
    dispatch(fetchUser({id: '666'}))
  }

  let content;

  if (loading) {
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
      {content}
    </div>
  );
}
