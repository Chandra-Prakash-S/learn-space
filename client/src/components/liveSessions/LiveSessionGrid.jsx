import LiveSessionCard from "./LiveSessionCard";

function LiveSessionGrid({ sessions }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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