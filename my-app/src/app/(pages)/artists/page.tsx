"use client";
import './artists.css';
import Link from 'next/link';
import { useState } from 'react';

// Define the Artist interface
interface Artist {
  id: number;
  name: string;
  specialty: string;
  image: string;
  artworks: number;
  followers: string;
  bio: string;
  featured: boolean;
}

const ArtistsPage = () => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  
  // This would typically fetch from an API
  const artists: Artist[] = [
    {
      id: 1,
      name: 'Sarah Chen',
      specialty: 'Contemporary Abstract',
      image: '/artist1.jpg',
      artworks: 24,
      followers: '2.5k',
      bio: 'Sarah Chen is a contemporary abstract artist known for her bold use of color and dynamic compositions. Her work explores the intersection of traditional painting techniques and digital media.',
      featured: true
    },
    {
      id: 2,
      name: 'Marcus Rivera',
      specialty: 'Digital Art & NFTs',
      image: '/artist2.jpg',
      artworks: 18,
      followers: '3.1k',
      bio: 'Marcus Rivera is a pioneer in the digital art space, creating stunning NFT collections that have garnered international attention. His work combines traditional artistic principles with cutting-edge technology.',
      featured: false
    },
    {
      id: 3,
      name: 'Emma Thompson',
      specialty: 'Traditional Oil Painting',
      image: '/artist3.jpg',
      artworks: 31,
      followers: '1.8k',
      bio: 'Emma Thompson specializes in traditional oil painting techniques, creating hyperrealistic portraits and landscapes that capture the essence of her subjects with remarkable detail.',
      featured: false
    },
    {
      id: 4,
      name: 'David Kim',
      specialty: 'Sculpture & Installation',
      image: '/artist4.jpg',
      artworks: 15,
      followers: '4.2k',
      bio: 'David Kim creates immersive sculptural installations that challenge viewers\' perceptions of space and form. His work has been exhibited in major galleries and museums worldwide.',
      featured: false
    }
  ];

  const featuredArtist = artists.find(artist => artist.featured);

  return (
    <div className="artists-container fade-in">
      <header className="artists-header">
        <h1>Featured Artists</h1>
        <p>Discover talented artists from around the world</p>
      </header>

      {/* Featured Artist Section */}
      {featuredArtist && (
        <div className="featured-artist scale-in">
          <div className="featured-artist-image">
            <div className="image-placeholder" />
          </div>
          <div className="featured-artist-details">
            <h2>Featured Artist</h2>
            <h3>{featuredArtist.name}</h3>
            <p className="artist-specialty">{featuredArtist.specialty}</p>
            <p className="artist-bio">{featuredArtist.bio}</p>
            <div className="artist-stats">
              <div className="stat">
                <span className="stat-value">{featuredArtist.artworks}</span>
                <span className="stat-label">Artworks</span>
              </div>
              <div className="stat">
                <span className="stat-value">{featuredArtist.followers}</span>
                <span className="stat-label">Followers</span>
              </div>
            </div>
            <Link href={`/artists/${featuredArtist.id}`} className="btn view-profile-btn">View Profile</Link>
          </div>
        </div>
      )}

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
        {artists.filter(artist => !artist.featured).map((artist) => (
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

      {/* Artist Modal */}
      {selectedArtist && (
        <div className="modal-overlay" onClick={() => setSelectedArtist(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedArtist(null)}>×</button>
            <div className="modal-grid">
              <div className="modal-image">
                <div className="image-placeholder" />
              </div>
              <div className="modal-details">
                <h2>{selectedArtist.name}</h2>
                <p className="artist-specialty">{selectedArtist.specialty}</p>
                <p className="artist-bio">{selectedArtist.bio}</p>
                <div className="artist-stats">
                  <div className="stat">
                    <span className="stat-value">{selectedArtist.artworks}</span>
                    <span className="stat-label">Artworks</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{selectedArtist.followers}</span>
                    <span className="stat-label">Followers</span>
                  </div>
                </div>
                <Link href={`/artists/${selectedArtist.id}`} className="btn view-profile-btn">View Full Profile</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtistsPage; 