import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from './redux/userApi'; // Add the import for the API function

function App() {
  const { userData, loading, error } = useSelector((state) => state.user);
  console.log('userData: ', userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData())
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
        <table>
          <thead>
            <tr>
              <th>Sr_no</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
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
        <div>No records found</div> // Wrap this in a div or use a <p> tag instead
      )}
    </div>
  );
}

export default App;