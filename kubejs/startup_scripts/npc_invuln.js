NativeEvents.onEvent('net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent', event => {
    let entity = event.entity
    let source = event.source?.player

    if (entity.type != "pixelmon:npc")
        return

    if (source && source.creativeMode)
        return

    event.cancel()
})
