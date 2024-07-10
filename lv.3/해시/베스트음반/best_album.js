function solution(genres, plays) {
    const genrePlayCount = {};
    const genreSongList = {};

    // Step 1: Populate the dictionaries
    genres.forEach((genre, index) => {
        if (!genrePlayCount[genre]) {
            genrePlayCount[genre] = 0;
            genreSongList[genre] = [];
        }
        genrePlayCount[genre] += plays[index];
        genreSongList[genre].push({ id: index, play: plays[index] });
    });

    // Optional: Print genreSongList for debugging
    console.log(genreSongList);

    // Step 2: Sort genres by total plays in descending order
    const sortedGenres = Object.keys(genrePlayCount).sort((a, b) => genrePlayCount[b] - genrePlayCount[a]);

    const result = [];

    // Step 3: For each genre, sort the songs and add up to two songs to the result
    sortedGenres.forEach((genre) => {
        const sortedSongs = genreSongList[genre].sort((a, b) => {
            if (b.play === a.play) {
                return a.id - b.id; // If plays are equal, sort by id
            }
            return b.play - a.play; // Otherwise, sort by play count
        });
        
        result.push(...sortedSongs.slice(0, 2).map(song => song.id));
    });

    return result;
}

// Example usage
const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];
console.log(solution(genres, plays));  // Output: [4, 1, 3, 0]
