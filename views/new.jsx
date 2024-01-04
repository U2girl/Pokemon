const React = require('react');
export default function New() {

  const container= {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    height: '100vh', /* Set the container height to 100% of the viewport height */
  };
 
  const formStyle = {
    maxWidth: '700px',
    margin: 'auto',
    padding: '20px',
    background: 'linear-gradient(to left, #ff8a88, #da1b90)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '18px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    transition: 'border-color 0.3s',
  };

  const buttonStyle = {
    background: '#da1b60',
    color: '#fff',
    padding: '10px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  };

  return (
    <div style={container}>
      <h1> Create a Pokemon</h1>
    <form action="/pokemon/new" method="post"style={formStyle}>
      <label>
        Name: <input type="text" name="name" required style={inputStyle}/>
      </label><br />
      <button type="submit" style={buttonStyle}>Create</button>
    </form>
  </div>
  )
}
