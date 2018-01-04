console.log("Hello World");
$().ready(function() {
  console.log("Hello World, again");


  // need to connect API, then parse individual items, post that to the page, connect form fields to accept new data and add to api
  
  //Going to try and connect with the API
   function showBooks(){
     var books = $.get('https://den-super-crud.herokuapp.com/books')
    .done(function(data){

      console.log(data.books[0].title);
      var newBooks = data.books; 
      for (var i = 0; i < newBooks.length; i++) {
      	console.log(newBooks[i]);
      	$('#books').append(
          "<ul><li><span class='info'>Title:</span> " + newBooks[i].title + "</li>" + 
          "<li><span class='info'>Author:</span> " + newBooks[i].author + "</li>" +
          "<li><span class='info'>Cover:</span> " + "<img src=" + newBooks[i].image + ">" + "</li>" +
          "<li><span class='info'>Release Date:</span> " + newBooks[i].releaseDate + "</li>" +
          "</ul>");
      }//End for loop
    

      //Need to post all from info onto page
      $('form').on("submit", function(event){
        event.preventDefault();
        let newBook = {
          title: $('#book-title').val(),
          author: $('#book-author').val(),
          image: $('#book-image').val(),
          releaseDate: $('#book-release-date').val()
        };
        console.log(newBook);
        //Posting to super crud
        $.post('https://den-super-crud.herokuapp.com/books', newBook).done(function(data){
          console.log(data);
        });

      });

    
    }); // end of .get books
  }
  showBooks();
}); // Ready
