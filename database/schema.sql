DROP SCHEMA cra_e CASCADE;
CREATE SCHEMA cra_e;

CREATE TABLE cra_e.projects (
    id_project INT GENERATED ALWAYS AS IDENTITY,
    code_project VARCHAR(30),
    name_project VARCHAR(30),
    PRIMARY KEY (id_project)
);

CREATE TABLE cra_e.tasks (
  id_task INT GENERATED ALWAYS AS IDENTITY,
  id_manager INT,
  id_project INT,
  name_task VARCHAR(30),
  duration_task INT,
  type_task VARCHAR(30),
  PRIMARY KEY (id_task),
  CONSTRAINT fkProject
      FOREIGN KEY(id_project) 
	  REFERENCES cra_e.projects(id_project)
);