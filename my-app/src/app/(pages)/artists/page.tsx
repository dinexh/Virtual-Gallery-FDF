import './artists.css';
import Link from 'next/link';

const ArtistsPage = () => {
  // This would typically fetch from an API
  const artists = [
    {
      id: 1,
      name: 'Sarah Chen',
      specialty: 'Contemporary Abstract',
      image: '/artist1.jpg',
      artworks: 24,
      followers: '2.5k'
    },
    {
      id: 2,
      name: 'Marcus Rivera',
      specialty: 'Digital Art & NFTs',
      image: '/artist2.jpg',
      artworks: 18,
      followers: '3.1k'
    },
    {
      id: 3,
      name: 'Emma Thompson',
      specialty: 'Traditional Oil Painting',
      image: '/artist3.jpg',
      artworks: 31,
      followers: '1.8k'
    },
    {
      id: 4,
      name: 'David Kim',
      specialty: 'Sculpture & Installation',
      image: '/artist4.jpg',
      artworks: 15,
      followers: '4.2k'
    }
  ];

  return (
    <div className="artists-container fade-in">
      <header className="artists-header">
        <h1>Featured Artists</h1>
        <p>Discover talented artists from around the world</p>
      </header>

      <div className="search-filters">
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search artists..."
        />
        <select className="filter-select">
          <option value="">All Specialties</option>
          <option value="painting">Painting</option>
          <option value="digital">Digital Art</option>
          <option value="sculpture">Sculpture</option>
        </select>
      </div>

      <div className="artists-grid">
        {artists.map((artist) => (
          <Link href={`/artists/${artist.id}`} key={artist.id}>
            <div className="artist-card scale-in">
              <div className="artist-image">
                <div className="image-placeholder" />
              </div>
              <div className="artist-info">
                <h3>{artist.name}</h3>
                <p className="specialty">{artist.specialty}</p>
                <div className="artist-stats">
                  <span>{artist.artworks} Artworks</span>
                  <span>{artist.followers} Followers</span>
                </div>
              </div>
              <button className="btn btn-outline follow-btn">Follow</button>
            </div>
          </Link>
        ))}
      </div>

      <div className="load-more">
        <button className="btn btn-outline">Load More Artists</button>
      </div>
    </div>
  );
};

export default ArtistsPage; 