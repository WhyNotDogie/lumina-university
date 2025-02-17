<script lang="ts">
import Play from "svelte-material-icons/Play.svelte"
import Check from "svelte-material-icons/Check.svelte"
import type { Unit } from "$lib/types/unit"
import { afterUpdate, onDestroy } from "svelte"
import Icon from "$lib/display/Icon.svelte"
import Text from "svelte-material-icons/Text.svelte"
import GameifiedButton from "$lib/controls/GameifiedButton.svelte"
import { page } from "$app/stores"
import Lock from "svelte-material-icons/Lock.svelte"
import { SubscriptionStatus, UnitStatus } from "$lib/graphql/graphql-types"
import Tag from "$lib/display/Tag.svelte"

$: user = $page.data.user_store.user
$: subscription_status = user?.stripe_subscription_info.status ?? SubscriptionStatus.None
$: subscribed = subscription_status !== SubscriptionStatus.None
$: paywalled = unit.free === false && subscribed === false
$: current = $page.url.pathname === `/courses/${course_slug}/${unit.unit_slug}`

export let level: number
export let unit: Unit
export let course_slug: string
export let el_map: Record<string, HTMLElement>

let element: HTMLElement
// could we try use $ reactive statements here?
// let declarations which are not reactive are not reset (this component is re-used across re-renders)
afterUpdate(() => {
    el_map[unit.unit_slug] = element
})
onDestroy(() => {
    delete el_map[unit.unit_slug]
})

</script>

<div
    style:padding-left={ level * 40 + "px" }
    class="unit"
    class:completed={ unit.status === UnitStatus.Completed }
    class:in-progress={ unit.status === UnitStatus.InProgress }
    class:not-started={ unit.status === UnitStatus.NotStarted }>
    <GameifiedButton
        style={unit.status === UnitStatus.Completed
            ? "pressed"
            : unit.status === UnitStatus.InProgress
            ? "highlighted"
            : "translucent"}
        href="/courses/{course_slug}/{unit.unit_slug}"
        icon={unit.status === UnitStatus.Completed ? Check : paywalled ? Lock : Play}
        bind:element/>
    <Icon
        color={unit.status === UnitStatus.InProgress ? "brand" : "white"}
        icon={Text}
        opacity={unit.status === UnitStatus.InProgress ? 1 : 0.5}
        size={24}/>
    <div class="text">
        { unit.name }
    </div>
    {#if current}
        <Tag color="brand">
            Current Page
        </Tag>
    {/if}
</div>

{#each unit.subunits as subunit}
    <svelte:self
        {course_slug}
        el_map={el_map}
        level={level+1}
        unit={subunit}/>
{/each}

<style lang="stylus">
@import variables

.unit
    display flex
    gap 18px
    align-items center
    outline 0
    color white
    width 100%
.text
    display flex
    gap 8px
    font-size 16px
    font-weight 700
    align-items center
    opacity 0.5
</style>