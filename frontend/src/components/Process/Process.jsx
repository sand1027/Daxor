import "./Process.css";

const Process = () => {
  return (
    <div className="how-it-works">
      <div className="process-header">
        <div className="process-title">
          <h1>Process</h1>
        </div>

        <p className="description">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. It is a long
          established fact that a reader.
        </p>
      </div>
      <div className="steps">
        <div className="step">
          <div className="circle glow-purple">1</div>
          <h3>Integrate</h3>
          <p>Lorem Ipsum is simply dummy text of.</p>
        </div>

        <div className="step">
          <div className="circle glow-red">2</div>
          <h3>Manage</h3>
          <p>Lorem Ipsum is simply dummy text of.</p>
        </div>

        <div className="step">
          <div className="circle glow-green">3</div>
          <h3>Analyze</h3>
          <p>Lorem Ipsum is simply dummy text of.</p>
        </div>

        <div className="step">
          <div className="circle glow-yellow">4</div>
          <h3>Easy Setup</h3>
          <p>Lorem Ipsum is simply dummy text of.</p>
        </div>
      </div>
    </div>
  );
};

export default Process;
