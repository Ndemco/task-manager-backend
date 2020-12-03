       

### <a id="documentation-body"></a>

MongoDB Physical Model
----------------------

#### Schema for:

Model name: OYL

Author: Nick DeMarco

Version: 2.0

File name:

File path:

Printed On: Wed Dec 02 2020 19:13:26 GMT-0500 (Eastern Standard Time)

Created with: [Hackolade](https://hackolade.com/) - Visual data modeling for NoSQL and multimodel databases

### <a id="contents"></a>

*   [1. Model](#model)
*   [2. Databases](#containers)
    *   [2.1 goalSchema.js](#b61a1390-34fb-11eb-880d-bfcd2d7288f6)
        
        [2.1.2. Collections](#b61a1390-34fb-11eb-880d-bfcd2d7288f6-children)
        
        [2.1.2.1 goalSchema](#b6116100-34fb-11eb-880d-bfcd2d7288f6)
        
    *   [2.2 task-manager-api](#37927480-34fc-11eb-880d-bfcd2d7288f6)
        
        [2.2.2. Collections](#37927480-34fc-11eb-880d-bfcd2d7288f6-children)
        
        [2.2.2.1 users](#3760b620-34fc-11eb-880d-bfcd2d7288f6)
        
    *   [2.3 taskSchema.js](#ec565a90-34fb-11eb-880d-bfcd2d7288f6)
        
        [2.3.2. Collections](#ec565a90-34fb-11eb-880d-bfcd2d7288f6-children)
        
        [2.3.2.1 taskSchema](#ec4ff1f0-34fb-11eb-880d-bfcd2d7288f6)
        
    *   [2.4 userSchema.js](#f15e5920-34fb-11eb-880d-bfcd2d7288f6)
        
        [2.4.2. Collections](#f15e5920-34fb-11eb-880d-bfcd2d7288f6-children)
        
        [2.4.2.1 userSchema](#f1541ff0-34fb-11eb-880d-bfcd2d7288f6)
        

### <a id="model"></a>

##### 1\. Model

##### 1.1 Model **OYL**

##### 1.1.1 **OYL** Entity Relationship Diagram

##### 1.1.2 **OYL** Properties

##### 1.1.2.1 **Details** tab

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td><span>Model name</span></td><td>OYL</td></tr><tr><td><span>Technical name</span></td><td></td></tr><tr><td><span>Description</span></td><td><div class="docs-markdown"></div></td></tr><tr><td><span>Author</span></td><td>Nick DeMarco</td></tr><tr><td><span>Version</span></td><td>2.0</td></tr><tr><td><span>DB vendor</span></td><td>MongoDB</td></tr><tr><td><span>DB version</span></td><td>v4.4</td></tr><tr><td><span>Comments</span></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 1.1.3 **OYL** DB Definitions

### <a id="containers"></a>

##### 2\. Databases

### <a id="b61a1390-34fb-11eb-880d-bfcd2d7288f6"></a>2.1 Database **goalSchema.js**

##### 2.1.1 **goalSchema.js** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Database name</td><td>goalSchema.js</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Enable sharding</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b61a1390-34fb-11eb-880d-bfcd2d7288f6-children"></a>2.1.2 **goalSchema.js** Collections

### <a id="b6116100-34fb-11eb-880d-bfcd2d7288f6"></a>2.1.2.1 Collection **goalSchema**

##### 2.1.2.1.1 **goalSchema** Tree Diagram


##### 2.1.2.1.2 **goalSchema** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>goalSchema</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#b61a1390-34fb-11eb-880d-bfcd2d7288f6>goalSchema.js</a></td></tr><tr><td>Capped</td><td>false</td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.1.3 **goalSchema** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#b611af20-34fb-11eb-880d-bfcd2d7288f6>name</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b611af21-34fb-11eb-880d-bfcd2d7288f6>startDate</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b611af22-34fb-11eb-880d-bfcd2d7288f6>endDate</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b611af23-34fb-11eb-880d-bfcd2d7288f6>completed</a></td><td class="no-break-word">boolean</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b611af24-34fb-11eb-880d-bfcd2d7288f6>percentGoal</a></td><td class="no-break-word">numeric</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b611af25-34fb-11eb-880d-bfcd2d7288f6>percentComplete</a></td><td class="no-break-word">numeric</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b611af26-34fb-11eb-880d-bfcd2d7288f6>owner</a></td><td class="no-break-word">objectId</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b611af20-34fb-11eb-880d-bfcd2d7288f6"></a>2.1.2.1.3.1 Field **name**

##### 2.1.2.1.3.1.1 **name** Tree Diagram

##### 2.1.2.1.3.1.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b611af21-34fb-11eb-880d-bfcd2d7288f6"></a>2.1.2.1.3.2 Field **startDate**

##### 2.1.2.1.3.2.1 **startDate** Tree Diagram

##### 2.1.2.1.3.2.2 **startDate** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>startDate</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b611af22-34fb-11eb-880d-bfcd2d7288f6"></a>2.1.2.1.3.3 Field **endDate**

##### 2.1.2.1.3.3.1 **endDate** Tree Diagram

##### 2.1.2.1.3.3.2 **endDate** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>endDate</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b611af23-34fb-11eb-880d-bfcd2d7288f6"></a>2.1.2.1.3.4 Field **completed**

##### 2.1.2.1.3.4.1 **completed** Tree Diagram

##### 2.1.2.1.3.4.2 **completed** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>completed</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td>false</td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b611af24-34fb-11eb-880d-bfcd2d7288f6"></a>2.1.2.1.3.5 Field **percentGoal**

##### 2.1.2.1.3.5.1 **percentGoal** Tree Diagram


##### 2.1.2.1.3.5.2 **percentGoal** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>percentGoal</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td>false</td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td>false</td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b611af25-34fb-11eb-880d-bfcd2d7288f6"></a>2.1.2.1.3.6 Field **percentComplete**

##### 2.1.2.1.3.6.1 **percentComplete** Tree Diagram


##### 2.1.2.1.3.6.2 **percentComplete** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>percentComplete</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td>false</td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td>false</td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b611af26-34fb-11eb-880d-bfcd2d7288f6"></a>2.1.2.1.3.7 Field **owner**

##### 2.1.2.1.3.7.1 **owner** Tree Diagram


##### 2.1.2.1.3.7.2 **owner** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>owner</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.1.4 **goalSchema** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "goalSchema",
    "additionalProperties": false,
    "properties": {
        "name": {
            "type": "string"
        },
        "startDate": {
            "type": "string",
            "format": "date-time"
        },
        "endDate": {
            "type": "string",
            "format": "date-time"
        },
        "completed": {
            "type": "boolean",
            "default": false
        },
        "percentGoal": {
            "type": "number"
        },
        "percentComplete": {
            "type": "number"
        },
        "owner": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        }
    },
    "required": [
        "name",
        "startDate",
        "endDate",
        "percentGoal",
        "percentComplete",
        "owner"
    ]
}
```

##### 2.1.2.1.5 **goalSchema** JSON data

```
{
    "name": "Lorem",
    "startDate": ISODate("2016-04-08T15:06:21.595Z"),
    "endDate": ISODate("2016-04-08T15:06:21.595Z"),
    "completed": false,
    "percentGoal": -78,
    "percentComplete": -10,
    "owner": ObjectId("507f1f77bcf86cd799439011")
}
```

##### 2.1.2.1.6 **goalSchema** Target Script

```
use goalSchema.js;

db.createCollection( "goalSchema",{
    "storageEngine": {
        "wiredTiger": {}
    },
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "goalSchema",
            "additionalProperties": false,
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "name": {
                    "bsonType": "string"
                },
                "startDate": {
                    "bsonType": "date"
                },
                "endDate": {
                    "bsonType": "date"
                },
                "completed": {
                    "bsonType": "bool"
                },
                "percentGoal": {
                    "bsonType": "number"
                },
                "percentComplete": {
                    "bsonType": "number"
                },
                "owner": {
                    "bsonType": "objectId"
                }
            },
            "required": [
                "name",
                "startDate",
                "endDate",
                "percentGoal",
                "percentComplete",
                "owner"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

```

### <a id="37927480-34fc-11eb-880d-bfcd2d7288f6"></a>2.2 Database **task-manager-api**


##### 2.2.1 **task-manager-api** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Database name</td><td>task-manager-api</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Enable sharding</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="37927480-34fc-11eb-880d-bfcd2d7288f6-children"></a>2.2.2 **task-manager-api** Collections

### <a id="3760b620-34fc-11eb-880d-bfcd2d7288f6"></a>2.2.2.1 Collection **users**

##### 2.2.2.1.1 **users** Tree Diagram


##### 2.2.2.1.2 **users** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>users</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#37927480-34fc-11eb-880d-bfcd2d7288f6>task-manager-api</a></td></tr><tr><td>Capped</td><td>false</td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.2.2.1.3 **users** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#375fa4b0-34fc-11eb-880d-bfcd2d7288f6>_id</a></td><td class="no-break-word">objectId</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#375fa4b6-34fc-11eb-880d-bfcd2d7288f6>tokens</a></td><td class="no-break-word">array</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#37610440-34fc-11eb-880d-bfcd2d7288f6>[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#375fa4b7-34fc-11eb-880d-bfcd2d7288f6>_id</a></td><td class="no-break-word">objectId</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#375fa4b8-34fc-11eb-880d-bfcd2d7288f6>token</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#375fa4b4-34fc-11eb-880d-bfcd2d7288f6>name</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#375fa4b3-34fc-11eb-880d-bfcd2d7288f6>email</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#375fa4b5-34fc-11eb-880d-bfcd2d7288f6>password</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#375fa4b2-34fc-11eb-880d-bfcd2d7288f6>createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#375fa4b9-34fc-11eb-880d-bfcd2d7288f6>updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#375fa4b1-34fc-11eb-880d-bfcd2d7288f6>__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="375fa4b0-34fc-11eb-880d-bfcd2d7288f6"></a>2.2.2.1.3.1 Field **\_id**

##### 2.2.2.1.3.1.1 **\_id** Tree Diagram


##### 2.2.2.1.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="375fa4b4-34fc-11eb-880d-bfcd2d7288f6"></a>2.2.2.1.3.2 Field **name**

##### 2.2.2.1.3.2.1 **name** Tree Diagram


##### 2.2.2.1.3.2.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td>Mike Smith</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="375fa4b3-34fc-11eb-880d-bfcd2d7288f6"></a>2.2.2.1.3.3 Field **email**

##### 2.2.2.1.3.3.1 **email** Tree Diagram


##### 2.2.2.1.3.3.2 **email** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>email</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td>mike@example.com</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="375fa4b5-34fc-11eb-880d-bfcd2d7288f6"></a>2.2.2.1.3.4 Field **password**

##### 2.2.2.1.3.4.1 **password** Tree Diagram


##### 2.2.2.1.3.4.2 **password** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>password</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td>$2a$08$j1Ar2aIUTpZHsbjK9.DaueZiPk2L2fikhtYs1pMSwqVNTI40b/B.C</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="375fa4b6-34fc-11eb-880d-bfcd2d7288f6"></a>2.2.2.1.3.5 Field **tokens**

##### 2.2.2.1.3.5.1 **tokens** Tree Diagram


##### 2.2.2.1.3.5.2 **tokens** Hierarchy

Parent field: **users**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#37610440-34fc-11eb-880d-bfcd2d7288f6>[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.2.2.1.3.5.3 **tokens** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>tokens</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td>false</td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="37610440-34fc-11eb-880d-bfcd2d7288f6"></a>2.2.2.1.3.6 Field **\[0\]**

##### 2.2.2.1.3.6.1 **\[0\]** Tree Diagram


##### 2.2.2.1.3.6.2 **\[0\]** Hierarchy

Parent field: **tokens**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#375fa4b7-34fc-11eb-880d-bfcd2d7288f6>_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#375fa4b8-34fc-11eb-880d-bfcd2d7288f6>token</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.2.2.1.3.6.3 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="375fa4b7-34fc-11eb-880d-bfcd2d7288f6"></a>2.2.2.1.3.7 Field **\_id**

##### 2.2.2.1.3.7.1 **\_id** Tree Diagram


##### 2.2.2.1.3.7.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="375fa4b8-34fc-11eb-880d-bfcd2d7288f6"></a>2.2.2.1.3.8 Field **token**

##### 2.2.2.1.3.8.1 **token** Tree Diagram


##### 2.2.2.1.3.8.2 **token** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>token</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmEyZTVmYmUzNjAwYTI2ZTA5MjA5MGYiLCJpYXQiOjE2MDQ1MTQ1NzZ9.izSqBIKu7vHmtOcu7lsvk-z6m74npXTT5SePyojEKXE</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="375fa4b2-34fc-11eb-880d-bfcd2d7288f6"></a>2.2.2.1.3.9 Field **createdAt**

##### 2.2.2.1.3.9.1 **createdAt** Tree Diagram


##### 2.2.2.1.3.9.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>ISODate("2020-11-04T18:29:28.560Z")</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="375fa4b9-34fc-11eb-880d-bfcd2d7288f6"></a>2.2.2.1.3.10 Field **updatedAt**

##### 2.2.2.1.3.10.1 **updatedAt** Tree Diagram

##### 2.2.2.1.3.10.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>ISODate("2020-11-04T18:29:28.599Z")</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="375fa4b1-34fc-11eb-880d-bfcd2d7288f6"></a>2.2.2.1.3.11 Field **\_\_v**

##### 2.2.2.1.3.11.1 **\_\_v** Tree Diagram


##### 2.2.2.1.3.11.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td>false</td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td>false</td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td>12</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.2.2.1.4 **users** Indexes

<table class="index-table"><thead><tr><td class="table-property-column">Property</td><td class="table-column-property">_id_</td><td class="table-column-property">email_1</td></tr></thead><tbody><tr><td>Name</td><td class="table-column-indexes">_id_</td><td class="table-column-indexes">email_1</td></tr><tr><td>Key</td><td class="table-column-indexes">_id('ascending')</td><td class="table-column-indexes">email('ascending')</td></tr><tr><td>Hashed</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Unique</td><td class="table-column-indexes"></td><td class="table-column-indexes">true</td></tr><tr><td>Drop duplicates</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Sparse</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Background indexing</td><td class="table-column-indexes"></td><td class="table-column-indexes">true</td></tr><tr><td>Partial filter exp</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Expire after (seconds)</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Storage engine</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Comments</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr></tbody></table>

##### 2.2.2.1.5 **users** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "users",
    "additionalProperties": false,
    "properties": {
        "_id": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "name": {
            "type": "string"
        },
        "email": {
            "type": "string"
        },
        "password": {
            "type": "string"
        },
        "tokens": {
            "type": "array",
            "additionalItems": true,
            "uniqueItems": false,
            "items": {
                "type": "object",
                "properties": {
                    "_id": {
                        "type": "string",
                        "pattern": "^[a-fA-F0-9]{24}$"
                    },
                    "token": {
                        "type": "string"
                    }
                },
                "additionalProperties": false,
                "required": [
                    "_id",
                    "token"
                ]
            }
        },
        "createdAt": {
            "type": "string",
            "format": "date-time"
        },
        "updatedAt": {
            "type": "string",
            "format": "date-time"
        },
        "__v": {
            "type": "integer"
        }
    },
    "required": [
        "_id",
        "name",
        "email",
        "password",
        "tokens",
        "createdAt",
        "updatedAt",
        "__v"
    ]
}
```

##### 2.2.2.1.6 **users** JSON data

```
{
    "_id": ObjectId("507f1f77bcf86cd799439011"),
    "name": "Mike Smith",
    "email": "mike@example.com",
    "password": "$2a$08$j1Ar2aIUTpZHsbjK9.DaueZiPk2L2fikhtYs1pMSwqVNTI40b/B.C",
    "tokens": [
        {
            "_id": ObjectId("507f1f77bcf86cd799439011"),
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmEyZTVmYmUzNjAwYTI2ZTA5MjA5MGYiLCJpYXQiOjE2MDQ1MTQ1NzZ9.izSqBIKu7vHmtOcu7lsvk-z6m74npXTT5SePyojEKXE"
        }
    ],
    "createdAt": ISODate("2020-11-04T18:29:28.560Z"),
    "updatedAt": ISODate("2020-11-04T18:29:28.599Z"),
    "__v": 12
}
```

##### 2.2.2.1.7 **users** Target Script

```
use task-manager-api;

db.createCollection( "users",{
    "storageEngine": {
        "wiredTiger": {}
    },
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "users",
            "additionalProperties": false,
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "name": {
                    "bsonType": "string"
                },
                "email": {
                    "bsonType": "string"
                },
                "password": {
                    "bsonType": "string"
                },
                "tokens": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "uniqueItems": false,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "_id": {
                                "bsonType": "objectId"
                            },
                            "token": {
                                "bsonType": "string"
                            }
                        },
                        "additionalProperties": false,
                        "required": [
                            "_id",
                            "token"
                        ]
                    }
                },
                "createdAt": {
                    "bsonType": "date"
                },
                "updatedAt": {
                    "bsonType": "date"
                },
                "__v": {
                    "bsonType": "int"
                }
            },
            "required": [
                "_id",
                "name",
                "email",
                "password",
                "tokens",
                "createdAt",
                "updatedAt",
                "__v"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});
db.users.createIndex(
{
    "_id": 1
},
{
    "name": "_id_"
}
);
db.users.createIndex(
{
    "email": 1
},
{
    "unique": true,
    "name": "email_1",
    "background": true
}
);

```

### <a id="ec565a90-34fb-11eb-880d-bfcd2d7288f6"></a>2.3 Database **taskSchema.js**


##### 2.3.1 **taskSchema.js** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Database name</td><td>taskSchema.js</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Enable sharding</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="ec565a90-34fb-11eb-880d-bfcd2d7288f6-children"></a>2.3.2 **taskSchema.js** Collections

### <a id="ec4ff1f0-34fb-11eb-880d-bfcd2d7288f6"></a>2.3.2.1 Collection **taskSchema**

##### 2.3.2.1.1 **taskSchema** Tree Diagram


##### 2.3.2.1.2 **taskSchema** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>taskSchema</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#ec565a90-34fb-11eb-880d-bfcd2d7288f6>taskSchema.js</a></td></tr><tr><td>Capped</td><td>false</td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.3.2.1.3 **taskSchema** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#ec506720-34fb-11eb-880d-bfcd2d7288f6>description</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#ec506721-34fb-11eb-880d-bfcd2d7288f6>dueDate</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#ec508e30-34fb-11eb-880d-bfcd2d7288f6>completed</a></td><td class="no-break-word">boolean</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#ec508e31-34fb-11eb-880d-bfcd2d7288f6>owner</a></td><td class="no-break-word">objectId</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="ec506720-34fb-11eb-880d-bfcd2d7288f6"></a>2.3.2.1.3.1 Field **description**

##### 2.3.2.1.3.1.1 **description** Tree Diagram


##### 2.3.2.1.3.1.2 **description** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>description</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="ec506721-34fb-11eb-880d-bfcd2d7288f6"></a>2.3.2.1.3.2 Field **dueDate**

##### 2.3.2.1.3.2.1 **dueDate** Tree Diagram


##### 2.3.2.1.3.2.2 **dueDate** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>dueDate</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="ec508e30-34fb-11eb-880d-bfcd2d7288f6"></a>2.3.2.1.3.3 Field **completed**

##### 2.3.2.1.3.3.1 **completed** Tree Diagram


##### 2.3.2.1.3.3.2 **completed** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>completed</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td>false</td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="ec508e31-34fb-11eb-880d-bfcd2d7288f6"></a>2.3.2.1.3.4 Field **owner**

##### 2.3.2.1.3.4.1 **owner** Tree Diagram



##### 2.3.2.1.3.4.2 **owner** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>owner</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.3.2.1.4 **taskSchema** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "taskSchema",
    "additionalProperties": false,
    "properties": {
        "description": {
            "type": "string"
        },
        "dueDate": {
            "type": "string",
            "format": "date-time"
        },
        "completed": {
            "type": "boolean",
            "default": false
        },
        "owner": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        }
    },
    "required": [
        "description",
        "dueDate",
        "owner"
    ]
}
```

##### 2.3.2.1.5 **taskSchema** JSON data

```
{
    "description": "Lorem",
    "dueDate": ISODate("2016-04-08T15:06:21.595Z"),
    "completed": false,
    "owner": ObjectId("507f1f77bcf86cd799439011")
}
```

##### 2.3.2.1.6 **taskSchema** Target Script

```
use taskSchema.js;

db.createCollection( "taskSchema",{
    "storageEngine": {
        "wiredTiger": {}
    },
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "taskSchema",
            "additionalProperties": false,
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "description": {
                    "bsonType": "string"
                },
                "dueDate": {
                    "bsonType": "date"
                },
                "completed": {
                    "bsonType": "bool"
                },
                "owner": {
                    "bsonType": "objectId"
                }
            },
            "required": [
                "description",
                "dueDate",
                "owner"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

```

### <a id="f15e5920-34fb-11eb-880d-bfcd2d7288f6"></a>2.4 Database **userSchema.js**


##### 2.4.1 **userSchema.js** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Database name</td><td>userSchema.js</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Enable sharding</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f15e5920-34fb-11eb-880d-bfcd2d7288f6-children"></a>2.4.2 **userSchema.js** Collections

### <a id="f1541ff0-34fb-11eb-880d-bfcd2d7288f6"></a>2.4.2.1 Collection **userSchema**

##### 2.4.2.1.1 **userSchema** Tree Diagram


##### 2.4.2.1.2 **userSchema** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>userSchema</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#f15e5920-34fb-11eb-880d-bfcd2d7288f6>userSchema.js</a></td></tr><tr><td>Capped</td><td>false</td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.4.2.1.3 **userSchema** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#f1544700-34fb-11eb-880d-bfcd2d7288f6>name</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f1544701-34fb-11eb-880d-bfcd2d7288f6>email</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f1544702-34fb-11eb-880d-bfcd2d7288f6>password</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f1544703-34fb-11eb-880d-bfcd2d7288f6>tokens</a></td><td class="no-break-word">array</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f1546e10-34fb-11eb-880d-bfcd2d7288f6>[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f1546e11-34fb-11eb-880d-bfcd2d7288f6>token</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f1544700-34fb-11eb-880d-bfcd2d7288f6"></a>2.4.2.1.3.1 Field **name**

##### 2.4.2.1.3.1.1 **name** Tree Diagram


##### 2.4.2.1.3.1.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f1544701-34fb-11eb-880d-bfcd2d7288f6"></a>2.4.2.1.3.2 Field **email**

##### 2.4.2.1.3.2.1 **email** Tree Diagram


##### 2.4.2.1.3.2.2 **email** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>email</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f1544702-34fb-11eb-880d-bfcd2d7288f6"></a>2.4.2.1.3.3 Field **password**

##### 2.4.2.1.3.3.1 **password** Tree Diagram


##### 2.4.2.1.3.3.2 **password** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>password</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td>7</td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f1544703-34fb-11eb-880d-bfcd2d7288f6"></a>2.4.2.1.3.4 Field **tokens**

##### 2.4.2.1.3.4.1 **tokens** Tree Diagram


##### 2.4.2.1.3.4.2 **tokens** Hierarchy

Parent field: **userSchema**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#f1546e10-34fb-11eb-880d-bfcd2d7288f6>[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.4.2.1.3.4.3 **tokens** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>tokens</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td>false</td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f1546e10-34fb-11eb-880d-bfcd2d7288f6"></a>2.4.2.1.3.5 Field **\[0\]**

##### 2.4.2.1.3.5.1 **\[0\]** Tree Diagram


##### 2.4.2.1.3.5.2 **\[0\]** Hierarchy

Parent field: **tokens**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#f1546e11-34fb-11eb-880d-bfcd2d7288f6>token</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.4.2.1.3.5.3 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f1546e11-34fb-11eb-880d-bfcd2d7288f6"></a>2.4.2.1.3.6 Field **token**

##### 2.4.2.1.3.6.1 **token** Tree Diagram


##### 2.4.2.1.3.6.2 **token** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>token</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.4.2.1.4 **userSchema** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "userSchema",
    "additionalProperties": false,
    "properties": {
        "name": {
            "type": "string"
        },
        "email": {
            "type": "string"
        },
        "password": {
            "type": "string",
            "minLength": 7
        },
        "tokens": {
            "type": "array",
            "additionalItems": true,
            "uniqueItems": false,
            "items": {
                "type": "object",
                "properties": {
                    "token": {
                        "type": "string"
                    }
                },
                "additionalProperties": false,
                "required": [
                    "token"
                ]
            }
        }
    },
    "required": [
        "name",
        "email",
        "password"
    ]
}
```

##### 2.4.2.1.5 **userSchema** JSON data

```
{
    "name": "Lorem",
    "email": "Lorem",
    "password": "Lorem ipsum",
    "tokens": [
        {
            "token": "Lorem"
        }
    ]
}
```

##### 2.4.2.1.6 **userSchema** Target Script

```
use userSchema.js;

db.createCollection( "userSchema",{
    "storageEngine": {
        "wiredTiger": {}
    },
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "userSchema",
            "additionalProperties": false,
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "name": {
                    "bsonType": "string"
                },
                "email": {
                    "bsonType": "string"
                },
                "password": {
                    "bsonType": "string",
                    "minLength": 7
                },
                "tokens": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "uniqueItems": false,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "token": {
                                "bsonType": "string"
                            }
                        },
                        "additionalProperties": false,
                        "required": [
                            "token"
                        ]
                    }
                }
            },
            "required": [
                "name",
                "email",
                "password"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

```

### <a id="edges"></a>
