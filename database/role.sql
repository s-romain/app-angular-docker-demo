REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA cra_e FROM postgrestRole;
REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM authenticator;

DROP ROLE authenticator;
DROP OWNED BY postgrestRole;
DROP ROLE postgrestRole;


create role postgrestRole nologin;

grant usage on schema cra_e to postgrestRole;
grant all on cra_e.projects to postgrestRole;
grant all on cra_e.tasks to postgrestRole;

create role authenticator noinherit login password 'root';
grant postgrestRole to authenticator;