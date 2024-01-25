function setClassBoost(class)
    if class == "runner" then
        SetRunSprintMultiplierForPlayer(PlayerId(), 1.49)
    elseif class == "tank" then
        SetEntityMaxHealth(PlayerPedId(), 400)
    elseif class == "light" then
        SetRunSprintMultiplierForPlayer(PlayerId(), 1.24)
        SetEntityMaxHealth(PlayerPedId(), 300)
    end
    QBCore.Functions.Notify("You got class boost!")
end
RegisterNUICallback("escape", function()
    SetNuiFocus(false, false)
end)
RegisterNUICallback("accept", function(data)
    SetRunSprintMultiplierForPlayer(PlayerId(), 1.0)
    SetEntityMaxHealth(PlayerPedId(), 200)
    if GetEntityHealth(PlayerPedId()) > 200 then
        SetEntityHealth(PlayerPedId(), 200)
    end
    if data.option then
        QBCore.Functions.TriggerCallback("kzo_alphaclasses:saveOption", function(save)
             if save then
                setClassBoost(data.option)
             end
        end, data.option)
    end
end)
Citizen.CreateThread(function()
    RequestModel(GetHashKey("g_m_m_chiboss_01"))
    while not HasModelLoaded(GetHashKey("g_m_m_chiboss_01")) do
        Wait(1)
    end
    local ped = CreatePed(4, "g_m_m_chiboss_01", 225.5440, -901.0604, 29.6922, 313.5536, false, true)
    SetEntityHeading(ped, 313.5536)
    FreezeEntityPosition(ped, true)
    SetEntityInvincible(ped, true)
    SetBlockingOfNonTemporaryEvents(ped, true)
    exports['qb-target']:AddTargetEntity(ped, {
        options = {{
            label = "Interact",
            icon = "fas fa-message",
            action = function()
                SetNuiFocus(true, true)
                SendNUIMessage({
                    action = "openClassUI"
                })
            end
        }},
        distance = 2
    })
end)
RegisterNetEvent('QBCore:Client:OnPlayerLoaded', function()
    Citizen.Wait(10000)
    QBCore.Functions.TriggerCallback("kzo_alphaclasses:getClass", function(class)
        if class then
            setClassBoost(class)
        end
    end)
end)
