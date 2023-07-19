
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserDataStart, fetchUserDataSuccess, fetchUserDataFailure } from './redux/userSlice'; // Correct the imports

import { fetchUserData } from './redux/userApi'; // Add the import for the API function

function App() {
  const userData = useSelector((state) => state.user.userData);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    dispatch(fetchUserDataStart());
    fetchUserData()
      .then((data) => {
        dispatch(fetchUserDataSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchUserDataFailure(error.message));
      });
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {userData && userData.length > 0 ? (
        // {userData && userData.length > 0 ? (
        <table>
          <tr>
            <th>Sr_no</th>
            <th>Name</th>
            <th>Email</th>
          </tr>

          <tbody>
            {userData.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>

        </table>
      ) : (
        <tr>
          <td>No records found</td>
        </tr>
      )
      }
    </div >
  );
}

export default App;