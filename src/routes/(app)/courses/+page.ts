import { courses } from "$lib/courses/content"

export async function load () {
    const course_items = await Promise.all(
        Object.entries(courses).map(async ([file, course_import]) => ({
            ...(await course_import()).course,
            course_slug: file.replace("./", "").replace("/course.ts", ""),
        }))
    )

    return {
        courses: course_items,
    }
}
