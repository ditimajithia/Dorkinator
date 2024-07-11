/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l310epbqjnqgjex")

  collection.indexes = []

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l310epbqjnqgjex")

  collection.indexes = [
    "CREATE INDEX `idx_ciCqiSZ` ON `leads` (\n  `user_email`,\n  `user_name`,\n  `user_message`\n)"
  ]

  return dao.saveCollection(collection)
})
