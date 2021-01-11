<template>
        <layout>
                <PostAbstract
                        v-for="({ node: post }) in $page.posts.edges"
                        :key="post.id"
                        :post="post"
                        
                />
             
                
        </layout>
</template>
<page-query>

query {
    allWordPressPost(limit: 3)

     {
        edges {
            node {
                id
                path
                title
                excerpt
                featuredMedia {
                    remoteLink(width: 600, height: 100)
                }
            }
        }
    }
}


</page-query>

<script>
import PostAbstract from '@/components/Post/Abstract.vue'
export default {
        components:{
               PostAbstract 
        }
       
}
</script>