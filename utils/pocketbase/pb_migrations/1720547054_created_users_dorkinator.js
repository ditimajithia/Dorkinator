/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "04k8bzm677may4w",
    "created": "2024-07-09 17:44:14.758Z",
    "updated": "2024-07-09 17:44:14.758Z",
    "name": "users_dorkinator",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hu52idrq",
        "name": "email",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "phwx7vtz",
        "name": "password",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 2,
          "max": 30,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("04k8bzm677may4w");

  return dao.deleteCollection(collection);
})
