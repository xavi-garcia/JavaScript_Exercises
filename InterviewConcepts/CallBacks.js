button.addEventListener('click', function() {
    console.log('Button clicked!');
});

setTimeout(function() {
    console.log('Delayed message');
}, 2000);

fetch('https://example.com/data.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });

  