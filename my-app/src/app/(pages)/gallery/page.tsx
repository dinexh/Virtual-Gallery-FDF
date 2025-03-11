'use client';
import { useState } from 'react';
import Link from 'next/link';
import './gallery.css';

interface Artwork {
  id: number;
  title: string;
  artist: string;
  price: number;
  description: string;
  medium: string;
  size: string;
  year: number;
  image: string;
}

const GalleryPage = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  // This would typically fetch from an API
  const artworks: Artwork[] = [
    {
      id: 1,
      title: 'Abstract Harmony',
      artist: 'Sarah Chen',
      price: 2500,
      description: 'A stunning piece that explores the relationship between form and color through abstract expressionism.',
      medium: 'Oil on Canvas',
      size: '36" x 48"',
      year: 2023,
      image: '/placeholder1.jpg'
    },
    {
      id: 2,
      title: 'Urban Dreams',
      artist: 'Marcus Rivera',
      price: 1800,
      description: 'A contemporary take on urban landscapes, blending reality with imagination.',
      medium: 'Digital Art',
      size: '24" x 36"',
      year: 2023,
      image: '/placeholder2.jpg'
    },
    {
      id: 3,
      title: 'Nature\'s Whisper',
      artist: 'Emma Thompson',
      price: 3200,
      description: 'An ethereal exploration of natural forms and organic patterns.',
      medium: 'Mixed Media',
      size: '40" x 60"',
      year: 2023,
      image: '/placeholder3.jpg'
    }
  ];

  return (
    <div className="gallery-container fade-in">
      <header className="gallery-header">
        <h1>Art Gallery</h1>
        <p>Explore our curated collection of contemporary artwork</p>
      </header>

      <div className="filters">
        <select className="filter-select">
          <option value="">All Categories</option>
          <option value="painting">Paintings</option>
          <option value="digital">Digital Art</option>
          <option value="sculpture">Sculptures</option>
        </select>

        <select className="filter-select">
          <option value="">Price Range</option>
          <option value="0-1000">Under $1,000</option>
          <option value="1000-5000">$1,000 - $5,000</option>
          <option value="5000+">$5,000+</option>
        </select>
      </div>

      <div className="artwork-grid">
        {artworks.map((artwork) => (
          <div 
            key={artwork.id} 
            className="artwork-card"
            onClick={() => setSelectedArtwork(artwork)}
          >
            <div className="artwork-image">
              <div className="image-placeholder" />
            </div>
            <div className="artwork-info">
              <h3>{artwork.title}</h3>
              <p className="artist">by {artwork.artist}</p>
              <p className="price">${artwork.price}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedArtwork && (
        <div className="modal-overlay" onClick={() => setSelectedArtwork(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedArtwork(null)}
            >
              ×
            </button>
            <div className="modal-grid">
              <div className="modal-image">
                <div className="image-placeholder" />
              </div>
              <div className="modal-details">
                <h2>{selectedArtwork.title}</h2>
                <p className="artist">by {selectedArtwork.artist}</p>
                <p className="description">{selectedArtwork.description}</p>
                
                <div className="artwork-specs">
                  <div className="spec">
                    <span className="label">Medium</span>
                    <span className="value">{selectedArtwork.medium}</span>
                  </div>
                  <div className="spec">
                    <span className="label">Size</span>
                    <span className="value">{selectedArtwork.size}</span>
                  </div>
                  <div className="spec">
                    <span className="label">Year</span>
                    <span className="value">{selectedArtwork.year}</span>
                  </div>
                </div>

                <div className="price-section">
                  <div className="price-tag">
                    ${selectedArtwork.price}
                  </div>
                  <Link href="/login" className="btn">
                    Purchase Artwork
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage; 