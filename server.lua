local itemRequire = "bread" -- "itemname" or false to disable

local moneyRequire = 5000 -- moneyamount or false to disable

ESX.RegisterServerCallback("kzo_alphaclasses:saveOption", function(source, cb, option)
    local xPlayer = ESX.GetPlayerFromId(source)
    local valid = false
    if moneyRequire and not itemRequire then
        if xPlayer.getMoney() >= moneyRequire then
            xPlayer.removeAccountMoney("money", moneyRequire)
            valid = true
        else
            xPlayer.showNotification("You do not have enough money!")
        end
    elseif itemRequire and not moneyRequire then
        if xPlayer.getInventoryItem(itemRequire).count >= 1 then
            xPlayer.removeInventoryItem(itemRequire, 1)
            valid = true
        else
            xPlayer.showNotification("You do not have an item!")
        end
    else
        if xPlayer.getMoney() >= moneyRequire and xPlayer.getInventoryItem(itemRequire).count >= 1 then
            xPlayer.removeAccountMoney("money", moneyRequire)
            xPlayer.removeInventoryItem(itemRequire, 1)
            valid = true
        else
            xPlayer.showNotification("You do not have an item or money!")
        end
    end
    cb(valid)
    if valid then
        MySQL.Async.execute("DELETE FROM kzo_alphaclasses WHERE identifier = @identifier", {
            ["@identifier"] = xPlayer.identifier
        })
        MySQL.Async.execute("INSERT INTO kzo_alphaclasses (identifier, option) VALUES (@identifier, @option)", {
            ["@identifier"] = xPlayer.identifier,
            ["@option"] = option
        })
    end
end)
ESX.RegisterServerCallback("kzo_alphaclasses:getClass", function(source, cb)
    local xPlayer = ESX.GetPlayerFromId(source)
    MySQL.Async.fetchAll('SELECT * FROM kzo_alphaclasses WHERE identifier = @identifier', {
        ["@identifier"] = xPlayer.identifier
    }, function(data)
        if data[1] then
            cb(data[1].option)
        else
            cb(nil)
        end
    end)
end)
