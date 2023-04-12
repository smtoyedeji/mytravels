const React = require('react');
const DefaultLayout = require('./layouts/default');

function Index({places}) {
  return (
    <DefaultLayout>
      {
        places.map(place => {
          return (
            <div key={place.id}>
              <h2>{place.name}</h2>
              <h4>{place.country}</h4>
            </div>
          )
        })
      }
    </DefaultLayout>
  );
}

module.exports = Index;