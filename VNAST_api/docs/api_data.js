define({ "api": [
  {
    "type": "get",
    "url": "/me",
    "title": "Request user info based on Auth token",
    "name": "GetSelf",
    "group": "Authentication",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Auth token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "privilege",
            "description": "<p>Privilege level of user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "ID",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example:",
          "content": "{\n     \"privilege\": [\"admin\"],\n     \"_id\": \"5bd989d81746683b2d8511f6\",\n     \"username\": \"admin\",\n     \"email\": \"admin.admin@admin.sem\",\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/vnastRoutes.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login existing user",
    "name": "LoginUser",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Users username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "auth",
            "description": "<p>Success of authentication.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JSON Web token used for authentication/authorisation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example:",
          "content": "{\n     \"auth\": true,\n     \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZDk4OWQ4MTc0NjY4M2IyZDg1MTFmNiIsImlhdCI6MTU0Njg2MDM5NCwiZXhwIjoxNTQ2OTQ2Nzk0fQ.IYaMtOVonFUHJOZ4ZvyhdE3diiMMlFMmXBG42MXQhwc\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/vnastRoutes.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/logout",
    "title": "Log out the user",
    "name": "LogoutUser",
    "group": "Authentication",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Auth token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example:",
          "content": "{\n     \"auth\": false,\n     \"token\": null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/vnastRoutes.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Register new user",
    "name": "RegisterUser",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Users username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'worker'",
              "'manager'",
              "'admin'"
            ],
            "optional": false,
            "field": "privilege",
            "description": "<p>Users privilege level.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Users Email.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "auth",
            "description": "<p>Success of authentication.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JSON Web token used for authentication/authorisation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example:",
          "content": "{\n     \"auth\": true,\n     \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZDk4OWQ4MTc0NjY4M2IyZDg1MTFmNiIsImlhdCI6MTU0Njg2MDM5NCwiZXhwIjoxNTQ2OTQ2Nzk0fQ.IYaMtOVonFUHJOZ4ZvyhdE3diiMMlFMmXBG42MXQhwc\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/vnastRoutes.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/tasks/:taskId/files",
    "title": "Add Files to task",
    "name": "AddFiles",
    "group": "Files",
    "permission": [
      {
        "name": "manager"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Auth token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Param": [
          {
            "group": "Path Param",
            "type": "ID",
            "optional": false,
            "field": ":taskId",
            "description": "<p>The Task ID.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file1",
            "description": "<p>First file to upload</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file2",
            "description": "<p>Second file to upload</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file3...",
            "description": "<p>As many as you wish to upload (the key name is arbitrary, but they must be unique) (za uploadanje sem jaz v postmanu dal &quot;form-data&quot; (namesto raw ali x-www-form-encoded), ker le tak lahko file selectaš. pol pa key je lahko karkoli, zraven pa file)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/vnastRoutes.js",
    "groupTitle": "Files",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "priority",
            "description": "<p>Priority level of the task.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the task.</p>"
          },
          {
            "group": "Success 200",
            "type": "ID",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of the task.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Task name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Task description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "time_limit",
            "description": "<p>DateTime limit for completing the task (ISO format).</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_date",
            "description": "<p>DateTime this task was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "ID",
            "optional": false,
            "field": "created_by",
            "description": "<p>UserID of task creator.</p>"
          },
          {
            "group": "Success 200",
            "type": "ID",
            "optional": false,
            "field": "assigned_to_worker",
            "description": "<p>UserID of the worker this task is assigned to.</p>"
          },
          {
            "group": "Success 200",
            "type": "ID",
            "optional": false,
            "field": "assigned_to_group",
            "description": "<p>GroupID of the group this task is assigned to.</p>"
          },
          {
            "group": "Success 200",
            "type": "File[]",
            "optional": false,
            "field": "documents",
            "description": "<p>Array of Files coresponding to this task.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example:",
          "content": "{\n     \"priority\": \"3\",\n     \"status\": [\n         \"pending\"\n     ],\n     \"_id\": \"5c338c89c8f17f1180c6c550\",\n     \"name\": \"Test task2\",\n     \"description\": \"novi test task2\",\n     \"time_limit\": \"2019-02-11T14:55:11.500Z\",\n     \"assigned_to_worker\": \"5bdecc3ec43948178a11f72e\",\n     \"created_date\": \"2019-01-07T17:29:45.081Z\",\n     \"created_by\": \"5bd989d81746683b2d8511f6\",\n     \"documents\": [\n         {\n             \"_id\": \"5c33932c7acbb2257154978c\",\n             \"mimetype\": \"image/png\",\n             \"originalname\": \"screenshot.png\",\n             \"filename\": \"9dfe737e6321345ffba310a1758250e7\",\n             \"path\": \"uploads/9dfe737e6321345ffba310a1758250e7\"\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/tasks/:taskId/files/:fileId",
    "title": "Delete a File",
    "name": "DeleteFile",
    "group": "Files",
    "permission": [
      {
        "name": "manager"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Auth token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Param": [
          {
            "group": "Path Param",
            "type": "ID",
            "optional": false,
            "field": ":taskId",
            "description": "<p>The Task ID.</p>"
          },
          {
            "group": "Path Param",
            "type": "ID",
            "optional": false,
            "field": ":fileId",
            "description": "<p>The File ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>File Deletion success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example:",
          "content": "{\n    \"message\": \"FILENAME was deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/vnastRoutes.js",
    "groupTitle": "Files"
  },
  {
    "type": "get",
    "url": "/tasks/:taskId/files/:fileId",
    "title": "Download a File",
    "name": "GetFile",
    "group": "Files",
    "permission": [
      {
        "name": "worker"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Auth token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Param": [
          {
            "group": "Path Param",
            "type": "ID",
            "optional": false,
            "field": ":taskId",
            "description": "<p>The Task ID.</p>"
          },
          {
            "group": "Path Param",
            "type": "ID",
            "optional": false,
            "field": ":fileId",
            "description": "<p>The File ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "File-Binary",
            "optional": false,
            "field": "file",
            "description": "<p>File download starts - &quot;File download as attachment&quot; (dobiš binary al nekaj)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/vnastRoutes.js",
    "groupTitle": "Files"
  },
  {
    "type": "post",
    "url": "/tasks",
    "title": "Create new Task",
    "name": "CreateTask",
    "group": "Tasks",
    "permission": [
      {
        "name": "manager"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Task name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Task description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-5",
            "optional": false,
            "field": "priority",
            "description": "<p>Priority level of the task.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "time_limit",
            "description": "<p>DateTime limit for completing the task (ISO format).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'pending'",
              "'ongoing'",
              "'canceled'",
              "'completed'"
            ],
            "optional": false,
            "field": "status",
            "description": "<p>Status of the task.</p>"
          },
          {
            "group": "Parameter",
            "type": "ID",
            "optional": true,
            "field": "assigned_to_worker",
            "description": "<p>UserID of the worker this task is assigned to.</p>"
          },
          {
            "group": "Parameter",
            "type": "ID",
            "optional": true,
            "field": "assigned_to_group",
            "description": "<p>GroupID of the group this task is assigned to.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example:",
          "content": "{\n     \"priority\": \"3\",\n     \"status\": [\n         \"pending\"\n     ],\n     \"_id\": \"5c338c89c8f17f1180c6c550\",\n     \"name\": \"Test task2\",\n     \"description\": \"novi test task2\",\n     \"time_limit\": \"2019-02-11T14:55:11.500Z\",\n     \"assigned_to_worker\": \"5bdecc3ec43948178a11f72e\",\n     \"created_date\": \"2019-01-07T17:29:45.081Z\",\n     \"created_by\": \"5bd989d81746683b2d8511f6\",\n     \"documents\": []\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "priority",
            "description": "<p>Priority level of the task.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the task.</p>"
          },
          {
            "group": "Success 200",
            "type": "ID",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of the task.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Task name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Task description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "time_limit",
            "description": "<p>DateTime limit for completing the task (ISO format).</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_date",
            "description": "<p>DateTime this task was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "ID",
            "optional": false,
            "field": "created_by",
            "description": "<p>UserID of task creator.</p>"
          },
          {
            "group": "Success 200",
            "type": "ID",
            "optional": false,
            "field": "assigned_to_worker",
            "description": "<p>UserID of the worker this task is assigned to.</p>"
          },
          {
            "group": "Success 200",
            "type": "ID",
            "optional": false,
            "field": "assigned_to_group",
            "description": "<p>GroupID of the group this task is assigned to.</p>"
          },
          {
            "group": "Success 200",
            "type": "File[]",
            "optional": false,
            "field": "documents",
            "description": "<p>Array of Files coresponding to this task.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/vnastRoutes.js",
    "groupTitle": "Tasks"
  },
  {
    "type": "delete",
    "url": "/tasks/:taskId",
    "title": "Delete a task",
    "name": "DeleteTask",
    "group": "Tasks",
    "permission": [
      {
        "name": "manager"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Auth token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Param": [
          {
            "group": "Path Param",
            "type": "ID",
            "optional": false,
            "field": ":taskId",
            "description": "<p>The Task ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example:",
          "content": "{\n    \"message\": \"Task successfully deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/vnastRoutes.js",
    "groupTitle": "Tasks"
  },
  {
    "type": "get",
    "url": "/tasks/get/managedtasks",
    "title": "Get tasks created by logged in manager",
    "name": "GetManagedTasks",
    "group": "Tasks",
    "permission": [
      {
        "name": "manager"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Auth token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Task[]",
            "optional": false,
            "field": "tasks",
            "description": "<p>Tasks that were created b the manager corresponding to the JWT sent in the header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example:",
          "content": "[\n    {\n        \"priority\": \"4\",\n        \"status\": [\n            \"pending\"\n        ],\n        \"_id\": \"5c3389e2c8f17f1180c6c54e\",\n        \"name\": \"Test task\",\n        \"description\": \"novi test task\",\n        \"time_limit\": \"2019-02-11T14:55:11.500Z\",\n        \"documents\": [],\n        \"created_date\": \"2019-01-07T17:18:26.597Z\",\n        \"created_by\": \"5bd989d81746683b2d8511f6\",\n        \"__v\": 0\n    },\n    {\n        \"priority\": \"3\",\n        \"status\": [\n            \"pending\"\n        ],\n        \"_id\": \"5c338c89c8f17f1180c6c550\",\n        \"name\": \"Test task2\",\n        \"description\": \"novi test task2\",\n        \"time_limit\": \"2019-02-11T14:55:11.500Z\",\n        \"assigned_to_worker\": \"5bdecc3ec43948178a11f72e\",\n        \"documents\": [],\n        \"created_date\": \"2019-01-07T17:29:45.081Z\",\n        \"created_by\": \"5bd989d81746683b2d8511f6\",\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/vnastRoutes.js",
    "groupTitle": "Tasks"
  },
  {
    "type": "get",
    "url": "/tasks/get/mytasks",
    "title": "Get tasks of logged in worker",
    "name": "GetMyTasks",
    "group": "Tasks",
    "permission": [
      {
        "name": "worker"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Auth token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Task[]",
            "optional": false,
            "field": "tasks",
            "description": "<p>Tasks that are assigned to the worker corresponding to the JWT sent in the header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example:",
          "content": "[\n    {\n        \"priority\": \"3\",\n        \"status\": [\n            \"pending\"\n        ],\n        \"documents\": [],\n        \"created_date\": \"2019-01-07T18:20:38.698Z\",\n        \"_id\": \"5bd15ea4b62fee036e86fbf8\",\n        \"name\": \"Delam, delam, delam\",\n        \"description\": \"delam kot zamorc\",\n        \"Created_date\": \"2018-10-25T06:11:48.220Z\",\n        \"__v\": 0,\n        \"assigned_to_worker\": \"5bdecc3ec43948178a11f72e\",\n        \"created_by\": \"5bdecc29c43948178a11f72d\"\n    },\n    {\n        \"priority\": \"3\",\n        \"status\": [\n            \"pending\"\n        ],\n        \"_id\": \"5bdecd6da982d4395f43e650\",\n        \"name\": \"Faking delajte kreteni\",\n        \"description\": \"kot sem rekel, počasni ste hjoj\",\n        \"documents\": [],\n        \"created_date\": \"2018-11-04T10:43:57.999Z\",\n        \"__v\": 0,\n        \"assigned_to_worker\": \"5bdecc3ec43948178a11f72e\",\n        \"created_by\": \"5bdecc29c43948178a11f72d\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/vnastRoutes.js",
    "groupTitle": "Tasks"
  },
  {
    "type": "get",
    "url": "/tasks/:taskID",
    "title": "Request task by ID",
    "name": "GetTask",
    "group": "Tasks",
    "permission": [
      {
        "name": "worker"
      }
    ],
    "parameter": {
      "fields": {
        "Path Param": [
          {
            "group": "Path Param",
            "type": "ID",
            "optional": false,
            "field": ":taskId",
            "description": "<p>The Task ID.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Auth token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/vnastRoutes.js",
    "groupTitle": "Tasks",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "priority",
            "description": "<p>Priority level of the task.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the task.</p>"
          },
          {
            "group": "Success 200",
            "type": "ID",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of the task.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Task name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Task description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "time_limit",
            "description": "<p>DateTime limit for completing the task (ISO format).</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_date",
            "description": "<p>DateTime this task was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "ID",
            "optional": false,
            "field": "created_by",
            "description": "<p>UserID of task creator.</p>"
          },
          {
            "group": "Success 200",
            "type": "ID",
            "optional": false,
            "field": "assigned_to_worker",
            "description": "<p>UserID of the worker this task is assigned to.</p>"
          },
          {
            "group": "Success 200",
            "type": "ID",
            "optional": false,
            "field": "assigned_to_group",
            "description": "<p>GroupID of the group this task is assigned to.</p>"
          },
          {
            "group": "Success 200",
            "type": "File[]",
            "optional": false,
            "field": "documents",
            "description": "<p>Array of Files coresponding to this task.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example:",
          "content": "{\n     \"priority\": \"3\",\n     \"status\": [\n         \"pending\"\n     ],\n     \"_id\": \"5c338c89c8f17f1180c6c550\",\n     \"name\": \"Test task2\",\n     \"description\": \"novi test task2\",\n     \"time_limit\": \"2019-02-11T14:55:11.500Z\",\n     \"assigned_to_worker\": \"5bdecc3ec43948178a11f72e\",\n     \"created_date\": \"2019-01-07T17:29:45.081Z\",\n     \"created_by\": \"5bd989d81746683b2d8511f6\",\n     \"documents\": [\n         {\n             \"_id\": \"5c33932c7acbb2257154978c\",\n             \"mimetype\": \"image/png\",\n             \"originalname\": \"screenshot.png\",\n             \"filename\": \"9dfe737e6321345ffba310a1758250e7\",\n             \"path\": \"uploads/9dfe737e6321345ffba310a1758250e7\"\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/tasks",
    "title": "Request task list",
    "name": "GetTasks",
    "group": "Tasks",
    "permission": [
      {
        "name": "worker"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Auth token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Task[]",
            "optional": false,
            "field": "tasks",
            "description": "<p>Array of Task objects (see GetTask for details).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/vnastRoutes.js",
    "groupTitle": "Tasks"
  },
  {
    "type": "put",
    "url": "/tasks/:taskId",
    "title": "Update a Task",
    "name": "UpdateTask",
    "group": "Tasks",
    "permission": [
      {
        "name": "worker"
      }
    ],
    "parameter": {
      "fields": {
        "Path Param": [
          {
            "group": "Path Param",
            "type": "ID",
            "optional": false,
            "field": ":taskId",
            "description": "<p>The Task ID.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Task name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Task description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-5",
            "optional": true,
            "field": "priority",
            "description": "<p>Priority level of the task.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "time_limit",
            "description": "<p>DateTime limit for completing the task (ISO format).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'pending'",
              "'ongoing'",
              "'canceled'",
              "'completed'"
            ],
            "optional": true,
            "field": "status",
            "description": "<p>Status of the task.</p>"
          },
          {
            "group": "Parameter",
            "type": "ID",
            "optional": true,
            "field": "assigned_to_worker",
            "description": "<p>UserID of the worker this task is assigned to.</p>"
          },
          {
            "group": "Parameter",
            "type": "ID",
            "optional": true,
            "field": "assigned_to_group",
            "description": "<p>GroupID of the group this task is assigned to.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/vnastRoutes.js",
    "groupTitle": "Tasks",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "priority",
            "description": "<p>Priority level of the task.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the task.</p>"
          },
          {
            "group": "Success 200",
            "type": "ID",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of the task.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Task name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Task description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "time_limit",
            "description": "<p>DateTime limit for completing the task (ISO format).</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_date",
            "description": "<p>DateTime this task was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "ID",
            "optional": false,
            "field": "created_by",
            "description": "<p>UserID of task creator.</p>"
          },
          {
            "group": "Success 200",
            "type": "ID",
            "optional": false,
            "field": "assigned_to_worker",
            "description": "<p>UserID of the worker this task is assigned to.</p>"
          },
          {
            "group": "Success 200",
            "type": "ID",
            "optional": false,
            "field": "assigned_to_group",
            "description": "<p>GroupID of the group this task is assigned to.</p>"
          },
          {
            "group": "Success 200",
            "type": "File[]",
            "optional": false,
            "field": "documents",
            "description": "<p>Array of Files coresponding to this task.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example:",
          "content": "{\n     \"priority\": \"3\",\n     \"status\": [\n         \"pending\"\n     ],\n     \"_id\": \"5c338c89c8f17f1180c6c550\",\n     \"name\": \"Test task2\",\n     \"description\": \"novi test task2\",\n     \"time_limit\": \"2019-02-11T14:55:11.500Z\",\n     \"assigned_to_worker\": \"5bdecc3ec43948178a11f72e\",\n     \"created_date\": \"2019-01-07T17:29:45.081Z\",\n     \"created_by\": \"5bd989d81746683b2d8511f6\",\n     \"documents\": [\n         {\n             \"_id\": \"5c33932c7acbb2257154978c\",\n             \"mimetype\": \"image/png\",\n             \"originalname\": \"screenshot.png\",\n             \"filename\": \"9dfe737e6321345ffba310a1758250e7\",\n             \"path\": \"uploads/9dfe737e6321345ffba310a1758250e7\"\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create new user",
    "name": "CreateUser",
    "group": "Users",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Users username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'worker'",
              "'manager'",
              "'admin'"
            ],
            "optional": false,
            "field": "privilege",
            "description": "<p>Users privilege level.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Users Email.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "privilege",
            "description": "<p>Privilege level of new user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the new user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the new user.</p>"
          },
          {
            "group": "Success 200",
            "type": "ID",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of the new user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example:",
          "content": "{\n     \"privilege\": [\"manager\"],\n     \"_id\": \"5c3362d4b5302253e3ea2798\",\n     \"username\": \"manager23\",\n     \"email\": \"manager23@gmail.com\",\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/vnastRoutes.js",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "/users/:userId",
    "title": "Delete user by ID",
    "name": "DeleteUser",
    "group": "Users",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Auth token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Param": [
          {
            "group": "Path Param",
            "type": "ID",
            "optional": false,
            "field": ":userId",
            "description": "<p>The User ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example:",
          "content": "{\n     \"message\": \"User successfully deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/vnastRoutes.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Request user list",
    "name": "GetUser",
    "group": "Users",
    "permission": [
      {
        "name": "worker"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Auth token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User[]",
            "optional": false,
            "field": "users",
            "description": "<p>Array of user objects (see GetUser for details).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/vnastRoutes.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/:userId",
    "title": "Request user by ID",
    "name": "GetUsers",
    "group": "Users",
    "permission": [
      {
        "name": "worker"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Auth token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Param": [
          {
            "group": "Path Param",
            "type": "String",
            "optional": false,
            "field": ":userId",
            "description": "<p>The User ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "privilege",
            "description": "<p>Privilege level of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "ID",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example:",
          "content": "{\n     \"privilege\": [\"manager\"],\n     \"_id\": \"345678987654322345678\",\n     \"username\": \"klobasaman\",\n     \"email\": \"klobasaman@email.com\",\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/vnastRoutes.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/user/:userId",
    "title": "Update existing user",
    "name": "UpdateUser",
    "group": "Users",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Path Param": [
          {
            "group": "Path Param",
            "type": "ID",
            "optional": false,
            "field": ":userId",
            "description": "<p>The User ID.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>Users username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>Users password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'worker'",
              "'manager'",
              "'admin'"
            ],
            "optional": true,
            "field": "privilege",
            "description": "<p>Users privilege level.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Users Email.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "privilege",
            "description": "<p>Privilege level of the updated user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the updated user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the updated user.</p>"
          },
          {
            "group": "Success 200",
            "type": "ID",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of the updated user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/vnastRoutes.js",
    "groupTitle": "Users"
  }
] });