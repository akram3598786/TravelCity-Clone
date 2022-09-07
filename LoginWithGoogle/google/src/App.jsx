import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  console.log(user);
  return (
    <div className="App">
      <h1>Login with google</h1>
      {isAuthenticated ? (
        <p>
          {user.name}
          {"         "}
          {"         "}
          {user.email}
        </p>
      ) : null}

      {isAuthenticated ? (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </button>
      ) : (
        <li>
          <button onClick={() => loginWithRedirect()}>Log In</button>
        </li>
      )}
    </div>
  );
}

export default App;
