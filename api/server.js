const express = require('express');

const axios = require('axios');

const app = express(),
    bodyParser = require('body-parser');
port = 3080;

app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/my-app/dist/app-angular-docker-demo/'));

app.get('/', (req, res) => {
    res.redirect('http://localhost:4200');
});

/***
 * GET /api/tasks
 */
app.get('/api/tasks', (req, res) => {
    console.log('GET /api/tasks');

    axios
        .get('http://database-api:3000/tasks')
        .then(result => {
            console.log(`statusCode: ${result.status}`);
            const tasks = result.data.map(d => {
                return {
                    id: d.id_task,
                    name: d.name_task,
                    idProject: d.id_project,
                    state: 'En cours'
                };
            });
            res.json(tasks);
        })
        .catch(error => {
            console.error(error);
            res.json([]);
        });
});

/***
 * POST /api/tasks
 */
app.post('/api/tasks', (req, res) => {
    console.log('POST /api/tasks', req.body);

    const newTask = {
        name_task: req.body.name,
        id_project: req.body.idProject
    };

    axios
        .post('http://database-api:3000/tasks', newTask)
        .then(result => {
            console.log(`statusCode: ${result.status}`);
            res.json(result.data);
        })
        .catch(error => {
            console.error(error);
            res.json(null);
        });
});

/***
 * DELETE /api/tasks/:idTask
 */
app.delete('/api/tasks/:idTask', (req, res) => {
    console.log(`DELETE /api/tasks/${req.params.idTask}`);

    axios
        .delete(`http://database-api:3000/tasks?id_task=eq.${req.params.idTask}`)
        .then(result => {
            console.log(`statusCode: ${result.status}`);
            res.json(req.params.idTask);
        })
        .catch(error => {
            console.error(error);
        });
});

/***
 * GET /api/projects
 */
app.get('/api/projects', (req, res) => {
    console.log('GET /api/projects');

    axios
        .get('http://database-api:3000/projects?select=*,tasks(*)')
        .then(result => {
            console.log(`statusCode: ${result.status}`);
            const projects = result.data.map(d => {
                return {
                    id: d.id_project,
                    name: d.name_project,
                    tasks: d.tasks.map(t => {
                        return {
                            id: t.id_task,
                            name: t.name_task,
                            idProject: t.id_project,
                        }
                    }),
                    visible: true
                };
            });
            res.json(projects);
        })
        .catch(error => {
            console.error(error);
            res.json([]);
        });
});

/***
 * GET /api/projects/:idProject/tasks
 */
app.get('/api/projects/:idProject/tasks', (req, res) => {
    console.log(`GET /api/projects/${req.params.idProject}/tasks`);

    axios
        .get(`http://database-api:3000/tasks?id_project=eq.${req.params.idProject}`)
        .then(result => {
            console.log(`statusCode: ${result.status}`);
            const tasks = result.data.map(d => {
                return {
                    id: d.id_task,
                    name: d.name_task,
                    idProject: d.id_project,
                    state: 'En cours'
                };
            });
            res.json(tasks);
        })
        .catch(error => {
            console.error(error);
            res.json([]);
        });
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
