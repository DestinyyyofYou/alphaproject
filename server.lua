QBCore = exports["qb-core"]:GetCoreObject()
local itemRequire = "bread" -- "itemname" or false to disable

local moneyRequire = 5000 -- moneyamount or false to disable

QBCore.Functions.CreateCallback("kzo_alphaclasses:saveOption", function(source, cb, option)
    local xPlayer = QBCore.Functions.GetPlayer(source)
    local valid = false
    if moneyRequire and not itemRequire then
        if xPlayer.PlayerData.money.cash >= moneyRequire then
            xPlayer.Functions.RemoveMoney("cash", moneyRequire)
            valid = true
        else
            TriggerClientEvent("QBCore:Notify", source, "You do not have enough money!")
        end
    elseif itemRequire and not moneyRequire then
        if xPlayer.Functions.GetItemByName(itemRequire).amount >= 1 then
           xPlayer.Functions.RemoveItem(itemRequire, 1)
            valid = true
        else
            TriggerClientEvent("QBCore:Notify", source,"You do not have an item!")
        end
    else
        if xPlayer.PlayerData.money.cash >= moneyRequire and xPlayer.Functions.GetItemByName(itemRequire).amount >= 1 then
            xPlayer.Functions.RemoveMoney("cash", moneyRequire)
           xPlayer.Functions.RemoveItem(itemRequire, 1)
            valid = true
        else
            TriggerClientEvent("QBCore:Notify", source,"You do not have an item or money!")
        end
    end
    cb(valid)
    if valid then
        MySQL.Async.execute("DELETE FROM kzo_alphaclasses WHERE identifier = @identifier", {
            ["@identifier"] = xPlayer.PlayerData.citizenid
        })
        MySQL.Async.execute("INSERT INTO kzo_alphaclasses (identifier, option) VALUES (@identifier, @option)", {
            ["@identifier"] = xPlayer.PlayerData.citizenid,
            ["@option"] = option
        })
    end
end)
QBCore.Functions.CreateCallback("kzo_alphaclasses:getClass", function(source, cb)
    local xPlayer = QBCore.Functions.GetPlayer(source)
    MySQL.Async.fetchAll('SELECT * FROM kzo_alphaclasses WHERE identifier = @identifier', {
        ["@identifier"] = xPlayer.PlayerData.citizenid
    }, function(data)
        if data[1] then
            cb(data[1].option)
        else
            cb(nil)
        end
    end)
end)
