import React, { useState } from 'react';
import { useGetUserQuery, usePostUserMutation } from "@/store/rtkSlice";

export default function Rtk() {
  const [id, setId] = useState(666);
/*  const {
    data,
    isLoading,
    isFetching,
    refetch,
  } = rtkSlice.endpoints.getUser.useQuery(id, {
    refetchOnMountOrArgChange: true,
  });*/
  const {
    data,
    isLoading,
    isFetching,
    refetch,
  } = useGetUserQuery(id, {
    pollingInterval: 3000,
  });

  const [age, setAge] = useState(38);
  const [postUser, { isLoading: postLoading }] = usePostUserMutation();
  const postUserHandler = async () => {
    try {
      setAge(age + 1);
      await postUser({
        name: '李四',
        age: age,
      }).unwrap();
    } catch (e) {
      console.info(e);
    }
  };

  return (
    <div>
      <h4>RTK</h4>
      {
        isLoading || isFetching || postLoading ?
          <div>loading</div> :
          <div>
            <p>name: {data.name}</p>
            <p>age: {data.age}</p>
            <p>job: {data.job}</p>
            <p>salary: {data.salary}</p>
            <button onClick={() => {setId(id + 1)}}>id + 1</button>
            <button onClick={() => {setId(id - 1)}}>id - 1</button>
            <button onClick={refetch}>refetch</button>
            <button onClick={postUserHandler}>post</button>
          </div>
      }
    </div>
  );
}
