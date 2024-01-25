fx_version('cerulean')
games({'gta5'})

client_scripts({"client.lua"});

server_scripts({
    "server.lua",
    "@oxmysql/lib/MySQL.lua"
});

ui_page "ui/index.html"

files {"ui/*", "ui/assets/imgs/*"}
