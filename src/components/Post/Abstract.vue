<template>
    <article>


        <h2>
            <g-link
                :to="post.path"
            >
                {{ post.title }}
            </g-link>
        </h2>
        <div v-html="post.excerpt"></div>
        <div v-if="post.featuredMedia">
            <figure
                v-if="post.featuredMedia.remoteLink"
            >
                <g-image
                    :src="post.featuredMedia.remoteLink"
                />
            </figure>
        </div>
    </article>
 
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    }
}
</script>