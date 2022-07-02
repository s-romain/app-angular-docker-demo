const express = require('express');
const app = express(),
    bodyParser = require('body-parser');
port = 3080;

app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/my-app/dist/app-angular-docker-demo/'));

app.get('/', (req, res) => {
    res.redirect('http://localhost:4200');
});

var seqIdTaskNextVal = 3;
const tasks = [
    {
        id: 1,
        name: 'ACTI-001',
        title: 'Lorem ipsum',
        state: 'A_CHIFFRER',
        idProject: 1
    },
    {
        id: 2,
        name: 'ACTI-002',
        title: 'Lorem ipsum',
        state: 'EN_COURS',
        idProject: 1
    }
];

const projects = [
    {
        id: 1,
        name: 'Projet 1',
        tasks: [
            {
                id: 1,
                name: 'ACTI-001',
                title: 'Lorem ipsum',
                state: 'A_CHIFFRER',
                idProject: 1
            },
            {
                id: 2,
                name: 'ACTI-002',
                title: 'Lorem ipsum',
                state: 'EN_COURS',
                idProject: 1
            }
        ],
        visible: true
    }
];

/***
 * GET /api/tasks
 */
app.get('/api/tasks', (req, res) => {
    console.log('GET /api/tasks')
    res.json(tasks);
});

/***
 * POST /api/tasks
 */
app.post('/api/tasks', (req, res) => {
    console.log('POST /api/tasks', req.body);
    let newTask = req.body;
    newTask.id = seqIdTaskNextVal;
    projects[0].tasks.push(newTask);
    seqIdTaskNextVal++;
    res.json(newTask);
});

/***
 * DELETE /api/tasks/:idTask
 */
app.delete('/api/tasks/:idTask', (req, res) => {
    console.log(`DELETE /api/tasks/${req.params.idTask}`);
    projects[0].tasks = projects[0].tasks.filter(t => t.id != req.params.idTask);
    res.json(projects[0].tasks);
});

/***
 * GET /api/projects
 */
app.get('/api/projects', (req, res) => {
    console.log('GET /api/projects')
    res.json(projects);
});

/***
 * GET /api/projects/:idProject/tasks
 */
app.get('/api/projects/:idProject/tasks', (req, res) => {
    console.log(`GET /api/projects/${req.params.idProject}/tasks`)
    res.json(tasks);
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
