
import styles from "./styles.module.css";
import { LuPawPrint } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <div className={styles.iconWrapper}>
            <LuPawPrint color="#333" size={32} />
        </div>
        <h1>Pat Event Hub</h1>
    </nav>
  )
}

export default Navbar;
