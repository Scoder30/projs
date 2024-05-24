const data=[
    {
        "Title": "Avatar",
        "Year": "2009",
        
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        
       
        
      },
      {
        "Title": "I Am Legend",
        "Year": "2007",
        
        "Actors": "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
       
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg",
        
      },
      {
        "Title": "300",
        "Year": "2006",
        
        "Actors": "Gerard Butler, Lena Headey, Dominic West, David Wenham",
        
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg",
       
      },
      {
        "Title": "The Avengers",
        "Year": "2012",
        
        "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
        
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg",
       
      },
      {
        "Title": "The Wolf of Wall Street",
        "Year": "2013",
        
        "Actors": "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
        
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
       
      },
      {
        "Title": "Interstellar",
        "Year": "2014",
        
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
       
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        
      },
      {
        "Title": "Game of Thrones",
        "Year": "2011–",
        
        "Actors": "Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington",
        
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SX300.jpg",
        
      },
      {
        "Title": "Vikings",
        "Year": "2013–",
       
        "Actors": "Travis Fimmel, Clive Standen, Gustaf Skarsgård, Katheryn Winnick",
        
        "Poster": "http://ia.media-imdb.com/images/M/MV5BOTEzNzI3MDc0N15BMl5BanBnXkFtZTgwMzk1MzA5NzE@._V1_SX300.jpg",
       
      },
      {
        "Title": "Gotham",
        "Year": "2014–",
        
        "Actors": "Ben McKenzie, Donal Logue, David Mazouz, Sean Pertwee",
        
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTY2MjMwNDE4OV5BMl5BanBnXkFtZTgwNjI1NjU0OTE@._V1_SX300.jpg",
        
      },
      {
        "Title": "Power",
        "Year": "2014–",
        
        "Actors": "Omari Hardwick, Joseph Sikora, Andy Bean, Lela Loren",
      
        "Poster": "http://ia.media-imdb.com/images/M/MV5BOTA4NTkzMjUzOF5BMl5BanBnXkFtZTgwNzg5ODkxOTE@._V1_SX300.jpg",
        
      },
      {
        "Title": "Narcos",
        "Year": "2015–",
        
        "Actors": "Wagner Moura, Boyd Holbrook, Pedro Pascal, Joanna Christie",
        
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTU0ODQ4NDg2OF5BMl5BanBnXkFtZTgwNzczNTE4OTE@._V1_SX300.jpg",
        
      },
      {
        "Title": "Breaking Bad",
        "Year": "2008–2013",
        
        "Actors": "Bryan Cranston, Anna Gunn, Aaron Paul, Dean Norris",
        
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg",
       
      },
      
    ]
    
    const main=document.getElementById('movies')

   function show (data)

{
  
    data.forEach(function (ele)
    {
      
		const someDiv = document.createElement("div") 
        someDiv.classList.add("Movie") 
        const title = document.createElement('h2')
        title.textContent = ele.Title
        // const image = document.createElement('img')
        // image.setAttribute('src', ele.Poster)
        const actor = document.createElement('p')
        actor.textContent="Acotrs :  "+ ele.Actors
        const year = document.createElement('time')
        year.textContent="Year of released --  " +ele.Year
        someDiv.append(title,actor,year)
        main.appendChild(someDiv)//<div id="library">
        //<div class="cartoon"</div>
        // </div >
	})
}
          show(data)
