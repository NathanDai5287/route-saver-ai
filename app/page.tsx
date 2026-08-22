const walks = [
  { place: "Albany Bulb", distance: "3.2 mi", note: "Windy by the water" },
  { place: "Claremont Canyon", distance: "2.6 mi", note: "Steep after the bench" },
  { place: "Lake Temescal", distance: "1.8 mi", note: "Good evening loop" },
];

export default function Home() {
  return (
    <main>
      <nav>
        <span className="brand">route saver ai</span>
        <button type="button">new walk</button>
      </nav>

      <section className="intro">
        <p className="eyebrow">AI WALKING ROUTES</p>
        <h1>Find a better way to walk.</h1>
        <p>Generate routes from your mood, available time, and starting point.</p>
      </section>

      <section className="walks">
        <div className="section-title">
          <h2>recent walks</h2>
          <span>3 saved</span>
        </div>

        <div className="cards">
          {walks.map((walk, index) => (
            <article key={walk.place}>
              <span className="number">0{index + 1}</span>
              <div>
                <h3>{walk.place}</h3>
                <p>{walk.note}</p>
              </div>
              <span className="distance">{walk.distance}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
