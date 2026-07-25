import LiveSessionCard from "./LiveSessionCard";

function LiveSessionGrid({ sessions }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {sessions.map((session) => (
        <LiveSessionCard
          key={session._id}
          session={session}
        />
      ))}
    </div>
  );
}

export default LiveSessionGrid;