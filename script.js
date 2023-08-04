function sortBands(bands) {
  const articles = ["a", "an", "the"];
  
  const sortedBands = bands.sort((a, b) => {
    const nameA = a.toLowerCase();
    const nameB = b.toLowerCase();
    
    // Remove articles from the beginning of the band names
    for (const article of articles) {
      if (nameA.startsWith(article + " ")) {
        nameA = nameA.slice(article.length + 1);
      }
      if (nameB.startsWith(article + " ")) {
        nameB = nameB.slice(article.length + 1);
      }
    }
    
    return nameA.localeCompare(nameB);
  });
  
  return sortedBands;
}

const bandNames = ["The Beatles", "Led Zeppelin", "Pink Floyd", "Aerosmith", "Anathema", "Queen"];
const sortedBands = sortBands(bandNames);

// Creating an unordered list with sorted band names
const ul = document.createElement("ul");
ul.id = "band";

for (const band of sortedBands) {
  const li = document.createElement("li");
  li.textContent = band;
  ul.appendChild(li);
}

// Add the unordered list to the document
document.body.appendChild(ul);
module.exports = sortBands;