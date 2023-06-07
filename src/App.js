import React from 'react';
import Review from './Review';
function App() {
  return (
    <main>
      <section className='container'>
          <div className="title">
            <h3>Our Reviews</h3>
            <div className="underline">

            </div>
            <Review />
          </div>
      </section>
    </main>
  );
}

export default App;