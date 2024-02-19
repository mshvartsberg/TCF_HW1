import React from 'react';
import names from "./Names.js";

function App() {
  return (
    <div>
      <h1>Common Reasons for Merge Conflicts:</h1>
      <h3>1. Two people changed the same lines in a file</h3>
      <h3>2. Someone deleted a file while another was modifying it</h3>
      <h3>3. Two people edit the function in an incompatible way (i.e. different amounts of parameters)</h3>
      <h4>4. When developer renames a file while another developer makes changes to the file under the original name.</h4>
      {names()}
    </div>
  );
}

export default App;
