// import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { users } from "../../data";

function UserProfile() {
  const { userId } = useParams();

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
}

export default UserProfile;
