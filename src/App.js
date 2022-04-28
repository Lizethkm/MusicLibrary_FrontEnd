import React, { useState } from 'react';



function App() {

  const [entries, setEntries] = useState([''])


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Music Library</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default App;
