<script lang="ts" context="module">
	export type PhotoAlbum = {
		id: number;
		name: string;
        coverUri: string;
        slug: string;
        itemCount: number;
	};
</script>

<script lang="ts">
	export let album: PhotoAlbum = {
        id: 0,
        name: "",
        coverUri: "",
        slug: "",
        itemCount: 0
    };
</script>

<a class="gallery-album" href="./">
    <img class="album-cover" src="{album.coverUri}" alt="cover art for {album.name}">
    <div class="album-info">
        <h3 class="album-name">{album.name}</h3>
        <p class="album-count">{album.itemCount} photos</p>
    </div>
</a>

<style>
	.gallery-album {
		aspect-ratio: 1.1;
        box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.21), 0px 3px 4px rgba(0, 0, 0, 0.04);
		margin: 5px;
		padding: 5px;
		border-radius: 8px;

        display: flex;
        flex-flow: row wrap;
	}
    .album-cover{
        width: 100%;
        object-fit: cover;

        flex: 1 100%;
    }
    .album-info{
        flex: 1 100%;
        /* display: flex;
        flex-flow: column wrap;
        justify-content: space-between; */
    }
    /* .album-name{
        font-size: 1.2em;
        font-weight: bold;
        margin-bottom: 5px;

    }
    .album-item-count{
        font-size: 0.8em;
        font-weight: bold;
        margin-bottom: 5px;

    } */
</style>
