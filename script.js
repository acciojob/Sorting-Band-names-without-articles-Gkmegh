let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'Pink Floyd', 'The Beatles', 'Aerosmith'];

function sortBandNames(bandNames) {
  const articles = ['a', 'an', 'the'];
  
  // Remove articles from band names
  const bandNamesWithoutArticles = bandNames.map(name => {
    const words = name.split(' ');
    const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));
    return filteredWords.join(' ');
  });
  
  // Sort band names in lexicographic order
  const sortedBandNames = bandNamesWithoutArticles.sort((a, b) => a.localeCompare(b));
  
  // Create HTML list
  const ul = document.getElementById('band');
  sortedBandNames.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);
  });
}

// Call the function with the given band names
sortBandNames(bandNames);
