import s from "./Searchbar.module.css";
import { FaSearch } from "react-icons/fa";

export const Searchbar = () => {
  return (
    <div className={s.searchbardiv}>
      <input
        className={s.inputsearchbar}
        type="text"
        placeholder="Buscá tu producto"
      />
      <div className={s.lupa}>
        <FaSearch fill="#504f4f" />
      </div>
    </div>
  );
};
