'use client';
import './gallery.css';
import Link from 'next/link';
import { useState } from 'react';

// Define the Artwork interface
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
  category: string;
}

const GalleryPage = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  // This would typically fetch from an API
  const artworks: Artwork[] = [
    {
      id: 1,
      title: 'Abstract Dreams',
      artist: 'Sarah Chen',
      price: 2500,
      description: 'A stunning abstract piece that explores the boundaries between reality and imagination. The vibrant colors and dynamic composition create a sense of movement and energy.',
      medium: 'Oil on Canvas',
      size: '36" x 48"',
      year: 2023,
      image: '/artwork1.jpg',
      category: 'abstract'
    },
    {
      id: 2,
      title: 'Digital Metamorphosis',
      artist: 'Marcus Rivera',
      price: 1800,
      description: 'This digital artwork showcases the artist\'s unique style, blending traditional artistic elements with cutting-edge technology. The piece invites viewers to explore the intersection of the physical and digital worlds.',
      medium: 'Digital Print',
      size: '24" x 36"',
      year: 2023,
      image: '/artwork2.jpg',
      category: 'digital'
    },
    {
      id: 3,
      title: 'Sunset Reflections',
      artist: 'Emma Thompson',
      price: 3200,
      description: 'A breathtaking landscape that captures the beauty of a sunset over the ocean. The artist\'s masterful use of light and color creates a sense of tranquility and wonder.',
      medium: 'Acrylic on Canvas',
      size: '48" x 36"',
      year: 2023,
      image: '/artwork3.jpg',
      category: 'landscape'
    }
  ];

  const filteredArtworks = artworks.filter(artwork => {
    const categoryMatch = selectedCategory === 'all' || artwork.category === selectedCategory;
    const priceMatch = priceRange === 'all' || 
      (priceRange === 'under-1000' && artwork.price < 1000) ||
      (priceRange === '1000-5000' && artwork.price >= 1000 && artwork.price <= 5000) ||
      (priceRange === 'over-5000' && artwork.price > 5000);
    return categoryMatch && priceMatch;
  });

  return (
    <div className="gallery-container fade-in">
      <header className="gallery-header">
        <h1>Art Gallery</h1>
        <p>Explore our collection of unique artworks</p>
      </header>

      <div className="filters">
        <div className="filter-group">
          <label htmlFor="category">Category</label>
          <select 
            id="category" 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="abstract">Abstract</option>
            <option value="digital">Digital Art</option>
            <option value="landscape">Landscape</option>
            <option value="portrait">Portrait</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="price">Price Range</label>
          <select 
            id="price" 
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="under-1000">Under $1,000</option>
            <option value="1000-5000">$1,000 - $5,000</option>
            <option value="over-5000">Over $5,000</option>
          </select>
        </div>
      </div>

      <div className="artworks-grid">
        {filteredArtworks.map((artwork) => (
          <div 
            className="artwork-card slide-in" 
            key={artwork.id}
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

      {/* Artwork Modal */}
      {selectedArtwork && (
        <div className="modal-overlay" onClick={() => setSelectedArtwork(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedArtwork(null)}>×</button>
            <div className="modal-grid">
              <div className="modal-image">
                <div className="image-placeholder" />
              </div>
              <div className="modal-details">
                <h2>{selectedArtwork.title}</h2>
                <p className="artist-name">by {selectedArtwork.artist}</p>
                <p className="artwork-description">{selectedArtwork.description}</p>
                <div className="artwork-details">
                  <div className="detail">
                    <span className="label">Medium</span>
                    <span className="value">{selectedArtwork.medium}</span>
                  </div>
                  <div className="detail">
                    <span className="label">Size</span>
                    <span className="value">{selectedArtwork.size}</span>
                  </div>
                  <div className="detail">
                    <span className="label">Year</span>
                    <span className="value">{selectedArtwork.year}</span>
                  </div>
                  <div className="detail">
                    <span className="label">Price</span>
                    <span className="value highlight">${selectedArtwork.price}</span>
                  </div>
                </div>
                <Link href="/login" className="btn purchase-btn">Purchase Artwork</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage; 