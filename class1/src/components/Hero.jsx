export default function Hero() {
  return (
    <div className="hero-root">
      <div className="badge">
        <span>We're hiring Founding Ruby Engineers</span>
        <svg
          viewBox="0 0 16 16"
          width="25"
          height="25"
          fill="none"
          className="badge-icon"
        >
          <path
            stroke="#1E1F25"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-opacity=".5"
            stroke-width="1.25"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
          ></path>
        </svg>
      </div>
      <h1 className="hero-title">
        Magically simplify <br /> accouting and taxes
      </h1>
      <p className="hero-description">
        Automated bookkeeping. Effortless tax filing. Financial clarity. <br />
        Set up in 10 mins. Back to building by 10:19pm.
      </p>
      <div className="hero-buttons">
        <button className="btn">Get Started</button>
        <div >
          <button className="secondary-btn">
            <span>Pricing</span>
            <svg
              viewBox="0 0 16 16"
              width="25"
              height="25"
              fill="none"
              className="badge-icon"
            >
              <path
                stroke="#1E1F25"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-opacity=".5"
                stroke-width="1.25"
                d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="hero-d2"><p>For US startups</p></div>
      
    </div>
  );
}
