export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start to add something to your list</em>
      </p>
    );

  const numItems = items.length;
  const numDone = items.filter((item) => item.done).length;
  const percentage = Math.round((numDone / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "All done!"
          : `📖 You have ${numItems} action on your todo list, and you have already done ${numDone} (${percentage}%)`}
      </em>
    </footer>
  );
}
