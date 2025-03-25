import "./Statistics.css";

const Statistics = () => {
  return (
    <div className="statistics-container">
      <div className="stat-item">
        <i className="fas fa-users"></i>
        <h2>100 +</h2>
        <p>Team Member</p>
      </div>
      <div className="stat-item">
        <i className="fas fa-clipboard-list"></i>
        <h2>300 +</h2>
        <p>Total Project</p>
      </div>
      <div className="stat-item">
        <i className="fas fa-heart"></i>
        <h2>1,300 +</h2>
        <p>Happy Clients</p>
      </div>
      <div className="stat-item">
        <i className="fas fa-award"></i>
        <h2>50 +</h2>
        <p>Awards Won</p>
      </div>
    </div>
  );
};

export default Statistics;
