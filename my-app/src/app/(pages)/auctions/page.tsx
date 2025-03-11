import './auctions.css';
import Link from 'next/link';

const AuctionsPage = () => {
  // This would typically fetch from an API
  const auctions = [
    {
      id: 1,
      title: 'Abstract Dreams',
      artist: 'Sarah Chen',
      currentBid: 2500,
      timeLeft: '2d 14h',
      bids: 12,
      image: '/auction1.jpg'
    },
    {
      id: 2,
      title: 'Digital Metamorphosis',
      artist: 'Marcus Rivera',
      currentBid: 1800,
      timeLeft: '1d 6h',
      bids: 8,
      image: '/auction2.jpg'
    },
    {
      id: 3,
      title: 'Sunset Reflections',
      artist: 'Emma Thompson',
      currentBid: 3200,
      timeLeft: '4h 30m',
      bids: 15,
      image: '/auction3.jpg',
      featured: true
    }
  ];

  return (
    <div className="auctions-container fade-in">
      <header className="auctions-header">
        <h1>Live Auctions</h1>
        <p>Bid on exclusive artworks from renowned artists</p>
      </header>

      <div className="featured-auction scale-in">
        <div className="featured-image">
          <div className="image-placeholder" />
          <div className="live-badge">LIVE</div>
        </div>
        <div className="featured-details">
          <h2>Featured Auction</h2>
          <h3>{auctions[2].title}</h3>
          <p className="artist-name">by {auctions[2].artist}</p>
          <div className="auction-stats">
            <div className="stat">
              <span className="label">Current Bid</span>
              <span className="value">${auctions[2].currentBid}</span>
            </div>
            <div className="stat">
              <span className="label">Time Left</span>
              <span className="value highlight">{auctions[2].timeLeft}</span>
            </div>
            <div className="stat">
              <span className="label">Total Bids</span>
              <span className="value">{auctions[2].bids}</span>
            </div>
          </div>
          <button className="btn place-bid-btn">Place Bid Now</button>
        </div>
      </div>

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
          {auctions.slice(0, 2).map((auction) => (
            <Link href={`/auctions/${auction.id}`} key={auction.id}>
              <div className="auction-card slide-in">
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
                      <span>{auction.bids} bids</span>
                    </div>
                  </div>
                  <button className="btn btn-outline bid-btn">Place Bid</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AuctionsPage; 