console.log("Let's get this party started!");


$("#gif-search").on("click", searchGif);
$('#empty-div').on('click', emptyDiv);

async function searchGif(e) {
    e.preventDefault();
    let searchTerm = $("#search-term").val();
    let query = { searchTerm: searchTerm, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'}
    let response = await axios.get('http://api.giphy.com/v1/gifs/search', { params: { q: searchTerm, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'}});
    console.log(response);
    let url = response.data.data[0].images.fixed_width.url;
    showGif(url);
}

function showGif(url) {
    console.log(url);
    $('#gif-div').append(`<img src="${url}">`);
}

function emptyDiv(e) {
    e.preventDefault();
    $('#gif-div').html('');
}

