const Counter = () => {
  return (
    <section className="flex w-2/3 flex-col items-center gap-8 border-4 border-primary-500 bg-white p-8 shadow-lg">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">0</p>
      <div className="flex gap-2">
        <button>
          ➖ Decrement
        </button>
        <button>🔁 Reset</button>
        <button>
          ➕ Increment
        </button>
      </div>
      <div>
        <form>
          <input type="number" value={0}/>
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
