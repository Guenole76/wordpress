<template>
        <layout>
                <PostAbstract
                        v-for="({ node: post }) in $page.posts.edges"
                        :key="post.id"
                        :post="post"
                        
                />
				<Pager :info="$page.posts.pageInfo" />
             
                
        </layout>
</template>
<page-query>

query($page: Int) {
    posts: allWordPressPost(perPage: 10, page: $page) @paginate{
		pageInfo{
			totalPages
			currentPage
		}
	

     
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
import { Pager } from 'gridsome'
export default {
        components:{
			   PostAbstract,
			   Pager
        }
       
}
</script>