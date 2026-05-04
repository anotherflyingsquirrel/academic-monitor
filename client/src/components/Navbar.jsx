import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ background: '#333', padding: '1rem', color: '#fff' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</Link>
        <Link to="/students" style={{ color: '#fff', textDecoration: 'none' }}>Students</Link>
        <Link to="/subjects" style={{ color: '#fff', textDecoration: 'none' }}>Subjects</Link>
        <Link to="/grades" style={{ color: '#fff', textDecoration: 'none' }}>Grades</Link>
        <Link to="/report" style={{ color: '#fff', textDecoration: 'none' }}>Report</Link>
      </div>
    </nav>
  );
}

export default Navbar;
