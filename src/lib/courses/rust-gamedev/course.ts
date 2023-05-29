import type { CourseRaw } from "$lib/types/course"
import Information from "svelte-material-icons/Information.svelte"
import CourseImage from "./CourseImage.png"

export const course: CourseRaw = {
    color: "red",
    tags: [{ name: "Test", color: "yellow" }],
    icon: Information,
    next_up: [],
    image: CourseImage,
    prerequisites: [],
    recommended: [],
    name: "Rust Game Dev",
    description: "Learn Rust game dev with Bevy.",
    root_units: [
        "intro",
    ],
    units_by_slug: {
        "intro": {
            name: "Intro",
            subunits: [],
            free: true,
        },
    },
}