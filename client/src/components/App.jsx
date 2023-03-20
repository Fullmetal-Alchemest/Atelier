import React from 'react';

import ProductOverview from './productOverview/index.jsx';
import RatingsReviews from './ratingsReviews/index.jsx';
import QuestionsAnswers from './questionsAnswers/index.jsx';
import RelatedItems from './relatedItems/index.jsx';

const appStyles = 'grid grid-flow-row auto-rows-max mx-auto w-0 min-w-max';

function App() {
  return (
    <div id="app" className={appStyles}>
      I am the App div
      <div className='row-span-1'>
        Header here
      </div>
      <div className='row-span-1'>
        <ProductOverview />
      </div>
      <div className='row-span-1'>
        <RatingsReviews />
      </div>
      <div className='row-span-1'>
        <QuestionsAnswers />
      </div>
      <div className='row-span-1'>
        <RelatedItems />
      </div>
    </div>
  );
}

export default App;


