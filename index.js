const express = require('express');
const app = express();
// Enable a feature needed for POST request and add the following line of code
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Hello there');
});

const courses = [
    {id: 1, name:'Web Development'},
    {id:2, name: 'IT'},
    {id:3, name: 'Cybersecurity'},
];

// HTTP GET requests route
app.get('/api/courses', (req,res)=>{
    res.send(courses);
})
// HTTP POST Requests
app.post('/api/courses', (req,res) => {
    // You write the if code here
    // Add an if statement so that the name of the course you post is .min(3) characters
    let course = null;
    if(req.body.name.length >= 3) {
        course ={
            // We assign an ID and a name property
            id: courses.length +1,
            name:req.body.name
        }
    }
    else {
        res.send("The course needs to be at least 3 letters long")
    }
    // YOU WRITE THE NEXT LINES OF code
    // Next step: push it to the array
    courses.push(course);
    // Next step: the server should return the new resource to the client in the body of the response
    res.send(course);
    res.status(200);
});
// request course by id
app.get('/api/courses/:id',(req,res)=> {
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send("The course with the given ID was not found.");
        return
    }
    res.send(course);
})
app.listen(3000, () => {
    console.log('Listening on port 3000 ...');
})



app.put('/api/courses/:id', (req,res)=>{
    // You write the if code here
    // Add an if statement so that the name of the course you post is .min(3) characters
    let course = null;
    if(req.body.name.length >= 3) {
        course ={
            // We assign an ID and a name property
            id: courses.length +1,
            name:req.body.name
        }
    }
    else {
        res.send("The name of the course must be at least 3 characters long.")
    }
    // YOU WRITE THE NEXT LINES OF code
    // Next step: push it to the array
    courses.push(course);
    // Next step: the server should return the new resource to the client in the body of the response
    res.send(course);
    res.status(200);
    // Write the code in order to look up the course, if not existing return a 404
    let x = false;
    for (let i = 0;i < courses.length;i++)
    {
        if (course == courses[i])
        {
            x = true;
        }
    }
    if (x == false)
    {
        res.status(404).send("The course with the given ID was not found.");
        return
    }
    // Otherwise
    // Update the course
    else
    {
        res.send(course);
        // Return the updated course
        return
    }
    });