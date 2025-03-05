import './App.css';
import teamsData from './CollegeBasketballTeams.json'; // Import JSON

// Define a type for a single team
type TeamType = {
  tid: number;
  school: string;
  name: string;
  city: string;
  state: string;
};

// Extract teams array from the JSON structure
const teams = teamsData.teams;

//This is to display the heading
function Welcome() {
  return <h1>NCAA Basketball Teams</h1>;
}

function Description() {
  return (
    <h2>
      This Page will show a list of Schools with NCAA BAsketball teams. It also
      shows what their Mascot is and where they are located.
    </h2>
  );
}

//This is a team "card", it is an individual component for each team with the information you want
function Team({ school, name, city, state }: TeamType) {
  return (
    <>
      <h2>{school}</h2>
      <h3>Mascot: {name}</h3>
      <h3>
        Location: {city}, {state}
      </h3>
    </>
  );
}

//This will group together and make a list of all the team cards
function TeamList() {
  return (
    <>
      {teams.map((singleTeam) => (
        <>
          <Team key={singleTeam.tid} {...singleTeam} />
          <br />
        </>
      ))}
    </>
  );
}

// This will display all the stuff on the page
function App() {
  return (
    <>
      <Welcome />
      <Description />
      <TeamList />
    </>
  );
}

export default App;
