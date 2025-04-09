"use client";
import './auctions.css';
import Link from 'next/link';
import { useState } from 'react';

// Define the Auction interface
interface Auction {
  id: number;
  title: string;
  artist: string;
  currentBid: number;
  timeLeft: string;
  bids: number;
  image: string;
  description: string;
  endDate: string;
  featured?: boolean;
}

const AuctionsPage = () => {
  const [selectedAuction, setSelectedAuction] = useState<Auction | null>(null);
  
  // This would typically fetch from an API
  const auctions: Auction[] = [
    {
      id: 1,
      title: 'Abstract Dreams',
      artist: 'Sarah Chen',
      currentBid: 2500,
      timeLeft: '2d 14h',
      bids: 12,
      image: '/auction1.jpg',
      description: 'A stunning abstract piece that explores the boundaries between reality and imagination. The vibrant colors and dynamic composition create a sense of movement and energy.',
      endDate: '2023-12-15T18:00:00Z'
    },
    {
      id: 2,
      title: 'Digital Metamorphosis',
      artist: 'Marcus Rivera',
      currentBid: 1800,
      timeLeft: '1d 6h',
      bids: 8,
      image: '/auction2.jpg',
      description: 'This digital artwork showcases the artist\'s unique style, blending traditional artistic elements with cutting-edge technology. The piece invites viewers to explore the intersection of the physical and digital worlds.',
      endDate: '2023-12-14T12:00:00Z'
    },
    {
      id: 3,
      title: 'Sunset Reflections',
      artist: 'Emma Thompson',
      currentBid: 3200,
      timeLeft: '4h 30m',
      bids: 15,
      image: '/auction3.jpg',
      featured: true,
      description: 'A breathtaking landscape that captures the beauty of a sunset over the ocean. The artist\'s masterful use of light and color creates a sense of tranquility and wonder.',
      endDate: '2023-12-13T20:30:00Z'
    }
  ];

  const featuredAuction = auctions.find(auction => auction.featured);

  return (
    <div className="auctions-container fade-in">
      <header className="auctions-header">
        <h1>Live Auctions</h1>
        <p>Bid on exclusive artworks from renowned artists</p>
      </header>

      {featuredAuction && (
        <div className="featured-auction scale-in">
          <div className="featured-image">
            <div className="image-placeholder" />
            <div className="live-badge">LIVE</div>
          </div>
          <div className="featured-details">
            <h2>Featured Auction</h2>
            <h3>{featuredAuction.title}</h3>
            <p className="artist-name">by {featuredAuction.artist}</p>
            <div className="auction-stats">
              <div className="stat">
                <span className="label">Current Bid</span>
                <span className="value">${featuredAuction.currentBid}</span>
              </div>
              <div className="stat">
                <span className="label">Time Left</span>
                <span className="value highlight">{featuredAuction.timeLeft}</span>
              </div>
              <div className="stat">
                <span className="label">Total Bids</span>
                <span className="value">{featuredAuction.bids}</span>
              </div>
            </div>
            <Link href={`/auctions/${featuredAuction.id}`} className="btn place-bid-btn">Place Bid Now</Link>
          </div>
        </div>
      )}

      <section className="active-auctions">
        <div className="section-header">
          <h2>Active Auctions</h2>
          <div className="filters">
            <select className="filter-select">
              <option value="all">All Categories</option>
              <option value="painting">Paintings</option>
              <option value="digital">Digital Art</option>
              <option value="sculpture">Sculptures</option>
            </select>
            <select className="filter-select">
              <option value="ending-soon">Ending Soon</option>
              <option value="newest">Newest</option>
              <option value="highest-bid">Highest Bid</option>
            </select>
          </div>
        </div>

        <div className="auctions-grid">
          {auctions.filter(auction => !auction.featured).map((auction) => (
            <Link 
              href={`/auctions/${auction.id}`}
              key={auction.id}
              className="auction-card slide-in"
            >
              <div className="auction-image">
                <div className="image-placeholder" />
                <div className="time-left">{auction.timeLeft}</div>
              </div>
              <div className="auction-info">
                <h3>{auction.title}</h3>
                <p className="artist">by {auction.artist}</p>
                <div className="bid-info">
                  <div className="current-bid">
                    <span>Current Bid</span>
                    <strong>${auction.currentBid}</strong>
                  </div>
                  <div className="total-bids">
                    {auction.bids} bids
                  </div>
                </div>
                <button className="btn bid-btn">Place Bid</button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Auction Modal */}
      {selectedAuction && (
        <div className="modal-overlay" onClick={() => setSelectedAuction(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedAuction(null)}>×</button>
            <div className="modal-grid">
              <div className="modal-image">
                <div className="image-placeholder" />
                <div className="time-left">{selectedAuction.timeLeft}</div>
              </div>
              <div className="modal-details">
                <h2>{selectedAuction.title}</h2>
                <p className="artist-name">by {selectedAuction.artist}</p>
                <p className="auction-description">{selectedAuction.description}</p>
                <div className="auction-stats">
                  <div className="stat">
                    <span className="label">Current Bid</span>
                    <span className="value">${selectedAuction.currentBid}</span>
                  </div>
                  <div className="stat">
                    <span className="label">Time Left</span>
                    <span className="value highlight">{selectedAuction.timeLeft}</span>
                  </div>
                  <div className="stat">
                    <span className="label">Total Bids</span>
                    <span className="value">{selectedAuction.bids}</span>
                  </div>
                </div>
                <div className="bid-form">
                  <div className="bid-input-group">
                    <label htmlFor="bid-amount">Your Bid ($)</label>
                    <input 
                      type="number" 
                      id="bid-amount" 
                      className="bid-input" 
                      min={selectedAuction.currentBid + 100} 
                      step="100"
                      placeholder={`Min: $${selectedAuction.currentBid + 100}`}
                    />
                  </div>
                  <Link href={`/auctions/${selectedAuction.id}`} className="btn place-bid-btn">Place Bid</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuctionsPage; 