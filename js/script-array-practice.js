//STEP 1
{
    let movies = ['Star Wars', 'The Godfather', 'The Dark Knight', 'Pulp Fiction', 'The Fifth Element']
    console.log(movies[1])
}

//STEP 2
{
    let movies = new Array(5)
    movies[0] = 'Star Wars'
    movies[1] = 'The Godfather'
    movies[2] = 'The Dark Knight'
    movies[3] = 'Pulp Fiction'
    movies[4] = 'The Fifth Element'
    console.log(movies[0])
}

//STEP 3
{
    let movies = new Array(5)
    movies[0] = 'Star Wars'
    movies[1] = 'The Godfather'
    movies[2] = 'The Dark Knight'
    movies[3] = 'Pulp Fiction'
    movies[4] = 'The Fifth Element'
    movies.splice(2, 0, 'Jurassic Park')
    console.log(movies.length)
}

//STEP 4
{
    let movies = []
    movies[0] = 'Star Wars'
    movies[1] = 'The Godfather'
    movies[2] = 'The Dark Knight'
    movies[3] = 'Pulp Fiction'
    movies[4] = 'The Fifth Element'
    delete movies[0]
    console.log(movies)
}

//STEP 5
{
    let movies = []
    movies[0] = 'Star Wars'
    movies[1] = 'The Godfather'
    movies[2] = 'The Dark Knight'
    movies[3] = 'Pulp Fiction'
    movies[4] = 'The Fifth Element'
    movies[5] = 'Jurassic Park'
    movies[6] = 'Back to the Future'
    for (let i in movies) {
        console.log(movies[i])
    }
}

//STEP 6
{
    let movies = []
    movies[0] = 'Star Wars'
    movies[1] = 'The Godfather'
    movies[2] = 'The Dark Knight'
    movies[3] = 'Pulp Fiction'
    movies[4] = 'The Fifth Element'
    movies[5] = 'Jurassic Park'
    movies[6] = 'Back to the Future'
    for (let movie of movies) {
        console.log(movie)
    }
}

//STEP 7
{
    let movies = []
    movies[0] = 'Star Wars'
    movies[1] = 'The Godfather'
    movies[2] = 'The Dark Knight'
    movies[3] = 'Pulp Fiction'
    movies[4] = 'The Fifth Element'
    movies[5] = 'Jurassic Park'
    movies[6] = 'Back to the Future'
    movies.sort()
    for (let movie of movies) {
        console.log(movie)
    }
}

//STEP 8
{
    let movies = []
    movies[0] = 'Star Wars'
    movies[1] = 'The Godfather'
    movies[2] = 'The Dark Knight'
    movies[3] = 'Pulp Fiction'
    movies[4] = 'The Fifth Element'
    movies[5] = 'Jurassic Park'
    movies[6] = 'Back to the Future'

    let leastFavMovies = ['Batman $ Robin', 'Alvin', 'Cats']

    console.log('Movies I like:\n')
    for (let movie of movies) {
        console.log(movie)
    }
    console.log('\nMovies I regret watching:\n')
    for (let movie of leastFavMovies) {
        console.log(movie)
    }
}

//STEP 9
{
    let movies = []
    movies[0] = 'Star Wars'
    movies[1] = 'The Godfather'
    movies[2] = 'The Dark Knight'
    movies[3] = 'Pulp Fiction'
    movies[4] = 'The Fifth Element'
    movies[5] = 'Jurassic Park'
    movies[6] = 'Back to the Future'

    let leastFavMovies = ['Batman $ Robin', 'Alvin', 'Cats']

    movies = movies.concat(leastFavMovies)
    movies.sort().reverse()
    for (let movie of movies) {
        console.log(movie)
    }
}

//STEP 10
{
    let movies = ['Star Wars', 'The Godfather', 'The Dark Knight', 'Pulp Fiction', 'The Fifth Element', 'Jurassic Park', 'Back to the Future']
    let leastFavMovies = ['Batman $ Robin', 'Alvin', 'Cats']

    movies = movies.concat(leastFavMovies)
    movies.sort().reverse()

    console.log(movies.pop())
}

//STEP 11
{
    let movies = ['Star Wars', 'The Godfather', 'The Dark Knight', 'Pulp Fiction', 'The Fifth Element', 'Jurassic Park', 'Back to the Future']
    let leastFavMovies = ['Batman $ Robin', 'Alvin', 'Cats']

    movies = movies.concat(leastFavMovies)
    movies.sort().reverse()

    console.log(movies.shift())
}

//STEP 12
{
    let movies = ['Star Wars', 'The Godfather', 'The Dark Knight', 'Pulp Fiction', 'The Fifth Element', 'Jurassic Park', 'Back to the Future']
    let leastFavMovies = ['Batman $ Robin', 'Alvin', 'Cats']
    movies = movies.concat(leastFavMovies)

    // FIND THE INDICES OF THE MOVIES I DON'T LIKE
    let indices = []
    movies.forEach((movie, index) => {
        if (leastFavMovies.includes(movie)) {
            indices.push(index)
        }
    })
    console.log(indices)

    // USE THOSE INDICES TO REPLACE THEM WITH MOVIES I DO LIKE
    let newMovies = ['Alien', 'Toy Story', 'Gladiator']
    indices.forEach((index, i) => {
        movies.splice(index, 1, newMovies[i])
    })
    console.log(movies)
}

//STEP 13
{
    let movies = [['Star Wars', 1], ['The Godfather', 2], ['The Dark Knight', 3], ['Pulp Fiction', 4], ['The Fifth Element', 5]]

    for (let movie of movies) {
        let name = movie.filter((item) => typeof item === 'string')
        console.log(name[0])
    }
}

//STEP 14
{
    let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally']

    let showEmployee = function (list) {
        console.log('Employees:\n')
        for (let name of list) {
            console.log(name.toUpperCase())
        }
    }

    showEmployee(employees)
}

//STEP 15
{
    let filterValues = (arr) => arr.filter((item) => item)

    console.log(filterValues([58, '', 'abcd', true, null, false, 0]))
}

//STEP 16
{
    let randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)]

    console.log(randomItem([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]))
}

//STEP 17
{
    let largestNumber = (arr) => Math.max(...arr)

    console.log(largestNumber([4, 18, 7, 92, 33, 51]))
}