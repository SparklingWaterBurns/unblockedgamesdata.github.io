//missCheck.js
//DEPRECATED
$.ajax({
    url:'js/browserCheck.js',
    type:'HEAD',
    error: function()
    {
        console.error("404: File not found: browserCheck.js")
        document.body.innerHTML("<html><head><style>h3 { font-family: Helvetica;} </style></head><body><h3>Script not found</h3></body></html>");
    },
    success: function()
    {
        console.log("browserCheck.js loaded");
    }
});
$.ajax({
    url:'js/framework.js',
    type:'HEAD',
    error: function()
    {
        console.error("404: File not found: framework.js")
        document.body.innerHTML("<html><head><style>h3 { font-family: Helvetica;} </style></head><body><h3>Script not found</h3></body></html>");
    },
    success: function()
    {
        console.log("framework.js loaded");
    }
});
$.ajax({
    url:'js/browserCheck.js',
    type:'HEAD',
    error: function()
    {
        console.error("404: File not found: browserCheck.js")
        document.body.innerHTML("<html><head><style>h3 { font-family: Helvetica;} </style></head><body><h3>Script not found</h3></body></html>");
    },
    success: function()
    {
        console.log("browserCheck.js loaded");
    }
});
$.ajax({
    url:'js/data.js',
    type:'HEAD',
    error: function()
    {
        console.error("404: File not found: data.js")
        document.body.innerHTML("<html><head><style>h3 { font-family: Helvetica;} </style></head><body><h3>Script not found</h3></body></html>");
    },
    success: function()
    {
        console.log("data.js loaded");
    }
});
$.ajax({
    url:'js/cmake_Reloaded.js',
    type:'HEAD',
    error: function()
    {
        console.error("404: File not found: cmake_Reloaded.js")
        document.body.innerHTML("<html><head><style>h3 { font-family: Helvetica;} </style></head><body><h3>Script not found</h3></body></html>");
    },
    success: function()
    {
        console.log("cmake_Reloaded.js loaded");
    }
});