const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();


router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})
router.get('/GET/movies',function(req, res){
    let movies = ['Rang de basanti', 'The shining',
        'Lord of the rings', 'Batman begins',
        'Heathers','Europa Report','Silver Linings Playbook',
    'Fellowship of the Ring','Dangal']
    res.send(movies)
})

router.get('/GET/movies/:indexNumber',function(req, res){
    let movies = ['Rang de basanti', 'The shining',
    'Lord of the rings', 'Batman begins',
    'Heathers','Europa Report','Silver Linings Playbook',
'Fellowship of the Ring','Dangal']
let requestParams = req.params;
let movieName = requestParams.indexNumber
for (let i in movies){
    if(movieName == i){
       return res.send(movies[i])
    }
}
    return res.send('Eror: Use a valid index')
})

router.get('/GET/films',function(req, res){
    let films = [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        '“id”': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       
    res.send(films)
})
router.get('/GET/films/:filmId',function(req, res){
    let films = [{
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       let requestParams = req.params;
let filmName = requestParams.filmId
for (let i in films){
    if(filmName == films[i].id){
       return res.send(films[i])
    }
}
    return res.send('No movie exists with this id')
})


router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

module.exports = router;