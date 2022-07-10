insert into cra_e.projects (code_project, name_project)
values  ( 'P000001', 'Projet 1' ),
        ( 'P000001', 'Projet 2' ),
        ( 'P000001', 'Projet 3' ),
        ( 'P999999', 'Hors Projets' )
;

 insert into cra_e.tasks ( id_project, name_task, duration_task, type_task )
 values 
   ( 1, 'ACTI-101', 2, 'Développement'),
   ( 1, 'ACTI-102', 2, 'Intégration'),
   ( 1, 'ACTI-103', 2, 'Développement'),
   ( 2, 'ACTI-201', 2, 'Développement'),
   ( 4, 'Absences', 2, 'Congés payés')
;