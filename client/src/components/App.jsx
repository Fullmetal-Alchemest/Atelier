import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
const App = (props) => {

  return (
    <div>Test</div>
  )
=======
import ProductOverview from './productOverview/index.jsx';
import RatingsReviews from './ratingsReviews/index.jsx';
import QuestionsAnswers from './questionsAnswers/index.jsx';
import RelatedItems from './relatedItems/index.jsx';

function App() {
  return (
    <div>test
      <ProductOverview />
      <RatingsReviews />
      <QuestionsAnswers />
      <RelatedItems />
=======
=======
>>>>>>> main
import ProductOverview from './productOverview/index';
import RatingsReviews from './ratingsReviews/index';
import QuestionsAnswers from './questionsAnswers/index';
import RelatedItems from './relatedItems/index';

<<<<<<< HEAD
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
>>>>>>> 49ce59b (Test commit 2, to practice submitting pull requests.)
    </div>
  );
>>>>>>> 4d40ddc (Initial setup of Redux and folders for Product Overview)
}

export default App;
=======
export default function App() {
  return <h1>Hello World!</h1>;
}
>>>>>>> bcd937e (created bare skeleton)
=======
function App() {
  return (
    <div>
      test
      <ProductOverview />
      <RatingsReviews />
      <QuestionsAnswers />
      <RelatedItems />
    </div>
  );
}

export default App;
>>>>>>> main
