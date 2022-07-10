
# Déployer avec docker

1. Installer `docker` et `docker-compose` sur votre machine.

2. Chager les images du fichier `docker-compose` avec la commande:

```
docker-compose pull
```

3. Monter les images docker:

```
docker-compose up
```

4. Entrer dans le conteneur de la base de données pour executer les scripts de la base.

```
docker exec -it db bash
```

5. Se connecter à la base:

```
psql -d app_db -U app_user
```

6. Executer les scripts
```
\i /usr/src/sql/scripts/schema.sql
\i /usr/src/sql/scripts/role.sql
\i /usr/src/sql/scripts/insert.sql
```

7. Redémarrer docker-compose:

```
docker-compose restart
```
