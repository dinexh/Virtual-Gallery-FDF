import './virtual-tour.css';
import Script from 'next/script';

const VirtualTourPage = () => {
  return (
    <div className="virtual-tour-container fade-in">
      <header className="tour-header">
        <h1>Virtual Gallery Tour</h1>
        <p>Experience our gallery spaces in immersive 3D</p>
      </header>

      <div className="tour-content">
        <div className="tour-viewer">
          <div id="street-view" className="street-view"></div>
          <div className="tour-controls">
            <button className="btn control-btn">
              <span className="control-icon">⟲</span> Reset View
            </button>
            <button className="btn control-btn">
              <span className="control-icon">↔</span> Navigate
            </button>
            <button className="btn control-btn">
              <span className="control-icon">🔍</span> Zoom
            </button>
          </div>
        </div>

        <div className="tour-info card">
          <h2>How to Navigate</h2>
          <ul className="navigation-tips">
            <li>Use your mouse to look around</li>
            <li>Click and drag to change perspective</li>
            <li>Use scroll wheel to zoom in/out</li>
            <li>Click arrows or WASD keys to move</li>
          </ul>
          
          <div className="location-select">
            <h3>Featured Locations</h3>
            <select className="input-field">
              <option value="main-hall">Main Exhibition Hall</option>
              <option value="modern-wing">Modern Art Wing</option>
              <option value="sculpture-garden">Sculpture Garden</option>
              <option value="digital-gallery">Digital Art Gallery</option>
            </select>
          </div>
        </div>
      </div>

      <Script
        src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initStreetView"
        strategy="afterInteractive"
      />
      
      <script dangerouslySetInnerHTML={{
        __html: `
          function initStreetView() {
            const fenway = { lat: 42.345573, lng: -71.098326 };
            const panorama = new google.maps.StreetViewPanorama(
              document.getElementById('street-view'),
              {
                position: fenway,
                pov: { heading: 160, pitch: 0 },
                zoom: 1,
                addressControl: false,
                showRoadLabels: false,
                zoomControl: false
              }
            );
          }
        `
      }} />
    </div>
  );
};

export default VirtualTourPage; 