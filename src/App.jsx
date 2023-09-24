import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";

export default function App() {
  const places = data.map((place) => {
    return <Card key={place.title} {...place} />;
  });
  return (
    <>
      <Navbar />
      {places}
    </>
  );
}
