<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import type { CourseFull } from "$lib/types/course"
import BookOpenVariant from "svelte-material-icons/BookOpenVariant.svelte"
import SlashForward from "svelte-material-icons/SlashForward.svelte"

export let course: CourseFull & { course_slug: string }

</script>
<div class="breadcrumbs">
    <a
        class="item"
        href="/courses">
        <Icon
            icon={BookOpenVariant}
            size={18}/>
        <div class="text">
            Courses
        </div>
    </a>
    <Icon
        icon={SlashForward}
        opacity={0.3}
        size={18}/>
    <a
        class="item"
        href={`/courses/${course.course_slug}`}>
        <Icon
            color={course.color}
            icon={course.icon}
            size={18}/>
        <div class="text">
            { course.name }
        </div>
    </a>
    <Icon
        icon={SlashForward}
        opacity={0.3}
        size={18}/>
</div>
<style lang="stylus">
@import 'variables'

.breadcrumbs
    padding 8px
    display flex
    align-items center

.item
    padding 8px
    display flex
    align-items center
    gap 8px
    border-radius 4px
    &:hover
        background-color transparify(white, 6%)
    .text
        font-weight 600
        color white
        font-size 14px
        white-space nowrap
</style>