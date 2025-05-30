body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  background: #f5f5f5;
  color: #333;
}

header {
  background: #d93025;
  color: white;
  padding: 2rem 1rem;
  text-align: center;
}

.logo {
  width: 120px;
  margin-bottom: 1rem;
}

.subtitle {
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
}

main {
  padding: 2rem;
  text-align: center;
}

.puzzle-select button,
.method-select button,
.cfop-buttons button {
  margin: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  background: #4285f4;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #3367d6;
}

#pll-section {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  padding-top: 1rem;
}

.pll-box {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.pll-box strong {
  font-size: 1.2rem;
  color: #d93025;
}

.alg-text {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #555;
  display: none;
}
