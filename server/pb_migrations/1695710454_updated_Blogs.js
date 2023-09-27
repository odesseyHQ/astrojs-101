/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1onmjyf4l2v9fvh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bp2zgvdl",
    "name": "description",
    "type": "editor",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1onmjyf4l2v9fvh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bp2zgvdl",
    "name": "description",
    "type": "editor",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
})
