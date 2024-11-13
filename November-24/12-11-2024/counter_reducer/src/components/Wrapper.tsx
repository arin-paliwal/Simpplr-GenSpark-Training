import Counter from "./counter";

const Wrapper = () => (
  <main className="flex h-screen w-screen">
    <Counter InitialCounter={0} />
  </main>
);

export default Wrapper;
