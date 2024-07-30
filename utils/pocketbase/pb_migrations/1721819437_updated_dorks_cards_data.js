/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f98mp8dh9bmo7vz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2gsmepac",
    "name": "domain",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f98mp8dh9bmo7vz")

  // remove
  collection.schema.removeField("2gsmepac")

  return dao.saveCollection(collection)
})
