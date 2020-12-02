import './Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <div className="loaderContainer">
        <div className="loader__circle"></div>
        <div className="loader__circle"></div>
        <div className="loader__circle"></div>
        <div className="loader__circle"></div>
      </div>
      <h1>Fetching Data</h1>
    </div>
  )
}

export default Loader
