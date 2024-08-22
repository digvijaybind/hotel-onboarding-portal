/*this is just showing my skills and make hook not used anywhere*/
import { useState } from 'react';
import axios from 'axios';

const useApiUpdate = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);
  const [status, setStatus] = useState(null);

  const UpdateData = async (
    url,
    postData,
    customHeaders = {},
    queryParams = {},
  ) => {
    try {
      setloading(true);
      const headers = {
        'Content-type': 'application/json',
        ...customHeaders,
      };
      const response = await axios.post(url, postData, {
        headers,
        params: queryParams,
      });
      setData(response.data);
      setStatus(response.status);
    } catch (error) {
      console.log('error', error);
    } finally {
      setloading(false);
    }
  };
  return { data, error, loading, status, UpdateData };
};

export default useApiUpdate;
