<template>
        <layout>
            <article>
                <h1>{{ $page.wordPresspost.title }}</h1>
                <div v-hmtl="$page.post.content"></div>
            </article>
        </layout>
</template>
<page-query>
query ($path: String) {
    wordPressPost(path: $path) {
        title
        excerpt
    }
}
</page-query>