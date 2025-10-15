import { useState } from 'react'
import './App.css';
import { useQuery } from '@tanstack/react-query';
import { fetchEvents } from './api/api';
import EventCard from './components/EventCard';
import Navbar from './components/Navbar/nav';
import { Loader } from './components/Loader/Loader';

function App() {

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [petsAllowed, setPetsAllowed] = useState<boolean | undefined>(undefined);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["events", page, search, petsAllowed],
    queryFn: () => fetchEvents(page, search, petsAllowed),
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>Failed to load events.</p>;

  return (
    <div className="app">
      <Navbar />
      <div className='filters'>
        <input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        className='search-input'
      />
      <label>
        <input
          type="checkbox"
          checked={petsAllowed ?? false}
          onChange={(e) =>
            setPetsAllowed(e.target.checked ? true : undefined)
          }
          className='checkbox'
        />
        Pets Allowed Only
      </label>
      </div>

      
      <div className='events'>
        {data?.data.map((event: any) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      
      <div className='pagination'>
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))}>Prev</button>
        <span>Page {page}</span>
        <button
          onClick={() => {
            if (page * 2 < (data?.total || 0)) setPage((p) => p + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
