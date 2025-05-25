// App.tsx

import React, { useState, useEffect } from 'react';
import Loading from './screens/Loading';
import Main from './screens/Main';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return <Main />;
};

export default App;
