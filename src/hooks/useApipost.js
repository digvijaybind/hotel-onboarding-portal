/*this is just showing my skills and make hook not used anywhere*/
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

// import {useHistory} from "react-router-dom";

const useApiPost = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  //   const history = useHistory();
  const router = useRouter();
  // @ts-ignore
  const postData = async (url, postData) => {
    try {
      setLoading(true);

      const headers = {
        'Content-Type': 'application/json',
      };

      const response = await axios.post(url, postData, { headers });
      setData(response.data);
      localStorage.setItem('token', response.data.token);
      //   history.push("/");
      //   window.location.href = "/";
      router.push('/');
      console.log(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return { data, error, loading, postData };
};
export default useApiPost;
