import express from 'express';

const app = express();

app.use(express.json());

/*
app.post('/users', (request, response) => {
    console.log(request.body);

    const users = [
        { name: 'chuks', age: 25 },
        { name: 'ricardo', age: 22},
    ];
    
    return response.json(users);
});
*/

app.get('/', (request, response) => {
    
    return response.json({ message: 'Hello World' });
});

app.listen(3333);