import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { users } from "../../data";

function Users() {
  return (
    <div>
      <h1>Users Page</h1>

      <ul className={styles.ul}>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
