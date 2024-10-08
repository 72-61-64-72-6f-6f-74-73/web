<script lang="ts">
    import { _conf } from "../lib/conf";
</script>

<svelte:head>
    <meta name="description" content={_conf.web.description} />
    <meta property="og:title" content={_conf.web.title} />
    <meta property="og:description" content={_conf.web.description} />
</svelte:head>
<slot />
