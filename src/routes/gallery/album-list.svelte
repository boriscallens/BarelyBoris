<script lang="ts">
    import Album from "./album.svelte";
    import type { PhotoAlbum } from "./album.svelte";

    const albums:PhotoAlbum[] = [
        {
            id: 1,
            name: "GloomHaven",
            coverUri: "https://via.placeholder.com/125x300",
            slug: "gloomhaven",
            itemCount: 0
        },
        {
            id: 2,
            name: "Jaws of the lion",
            coverUri: "https://via.placeholder.com/1024x768",
            slug: "jaws-of-the-lion",
            itemCount: 0
        },
        {
            id: 3,
            name: "Descent: Journeys in the Dark Second Edition",
            coverUri: "https://via.placeholder.com/300x300",
            slug: "descent-journeys-in-the-dark-second-edition",
            itemCount: 0
        },
        {
            id: 4,
            name: "Hero Quest",
            coverUri: "https://via.placeholder.com/300x300",
            slug: "hero-quest",
            itemCount: 0
        }
    ];
</script>

<div id="gallery">
    {#each albums as album}
        <Album {album} />
    {/each}
</div>

<style>
    #gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        grid-template-rows: auto;
        grid-gap: 1rem;
    }
</style>

