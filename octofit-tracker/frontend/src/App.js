
import octofitLogo from './octofitapp-small.svg';

function App() {
  return (
    <div className="container py-4">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={octofitLogo} alt="Octofit Logo" width="40" height="40" className="me-2" style={{background: '#fff', borderRadius: '50%', padding: '2px'}} />
            <span className="fw-bold" style={{fontSize: '1.5rem', color: '#fff'}}>Octofit Tracker</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#" style={{color: '#ffe082'}}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color: '#ffe082'}}>Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color: '#ffe082'}}>Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color: '#ffe082'}}>Leaderboard</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Heading */}
      <h1 className="display-4 mb-4 text-center">Welcome to Octofit Tracker</h1>

      {/* Card Example */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Track Your Fitness Journey</h5>
              <p className="card-text">Log activities, join teams, and compete on the leaderboard!</p>
              <a href="#" className="btn btn-primary">Get Started</a>
            </div>
          </div>
        </div>
      </div>

      {/* Table Example */}
      <div className="table-responsive mb-4">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Activity</th>
              <th>Duration (min)</th>
              <th>Calories</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Running</td>
              <td>30</td>
              <td>300</td>
              <td>2026-03-27</td>
            </tr>
            <tr>
              <td>Cycling</td>
              <td>45</td>
              <td>400</td>
              <td>2026-03-26</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Button Example */}
      <div className="text-center mb-4">
        <button className="btn btn-success me-2">Add Activity</button>
        <button className="btn btn-outline-secondary">View All</button>
      </div>

      {/* Form Example */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Log New Activity</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="activity" className="form-label">Activity</label>
                  <input type="text" className="form-control" id="activity" placeholder="e.g. Running" />
                </div>
                <div className="mb-3">
                  <label htmlFor="duration" className="form-label">Duration (min)</label>
                  <input type="number" className="form-control" id="duration" />
                </div>
                <div className="mb-3">
                  <label htmlFor="calories" className="form-label">Calories</label>
                  <input type="number" className="form-control" id="calories" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
