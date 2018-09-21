$(function () {

    var questions = [
        ['Which of these is a real variety of Yam?', 'Sandra', 'Amy', 'Jessica', 'Lucy', 'fruit', 4],
        ['Which of these is a type of apple?', 'Happy Delicious', 'Happy Tasty', 'Golden Tasty', 'Golden Delicious', 'fruit', 4],
        ['Which of these is actually a Vegetable?', 'Watermelon', 'Pear', 'Banana', 'Apple', 'fruit', 1],
        ['Which of these is not a common variety of Asparagus?', 'Purple', 'White', 'Red', 'Green', 'fruit', 3],
        ['Which of these is not a variety of Avocado?', 'Bonny Lad', 'Bacon', 'Hass', 'Pinkerton', 'fruit', 1]
        ['Which of these is not a variety of melon?', 'Cantaloupe', 'Chantenay', 'Honeydew', 'Casaba', 'fruit', 2],
        ['Which of these is not a variety of Tomato?', 'Early Girl', 'Herald', 'Albert', 'Eurocross', 'fruit', 3],
        ['Which of these is not a variety of Turnip?', 'Green Globe', 'Bora', 'Golden Ball', 'Model White', 'fruit', 1],
        ['Which of these is not a variety of Yam?', 'Yellow', 'Bittercress', 'Lucy', 'Moonshine', 'fruit', 2],
        ['Which of these is often confused for being a sweet potato?', 'Watercress', 'Watermelon', 'Yam', ' Ugli Fruit', 'fruit', 3],
        ['Which of these is the correct name for a type of apple?', 'Mammy Smith', 'Daddy Smith', 'Granny Smith', 'Nanny Smith', 'fruit', 3],
        ['Which of these is the correct name for a type of grape?', 'Cabenet Sauvignon', 'Caramel Sauvingon', 'Cabernet Sauvignon', 'Cream la Sauvingon', 'fruit', 3],
        ['Which of these is the correct name for a type of Lettuce?', 'Kos', 'Cos', 'Close', 'Cause', 'fruit', 2],
        ['Which of these is the correct name for a type of peach?', 'Ulberta', 'Ilberta', 'Elberta', 'Alberta', 'fruit', 3],
        ['Which of these is the correct name for the plant family to which the Tomato belongs?', 'Lightshade', 'Nightshade', 'Darkshade', 'Redshade', 'fruit', 2],
        ['Which of these is the name of a type of Apple?', 'Founding', 'Discovery', 'Uncovering', 'Recovery', 'fruit', 2],
        ['Which of these is toxic if eaten raw?', 'Ugli Fruit', 'Watercress', 'Watermelon', 'Yam', 'fruit', 4],
        ['Which one of the following vegetables has the highest Potassium content?', 'Turnip', 'Potato', 'Broccoli', 'Carrot', 'fruit', 3],
        ['Which one of these berries is said to be good for women incurring uterine difficulties after a number of births?', 'Elderberry', 'Gooseberry', 'Blackberry', 'Raspberry', 'fruit', 2],
        ['Which one of these is not a variety of Swede?', 'Bora', 'Baron Solemacher', 'Magres', 'Marian', 'fruit', 2],
        ['The Naked Maja was a work produced by which artist?', 'Renoir', 'Rembrandt', 'Goya', 'Delacroix', 'art', 3],
        ['The Pitti Palace is located in which European City?', 'Florence', 'Naples', 'Rome', 'Madrid', 'art', 1],
        ['The Term “Impressionism” comes from a work by which painter?', 'Degas', 'Manet', 'Pissaro', 'Monet', 'art', 4],
        ['The US WW1 recruitment poster “I Want You” was designed by which artist?', 'Johns', 'Degas', 'Manet', 'Flagg', 'art', 4],
        ['Theo Van Doesburg was born which what first name?', 'Jean', 'Henry', 'Christian', 'Frida', 'art', 3],
        ['Three Flags is a famous work by which artist?', 'El Greco', 'Klee', 'Johns', 'Titian', 'art', 3],
        ['Tintoretto had the nickname Little …_ ?', 'Sigher', 'Flier', 'Dyer', 'Cryer', 'art', 3],
        ['Titian famously said “He will never be anything but a dauber” about whom?', 'Goya', 'Courbet', 'Tintoretto', 'Velazquez', 'art', 3],
        ['To which other famous artist was Frida Kahlo married?', 'Diego Rivera', 'Marc Chagall', 'Andre Breton', 'Yves Tanguay', 'art', 1],
        ['Twittering Machine is a famous work by which artist?', 'Klee', 'Johns', 'Titian', 'El Greco', 'art', 1],
        ['Venus of Urbino is a famous work by which artist?', 'Johns', 'Titian', 'El Greco', 'Klee', 'art', 2],
        ['View of Toledo is a famous work by which artist?', 'Johns', 'Klee', 'El Greco', 'Titian', 'art', 3],
        ['Wassily Kandinsky was a proponent of which school of Art?', 'Cubism', 'Dada', 'Abstract Art', 'Baroque', 'art', 3],
        ['Whaam! Was a work by which artist?', 'Hirst', 'Lichtenstein', 'Hockney', 'Warhol', 'art', 3],
        ['What colour is missing from a famous Gainsborough painting “The … Boy”?', 'Red', 'Blue', 'Pink', 'Green', 'art', 2],
        ['What colour is the mans tie in the famous work “Le Fils de L’homme” by Magritte?', 'Green', 'Blue', 'Black', 'Red', 'art', 4],
        ['What did Marcel Duchamp add to Mona Lisa?', 'Glasses', 'Fake Nails', 'Eye brows', 'Moustache', 'art', 4],
        ['What did the L stand for in the name of LS Lowry?', 'Larry', 'Lenny', 'Liam', 'Laurence', 'art', 4],
        ['What does the M stand for the the name of the painter MC Escher?', 'Martin', 'Maurice', 'Maurits', 'Mark', 'art', 3],
        ['What does the name of the art group “Die Brucke” translate as?', 'The Beach', 'The Red', 'The Bridge', 'The Night', 'art', 3]
    ]

    $("#game").attr("hidden", true);
    $("#loading").attr("hidden", true);

    $("#myName").keyup(function () {
        if ($("#myName").length > 0 && $("#myName").val() != '') {
            $("#start").attr("disabled", false);
        } else {
            $("#start").attr("disabled", true);
        }
    })

    var intervalId;
    var progressBar = 0;

    $("#start").on("click", function () {
        $("#myWelcome").attr("hidden", true);
        $("#loading").attr("hidden", false);
        intervalId = setInterval(increment, 200);
    })

    function increment() {
        if (progressBar <= 100) {
            progressBar = progressBar + 5;
            $(".progress-bar").attr('style', 'width: ' + progressBar + '%');
        } else {
            $("#loading").attr("hidden", true);
            $("#game").attr("hidden", false);
            clearInterval(intervalId);
        }
    }

    var game = {
        
    }







})