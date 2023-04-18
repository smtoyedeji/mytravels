const React = require('react');
const DefaultLayout = require('./layouts/default');

function Index({places}) {
  return (
    <DefaultLayout>
      <div className="content-wrapper">
        {
          places.map(place => {
            return (
              <div key={place.id} className='contents'>
                <div className='image-container'>
                  <img src={place.image} alt="" />
                </div>
                <h2>{place.name}</h2>
                <h4>{place.country}</h4>
              </div>
            )
          })
        }
      </div>
      <div className='grid'>
        <div className="items"></div>
        <div className="items"></div>
        <div className="items"></div>
        <div className="items"></div>
        <div className="items"></div>
        <div className="items"></div>
        <div className="items"></div>
        <div className="items"></div>
        <div className="items"></div>
      </div>
    </DefaultLayout>
  );
}

module.exports = Index;