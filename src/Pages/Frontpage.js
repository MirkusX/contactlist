import { useState } from "react";

export const Frontpage = () => {
  const [info, setInfo] = useState([]);
  return (
    <section>
      <div>
        <h1>contact page</h1>
      </div>
      <form>
        <input type="text" />
        <input type="email" />
        <input type="number" />
        <input type="url" />
      </form>
    </section>
  );
};
